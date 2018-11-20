const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;

  beforeEach(function () {
    park1 = new Park('Triassic Park', 15, [])
    dino1 = new Dinosaur('Plateosaurus', 'Herbivore', 50)
    dino2 = new Dinosaur('Anchisaurus', 'Herbivore', 100)
    dino3 = new Dinosaur('Herrerasaurus', 'Carnivore', 200)
    dino4 = new Dinosaur('Herrerasaurus', 'Carnivore', 150)
  });

  it('should have a name', function () {
    const actual = park1.name;
    assert.strictEqual(actual, 'Triassic Park');
  });


  it('should have a ticket price', function () {
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park1.addDinosaur('Plateosaurus');
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, ['Plateosaurus']);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park1.addDinosaur('Plateosaurus');
    park1.addDinosaur('Anchisaurus');
    park1.removeDinosaurByName('Plateosaurus');
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, ['Anchisaurus']);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park1.addDinosaur(dino1);
    park1.addDinosaur(dino2);
    park1.addDinosaur(dino3);
    const actual = park1.findMostVisitedDinosaur();
    assert.strictEqual(actual, dino3);
  });

  it('should be able to find all dinosaurs of a particular species', function (
    
  ) {

  });

  it('should be able to remove all dinosaurs of a particular species');

});
