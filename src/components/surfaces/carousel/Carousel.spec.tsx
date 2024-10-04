import { CarouselItem } from 'components/surfaces/carousel/types';

import { Carousel } from './Carousel';

import { render, screen, fireEvent } from '@testing-library/react';

const items: CarouselItem[] = [
    { content: <div>Slide 1</div> },
    { content: <div>Slide 2</div> },
    { content: <div>Slide 3</div> },
];

describe('Carousel component', () => {
    it('renders the initial content', () => {
        render(<Carousel items={items} borderRadius={10} />);

        // Check the first slide content is displayed
        expect(screen.getByText('Slide 1')).toBeInTheDocument();
    });

    it('navigates to the next slide on clicking the next button', () => {
        render(<Carousel items={items} borderRadius={10} />);

        fireEvent.click(screen.getByTestId('carousel-button-next'));
        expect(screen.getByText('Slide 2')).toBeInTheDocument();
    });

    it('navigates to the previous slide on clicking the back button', () => {
        render(<Carousel items={items} borderRadius={10} />);

        fireEvent.click(screen.getByTestId('carousel-button-next'));
        fireEvent.click(screen.getByTestId('carousel-button-next'));
        fireEvent.click(screen.getByTestId('carousel-button-back'));
        expect(screen.getByText('Slide 2')).toBeInTheDocument();
    });

    it('wraps around to the last slide when back is clicked on the first slide', () => {
        render(<Carousel items={items} borderRadius={10} />);

        fireEvent.click(screen.getByTestId('carousel-button-back'));
        expect(screen.getByText('Slide 3')).toBeInTheDocument();
    });

    it('wraps around to the first slide when next is clicked on the last slide', () => {
        render(<Carousel items={items} borderRadius={10} />);

        fireEvent.click(screen.getByTestId('carousel-button-next'));
        fireEvent.click(screen.getByTestId('carousel-button-next'));
        fireEvent.click(screen.getByTestId('carousel-button-next'));
        expect(screen.getByText('Slide 1')).toBeInTheDocument();
    });

    it('applies the correct border radius', () => {
        const { container } = render(
            <Carousel items={items} borderRadius={15} />
        );

        // Check the border radius style on the Paper component
        const paperElement = container.querySelector('.MuiPaper-root');
        expect(paperElement).toHaveStyle('border-radius: 15px');
    });
});
