import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchPanel from './SearchPanel';

describe('SearchPanel tests', () => {
  test('checking for changes in rendering input data', async () => {
    const { unmount } = render(<SearchPanel />);

    act(() => {
      const input = screen.getByLabelText('search-input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'Gamardjoba' } });
      expect(input.value).toBe('Gamardjoba');
    });

    act(() => {
      unmount();
      const storage = localStorage.getItem('searchValue');
      expect(storage).toBe('Gamardjoba');
    });

    render(<SearchPanel />);

    const input = screen.getByLabelText('search-input') as HTMLInputElement;
    expect(input.value).toBe('Gamardjoba');
  });
});