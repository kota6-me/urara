import type { SiteConfig } from '$lib/types/site'

const bio = [
  "透明な君は<br>僕を指差してた―。<br><sub>——「少女レイ」</sub>",
  "明日も僕は夢うつつ<br>このまま僕は消えていいのに<br><sub>——「自傷無色」</sub>",
  "死にゆく様を それを美と呼ぶな<br>散る為に咲く花なんて無いだろ<br><sub>——「生きるよすが」</sub>",
];

export const site: SiteConfig = {
  protocol:
    import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV
      ? "http://"
      : "https://",
  domain: import.meta.env.URARA_SITE_DOMAIN ?? "note.r1tsu.com",
  title: "Notebook",
  subtitle: "Ritsu Yuzaki's blog site.",
  lang: "ja-JP",
  description: "Powered by Urara, The Svelte engine.",
  author: {
    avatar: "/assets/ritsu.png",
    name: "Ritsu Yuzaki",
    status: "🖥",
    bio:
      "限界高校生<br>兼<br>エンジニア<br><br><br>" +
      bio[~~(Math.random() * bio.length)],
  },
  themeColor: "#ffce53",
};
