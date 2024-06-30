class Bond {
  constructor(
    private name,
    private faceValue,
    private rate,
    private term,
    private collat,
  ) {}

  getPresentValue() {
    return this.faceValue / (1 + this.rate) ** this.term;
  }
}
module.exports = Bond;
