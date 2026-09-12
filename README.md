# Joby Web

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)


##  Overview

**Joby Web** is the main web platform for the Joby ecosystem. It serves as a modern, high performance landing page and marketing site designed to introduce users to the Joby app, showcase its core features, and drive conversions. Built with a focus on premium aesthetics and smooth user experiences, it leverages modern web technologies to deliver a fast, responsive, and engaging interface.

##  Core Features

Based on the current implementation, the application includes the following core functionalities:

- **Immersive Landing Experience**: A highly engaging entry point (`LandingPage.tsx`) composed of multiple interactive sections.
- **Dynamic Animations**: Smooth scroll reveals, micro-interactions, and component transitions powered by Framer Motion.
- **Interactive UI Elements**: Features like `ParticleTrail`, `ImageMarquee`, `TiltScreenshot`, and glowing interactive buttons (`GlowButton.tsx`).
- **Fully Responsive Design**: Tailored experiences for all devices, including a dedicated `MobileBottomNav` for seamless mobile navigation.
- **Modular Sections**: 
  - `Hero`: High-impact introduction.
  - `FeaturesSection` & `CompanyFeaturesSection`: Detailed feature showcases with interactive cards.
  - `AboutSection` & `ContactSection`: Company information and user engagement endpoints.
  - `FooterCta`: Strong call-to-action to drive app downloads or signups.

##  Architecture & Tech Stack

### Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS (v4)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Folder Structure
The project follows a clean, component-first architecture:
```text
src/
├── components/     # Reusable React components (UI elements and page sections)
├── config/         # Application configuration files
├── data/           # Static data and constants used across components
├── App.tsx         # Root component
├── main.tsx        # Application entry point
└── index.css       # Global styles and Tailwind imports
```

### Component Design & State Management
- **Functional Components**: The UI is built entirely using React functional components.
- **State Management**: The application relies on built-in **React Local State** (e.g., `useState`, `useEffect`) and prop drilling where necessary. Given the nature of a landing page, external state managers (like Redux or Zustand) are intentionally omitted to keep the bundle lightweight and performant.

##  DevOps & CI/CD Pipeline

The project is designed for modern, automated deployment workflows.

### Docker Support (Optional)
To containerize the application, you can use the following `Dockerfile` structure:
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
*Command to build and run:* `docker build -t joby-web . && docker run -p 8080:80 joby-web`

### CI/CD with GitHub Actions
Automated testing and building can be set up via GitHub Actions. A typical workflow (`.github/workflows/deploy.yml`):
1. **Trigger**: On push or pull request to the `main` branch.
2. **Build Job**: Checkout code -> Setup Node.js -> `npm install` -> `npm run lint` -> `npm run build`.

### Deployment Instructions
The application is optimized for edge networks and static hosting platforms.
- **Vercel / Netlify**: 
  1. Connect your GitHub repository.
  2. Set the build command to `npm run build`.
  3. Set the output directory to `dist`.
  4. Deploy.
- **AWS S3 / CloudFront**: Build the project locally (`npm run build`) and sync the `dist` folder to an S3 bucket configured for static website hosting, fronted by CloudFront.

##  Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) and navigate to the project directory:
   ```bash
   cd joby_site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```
