# Contributing to Vibe Toast

First of all, thank you for considering contributing to **Vibe Toast**.

Whether you're fixing bugs, improving documentation, enhancing the UI, or adding new features, every contribution helps make the project better.

This repository is structured as a **monorepo** with a clear separation between the **core package** and the **documentation website**.

## Choose Where to Contribute

Please choose the correct workspace before starting. 

```bash
vibe-toast/
├── packages/
│   └── vibe-toast/     # Core npm package
│
├── site/               # Documentation + marketing website
│
├── README.md
└── CONTRIBUTING.md
````


## Contribution Workflow

### 1. Fork repository

Fork this repository to your GitHub account.

### 2. Clone Repo

```bash
git clone https://github.com/suraj-savle/vibe-toast.git
cd vibe-toast
npm install
```

### 3. Create branch

Use meaningful branch names.

Examples:

```bash
git checkout -b feat/new-toast-variant
git checkout -b fix/mobile-navbar-scroll
git checkout -b docs/improve-installation-guide
```
## Package Contributions

Path:

```bash
packages/vibe-toast/
```

Contribute here if you want to work on the **core toast library**.

### Best areas to contribute

* bug fixes
* toast animations
* stacking logic
* queue management
* promise API
* toast variants
* TypeScript types
* performance optimization
* accessibility improvements

### Source structure

```bash
src/
├── components/
├── core/
├── hooks/
├── styles/
├── types/
└── utils/
```

### Run locally

```bash
cd packages/vibe-toast
npm install
npm start or npm run dev 
```

### Build package

Before PR run build to check everthing is working

```bash
npm run build
```

### Package standards

Please follow these rules:

* use **TypeScript**
* avoid `any`
* keep bundle size minimal
* maintain tree-shaking support
* support React 18+
* avoid unnecessary dependencies
* update package README when adding features

## Site Contributions

Path:

```bash
site/
```

Contribute here if you want to improve the **website and documentation**.

### Best areas to contribute

* landing page UI
* hero section
* docs pages
* MDX documentation
* responsive fixes
* mobile navigation
* accessibility
* SEO improvements
* animations
* playground examples

### Site structure

```bash
src/
├── app/
├── components/
├── content/
└── public/
```

### Run locally

```bash
cd site
npm install
npm run dev
```

### Build production

Before PR run build to check everthing is working

```bash
npm run build
```

### Site standards

Please follow:

* existing design system variables
* responsive-first design
* clean component separation
* reusable components
* App Router best practices
* dark mode compatibility

### 3. Make changes

Keep changes focused to one feature or fix.

Avoid mixing unrelated updates in one PR.

### 4. Test properly

Before opening PR, ensure:

### Package

* builds successfully
* no type errors
* no runtime errors
* no console warnings

### Site

* mobile responsive
* no broken links
* no layout shift
* works on multiple screen sizes

### 5. Commit properly

Use clear commit messages.

Examples:

```bash
feat(package): add progress toast support
fix(site): resolve mobile menu scroll issue
docs(site): improve quick start guide
```

### 6. Open Pull Request

Include:

* what changed
* why it changed
* screenshots (UI changes)
* related issue number

## Pull Request Title Format

Please use this format:

```bash
feat(package):
fix(package):
docs(site):
style(site):
perf(package):
chore:
```

Examples:

```bash
feat(package): add dismiss callback
fix(site): improve footer responsiveness
docs(site): update promise examples
```
## Code Quality Standards

### Package

* TypeScript only
* no `any`
* reusable utilities
* optimized bundle size
* no dead code

### Site

* responsive UI
* reusable sections
* accessible interactions
* no console errors
* semantic HTML

## Reporting Issues

When opening issues, include:

```md
Issue Type: Package / Site
Version:
Browser:
Device:

Description:
Steps to reproduce:
Expected behavior:
Actual behavior:
Screenshots:
```

## Need Help?

For discussions, ideas, or questions:

* GitHub Discussions
* Issues tab
* Pull Requests

## Thank You

Thank you for helping improve **Vibe Toast**.
