# Personal Portfolio

This repository contains a beautiful, responsive personal portfolio built using **React**, **Vite**, and **TailwindCSS**. The project showcases modern web development techniques including smooth animations, responsive layouts, and interactive UI components.

### Want to watch this?
[![Check this out](![Image](https://github.com/user-attachments/assets/2cf739ff-f288-41b7-b1df-adb2116faecb))


## Features

- **Modern Design:** Clean, SaaS-inspired design with a glass-effect navbar and sleek animations.
- **Responsive Layout:** Fully responsive across desktop, tablet, and mobile devices.
- **Interactive Components:** Animated sections and a mobile-friendly hamburger menu with smooth transitions.
- **Optimized Performance:** Fast development build using Vite with TailwindCSS for efficient styling.

## Technologies

- **React:** Component-based UI library.
- **Vite:** Fast and lean development build tool.
- **TailwindCSS:** Utility-first CSS framework.
- **JavaScript (ES6+):** Modern JavaScript features and best practices.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dilipksahu/dilip-sahu-portfolio
   cd dilip-sahu-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running at [http://localhost:5173](http://localhost:5173).

## Build

To create a production build, run:

```bash
npm run build
```

Then, you can preview the production build with:

```bash
npm run preview
```

## Folder Structure

```
your-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── index.css          # Tailwind base styles and global styles
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- **Tailwind CSS:** Modify the `index.css` file or add custom classes to further tweak the design.
- **Components:** Edit individual components in the `src/components/` folder to update content or styling.
- **Sections:** Update content in the `src/components/sections/` directory to showcase your personal projects, about info, and contact details.
