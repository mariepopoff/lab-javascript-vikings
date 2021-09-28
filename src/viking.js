// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

  
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health>0)  {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health>0)  {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy =[];
    this.saxonArmy =[];
  }

  addViking (Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon (Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack () {
    let randomSaxonIndex = Math.floor(this.saxonArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(this.vikingArmy.length * Math.random());
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomSaxon.receiveDamage(randomViking.strength); 
    if (result === `A Saxon has died in combat`) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }

  saxonAttack () {
    let randomSaxonIndex = Math.floor(this.saxonArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(this.vikingArmy.length * Math.random());
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health <=0) {
      this.vikingArmy.splice(randomVikingIndex,1);
    }
    return result;
  }

  Attack (attackingArmy, defendingArmy) {
    let randomAttackingIndex = Math.floor(this.attackingArmy.length * Math.random());
    let randomDefendingIndex = Math.floor(this.defendingArmy.length * Math.random());
    let randomAttacker = this.attackingArmy[randomAttackingIndex];
    let randomDefender = this.defendingArmy[randomDefendingIndex];
    let result = randomDefender.receiveDamage(randomAttacker.strength);
    if (randomDefender.health <= 0) this.defendingArmy.splice(randomDefendingIndex,1);
    return result;
  }

  showStatus () {
    if (this.saxonArmy == "") return "Vikings have won the war of the century!";
    if (this.vikingArmy == "") return "Saxons have fought for their lives and survived another day...";
    if (this.vikingArmy.length>0 && this.saxonArmy.length>0) return "Vikings and Saxons are still in the thick of battle.";
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
