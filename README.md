# 테크 블로그

## Tech

- NextJs14
- Tailwindcss
- Giscus for comments
- Light and Dark Theme
- Deploy via Vercel
- Velite for Type-Safe YAML, MDX

## Unified Echosystem

- RemarkGfm for [github flavored markdown](https://github.github.com/gfm/)
- Rehype-prism-plus for highlight code blocks
- [prism-themes](https://github.com/PrismJS/prism-themes/tree/master/themes) for code blocks style
- Mermaid and Rehype-mermaidjs for Diagram in content
- Rehype slug, autolink headings

## Roadmap

- SEO
- Google Analytics
- Page view with PlanetScale

## dependencies

다이어그램 생성을 위한 [rehype-mermaidjs](https://github.com/remcohaszing/rehype-mermaidjs)의 종속성인 playwrite를 추가해야함

```bash
npx playwright-core install --with-deps chromium
```

## 코드블록

### 언어 설정

java typescript 등 언어를 입력하면 된다.

\`\`\` java

\`\`\`

### 코드라인 보여주기

\`\`\` java showLineNumbers

\`\`\`

### 코드 diff

diff-{lang} 과 같이 입력 후 코드 블록 내에서 맨 앞에 - 또는 + 로 코드 삭제 추가를 표현할 수 있다.

\`\`\` diff-java

\`\`\`

### 라인 강조

강조하고 싶은 줄의 번호를 입력한다.

\`\`\` java {3, 5, {7-12}}

\`\`\`
