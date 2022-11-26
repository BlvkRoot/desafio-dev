import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react';
import Upload from './';

const buttonTestId = 'upload-button';
describe('Upload', () => {
    beforeEach(() => {
        render(<Upload />);
    });

    it('Should be able to render upload button', () => { 
        expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
    });

    it('Should be able to render upload button with text', () => {
        expect(screen.getByText('Enviar')).toBeInTheDocument();
    });

    it('Should be able to have default styles', () => {
        expect(screen.getByTestId(buttonTestId)).toHaveStyle({
            background: 'none',
            borderRadius: '6px',
            border: '2px solid #970',
            outline: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '16px',
            padding: '4px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }) 
    })
});