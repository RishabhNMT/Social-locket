import { render, screen } from '@testing-library/react';
import ComingSoon from './ComingSoon';

test('renders learn react link', () => {
  render(<ComingSoon />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
