# <img src="public/InnSight-Icon.png" alt="InnSight Logo" width="48" style="vertical-align:middle;"/> InnSight

A modern, full-featured cabin management dashboard built with **React**, **Vite**, and **Supabase**.

---

## 🚀 Features

- **Beautiful UI**: Custom, responsive design with styled-components and a personal touch using the InnSight logo.
- **Cabin CRUD**: Create, edit, and delete cabins with image upload and instant feedback.
- **Smart Forms**: Robust validation (e.g., discount logic), file uploads, and error handling using React Hook Form.
- **Optimistic UI**: Instant updates and feedback with React Query and toast notifications.
- **Authentication**: Secure login, signup, and user profile management.
- **Dashboard & Analytics**: Visualize sales, duration, and stats with interactive charts.
- **Bookings Management**: View, filter, and manage bookings with detailed data views.
- **Settings Panel**: Update app-wide settings in real time.
- **Reusable Components**: Modular UI (buttons, tables, modals, etc.) for rapid development.
- **Custom Hooks**: For local storage, navigation, and more.
- **Supabase Integration**: Real-time data, storage, and authentication.
- **Error Boundaries**: Friendly error fallback UI for a robust experience.

---

## 🛠️ Cool Implementation Tricks

- **Unified Create/Edit Forms**: One form handles both creating and editing, with dynamic validation and pre-filled data.
- **Atomic File Uploads**: Images are uploaded only after a successful DB operation, with rollback on failure.
- **Smart Validation**: Numeric validation (e.g., discount < price) that prevents common user mistakes.
- **Optimistic Mutations**: UI updates before server confirmation for a snappy feel.
- **Custom File Inputs**: Styled file selectors that work seamlessly with form libraries.
- **React Query**: Automatic cache invalidation and background refetching for always-fresh data.

---

## 📦 Tech Stack
- React 18
- Vite
- Styled-components
- React Hook Form
- React Query
- Supabase (DB, Auth, Storage)
- React Hot Toast

---

## 🖥️ Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Set up your Supabase project and environment variables
4. Run the app: `npm run dev`

---

## 📸 Screenshots
> Coming soon!

---

> Made with ❤️ by Ayush Singh for modern web development.
