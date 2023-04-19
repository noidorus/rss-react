import 'whatwg-fetch';
import React from 'react';
import { act } from '@testing-library/react';

import '../../mocks/api/testSetup';
import renderWithProviders from '../../utilits/test/test-utulits';
import { FormPage } from './FormPage';

global.URL.createObjectURL = jest.fn();

describe('FormsPage component tests', () => {
  test('Render component', async () => {
    const { getByTestId } = await act(async () => renderWithProviders(<FormPage />));

    expect(document.title).toEqual('React-App Form');
    expect(getByTestId('forms-page')).toBe;
  });
});