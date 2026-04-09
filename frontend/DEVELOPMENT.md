# Frontend Development Guide

This guide covers the development scripts and workflows for the Creative AI frontend.

## Available Scripts

### Development

```bash
# Start development server (hot reload enabled)
yarn dev
# or
yarn start
```

Runs the app in development mode on [http://localhost:3000](http://localhost:3000). The page will reload when you make changes.

### Building

```bash
# Build for production
yarn build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
# Build for production (optimized, no source maps)
yarn build:prod
```

Production build without source maps for smaller bundle size.

```bash
# Serve production build locally
yarn serve
```

Builds and serves the production bundle locally to test the production build.

### Testing

```bash
# Run tests once
yarn test
```

Launches the test runner in interactive watch mode.

```bash
# Run tests in watch mode
yarn test:watch
```

Continuously watches for file changes and re-runs tests.

### Code Quality

```bash
# Lint all source files
yarn lint
```

Checks code quality and finds potential issues using ESLint.

```bash
# Lint and fix issues automatically
yarn lint:fix
```

Auto-fixes ESLint issues where possible.

```bash
# Type check with TypeScript
yarn type-check
```

Checks TypeScript types without generating files (useful for JS projects with JSDoc).

```bash
# Format code with Prettier
yarn format
```

Formats all code files using Prettier for consistent style.

```bash
# Check formatting without changes
yarn format:check
```

Checks if code matches Prettier formatting rules.

## Development Workflow

### Initial Setup

```bash
cd frontend
yarn install
yarn dev
```

### Before Committing Code

```bash
# Check linting
yarn lint

# Format code
yarn format

# Run tests
yarn test
```

Or run all checks at once:

```bash
yarn lint:fix && yarn format && yarn test
```

### Production Deployment

```bash
# Build optimized production bundle
yarn build:prod

# Test the production build locally
yarn serve
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── components/ui/    # shadcn/ui components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── App.js           # Main app component with routing
├── App.css          # App-specific styles
└── index.css        # Global styles and Tailwind CSS
```

## Configuration Files

- **tailwind.config.js** - Tailwind CSS configuration with design tokens
- **craco.config.js** - Create React App configuration overrides
- **.prettierrc.json** - Code formatting rules
- **.prettierignore** - Files to skip during formatting

## Technology Stack

- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Pre-built UI components (30+)
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## Tips & Best Practices

1. **Component Organization** - Keep components small and focused
2. **Styling** - Use Tailwind classes and custom CSS variables for theming
3. **Form Validation** - Use React Hook Form + Zod for form handling
4. **Icons** - Use Lucide React icons instead of images
5. **Accessibility** - Leverage Radix UI components for A11y compliance
6. **Code Style** - Run `yarn format` to maintain consistent code style

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, the dev server will prompt you to use another port.

### Build Fails
Clear cache and reinstall dependencies:
```bash
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### ESLint Errors
Auto-fix issues:
```bash
yarn lint:fix
```

## Environment Variables

Create `.env.local` for local environment variables (not committed to git):

```
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENV=development
```

## Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)
- [Zod Validation](https://zod.dev)
