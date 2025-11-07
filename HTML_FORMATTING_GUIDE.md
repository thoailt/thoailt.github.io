# 📝 HTML Text Formatting Guide for JSON Files

You can use **HTML tags** directly in JSON files to format text (bold, italic, links, line breaks, etc.).

---

## 🎯 Supported HTML Tags

### 1. **Bold**

```json
{
  "bio": "I'm a <strong>teaching assistant</strong> and master's student."
}
```

Or use `<b>`:
```json
{
  "bio": "I'm a <b>teaching assistant</b> and master's student."
}
```

**Result:** I'm a **teaching assistant** and master's student.

---

### 2. **Italic**

```json
{
  "bio": "I work at <em>Ho Chi Minh City University of Education</em>."
}
```

Or use `<i>`:
```json
{
  "bio": "I work at <i>Ho Chi Minh City University of Education</i>."
}
```

**Result:** I work at *Ho Chi Minh City University of Education*.

---

### 3. **Bold + Italic Combined**

```json
{
  "bio": "I'm a <strong><em>teaching assistant</em></strong> at HCMUE."
}
```

**Result:** I'm a ***teaching assistant*** at HCMUE.

---

### 4. **Links**

```json
{
  "bio": "Visit my <a href='https://github.com/thoailt'>GitHub profile</a> for more."
}
```

**Note:** Use single quotes `'` for href in JSON!

**Result:** Visit my [GitHub profile](https://github.com/thoailt) for more.

---

### 5. **Line Break**

```json
{
  "bio": "I'm a teaching assistant.<br>I love teaching and research."
}
```

**Result:**
I'm a teaching assistant.
I love teaching and research.

---

### 6. **Underline**

```json
{
  "bio": "This is <u>important</u> information."
}
```

**Result:** This is <u>important</u> information.

---

## 📚 Real-World Examples

### Example 1: Bio with Multiple Formatting

```json
{
  "bio": "I'm a <strong>teaching assistant</strong> and <strong>master's student</strong> at the <em>Faculty of Information Technology</em>, <a href='https://hcmue.edu.vn'>Ho Chi Minh City University of Education</a>, Vietnam."
}
```

### Example 2: Bio with Line Breaks

```json
{
  "bio": "I'm a teaching assistant and master's student at HCMUE.<br><br>My research focuses on <strong>machine learning</strong> and <strong>natural language processing</strong>."
}
```

### Example 3: Publication Description

```json
{
  "abstract": "This paper presents a <strong>novel approach</strong> to <em>neural machine translation</em>. Our method achieves <strong>state-of-the-art performance</strong> on multiple benchmarks."
}
```

### Example 4: Award Description

```json
{
  "description": "Awarded to <strong>top Ph.D. students</strong> in computer science for <em>exceptional research contributions</em>."
}
```

---

## 🎨 Files that Support HTML

### ✅ Files with HTML Support:

| File | Field | Description |
|------|-------|-------------|
| `data/siteConfig.json` | `bio` | Bio text in hero section |
| `data/publications.json` | `abstract` | Publication abstract |
| `data/publications.json` | `description` | Additional description |

### 📝 Blog Posts (Markdown)

Blog posts use **Markdown**, not HTML:

```markdown
---
title: "My Blog Post"
---

# Heading

This is **bold text** and this is *italic text*.

[This is a link](https://example.com)
```

**Markdown syntax:**
- `**text**` or `__text__` - **Bold**
- `*text*` or `_text_` - *Italic*
- `[text](url)` - Link
- `# Heading` - Heading level 1
- `## Heading` - Heading level 2

---

## ⚠️ Important Notes

### 1. **Escape Characters in JSON**

When using HTML in JSON, pay attention to:

**❌ WRONG:**
```json
{
  "bio": "Visit my <a href="https://github.com">GitHub</a>"
}
```

**✅ CORRECT:**
```json
{
  "bio": "Visit my <a href='https://github.com'>GitHub</a>"
}
```

Or escape double quotes:
```json
{
  "bio": "Visit my <a href=\"https://github.com\">GitHub</a>"
}
```

### 2. **Don't Overuse Formatting**

**❌ Avoid:**
```json
{
  "bio": "<strong><em><u>Too much formatting</u></em></strong> makes it <strong>hard</strong> to <em>read</em>!"
}
```

**✅ Recommended:**
```json
{
  "bio": "I'm a <strong>teaching assistant</strong> at HCMUE. My research focuses on machine learning."
}
```

### 3. **Security**

Only use HTML in content you write yourself. Don't paste HTML from untrusted sources.

---

## 🔧 Test HTML Formatting

After adding HTML to JSON:

```bash
# 1. Run dev server
npm run dev

# 2. Open http://localhost:3000

# 3. Check if formatting displays correctly
```

---

## 📋 Quick Reference

| Purpose | HTML Tag | Example |
|---------|----------|---------|
| **Bold** | `<strong>` or `<b>` | `<strong>text</strong>` |
| **Italic** | `<em>` or `<i>` | `<em>text</em>` |
| **Underline** | `<u>` | `<u>text</u>` |
| **Link** | `<a href='url'>` | `<a href='url'>text</a>` |
| **Line break** | `<br>` | `text<br>text` |
| **New paragraph** | `<br><br>` | `para1<br><br>para2` |

---

## 💡 Tips

1. **Preview before committing**: Always test locally with `npm run dev` before pushing
2. **Keep it simple**: Only use formatting when necessary
3. **Consistent style**: Keep formatting style consistent throughout the website
4. **Accessibility**: Don't overuse formatting as it affects readability

---

## ❓ FAQs

**Q: Can I use inline CSS?**

A: Yes, but not recommended:
```json
{
  "bio": "Text with <span style='color: red;'>red color</span>"
}
```

**Q: Can I use complex HTML like `<div>`, `<table>`?**

A: Possible, but not recommended. Only use simple inline tags.

**Q: How do I add emoji?**

A: Just paste emoji directly:
```json
{
  "bio": "I love coding! 💻 🚀"
}
```

**Q: Does HTML work in publication titles?**

A: Currently no, only works in `bio` and `abstract`. Can be updated if needed.

---

**Happy formatting! 🎨**
