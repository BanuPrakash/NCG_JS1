describe("delete a friend", () => {

    it("delete friend on click of button", () => {
        cy.visit("http://localhost:3000");

        cy.get("button")
          //  .first()
            .eq(3)
            .click()
            .get(".row")
            .then(rows => {
                expect(rows.length).to.eq(5);
            })
    })
})