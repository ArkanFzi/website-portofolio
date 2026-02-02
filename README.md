# 🌐 M. Arkan Fauzi - Interactive 3D Portfolio

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

> **A Next-Generation Portfolio Website** featuring immersive 3D experiences, system-level animations, and a high-performance backend.

---

## ✨ Key Features

This project is built with a focus on **User Experience (UX)** and **Visual Impact**.

*   **🖥️ System Boot Sequence**: A "Matrix-style" terminal loader that initializes the experience.
*   **🧊 Immersive 3D Elements**: Interactive floating objects and particle clouds powered by `React Three Fiber`.
*   **🎥 Video Backgrounds**: Supporting cinematic loops with dynamic overlays for maximum immersion.
*   **💎 Glassmorphism UI**: Modern, frosted-glass aesthetics with premium Red/Black color grading.
*   **🌊 Scroll Reveal Animations**: Elements slide and fade in elegantly as you traverse the page.
*   **🧲 Magnetic Interactions**: Buttons that follow your cursor for a fluid feel.
*   **🍞 Smart Notifications**: Custom Toast system for real-time feedback (e.g., Contact Form success).
*   **📱 Fully Responsive**: Optimized for generic mobile, tablet, and desktop screens with a custom hamburger menu.

---

## 🛠️ Tech Stack

### Frontend (`/nextjs-frontend`)
*   **Framework**: Next.js 15 (App Router)
*   **Styling**: Tailwind CSS + Custom CSS Variables
*   **Animation**: Framer Motion (Page transitions, Scroll reveals)
*   **3D Graphics**: @react-three/fiber & @react-three/drei
*   **Icons**: Lucide React

### Backend (`/MyPostgreApi`)
*   **Framework**: .NET 9 Web API
*   **Language**: C#
*   **database**: PostgreSQL
*   **ORM**: Entity Framework Core / Dapper (Optimized query execution)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   Node.js (v18+)
*   .NET SDK 9.0
*   PostgreSQL Database

### 1. Backend Setup (.NET)
```bash
cd MyPostgreApi
# Update appsettings.json with your PostgreSQL connection string
dotnet restore
dotnet run
```
*The API will start at `https://localhost:7153` (or configured port).*

### 2. Frontend Setup (Next.js)
```bash
cd nextjs-frontend
# Install dependencies
npm install

# Run development server
npm run dev
```
*Open [http://localhost:3000](http://localhost:3000) to view the site.*

---

## 📂 Project Structure

```bash
📦 website-portofolio
 ┣ 📂 MyPostgreApi       # Backend (.NET 9 Web API)
 ┃ ┣ 📂 Controllers      # API Endpoints
 ┃ ┣ 📂 Models           # Data Models
 ┃ ┗ 📜 Program.cs       # App Entry Point
 ┃
 ┗ 📂 nextjs-frontend    # Frontend (Next.js)
   ┣ 📂 public           # Static Assets (Images, 3D Models, Videos)
   ┣ 📂 src
   ┃ ┣ 📂 app
   ┃ ┃ ┣ 📂 components   # Page Sections (Hero, About, Projects, etc.)
   ┃ ┃ ┗ 📜 page.tsx     # Main Landing Page
   ┃ ┣ 📂 components
   ┃ ┃ ┣ 📂 Three        # 3D Canvas Components
   ┃ ┃ ┗ 📂 UI           # Reusable UI (Cards, Buttons, Toasts)
   ┃ ┗ 📜 globals.css    # Global Styles & Themes
   ┗ 📜 tailwind.config  # Design Tokens
```

---

## 📬 Contact

**M. Arkan Fauzi** - Software Engineer
*   [GitHub](https://github.com/ArkanFzi)
*   [LinkedIn](https://linkedin.com/in/arkanfzi)
*   Email: arkan@example.com

---

*Built with ☕ by Arkan.*
