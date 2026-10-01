import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  authorName?: string
  body?: string
  articleTitle?: string
  articleUrl?: string
  isReply?: boolean
}

const Email = ({
  authorName = 'Anonymous',
  body = '',
  articleTitle = '',
  articleUrl = 'https://chunyaliu.com',
  isReply = false,
}: Props) => (
  <Html lang="zh-Hant" dir="ltr">
    <Head />
    <Preview>{`${authorName}: ${body.slice(0, 80)}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>CHUNYALIU.COM</Text>
        <Heading style={heading}>
          {isReply ? '有新的留言回覆' : '有新的留言'}
        </Heading>
        {articleTitle ? <Text style={meta}>文章：{articleTitle}</Text> : null}
        <Text style={meta}>留言者：{authorName}</Text>
        <Section style={quote}>
          <Text style={quoteText}>{body}</Text>
        </Section>
        <Text style={meta}>
          <Link href={articleUrl} style={link}>
            前往網站回覆
          </Link>
        </Text>
        <Hr style={hr} />
        <Text style={footer}>此信件由你的個人網站自動寄出。</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `新留言：${data['authorName'] || 'Anonymous'}`,
  displayName: '新留言通知',
  to: 'chunyaliu@hotmail.com',
  previewData: {
    authorName: 'Marie',
    body: '請問這份分析的資料來源是哪裡？',
    articleTitle: '南特圓環',
    articleUrl: 'https://chunyaliu.com',
    isReply: false,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const eyebrow = {
  fontFamily: 'monospace',
  fontSize: '11px',
  letterSpacing: '0.2em',
  color: '#1f6f6b',
  margin: '0 0 8px',
}
const heading = { fontSize: '22px', margin: '0 0 16px', color: '#1b1b19' }
const meta = { fontSize: '14px', color: '#55534d', margin: '4px 0' }
const quote = {
  backgroundColor: '#f3f1ea',
  borderLeft: '3px solid #1f6f6b',
  padding: '12px 16px',
  margin: '16px 0',
}
const quoteText = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#1b1b19',
  margin: '0',
  whiteSpace: 'pre-line' as const,
}
const link = { color: '#1f6f6b' }
const hr = { borderColor: '#e2ded3', margin: '22px 0 12px' }
const footer = { fontSize: '12px', color: '#8a877f', margin: '0' }
