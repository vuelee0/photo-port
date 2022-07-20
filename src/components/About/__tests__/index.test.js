import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);


// declare the component we're testing
describe('About component', () => {
    // First test
    it('renders', () => {
        render(<About />);
    });

    //  Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        
        expect(asFragment()).toMatchSnapshot();
    });
})