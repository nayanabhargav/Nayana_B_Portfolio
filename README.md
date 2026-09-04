# Nayana B — Recruiter-Focused Portfolio

A premium, responsive React + Vite portfolio designed around recruiter conversion:
clear role positioning, measurable experience, selected projects, technical skills, education, certifications and direct contact.

## 1. Requirements

Install these first:

- Node.js (LTS): https://nodejs.org/
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/

Check installation in PowerShell:

```powershell
node -v
npm -v
git --version
```

## 2. Open the project

Extract the ZIP.

Then in PowerShell:

```powershell
cd path\to\nayana-recruiter-portfolio
```

Example:

```powershell
cd C:\Users\YourName\Desktop\nayana-recruiter-portfolio
```

## 3. Install dependencies

```powershell
npm install
```

## 4. Add your resume

Copy your PDF resume into:

```text
public\Nayana_B_Resume.pdf
```

The resume download button will then work automatically.

## 5. Add LinkedIn and GitHub

Open:

```text
src\main.jsx
```

At the top, find:

```js
linkedin: "PASTE_LINKEDIN_URL_HERE",
github: "PASTE_GITHUB_URL_HERE",
```

Replace them with your actual URLs.

Example:

```js
linkedin: "https://www.linkedin.com/in/your-profile/",
github: "https://github.com/your-username",
```

## 6. Add project GitHub links

Inside the `projects` array, replace every:

```text
PASTE_PROJECT_GITHUB_URL_HERE
```

with the matching repository URL.

If you have a deployed project, put its URL into the project's `demo` field.

Example:

```js
github: "https://github.com/username/project",
demo: "https://project.vercel.app"
```

If you don't have a live demo, leave `demo: ""`.

## 7. Run locally

```powershell
npm run dev
```

Vite will show a local address, normally:

```text
http://localhost:5173/
```

Open that address in Chrome/Edge.

Stop the server with:

```text
Ctrl + C
```

## 8. Build for production

Before deployment:

```powershell
npm run build
```

If successful, Vite creates:

```text
dist\
```

Preview the production build:

```powershell
npm run preview
```

## 9. Deploy to Vercel

Recommended for this portfolio.

1. Create/sign in to Vercel: https://vercel.com/
2. Create a GitHub repository.
3. Upload/push this project.
4. In Vercel, choose "Add New Project".
5. Import your GitHub repository.
6. Vercel detects Vite automatically.
7. Build command:

```text
npm run build
```

8. Output directory:

```text
dist
```

9. Deploy.

## 10. Deploy with GitHub

From the project folder:

```powershell
git init
git add .
git commit -m "Create recruiter portfolio"
```

Create an empty repository on GitHub, then connect it:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nayana-portfolio.git
git push -u origin main
```

Replace YOUR_USERNAME with your GitHub username.

## 11. Updating the portfolio later

Most content is in:

```text
src\main.jsx
```

Styling is in:

```text
src\styles.css
```

If you change code while `npm run dev` is running, the browser updates automatically.

## 12. Recommended recruiter optimization

Before publishing:

- Use a professional GitHub username.
- Make every featured project repository public.
- Add a strong README to each project.
- Include screenshots in project READMEs.
- Add live demos wherever possible.
- Pin your 4 strongest GitHub repositories.
- Keep LinkedIn headline aligned with your target role.
- Keep resume and portfolio information consistent.
- Test the portfolio on mobile.
- Test every GitHub, LinkedIn, email and resume link.
- Use a custom domain if available.

## 13. Important placeholders

Search the project for:

```text
PASTE_LINKEDIN_URL_HERE
PASTE_GITHUB_URL_HERE
PASTE_PROJECT_GITHUB_URL_HERE
```

Replace all of them before deployment.

## 14. Project structure

```text
nayana-recruiter-portfolio/
├── public/
│   ├── README.txt
│   └── Nayana_B_Resume.pdf   <-- add this
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## 15. If npm install fails

Try:

```powershell
npm cache clean --force
npm install
```

If the project is in OneDrive and you see unusual permission/sync problems, move the project to a normal local folder such as:

```text
C:\Projects\nayana-recruiter-portfolio
```

Then run:

```powershell
npm install
npm run dev
```

## 16. Final recruiter checklist

Before sending the portfolio to recruiters:

[ ] LinkedIn URL works
[ ] GitHub URL works
[ ] Resume downloads
[ ] All 4 project repositories work
[ ] Live demos work where available
[ ] Email button opens correctly
[ ] Mobile layout looks good
[ ] No placeholder text remains
[ ] GitHub repositories have READMEs
[ ] Resume matches portfolio
[ ] Portfolio is deployed on HTTPS
