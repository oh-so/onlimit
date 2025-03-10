import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '../src/app/home/page';
test('Pages Router', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(
    main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })
  ).toBeDefined();

  const footer = within(screen.getByRole('contentinfo'));
  const link = within(footer.getByRole('link'));
  expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined();
});
