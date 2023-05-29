---
title: 'hoge': String

image: './example/hogehoge.png': Path

created: YYYY-MM-DD
updated: YYYY-MM-DD

tags:
  - 'Hello World'
  - 'Urara'
(or even this's available)
tags: ['Front-Matter']

toc: false /*Enter this to disable ToC*/
---

Welcome to Urara! this article contains some basic operations to help you quickly get started.

## Developing

Start a development server:

```bash
# http://127.0.0.1:5173
pnpm dev
```

or listen to different IP and port:

```bash
# http://127.0.0.1:3000
pnpm dev --port 3000

# http://0.0.0.0:3000
nr dev --host 0.0.0.0 --port 3000
```

## Building

||spoiler||

**_The_** _quick_ <u>brown</u> [fox](https://www.foxnews.com/) `jumps` ~~over~~ the lazy **dog**.

[scrollToTop](#headings)

Create a production version of ur blog:

```bash
pnpm build
```

u can preview the built app with `pnpm preview`.

## Documentation

For full documentation, visit [urara-docs.netlify.app](https://urara-docs.netlify.app).

## Lists

### Definition List (dl)

<dl>
    <dt>Definition List Title</dt>
    <dd>This is a definition list division.</dd>
</dl>

### Ordered List (ol)

1. List Item 1
2. List Item 2
3. List Item 3

### Unordered List (ul)

- List Item 1
- List Item 2
- List Item 3

### Checkbox List (ul)

- [ ] List Item 1 unchecked
- [x] List Item 2 checked
- [x] List Item 3 checked

## Table

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |

| Table Header 1 | Table Header 2 | Table Header 3 |
| :------------- | :------------: | -------------: |
| Division 1     |   Division 2   |     Division 3 |
| Division 1     |   Division 2   |     Division 3 |
| Division 1     |   Division 2   |     Division 3 |

[scrollToTop](#headings)

## Footnotes

Here is a footnote reference. [^1]

This is a long note. [^longnote]

This is an inline note. ^[You can type footnotes inline, so you don’t have to pick an identifier manually.]

[^1]: Here is the footnote.
[^longnote]: Here's one footnote with longer identifier.

[scrollToTop](#headings)

## Code

```ts twoslash title="examples/index.ts"
for (let x in [0]) console.log(x)
```

```ts twoslash {1-6}
interface IdLabel {
  id: number /* some fields */
}
interface NameLabel {
  name: string /* other fields */
}
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel
// This comment should not be included

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented'
}

let a = createLabel('typescript')
```

## Misc

<sup>Lorem</sup> <sub>ipsum</sub> <cite>dolor sit amet</cite>, <acronym title="Consectetur Adipiscing Elit">consectetur adipiscing elit</acronym>, <abbr title="Aliqua">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</abbr>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>

リバースカードオープン、エネミーコントローラー！

ライフを 1000 払い、コマンド入力、<kbd>←</kbd> <kbd>→</kbd> <kbd>A</kbd> <kbd>B</kbd>！

このコマンドにより、全てのアニヲタを破壊する！

[scrollToTop](#headings)

## Svelte Components

<script>
  import { YouTube, Spotify, SoundCloud } from 'sveltekit-embed'
</script>

<YouTube youTubeId="WysuxO4yR04" />

<br />

<Spotify spotifyLink="track/6pCXYUR3mBfXY8s0FYcZqQ" width="100%" />

<br />

<SoundCloud soundcloudLink="https://soundcloud.com/hatsunemikuofficial/sets/sweety-glitch-remix-contest" />
