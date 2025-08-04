# Shop Reel Connect - Setup Instructions

## Overview
Shop Reel Connect is a modern social commerce platform built with React, TypeScript, and Vite. It features Instagram-like design, Capacitor for mobile deployment, and comprehensive analytics for consumers, influencers, and vendors.

## Prerequisites
Before setting up the project, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control
- **VSCode** (recommended) with these extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - Auto Rename Tag

## Project Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd shop-reel-connect
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Development Server
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
# or
yarn build
```

## Mobile Development with Capacitor

### 1. Initialize Capacitor (Already Done)
The project already includes Capacitor configuration, but if you need to reinitialize:
```bash
npx cap init
```

### 2. Add Platforms
For iOS development (requires macOS with Xcode):
```bash
npx cap add ios
```

For Android development (requires Android Studio):
```bash
npx cap add android
```

### 3. Build and Sync
```bash
npm run build
npx cap sync
```

### 4. Run on Mobile
For iOS:
```bash
npx cap run ios
```

For Android:
```bash
npx cap run android
```

For live reload during development:
```bash
npx cap run ios --livereload
npx cap run android --livereload
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── ConsumerProfile.tsx
│   ├── RoleManagement.tsx
│   ├── TrendingCarousel.tsx
│   └── ...
├── pages/               # Main page components
│   ├── MainFeed.tsx
│   ├── Profile.tsx
│   ├── InfluencerDashboard.tsx
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── index.css           # Global styles and design system
└── main.tsx           # Application entry point
```

## Key Technologies

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Instagram Design System** - Custom design tokens matching Instagram
- **SF Pro Fonts** - Apple's system fonts for iOS-like experience

### UI Components
- **Shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon pack

### Mobile Development
- **Capacitor** - Cross-platform native runtime
- **iOS/Android** - Native mobile app deployment

### Charts & Analytics
- **Recharts** - Composable charting library
- **Chart.js** - For advanced chart types

### State Management
- **React Query** - Server state management
- **React Router** - Client-side routing

## Design System

### Colors (HSL Format)
The app uses Instagram-inspired colors:
- Primary: `214 100% 59%` (Instagram Blue)
- Background: `0 0% 100%` (White)
- Foreground: `0 0% 15%` (Dark Gray)
- Muted: `0 0% 96%` (Light Gray)

### Typography
- **SF Pro Display** - Headings and emphasized text
- **SF Pro Text** - Body text and UI elements
- Font sizes match Instagram mobile app (12px-24px)

### Spacing
- Uses Instagram's spacing system (4px, 8px, 12px, 16px, 24px)
- Mobile-first responsive design

## Development Guidelines

### Code Organization
1. **Components**: Keep components small and focused
2. **Props**: Use TypeScript interfaces for all props
3. **Comments**: Document complex logic and component purposes
4. **Naming**: Use descriptive names following React conventions

### Styling Guidelines
1. **Use Design Tokens**: Always use CSS variables instead of hard-coded colors
2. **Mobile First**: Design for mobile, then enhance for desktop
3. **Semantic Classes**: Use Instagram-inspired utility classes
4. **Accessibility**: Ensure proper contrast and screen reader support

### Performance Best Practices
1. **Code Splitting**: Use React.lazy() for route-based splitting
2. **Image Optimization**: Use proper image formats and sizes
3. **Bundle Analysis**: Regularly check bundle size with `npm run build`
4. **Memoization**: Use React.memo() and useMemo() appropriately

## Common Issues & Solutions

### 1. TypeScript Errors
Ensure all imports have proper types:
```typescript
import type { ComponentProps } from 'react';
```

### 2. Tailwind Not Working
Check if Tailwind is properly configured in `tailwind.config.ts`

### 3. Capacitor Build Issues
Always run `npm run build` before `npx cap sync`

### 4. iOS Development
Requires macOS with Xcode installed

### 5. Android Development
Requires Android Studio and Java Development Kit (JDK)

## Deployment

### Web Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Mobile App Store
1. Build and sync: `npm run build && npx cap sync`
2. Open in native IDE: `npx cap open ios` or `npx cap open android`
3. Follow platform-specific publishing guidelines

## Environment Variables
Create a `.env` file in the root directory:
```
VITE_API_URL=your_api_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Testing
```bash
npm run test        # Run unit tests
npm run e2e         # Run end-to-end tests
npm run lint        # Check code quality
npm run type-check  # TypeScript type checking
```

## Support
For issues or questions:
1. Check the documentation
2. Review common issues above
3. Create an issue in the repository
4. Contact the development team

## License
This project is proprietary and confidential. All rights reserved.