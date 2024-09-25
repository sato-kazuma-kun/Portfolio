# Kazuma's Portfolio

This repository contains the code for my personal portfolio website, built using modern web technologies including Next.JS, Tailwind CSS, Shadcn UI, and Bun.

## 🛠️ Technologies Used

- **Next.js**: Optimized for SEO with seamless Vercel integration for fast deployment.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: For building beautiful and accessible user interfaces.
- **Bun**: Super-fast JavaScript runtime and package manager.

## 📂 Project Structure

```bash
.
├── .gitignore                      
├── bun.lockb
├── components.json
├── .eslintrc.json
├── LICENSE
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── next-env.d.ts
├── public                      # Public assets (favicon, images, etc.)
└── src
    ├── components              # Reusable UI components, divided into `app` and `ui`.
    ├── constants               # Static values and configuration constants
    ├── hooks                   # Contains images, fonts, and other static assets.
    ├── icons                   # SVG and icon components.
    ├── lib                     # Contains third-party code sourced from external libraries.
    ├── app                     # App components for different routes.
    ├── providers               # Context and application-wide providers.
    ├── types                   # TypeScript types and interfaces
    └── utils                   # Helper functions and general utilities
```

## 🚀 Installation & Setup

To run this project locally, you'll need Bun installed. You can install it from the [Bun website](https://bun.sh).

### 1. Clone the repository

```bash
git clone https://github.com/sato-kazuma/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
bun install
```

### 3. Run the development server

```bash
bun run dev
```
This will start the development server on ``http://localhost:3000.``

### 🌐 Deployment
This website is deployed using __Vercel__ for fast, global deployment.

#### Building for production

```bash
bun run build
```
The built assets will be generated in the ``.next/`` folder, ready for deployment.

### 🎨 Styling & UI Components

The project uses __Tailwind CSS__ for styling and __Shadcn UI__ for components. You can easily extend or modify the UI by customizing the styles or creating new components in the ``src/components`` directory.

### 🔗 Social Media Links

Check out my social media profiles [here](https://sato-kazuma.vercel.app/links).

### 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

``
This `README.md` provides an overview of the tech stack, project structure, and how to set up the project locally.
``
