// Prefix for authentication routes in the API
export const apiAuthPrefix = '/api/auth'

// Routes that require authentication
export const authRoutes = ['/dashboard', '/profile']

// Default redirection after authentication
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'

// Public routes
export const publicRoutes = ['/', '/login', '/signup']
