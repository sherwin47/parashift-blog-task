my-blog-app/
├── public/                 # Static assets (favicon, manifest, etc.)
├── src/
│   ├── assets/             # Global images, icons, and custom fonts
│   ├── components/         # Shared, reusable UI components
│   │   ├── BlogCard.jsx    # Individual blog preview card
│   │   ├── Skeleton.jsx    # Mirrored loading states
│   │   ├── Navbar.jsx      # Navigation header
│   │   └── Footer.jsx      # Footer section
│   ├── hooks/              # Custom React hooks (e.g., useFetch)
│   ├── layouts/            # Layout wrappers (e.g., MainLayout.jsx)
│   ├── pages/              # Main view components (Route-level)
│   │   ├── BlogListing.jsx # /blogs
│   │   └── BlogDetail.jsx  # /blogs/:slug
│   ├── services/           # API call logic (Axios/Fetch instances)
│   │   └── api.js          # Centralized API logic
│   ├── utils/              # Helper functions (date formatting, string truncating)
│   ├── App.jsx             # Main Application component & Routes
│   ├── index.css           # Tailwind directives & Global styles
│   └── main.jsx            # Entry point (React 18+ createRoot)
├── .gitignore              # Files to ignore in Git
├── index.html              # Root HTML template
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration