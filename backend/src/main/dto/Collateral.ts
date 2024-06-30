class Collateral {
  id: string;
  name: string;
  value: number;
  type: string;

  constructor(id, name, value, type) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.type = type;
  }
}
module.exports = Collateral;
