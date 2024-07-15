import { fireEvent, render, screen } from '@testing-library/react';
import Friend from './Friend';

describe("tesing <Friend / > using mock ", () => {

    let callback = jest.fn(); // mock callback

    let mockFriend = {
        id: 21,
        firstName: 'Harry',
        lastName: 'Potter'
    }

    it("render <Friend />", () => {
        render(<Friend
            delEvent={callback}
            friend={mockFriend}
            key={mockFriend.id} />);

        let elem = screen.getByText(/Harry/i);
        //screen.debug();
        expect(elem).toBeInTheDocument();
    })

    it("render <Friend /> deleteEvent", () => {
        render(<Friend
            delEvent={callback}
            friend={mockFriend}
            key={mockFriend.id} />);
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(21);
    });
});