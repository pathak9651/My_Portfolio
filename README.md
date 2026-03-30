# Developer Portfolio

A modern, responsive personal developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Folder Structure

```text
my-portfolio/
|-- public/
|   `-- favicon.svg
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Experience.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- Projects.jsx
|   |   |-- SectionHeading.jsx
|   |   `-- Skills.jsx
|   |-- data/
|   |   `-- portfolio.js
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- .env.example
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
`-- vite.config.js
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example` and add your Web3Forms access key:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

3. Start the development server:

```bash
npm run dev
```

4. Create a production build:

```bash
npm run build
```

## Contact Form Setup

This portfolio uses Web3Forms for contact submissions.

1. Create a free access key at the official site: https://web3forms.com/
2. Add the key to your local `.env`
3. Redeploy the site so the environment variable is available in production
4. After that, form submissions will be sent to your configured inbox

## Deploy

You can deploy this project on:

- Vercel: import the repo and use the default Vite settings
- Netlify: build command `npm run build`, publish directory `dist`
- GitHub Pages: build the app and publish the `dist` directory with a deployment action

## Personalization

Update the content in `src/data/portfolio.js`:

- your GitHub profile link
- any missing project demo URLs
- resume file at `public/resume.pdf` if you want the resume button to work
