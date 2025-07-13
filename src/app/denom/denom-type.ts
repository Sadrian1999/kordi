export class Money {
  public baseValue: number;
  public rollSize: number = 0;
  public nonRollValue: number = 0;
  public rollValue: number = 0;
  public sum: number = 0;
  public db: number = 0;

  constructor(
    baseValue: number,
    rollSize?: number,
    nonRollValue?: number,
    rollValue?: number,
    sum?: number,
    db?: number,
  ) {
    this.baseValue = baseValue;
    if (rollSize) this.rollSize = rollSize;
    if (nonRollValue) this.nonRollValue = nonRollValue;
    if (rollValue) this.rollValue = rollValue;
    if (sum) this.sum = sum;
    if (db) this.db = db;
  }
}
