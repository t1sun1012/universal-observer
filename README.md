# 🖋️ The Universal Observer

[![Website](https://img.shields.io/badge/Website-The%20Universal%20Observer-2B2B2B)](https://www.universalobserver.com/)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> "Life may not seem to present an inherent meaning; we live to obtain it."

A high-fidelity, minimalist literary portfolio built for author David Zhu. Designed with a "Paper" aesthetic and optimized for long-form reading, this project serves as a digital home for fiction, poetry, and philosophical essays.

![Project Preview](./public/images/home_preview.png)

## ✨ Features

*   **Lightning Fast:** Built with [Astro](https://astro.build/) and deployed on Vercel Edge Network.
*   **Markdown Driven:** Content is managed entirely via simple `.md` files.
*   **Dark Mode Support:** Seamless transition between "Paper" (Light) and "Cinematic" (Dark) reading modes.
*   **Analytics Integrated:** Real-time privacy-friendly traffic stats via Vercel Analytics.
*   **Zero-Config CMS:** No database required; just write and push code.

## 🚀 Quick Start

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/t1sun1012/universal-observer.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📝 How to Add New Writing

Create a new `.md` file in `src/content/writings/`. Ensure including the required frontmatter:

```yaml
---
title: "Title Here"
category: "Essay" # Options: "Essay", "Fiction", "Poetry"
snippet: "A short preview text that appears on the card..."
imageUrl: "https://images.pexels.com/..." # Direct link to a high-res image
readingTime: "5 min read"
---

Content goes here...
```

## 🛠️ Tech Stack

*   **Framework:** Astro 5
*   **UI Library:** React 19
*   **Styling:** Tailwind CSS 4 & Motion (Framer Motion)
*   **Typography:** EB Garamond (Serif) & Inter (Sans)
*   **Deployment:** Vercel

## © Copyright & License

**Code:** The structural code of this website is open-source.
**Content:** All literary works, stories, poetry, and essays contained within this repository are the exclusive intellectual property of David Zhu. Unauthorized reproduction, distribution, or commercial use of the written content is strictly prohibited.

**Contact:** [xinyuzhu2005@gmail.com](mailto:xinyuzhu2005@gmail.com)
