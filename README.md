# 테크 블로그

## Feature

- NextJs 13 + app dir
- Automatically self-host font with [nextjs, optimizing fonts](https://beta.nextjs.org/docs/optimizing/fonts#google-fonts)
- [Contentlayer](https://www.contentlayer.dev/blog/working-with-content-is-hard-for-developers)
- RemarkGfm for [github flavored markdown](https://github.github.com/gfm/)
- Rehype-prism-plus for highlight code blocks
- Rehype slug, autolink headings
- Tailwindcss for CSS, Markdown Typography
- Giscus for comments system
- Light and Dark Theme with next/themes, tailwindcss
- Deploy via Vercel

## Roadmap

- SEO
- TOC  
- Google Analytics
- Page view with PlanetScale

## Contents Form

### Post

```yaml
---
id: 1
title : "포스트 제목"
description: "포스트 설명"
publishedAt: "2023-04-23 12:00:00"
isPublished: true
---

(포스트 내용 markdown으로 입력)
```

### Problems

```yaml
---
title: '다항식 더하기'
link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120863'
publishedAt: '2023-03-28 15:44:34'
isPublished: true
platform: 
    type: Programmers
    level: 'Lv.0'
logs:
    - 
        date: '2023-03-28 15:44:34'
        description: "문제 풀면서 느낀 점 적기"
        isOk: true
        lang: 'cpp'
    - 
        date: '2023-04-28 12:00:00'
        isOk: true
        lang: 'java'        
---

```

### Reviews

책 리뷰

```yaml
---
title: "책 이름"
description: "책 리뷰 한 줄 요약"
views : 1
publishedAt : "2023-04-23 12:00:00"
isPublished : true
media : 
    type: Book
    link : "https://책 링크"
    image: "https://image.aladin.co.kr/product/1284/8/cover500/8956605416_3.jpg"
---
(책 리뷰 내용 markdown으로 입력)
```

유튜브 리뷰

```yaml
---
title: "유튜브 영상 이름"
description: "유튜브 리뷰 한 줄 요약"
views : 2
publishedAt : "2023-04-23 12:00:00"
isPublished : true
media : 
    type : Youtube
    id : "9f0t_4A5LZY"
---
(유튜브 리뷰 마크다운으로 입력)
```

외부 아티클

```yaml
---
title: "아티클 이름"
description: "리뷰 한 줄 요약"
views : 2
publishedAt : "2023-04-23 12:00:00"
isPublished : true
media : 
    type : Articl클
    link : "https://..."
---
(아티클 리뷰 마크다운으로 입력)
```
