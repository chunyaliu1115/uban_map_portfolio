import { createServerFn } from '@tanstack/react-start'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/integrations/supabase/types'

const SITE_URL = 'https://chunyaliu.com'

function articleTitleFor(threadKey: string): string {
  const map: Record<string, string> = {
    'note-roundabout': '隨筆集 · 南特圓環',
    'note-castle': '隨筆集 · 南特城堡',
    'note-taiwan-postwar': '隨筆集 · 台灣戰後城市型態',
    'project-fibre': '地圖分析 · 數位斷層的空間分析',
    'project-transit': '地圖分析 · 綠色微型交通與大眾運輸接駁',
    'project-seniors': '地圖分析 · 高齡醫療資源空間錯位分析',
    'project-childcare-2032': '地圖分析 · 2032 年南特托育資源供需分析',
    'project-tainan-bus-gap': '地圖分析 · 台南市公車服務盲區與高密度住宅聚落空間分析',
    'project-tainan-2036': '地圖分析 · 臺南都會區人口變遷預測（2024–2036）',
  }
  return map[threadKey] ?? threadKey
}

export const notifyNewComment = createServerFn({ method: 'POST' })
  .inputValidator((input: { commentId: string }) => {
    if (!input || typeof input.commentId !== 'string' || input.commentId.length > 64) {
      throw new Error('Invalid input')
    }
    return { commentId: input.commentId }
  })
  .handler(async ({ data }) => {
    const key = process.env['SUPABASE_PUBLISHABLE_KEY']!
    const supabasePublic = createClient<Database>(process.env['SUPABASE_URL']!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers)
          if (key.startsWith('sb_') && h.get('Authorization') === `Bearer ${key}`) {
            h.delete('Authorization')
          }
          h.set('apikey', key)
          return fetch(input, { ...init, headers: h })
        },
      },
    })

    const { data: comment } = await supabasePublic
      .from('post_comments')
      .select('id, author_name, body, thread_key, parent_id, is_owner')
      .eq('id', data.commentId)
      .maybeSingle()

    if (!comment || comment.is_owner) return { notified: false }

    try {
      const { sendTemplateEmail } = await import('@/lib/email-templates/send-email')
      await sendTemplateEmail('new-comment', '', {
        templateData: {
          authorName: comment.author_name,
          body: comment.body,
          articleTitle: articleTitleFor(comment.thread_key),
          articleUrl: SITE_URL,
          isReply: !!comment.parent_id,
        },
        idempotencyKey: `new-comment-${comment.id}`,
      })
    } catch (error) {
      console.error('[comment-notify] send failed', error)
      return { notified: false }
    }

    return { notified: true }
  })
