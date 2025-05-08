# Testing Strategy for Portfolio-v3

This document outlines the testing approach for the portfolio-v3 repository.

## Frontend Testing (Next.js)

The frontend application uses Jest and React Testing Library for unit and component testing.

### Running Tests

```bash
# Run all tests
cd apps/web
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

### Test Structure

- Component tests are located in `__tests__` directories next to the components they test
- Utility function tests are in `src/lib/__tests__`
- Tests follow the naming convention `*.test.tsx` or `*.test.ts`

### Current Test Coverage

- Utility functions in `src/lib/utils.ts` are fully tested
- Basic component tests have been added for UI components

## Backend Testing (FastAPI)

The backend application uses pytest for API and unit testing.

### Running Tests

```bash
# Run all tests
cd apps/fastapi
python -m pytest

# Run tests with verbose output
python -m pytest -v

# Run tests with coverage
python -m pytest --cov=app
```

### Test Structure

- API tests are located in the `tests` directory
- Tests follow the naming convention `test_*.py`

### Current Test Coverage

- API endpoints in the FastAPI application are tested
- Mock database is used to isolate tests from the actual database

## Future Improvements

1. Increase test coverage for all components
2. Add integration tests for frontend-backend interactions
3. Set up CI/CD pipeline for automated testing
4. Add end-to-end tests using Cypress or Playwright