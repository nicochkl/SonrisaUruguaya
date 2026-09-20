import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the dental clinic homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /una sonrisa que/i })).toBeDefined();
  expect(screen.getByRole('link', { name: /agendar mi consulta/i })).toBeDefined();
  expect(screen.getByRole('heading', { name: /^urgencias$/i })).toBeDefined();
});
