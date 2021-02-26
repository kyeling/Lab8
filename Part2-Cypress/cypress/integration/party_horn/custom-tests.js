describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html'); //
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( ($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then( ($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('<audio> volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then( ($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('image changes when select party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('sound source changes when select party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#horn-sound').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes to level 1 when increasing volume', () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes to level 2 when increasing volume', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes to level 3 when increasing volume', () => {
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button is disabled when textbox input is empty', () => {
    cy.get('#volume-number').invoke('val', '').trigger('input');
    cy.get('#honk-btn').then( ($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Honk button is disabled when textbox input is non-number', () => {
    cy.get('#volume-number').invoke('val', 'e').trigger('input');
    cy.get('#honk-btn').then( ($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Test if error thrown when volume textbox input is outside/below range', () => {
    cy.get('#volume-number').invoke('val', '-1').trigger('input');
    cy.get('input:invalid').then( ($el) => {
      expect($el).to.have.attr('id','volume-number');
    });
  });

  it('Test if error thrown when volume textbox input is outside/above range', () => {
    cy.get('#volume-number').invoke('val', '111').trigger('input');
    cy.get('input:invalid').then( ($el) => {
      expect($el).to.have.attr('id','volume-number');
    });
  });
  
});
