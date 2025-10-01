# 📝 My Portfolio

A modern **Portfolio Website Platform** built with **Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL**.  
This project allows users to browse featured blogs, manage blog posts (CRUD), and showcase projects with a beautiful UI.

---

## 🔗 Live Demo Frontend
👉 [View Live Deployment](https://portfolio-frontend-nine-nu.vercel.app/)

## 🔗 Live Demo Backend
👉 [View Live Deployment](https://portfolio-backend-chi-dusky.vercel.app/)

---

## 📖 Overview
This project is a **full-stack blog and project showcase platform**.  
It provides:
- A **Home Page** with a responsive carousel and featured blogs.
- A **Blog & Project Management Dashboard** for admins to create, update, and delete blogs & projects.
- A **Project Showcase** section with detailed project cards.
- **Authentication with NextAuth** (admin-only access for certain features).

---

## ✨ Features
- 🖼️ **Home Carousel** – modern, responsive hero carousel with CTA buttons.  
- 📰 **Blog System** – add, view, update, and delete blogs.  
- 🔍 **Blog Details** – show author, title, content, and picture.  
- 📂 **Project Details Card** – includes title, description, tech stack, features list, and links (GitHub & Live).  
- 🔑 **Authentication (NextAuth)** – admin login with credentials.  
- 🎨 **Modern UI** – built with Tailwind CSS + Shadcn UI + DaisyUI.  
- 📱 **Fully Responsive** – optimized for mobile, tablet, and desktop.  

---

## 🛠️ Tech Stack
**Frontend**
- [Next.js 15](https://nextjs.org/) – React framework with App Router  
- [TypeScript](https://www.typescriptlang.org/) – Type safety  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  
- [Shadcn UI](https://ui.shadcn.com/) – Beautiful, accessible components  
- [DaisyUI](https://daisyui.com/) – Tailwind CSS components  
- [Lucide Icons](https://lucide.dev/) – Icons  

**Backend**
- [Express.js](https://expressjs.com/) – Web application framework for Node.js  
- [Prisma](https://www.prisma.io/) – ORM for database interaction  
- [PostgreSQL](https://www.postgresql.org/) – Relational database  
- [NextAuth.js](https://next-auth.js.org/) – Authentication  

**Other Tools**
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – Form validation  
- [React Hot Toast](https://react-hot-toast.com/) – Notifications  
- [Axios](https://axios-http.com/) – HTTP requests  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AbdullahAlTowsif/portfolio-frontend
cd portfolio-frontend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/myblogs"

# NextAuth
AUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# API Base
NEXT_PUBLIC_BASE_API=http://localhost:5000/api/v1
```

### 4. Prisma Setup
Run database migrations:
```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio to view DB:
```bash
npx prisma studio
```

### 5. Run Development Server
```bash
npm run dev
```
Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 📌 Notes
- Admin credentials must be set up in your backend.  
- Blogs are fetched from `${NEXT_PUBLIC_BASE_API}/blog`.  
- Projects are fetched from `${NEXT_PUBLIC_BASE_API}/project`.  
- Delete functionality calls: `DELETE /api/v1/blog/:id`.  
- Delete functionality calls: `DELETE /api/v1/project/:id`.  

---

## 🚀 Deployment
This project is ready for deployment on **Vercel**.  
Just connect your GitHub repo to Vercel and add the environment variables.  

---

## 👨‍💻 Author
Built with ❤️ by **[Abdullah Al Towsif](https://github.com/AbdullahAlTowsif)**  

