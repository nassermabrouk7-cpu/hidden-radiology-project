# Hidden Radiology V2

Professional educational platform for radiology — built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/[locale]/          # Pages (AR / EN)
components/             # UI Components
content/ar/             # Arabic content
content/en/             # English content
lib/                    # Utilities, validation, SEO
public/images/          # Assets
```

## 🌍 Routes

| Route | Description |
|-------|-------------|
| `/ar` | Arabic Home |
| `/en` | English Home |
| `/ar/store` | Arabic Store |
| `/en/store` | English Store |
| `/ar/products/[slug]` | Product Detail |
| `/ar/courses` | Courses |
| `/ar/cases` | Clinical Cases |
| `/ar/contact` | Contact Form |

## 📧 Contact Form Setup (Optional)

The contact form works out of the box with validation. To receive emails:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Create `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxx
FROM_EMAIL=hiddenradiology@gmail.com
TO_EMAIL=hiddenradiology@gmail.com
```

4. Uncomment the Resend code in `lib/actions/contact.ts`

## 🚀 Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Framework Preset: Next.js
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🖼️ Add Your Images

Place your product covers in:

```
public/images/ar/products/
public/images/en/products/
```

## ✅ Validation

```bash
npm run validate
```

## 📝 License

All rights reserved © Hidden Radiology 2026
