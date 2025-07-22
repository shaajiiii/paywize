# Dashboard & Users App (React + MUI)

This is a simple React-based dashboard with two routes: `Home` and `Users`. The app uses mock data and implements basic UI components using Material UI (MUI) and Tailwind CSS.

---

## 🚀 Features

### 🏠 Home (`/`)
- Displays the main **Dashboard**.
- Includes statistics tiles and a **Users preview component** with limited records shown.
- Uses **dummy data** for charts and tiles — setting up a proper mock API took time.
- For a more reusable and structured version of dashboard charts, check out the `skyGen` repo in my GitHub.

### 👤 Users (`/users`)
- Shows a full paginated list of users.
- Integrates **MUI Table** with pagination using hardcoded total count (`72`) since the mock API didn’t provide it.

---

## 📦 Tech Stack

- React
- TypeScript
- Tailwind CSS
- Material UI (MUI)
- MockAPI for sample data

---

## 📝 Notes

- The **Users preview component** on the dashboard shows only a few entries — for full data with pagination, go to the `/users` route.
- While the dashboard uses hardcoded mock data, the chart and tile structure can be modularized further — as done in [skyGeni repo](https://github.com/shaajiiii/skyGeni).

## ⚙️ Setup

```bash
git clone <repo-url>
yarn install
yarn dev
