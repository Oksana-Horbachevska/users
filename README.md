# Developers App

A small **React / Next.js** application for displaying, filtering, and editing users locally.
The project demonstrates client-side state management, filtering logic, and form handling with validation.

## 🚀 How to run the project

1. **Clone the repository:**

```bash
git clone https://github.com/Oksana-Horbachevska/users.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open the app in your browser: http://localhost:3000


🏗 Architecture Overview
The application follows a simple and clear component-based architecture:

Pages & Data Flow
Server Component (page): Fetches the initial list of users and passes it to the client component as props.

UsersClient (Client Component): Stores users in local state, handles filtering by name and city, and controls the editing state.

Components
UsersClient: Manages state for users, search, and filtering. Uses useMemo for efficient performance.

UserEditForm: Built with React Hook Form for controlled validation and local data updates.

🛠 Key Technologies
React / Next.js (App Router)

TypeScript

React Hook Form

CSS Modules
