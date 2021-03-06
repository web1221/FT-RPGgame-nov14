export class Character {
  constructor(str, int, con, end, species){
    this.level = 1;
    this.health = con * 10;
    this.stamina = end * 10;
    this.species = species;
    this.xp = 0;

    this.stats = {
      str: str,
      int: int,
      con: con,
      end: end
    };
    this.inventory = [];
    this.equipment = {
      weapon:'',
      hands:'',
      chest:'',
      legs:'',
      feet:'',
    };
  }
  attack(player) {
    const damage = this.stats.str;
    player.health -= damage;
    return damage;
  }
  heal() {
    const heal = this.stats.int + 10;
    this.health += heal;
    return heal;
  }
  boost(){
    const boost = this.stats.int;
    this.stats.str += boost;
    return boost;
  }
  levelUp(strUp, intUp, conUp, endUp) {
    this.stats.str += strUp;
    this.stats.int += intUp;
    this.stats.con += conUp;
    this.stats.end += endUp;
    return 'Level Up';
  }
  buy(item) {
    if(this.xp === item.cost){
      this.inventory.push(item);
      return "Purchased"
    }

  }
  sell() {

  }


}
