import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the auth page with merchant link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Are you a merchant?/i);
  expect(linkElement).toBeInTheDocument();
});
