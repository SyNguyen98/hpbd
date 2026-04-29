# Happy Birthday Web App

A Vietnamese-language birthday celebration web app built with React, TypeScript, and Vite. Live
at [minhanh.synguyen.id.vn](https://minhanh.synguyen.id.vn/).

## Features

- **Thông Tin (Info)** — Avatar display and a countdown clock showing days since birth.
- **Dòng Thời Gian (Timeline)** — A visual timeline of memorable moments.
- **Lời Chúc (Wishes)** — A carousel of wish cards.

## Tech Stack

| Tool       | Version |
|------------|---------|
| React      | 19      |
| TypeScript | 6       |
| Vite       | 8       |
| Sass       | 1       |
| Swiper     | 12      |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  App.tsx               # Root component with page routing
  constants/            # Shared constants (e.g. DAY_OF_BIRTH)
  assets/               # Global SCSS variables and custom font
  component/
    avatar/             # Avatar display
    countdown-clock/    # Days-since-birth counter
    timeline/           # Timeline of events
    wish-card/          # Swipeable wish cards
public/
  bdcake.webp           # Birthday cake image
  web-intro.webp        # Intro/cover image
```

## Deployment

The app is configured for **Azure Static Web Apps** (`staticwebapp.config.json`). Build output goes to `dist/`.
