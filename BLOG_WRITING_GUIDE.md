# Blog Writing Guide

This guide explains how to write and format blog posts for this site. It covers frontmatter, headings, emphasis (bold/italic), images, code blocks (with syntax highlighting), alignment, captions, and a publish checklist.

---

## 1. Frontmatter (metadata)

Each post must start with YAML frontmatter. Required fields:

```yaml
---
title: "Your Post Title"
date: "2025-11-07"
author: "Your Name"
tags: ["tag1", "tag2"]
excerpt: "A short summary shown on the blog index"
---
```

- `title` and `date` are required.
- `excerpt` will be used as the summary text on list pages.

## 2. Headings and paragraphs

Use markdown headings to structure content:

```markdown
# H1 - Post title (already provided in frontmatter)

## H2 - Section

### H3 - Subsection
```

Paragraphs are separated by a blank line.

## 3. Emphasis (bold / italic)

- Bold: `**text**` → **text**
- Italic: `*text*` → _text_
- Inline code: `` `inline_code()` `` → `inline_code()`

## 4. Code blocks (copyable & highlighted)

Use fenced code blocks with language identifier (Prism.js is used for highlighting):

<pre><code>```python
# Python example
print("Hello, world!")
```
</code></pre>

The blog automatically adds a copy button to code blocks. Use the proper language (e.g., `python`, `bash`, `javascript`, `html`).

### Tips

- Keep sample code short (if long, provide a gist or link to repository)
- Use triple backticks and language for best results

## 5. Images and sizing

Place images under `public/images/` (recommended `public/images/blog/`).

To insert and center an image with a fixed width:

```html
<div align="center">
  <img src="/images/blog/diagram.png" alt="Diagram" width="600" />
</div>
```

For responsive images that never exceed their container:

```html
<div style="text-align:center;">
  <img
    src="/images/blog/diagram.png"
    alt="Diagram"
    style="width:60%; max-width:800px;"
  />
</div>
```

### Captions

Markdown doesn't provide native captions. Use an HTML figure/caption:

```html
<figure style="text-align:center;">
  <img
    src="/images/blog/diagram.png"
    alt="Diagram"
    style="width:60%; max-width:800px;"
  />
  <figcaption style="font-size:0.9rem; color:#94a3b8;">
    Figure 1: Example diagram
  </figcaption>
</figure>
```

## 6. Aligning text and images

- Center block elements with `<div align="center">` or CSS `text-align:center`.
- Use inline HTML for more control; the site supports HTML inside markdown posts.

## 7. Links and external resources

Use standard markdown links:

```markdown
[Label text](https://example.com)
```

For external links, add `target`/`rel` if you must use HTML:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer"
  >External</a
>
```

## 8. Accessibility and alt text

Always provide `alt` text for images for screen readers:

```html
<img
  src="/images/blog/photo.jpg"
  alt="Screenshot of the app showing the dashboard"
/>
```

## 9. Example post snippet

````markdown
---
title: "How to Use Python"
date: "2025-11-07"
author: "Your Name"
tags: ["python", "beginner"]
excerpt: "A short intro to Python."
---

# Quick Python Example

Here is a small Python snippet:

```python
print("Hello from Python")
```
````

And a centered image:

<div align="center">
  <img src="public/images/logo.svg" alt="LeThanhThoai logo" width="200" />
</div>
```

## 10. Checklist before publishing

- [ ] Frontmatter filled (title, date, excerpt, tags)
- [ ] Code fences include language identifiers
- [ ] Images placed in `public/images/blog/` and paths are correct
- [ ] Alt text for each image
- [ ] Spell-check and proofread
- [ ] Run `npm run export` locally to verify generation (optional)

## 11. Publishing

1. Add the markdown file to `posts/` (filename should be `YYYY-MM-DD-slug.md`)
2. `git add posts/YYYY-MM-DD-slug.md`
3. `git commit -m "Add blog post: <title>"`
4. `git push`

GitHub Actions will run and deploy the site.

---

If you want, I can also add a sample post template file under `posts/_template.md` so you can copy it next time. Would you like me to add that?
