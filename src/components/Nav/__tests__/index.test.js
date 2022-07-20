import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);


// declare the component we're testing
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})


describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);

        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})


describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})