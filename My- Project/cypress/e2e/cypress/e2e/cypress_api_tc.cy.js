it("POST API testing Using Cypress   -1, correct credential ", () => {
    cy.api("POST", "http://113.203.238.39/haballapi/updatepayment", {
        "client_id": "d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "261e14306af433b22ab976edcae8bcc1",
        "PSID": "00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -2, incorrect credential api working is not correct ", () => {
    cy.api("POST", "http://113.203.238.39/haballapi", {
        "client_id": "!@!d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "261e14306af433b22ab976edcae8bcc1",
        "PSID": "00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -3, incorrect credential api working is not correct ", () => {
    cy.api("POST", "http://113.203.238.39/haballapi/updatepayment", {
        "client_id": "d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "!@!261e14306af433b22ab976edcae8bcc1",
        "PSID": "00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -4 , incorrect credential api working is not correct" ,() => {
    cy.api("POST", "http://113.203.238.39/haballapi/updatepayment", {
        "client_id": "d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "261e14306af433b22ab976edcae8bcc1",
        "PSID": "!@!00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -5 ,incorrect credential api working is not correct", () => {
    cy.api("POST", "http://113.203.238.39/haballapi/updatepayment", {
        "client_id": "!@!5478922136!%^&*()",
        "password": "!@!261e14306af433b22ab976edcae8bcc1",
        "PSID": "00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -6, incorrect credential working is not correct", () => {
    cy.api("POST", "http://113.203.238.39/haballapi/updatepayment", {
        "client_id": "!@#45adas$%&^1254!@!-587845",
        "password": "261e14306af433b22ab976edcae8bcc1",
        "PSID": "!@!00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -7, incorrect credential api working is not correct ", () => {
    cy.api("POST", "http://113.203.238.39/haballapi", {
        "client_id": "d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "!@!261e14306af433b22ab976edcae8bcc1",
        "PSID": "!@!00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -8, incorrect credential api working is not correct ", () => {
    cy.api("POST", "http://113.203.238.39/haballapi", {
        "client_id": "!@!d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "!@!261e14306af433b22ab976edcae8bcc1",
        "PSID": "!@!00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(200);
    
    });
    
  });

  it("POST API testing Using Cypress -9, incorrect url is missing endpoint  ", () => {
    cy.api("POST", "http://113.203.238.39/haballapi/", {
        "client_id": "d14dd39b-dce1-11e8-9e75-000c29970617",
        "password": "261e14306af433b22ab976edcae8bcc1",
        "PSID": "00079003845350521",
        "Amount": 1000,
        "TransactionCharges": 100,
        "TotalAmount": 1100,
        "Status": 1,
        "TransactionReferenceNum": 1234567489
        
    }).should((response) => {
      expect(response.status).to.eq(404);
    
    });
    
  });

  // POST API testing Using Cypress API Plugin



  // Testing Post Api 
  