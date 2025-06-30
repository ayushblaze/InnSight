<p align="center">
  <img src="public/InnSight-Icon.png" alt="InnSight Logo" width="100" height="100" style="vertical-align:middle; margin-right: 16px;"/>
</p>

<p align="center">
  <b>Modern Cabin Management Dashboard</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status"/>
  <img src="https://img.shields.io/badge/license-Unspecified-lightgrey" alt="License"/>
  <img src="https://img.shields.io/badge/react-18-blue" alt="React Version"/>
  <img src="https://img.shields.io/badge/supabase-realtime-green" alt="Supabase"/>
</p>

---

## Overview

<b>InnSight</b> is a full-featured, real-time cabin management dashboard designed for modern hospitality businesses. Built with <b>React</b>, <b>Vite</b>, and <b>Supabase</b>, it offers a seamless experience for managing cabins, guests, and bookings. The app features a flexible UI architecture, real-time data sync, responsive design, and dynamic tables with advanced validation and file uploads. Perfect for property managers seeking efficiency, insight, and a delightful user experience.

---

## ✨ Features

- **Compound Components & Render Props:** Flexible UI architecture using compound components (e.g., `Table.Header`, `Table.Body`) and render props for extensibility.
- **Real-Time Data Sync:** Live updates and instant feedback powered by Supabase's real-time capabilities.
- **Responsive Design:** Optimized for both desktop and mobile, ensuring a smooth experience everywhere.
- **Dynamic Tables:** Custom validation, file uploads, and advanced filter/sort/search for all data tables.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, styled-components, React Hook Form, React Router DOM
- **State/Data:** React Query (TanStack Query), Supabase (DB, Auth, Storage)
- **Utilities:** date-fns, react-hot-toast, react-icons
- **Tooling:** ESLint, Vite, Supabase CLI

---

## 🏗️ Architecture & Implementation

- **Component Communication:**
  - Uses compound component patterns for tables and modals, enabling clean, maintainable, and flexible UIs.
  - Render props in table bodies allow custom row rendering and extensibility.
- **State Management & Data Fetching:**
  - React Query manages server state, caching, background refetching, and optimistic updates for a snappy UI.
  - Supabase provides real-time data sync, authentication, and file storage.
- **Advanced Patterns:**
  - Custom hooks for local storage, navigation, and outside click detection.
  - Optimistic UI updates and atomic file uploads with rollback on failure.
  - Error boundaries for robust error handling and user-friendly fallbacks.

---

## 🗄️ Database Schema

### cabins
| Field         | Type    | Description                | Key         |
|---------------|---------|----------------------------|-------------|
| id            | int     | Unique cabin ID            | PK          |
| name          | string  | Cabin name                 |             |
| maxCapacity   | int     | Maximum guests allowed     |             |
| regularPrice  | int     | Standard price per night   |             |
| discount      | int     | Discounted amount          |             |
| image         | string  | Image URL                  |             |
| description   | string  | Cabin description          |             |

### guests
| Field         | Type    | Description                | Key         |
|---------------|---------|----------------------------|-------------|
| id            | int     | Unique guest ID            | PK          |
| fullName      | string  | Guest's full name          |             |
| email         | string  | Email address              |             |
| nationality   | string  | Country of origin          |             |
| nationalID    | string  | National ID/passport       |             |
| countryFlag   | string  | Flag image URL             |             |

### bookings
| Field         | Type    | Description                | Key         |
|---------------|---------|----------------------------|-------------|
| id            | int     | Unique booking ID          | PK          |
| created_at    | date    | Booking creation timestamp |             |
| startDate     | date    | Check-in date              |             |
| endDate       | date    | Check-out date             |             |
| cabinId       | int     | Linked cabin               | FK → cabins |
| guestId       | int     | Linked guest               | FK → guests |
| hasBreakfast  | bool    | Breakfast included         |             |
| observations  | string  | Special requests/notes     |             |
| isPaid        | bool    | Payment status             |             |
| numGuests     | int     | Number of guests           |             |

---

## ⚡ Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/InnSight.git
   cd InnSight
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Supabase project URL and anon key:
     ```env
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```

---

## 🚀 Usage / Quick Start

- Access the app at [http://localhost:5173](http://localhost:5173) after running the dev server.
- Sign up or log in to your account.
- Add, edit, or delete cabins, manage bookings, and view guest information.
- Use the dashboard for analytics and insights.
- Update settings and user profile as needed.

---

## 🎬 Demo

> _No screenshots or video demo found. To add, place images or a video in the `public/` folder and update this section!_

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow the code style and add tests where appropriate.

---


---

<p align="center">
  <i>Made with ❤️ for modern web development.</i>
</p>
