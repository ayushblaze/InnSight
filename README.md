<p align="center">
  <img src="public/InnSight-Icon.png" alt="InnSight Logo" width="180" height="180" style="vertical-align:middle; margin-right: 16px;"/>
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

## 🎬 ScreenShots

## Dashboard
- Dark Mode
![Dashboard](https://github.com/user-attachments/assets/4bba8cc8-69ba-4e1a-950b-cbfc680dae78)
- Light Mode
![Dashboard](https://github.com/user-attachments/assets/556157df-1a51-48d6-b1bf-6c1798f8fe06)

## Bookings
- Dark Mode
![screencapture-localhost-5173-bookings-2025-06-29-00_37_06](https://github.com/user-attachments/assets/2836430d-ebc3-4cd6-8e77-94de1e837e91)
- Light Mode
![screencapture-localhost-5173-bookings-2025-07-04-09_18_12](https://github.com/user-attachments/assets/1ac7e1eb-fb39-4998-88c0-3832e5f83a03)

## Cabins
- Dark Mode
![screencapture-localhost-5173-cabins-2025-06-29-00_38_01](https://github.com/user-attachments/assets/06673826-8d9e-49dc-80df-1beb93bb610d)
- Light Mode
![screencapture-localhost-5173-cabins-2025-07-04-09_19_05](https://github.com/user-attachments/assets/e7408d83-ebad-4b7e-9e9f-a976f919275d)



---

## 🗄️ Database Schema

### Cabins
| Field         | Type    | Description                | Key         |
|---------------|---------|----------------------------|-------------|
| id            | int     | Unique cabin ID            | PK          |
| name          | string  | Cabin name                 |             |
| maxCapacity   | int     | Maximum guests allowed     |             |
| regularPrice  | int     | Standard price per night   |             |
| discount      | int     | Discounted amount          |             |
| image         | string  | Image URL                  |             |
| description   | string  | Cabin description          |             |

### Guests
| Field         | Type    | Description                | Key         |
|---------------|---------|----------------------------|-------------|
| id            | int     | Unique guest ID            | PK          |
| fullName      | string  | Guest's full name          |             |
| email         | string  | Email address              |             |
| nationality   | string  | Country of origin          |             |
| nationalID    | string  | National ID/passport       |             |
| countryFlag   | string  | Flag image URL             |             |

### Bookings
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

## 🚀 Usage / Quick Start

- Access the app at [http://localhost:5173](http://localhost:5173) after running the dev server.
- Sign up or log in to your account.
- Add, edit, or delete cabins, manage bookings, and view guest information.
- Use the dashboard for analytics and insights.
- Update settings and user profile as needed.

---

# Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Major Features & Implementation Details](#major-features--implementation-details)
  - [Filtering & Sorting](#filtering--sorting)
  - [Pagination & Prefetching](#pagination--prefetching)
  - [Check-in Workflow](#check-in-workflow)
  - [Authentication, Authorization & Protected Routes](#authentication-authorization--protected-routes)
  - [Logout & Cache Management](#logout--cache-management)
  - [Error Boundaries & Edge Cases](#error-boundaries--edge-cases)
  - [Row-Level Security (RLS) in Supabase](#row-level-security-rls-in-supabase)
- [Usage / Quick Start](#usage--quick-start)

---

## Features

- **Compound Components & Render Props:** Flexible UI architecture using compound components (e.g., `Table.Header`, `Table.Body`) and render props for extensibility.
- **Real-Time Data Sync:** Live updates and instant feedback powered by Supabase's real-time capabilities.
- **Responsive Design:** Optimized for both desktop and mobile, ensuring a smooth experience everywhere.
- **Dynamic Tables:** Custom validation, file uploads, and advanced filter/sort/search for all data tables.

---

## Tech Stack

- **Frontend:** React 18, Vite, styled-components, React Hook Form, React Router DOM
- **State/Data:** React Query (TanStack Query), Supabase (DB, Auth, Storage)
- **Utilities:** date-fns, react-hot-toast, react-icons
- **Tooling:** ESLint, Vite, Supabase CLI

---

## Major Features & Implementation Details

### Filtering & Sorting

- **Server-Side Sorting:**  
  Data is sorted on Supabase's side rather than the frontend. This ensures:
  - Only the relevant, sorted data is sent over the network.
  - Improved performance for large datasets.
  - Consistency between users and devices.
- **Implementation:**  
  The `sortBy` parameter is passed to Supabase queries, and the backend returns sorted results.  
  ```js
  query = query.order(sortBy.field, { ascending: sortBy.direction === "asc" });
  ```
- **React Query Dependency Arrays:**  
  The dependency array in React Query hooks (e.g., `[filter, sortBy]`) ensures that data is automatically refetched whenever the filter or sort state changes, keeping the UI in sync with user actions.

### Pagination & Prefetching

- **Pagination:**  
  Data tables are paginated to handle large datasets efficiently.
- **Prefetching:**  
  When a user navigates between pages, the next page's data is prefetched in the background.  
  - This hides loading spinners and provides a seamless experience.
  - Prefetching is implemented using React Query's `queryClient.prefetchQuery`.
- **Implementation Example:**  
  ```js
  useEffect(() => {
    queryClient.prefetchQuery(['bookings', page + 1], fetchBookings);
  }, [page]);
  ```

### Check-in Workflow

- **Check-in/Check-out:**  
  The check-in workflow is managed via dedicated components and hooks.
  - Bookings can be checked in or out, updating their status in real time.
  - The UI reflects changes instantly thanks to React Query's cache updates.
- **Edge Cases:**  
  - Prevents double check-ins or check-outs.
  - Handles late arrivals and early departures gracefully.

### Authentication, Authorization & Protected Routes

- **Supabase Auth:**  
  - User authentication is handled via Supabase's Auth API.
  - Sign up, login, and password management are all integrated.
- **Protected Routes:**  
  - The app uses a `ProtectedRoute` component to restrict access to authenticated users.
  - If a user is not authenticated, they are redirected to the login page.
- **Authorization:**  
  - User roles and permissions can be managed via Supabase policies and custom claims.

### Logout & Cache Management

- **Logout Process:**  
  - Logging out clears both localStorage keys and the React Query cache.
  - This ensures that no sensitive data remains after logout and prevents stale data from appearing if a different user logs in.
- **Implementation Example:**  
  ```js
  function logout() {
    localStorage.removeItem('user');
    queryClient.clear();
    // ...other logout logic
  }
  ```

### Error Boundaries & Edge Cases

- **Error Boundaries:**  
  - The app uses error boundaries to catch and display errors gracefully.
  - Users see a friendly error message instead of a blank screen.
- **Edge Case Handling:**  
  - Optimistic UI updates with rollback on failure.
  - Defensive coding for null/undefined data.
  - Custom hooks for outside click detection and local storage state.

### Row-Level Security (RLS) in Supabase

- **RLS Policies:**  
  - Supabase is configured with Row-Level Security (RLS) to restrict data access.
  - Only authenticated users can access or modify their own data.
  - Policies are written to ensure that users cannot access data belonging to others.
- **Example Policy:**  
  ```sql
  CREATE POLICY "Users can view their own bookings"
    ON bookings
    FOR SELECT
    USING (auth.uid() = user_id);
  ```
- **Security Best Practices:**  
  - All sensitive operations are protected by RLS.
  - The frontend never assumes access—authorization is always enforced at the database level.

---

<p align="center">
  <i>Made with ❤️ for modern web development.</i>
</p>
