import type { SiteConfig } from '$lib/types/site'

const bio = [
  'じゃあ名前考えようか<br>「ゆめ」とかどう？可愛いでしょ？<br><sub>——「ゆめゆめ」</sub>',
  '冬は良いけど夏は嫌<br><sub>——「夏に去りし君を想フ」</sub>',
  'ゴミ溜めで埋もれたまま、星空を眺めてるよ<br><sub>——「ぼくらはみんな意味不明」</sub>',
  '薄氷を履み回れ踊れ、醒！<br><sub>——「ムーンウォークフィーバー」</sub>',
  'ちょっとは上手になれたかな？<br><sub>——「私の時間」</sub>',
  'どこまで漸近しても<br>ゼロじゃない<br><sub>——「Unfragment」</sub>',
  'だからバイバイ<br>"むかしむかしのきょうのぼく"<br><sub>——「むかしむかしのきょうのぼく」</sub>',
  'いま歌うから<br>照らしてよね<br>スピカ<br><sub>——「SPiCa」</sub>',
  '甘いのもいいと思うけれど苦いのも嫌いじゃない<br><sub>——「え？あぁ、そう。」</sub>',
  '今日も西武線でぽつりと<br>イヤフォンに自分閉じ込めて<br><sub>——「八日目、雨が止む前に。」</sub>',
  'もうどうかしたいと思うくせに<br>僕はどうもしないままで<br><sub>——「メリュー」</sub>',
  '透明な君は<br>僕を指差してた―。<br><sub>——「少女レイ」</sub>',
  '明日も僕は夢うつつ<br>このまま僕は消えていいのに<br><sub>——「自傷無色」</sub>',
  'それはさあ... それはさあ、それがさあ！<br>逃げ切ったつもりなの？<br><sub>——「脳内革命ガール」</sub>',
  "声が無くたって、届かなくたって、今もずっと叫んでいる。<br>聞こえますか？私は生きている。<br><sub>——「M'AIDER遭難ガール」</sub>"
]

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'note.r1tsu.com',
  title: 'Notebook',
  subtitle: 'Ritsu Yuzaki\'s blog site.',
  lang: 'ja-JP',
  description: 'Powered by Urara, The Svelte engine.',
  author: {
    avatar: '/assets/ritsu.png',
    name: '由崎律 (Ritsu Yuzaki)',
    status: '🖥',
    bio: '限界高校生 兼 エンジニア<br>' + bio[~~(Math.random() * bio.length)]
  },
  themeColor: '#ffce53'
}
