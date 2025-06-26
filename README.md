# <img src="public/InnSight-Icon.png" alt="InnSight Logo" width="48" style="vertical-align:middle;"/> InnSight

A modern, full-featured cabin management dashboard built with **React**, **Vite**, and **Supabase**.

---

## 🚀 Features Overview

- **Beautiful UI**: Custom, responsive design with styled-components and a personal touch using the InnSight logo.
- **Authentication**: Secure login, signup, and user profile management.
- **Cabin Management**: Create, edit, and delete cabins with image upload and instant feedback.
- **Bookings Management**: View, filter, and manage bookings with detailed data views.
- **Dashboard & Analytics**: Visualize sales, duration, and stats with interactive charts.
- **Settings Panel**: Update app-wide settings in real time.
- **Reusable Components**: Modular UI (buttons, tables, modals, etc.) for rapid development.
- **Error Boundaries**: Friendly error fallback UI for a robust experience.

---

## 🧩 Compound Components & Render Props

- **Table Component**: Uses the compound component pattern (`Table.Header`, `Table.Body`, `Table.Row`, etc.) for flexible, readable, and maintainable table UIs.
- **Modal Component**: Compound pattern for `Modal.Open` and `Modal.Window` enables multiple modals and clean trigger logic.
- **Table.Body**: Uses the render props pattern for custom row rendering, making the table highly reusable and extensible.

---

## ✨ Cabin Management
- **Unified Create/Edit Form**: One form handles both creating and editing, with dynamic validation and pre-filled data.
- **Atomic File Uploads**: Images are uploaded only after a successful DB operation, with rollback on failure.
- **Smart Validation**: Numeric validation (e.g., discount < price) that prevents common user mistakes.
- **Optimistic Mutations**: UI updates before server confirmation for a snappy feel.
- **Custom File Inputs**: Styled file selectors that work seamlessly with form libraries.

---

## 📋 Table & UI Patterns
- **Compound Table API**: `Table.Header`, `Table.Body`, `Table.Row`, and `Table.Footer` for maximum flexibility.
- **Dynamic Columns**: Pass column templates as props for easy layout changes.
- **Render Props**: `Table.Body` accepts a render function for custom row rendering.
- **Styled Components**: All UI is themeable and easily customizable.

---

## 🛠️ Other Cool Implementation Tricks
- **React Query**: Automatic cache invalidation and background refetching for always-fresh data.
- **Custom Hooks**: For local storage, navigation, and more.
- **Supabase Integration**: Real-time data, storage, and authentication.
- **Error Boundaries**: Friendly error fallback UI for a robust experience.
- **Modern Event Handling**: Click-outside detection for modals using event capture phase for robust UX.

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
