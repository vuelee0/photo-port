import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';


const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};


// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);


describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        // Assert the match
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'))
    
        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})