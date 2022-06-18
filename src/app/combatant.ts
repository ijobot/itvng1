export class Combatant {
  public name: string;
  public score: number;
  public type: string;
  public color: string;
  public ac: number;

  constructor(
    name: string,
    score: number,
    type: string,
    color: string,
    ac: number
  ) {
    this.name = name;
    this.score = score;
    this.type = type;
    this.color = color;
    this.ac = ac;
  }
}
