describe("user can view menu by category", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  describe("where there are categories", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/products",
        response: "fixture:product_data.json"
      });
    });

    it("successfully show starters", () => {
      cy.get("#index").within(() => {
        cy.get("#starter").click();
        cy.should("contain", "Salad");
        cy.should("not_contain", "Spaghetti and Meatballs");
        cy.should("not_contain", "Ice Cream");
      });
    });
  });
});