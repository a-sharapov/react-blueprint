import React from 'react';
import { it, expect, beforeEach, describe } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Main from 'pages/Main';

describe('renders learn react link', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should the given main layout', async () => {
    render(<Main />);
    const element = await screen.getByText(/React Clear Template/i);
    expect(element).toBeInTheDocument();
  });
});
