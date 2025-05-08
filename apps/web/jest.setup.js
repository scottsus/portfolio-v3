// Import jest-dom for DOM assertions
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    query: {},
  }),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    query: {},
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Clerk authentication
jest.mock('@clerk/nextjs', () => ({
  auth: () => ({ userId: 'test-user-id' }),
  currentUser: () => ({ id: 'test-user-id', name: 'Test User' }),
  useUser: () => ({ user: { id: 'test-user-id', name: 'Test User' } }),
  ClerkProvider: ({ children }) => <>{children}</>,
  SignedIn: ({ children }) => <>{children}</>,
  SignedOut: ({ children }) => null,
}));