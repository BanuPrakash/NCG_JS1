import { fireEvent, render, screen } from '@testing-library/react';

import FriendsList from './FriendsList';

// one file is by default one test suite
describe("testing <FriendsList />", () => {
    it("renders 6 <Friend/>", () => {
        // render(<FriendsList />);
        // let btns = screen.queryAllByRole('button');
        // expect(btns.length).toBe(6);

        // container is a wrapper for DOM
        let { container } = render(<FriendsList />);
        let rows = container.querySelectorAll(".row");
        expect(rows.length).toBe(6);
    });

    it("delete a friend", () => {
        render(<FriendsList />);
        let btns = screen.queryAllByRole('button');
        fireEvent.click(btns[3]);
        btns = screen.queryAllByRole('button');
        expect(btns.length).toBe(5);

        let monicaTxt = screen.queryByText(/Monica/i);
        expect(monicaTxt).not.toBeInTheDocument();
    });

    it("filter customers", () => {
        render(<FriendsList />);
        let searchInput = screen.getByPlaceholderText('search by name');
        fireEvent.change(searchInput, { "target": { "value": "Geller" } });
        let btns = screen.queryAllByRole('button');
        expect(btns.length).toBe(2);
        let monicaTxt = screen.queryByText(/Monica Geller/i);
        expect(monicaTxt).toBeInTheDocument();
        let rossTxt = screen.queryByText(/Ross Geller/i);
        expect(rossTxt).toBeInTheDocument();
    })
});

