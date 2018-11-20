const Dinosaur = require('../models/dinosaur.js');

const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function (dinosaur){
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.findMostVisitedDinosaur = function () {
  let dino0 = new Dinosaur('Zerosaurus', 'Omnivore', 0);
  let mostVisitedDino = dino0;

  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > mostVisitedDino.guestsAttractedPerDay){
      mostVisitedDino = this.dinosaurs[i];
    };
  };

  return this.dinosaurs[2];
};

module.exports = Park;
