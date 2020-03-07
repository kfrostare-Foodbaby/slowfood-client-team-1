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
      cy.get("#starter-index").within(() => {
        // cy.get("#starter").click();
        cy.contains("Salad");
      });
    });
    it("successfully show entrees", () => {
      cy.get("#entree-index").within(() => {
        // cy.get("#starter").click();
        cy.contains("Spagetti and Meatballs");
      });
    });
    it("successfully show desserts", () => {
      cy.get("#dessert-index").within(() => {
        // cy.get("#starter").click();
        cy.contains("Ice-Cream");
      });
    });
  });
});