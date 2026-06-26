# Armory — AI Automation Platform

A premium, responsive SaaS landing page for an AI-powered automation platform built for hackathon submission.

---

## 📋 Table of Contents

* [Overview](#-overview)
* [Live Links](#-live-links)
* [Preview](#-preview)
* [Hackathon Requirements](#-hackathon-requirements)
* [Core Features](#-core-features)
* [Architecture](#-architecture)
* [Tech Stack](#-tech-stack)
* [Folder Structure](#-folder-structure)
* [Run Locally](#-run-locally)
* [Deployment](#-deployment)
* [Performance](#-performance)
* [Credits](#-credits)

---

## 🧠 Overview

**Armory** is a modern AI automation SaaS landing page designed to showcase intelligent workflow orchestration, automation pipelines, and scalable enterprise tooling.

This project was built with a focus on:

* Dynamic pricing computation
* Responsive layout transformation
* Context-preserving UI behavior
* High-performance animations
* Clean architecture
* SEO optimization

---

## 🔗 Live Links

| Resource             | Link                                         |
| -------------------- | -------------------------------------------- |
| 🌐 Live Website      | [YOUR_VERCEL_LINK](YOUR_VERCEL_LINK)         |
| 💻 GitHub Repository | https://github.com/Krish-official/FrontEnd-Battle-3.0-Submission       |
| 🎥 Demo Video        | [YOUR_DEMO_VIDEO_LINK](YOUR_DEMO_VIDEO_LINK) |

---

## 📌 Hackathon Requirements

| Requirement               | Status     |
| ------------------------- | ---------- |
| React + Vite              | ✅ Complete |
| Tailwind CSS              | ✅ Complete |
| Responsive Design         | ✅ Complete |
| Public GitHub Repo        | ✅ Complete |
| Live Deployment           | ✅ Complete |
| Demo Video                | ✅ Complete |
| Matrix Pricing Feature    | ✅ Complete |
| Currency Switcher         | ✅ Complete |
| Bento Grid Transformation | ✅ Complete |
| Accordion Conversion      | ✅ Complete |
| Context Preservation      | ✅ Complete |
| Semantic HTML             | ✅ Complete |
| SEO Tags                  | ✅ Complete |
| SVG Asset Integration     | ✅ Complete |

---

## 🚀 Core Features

### 1. Matrix-Driven Pricing System

Pricing is dynamically calculated using:

* Tier selection
* Billing cycle
* Regional currency
* Discount logic
* Tariff adjustments

Core files:

```text
src/constants/pricingMatrix.js
src/utils/pricingCalculator.js
src/hooks/useCurrencyPrice.js
```

---

### 2. Currency Switcher

Supports dynamic price transformation:

* USD
* EUR
* INR

Updates pricing instantly without full UI re-render.

---

### 3. Bento Grid → Accordion Transformation

Desktop:
Bento Grid Layout

Mobile:
Accordion Layout

This preserves content structure while optimizing usability across devices.

Core files:

src/components/features/BentoGrid.jsx
src/components/features/FeatureAccordion.jsx
src/hooks/useViewportTransition.js

---

### 4. Context Lock Preservation

Viewport resizing preserves:

* Expanded accordion state
* Selected pricing tier
* Billing mode
* Currency preference

This prevents state loss during layout transitions.

---

### 5. SEO Optimization

Includes:

* Meta description
* Keywords
* Open Graph tags
* Semantic HTML structure

Core file:

```text
src/components/layout/SEOHead.jsx
```

---

## 🏗 Architecture

Project follows scalable modular architecture:

* Component-based UI
* Hook-driven state logic
* Utility abstraction
* Constant-driven configuration
* Style separation

---

## ⚙ Tech Stack

| Technology   | Purpose            |
| ------------ | ------------------ |
| React        | UI Framework       |
| Vite         | Build Tool         |
| Tailwind CSS | Styling            |
| JavaScript   | Logic              |
| CSS3         | Animations         |
| HTML5        | Semantic Structure |

---

## 📂 Folder Structure

ai-automation-platform/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── assets/
│       └── svgs/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── hero/
│   │   ├── pricing/
│   │   ├── features/
│   │   ├── social-proof/
│   │   └── newsletter/
│   │
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md


---

## 🖥 Run Locally

Clone repository:
git clone YOUR_GITHUB_REPO


Move into project:
cd ai-automation-platform


Install dependencies:
npm install


Run development server:
npm run dev


Build for production:
npm run build

Preview production build:
npm run preview

---

## 🚀 Deployment

Deployed using Vercel.
Deployment pipeline:


Local Development → GitHub → Vercel → Live Production
Every push to the main branch triggers automatic redeployment.

---

## ⚡ Performance
Optimizations:

* Component-level rendering isolation
* CSS hardware-accelerated animations
* Optimized SVG assets
* Tailwind utility compression
* Vite production bundling
* Lazy asset loading

---

## 🙌 Credits
Built by **Krish**
Hackathon Submission — AI Automation Platform
