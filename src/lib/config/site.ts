import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'note.r1tsu.com',
  title: 'Notebook',
  subtitle: 'Ritsu Yuzaki\'s blog site.',
  lang: 'ja-JP',
  description: 'Powered by Urara, The Svelte engine.',
  author: {
    avatar: '/assets/maskable@512.png',
    name: '由崎律 (Ritsu Yuzaki)',
    status: '🖥',
    bio: '限界高校生 兼 エンジニア'
  },
  themeColor: '#ffce53'
}
