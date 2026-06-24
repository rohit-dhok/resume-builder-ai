# resumo

A clean, minimal resume builder with AI-powered writing suggestions.

Fill in your details, watch the resume build in real time, and download it as a PDF.

**Live Demo:** [https://resumo-liard.vercel.app/]

---

## What it does

* Fill in your personal info, experience, education, and skills
* Live preview updates as you type
* AI rewrites your job descriptions to sound more professional — without inventing fake achievements
* Download as a clean, ATS-friendly PDF
* Includes a classic resume theme, with additional themes planned for future releases

## Tech Stack

* React (Vite)
* Gemini AI API
* react-to-print
* CSS

## Run Locally

```bash
git clone https://github.com/rohit-dhok/resume-builder-ai.git
cd resume-builder-ai
npm install
```

Create a `.env` file:

```env
VITE_GEMINI_API_KEY=your_gemini_key_here
```

```bash
npm run dev
```

## Why I built this

Most resume builders are either too complex or push you toward paid templates. I wanted something simple — fill the form, get a resume, download it. The AI improvement feature came from a real frustration: generic resume advice that tells you to "use strong action verbs" without actually showing you how.

The current version focuses on a clean, classic resume layout. Support for additional themes and customization options is planned as the project evolves.

## License

MIT
