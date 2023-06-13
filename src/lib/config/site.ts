import type { SiteConfig } from '$lib/types/site'

const bio = [
  "透明な君は<br>僕を指差してた―。<br><sub>——「少女レイ」</sub>",
  "明日も僕は夢うつつ<br>このまま僕は消えていいのに<br><sub>——「自傷無色」</sub>",
  "死にゆく様を<br>それを美と呼ぶな<br>散る為に咲く<br>花なんて無いだろ<br><sub>——「生きるよすが」</sub>",
  "栄光と挫折の人生<br>見上げれば高き壁<br>だけど僕は弱くない<br>その手伸ばせ<br><sub>——「人生」</sub>",
  "「ごめんね。ちっとも上手に<br>生きてあげられなくて」と伝えて<br><sub>——「ザムザ」</sub>",
  "蹲って膝をついた夜に<br>「最低だった」を<br>押し付けたい。嗚呼！<br><sub>——「天使の翼。」</sub>",
  "だからずっと、そうずっと<br>今を笑って魅せた<br>蒼い蒼い絶頂の夜まで。<br><sub>——「天使の翼。」</sub>",
  "旅鳥よ世界を舞い渡れ<br>言葉も国も色も血も超え<br>もう一度ひとつになれるように<br><sub>——「Flyway」</sub>",
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
      "限界高校生<br>兼<br>エンジニア<br><br>" +
      bio[~~(Math.random() * bio.length)],
  },
  themeColor: "#ffce53",
};
