# Omar El Terras Portfolio

A premium one-page personal portfolio built with React and Vite, designed to deploy cleanly to GitHub Pages as a fully static site.

## Stack

- React
- Vite
- Plain CSS
- GitHub Pages via GitHub Actions

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   └── assets/
│       ├── omar-el-terras-resume.pdf
│       └── profile-placeholder.svg
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal.

## Production Build

Create the static production build with:

```bash
npm run build
```

The generated site will be written to `dist/`.

## GitHub Pages Deployment

This project is configured for the GitHub Pages user site `omarelterras.github.io`, which means the Vite `base` path is set to `/`.

### Recommended setup

1. Create a GitHub repository named `omarelterras.github.io`.
2. Push this project to the `main` branch of that repository.
3. In GitHub:
   - Go to `Settings` -> `Pages`
   - Set `Source` to `GitHub Actions`
4. The included workflow at `.github/workflows/deploy.yml` will build and deploy the site automatically on each push to `main`.

## Content Updates

Most editable content is centralized in:

```text
src/data/portfolio.js
```

Update that file to change:

- headline and intro copy
- contact info
- experience entries
- projects
- skills
- asset paths

## Replacing Assets

### Profile image

The hero currently uses:

```text
public/assets/profile-placeholder.svg
```

If you want to replace it with your real image:

1. Add your image file to `public/assets/`
2. Update `profileImagePath` in `src/data/portfolio.js`

Example:

```js
profileImagePath: "/assets/omar-profile.jpg";
```

### Resume PDF

The resume section currently uses:

```text
public/assets/omar-el-terras-resume.pdf
```

You can replace that file directly, or update `resumePath` in `src/data/portfolio.js` if you rename it.

## Contact Info Note

The GitHub and LinkedIn links are already populated from your resume. The email and phone fields in `src/data/portfolio.js` are placeholders and should be replaced with your real details before deployment.

## If You Deploy As A Project Site Instead

If you deploy this to a repository that is **not** `omarelterras.github.io`, update `base` in `vite.config.js`.

Example for a repo named `portfolio`:

```js
base: "/portfolio/";
```
