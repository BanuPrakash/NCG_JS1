const { add, filter, forEach } = require('../src/lib');

// AAA
describe("unit testing lib module", () => {
    // test spec
    it("unit test add", () => {
        let result = add(4, 5); //Action
        expect(result).toBe(9);
    });
    // test spec
    it("unit test filter", () => {
        let callback = jest.fn(x => x % 2 === 0); // mock 
        let data = [5, 1, 2, 9, 4];
        let result = filter(data, callback);
        expect(result.length).toBe(2);
        expect(result[0]).toBe(2);

    });
    // test spec
    it("unit test forEach", () => {
        let callback = jest.fn(); // mock 
        let data = [5, 1, 2, 9, 4];
        forEach(data, callback);

        expect(callback.mock.calls).toHaveLength(5);
        // [[5], [1], [2], [9], [4]]
        expect(callback.mock.calls[0][0]).toBe(5);
        expect(callback.mock.calls[1][0]).toBe(1);
    });
});