import React from 'react';
import { render, screen } from '@testing-library/react';

import Forms from './Forms';

const mockUpdateCards = jest.fn(() => {});

describe('Forms component tests', () => {
  test('render component without errors', () => {
    render(<Forms updateCards={mockUpdateCards} errors={null} />);

    expect(screen.getByText(/standart/i)).toBe;
  });
});
