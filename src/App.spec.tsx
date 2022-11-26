import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
    it('Should be able to see welcome text', () => {
        const { getByText } = render(<App />);

        expect(getByText('Bem-vindo ao CNAB')).toBeInTheDocument();
    })
});