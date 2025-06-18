export class DenomType{
  public value: number;
  public size: number;

  constructor(value: number, size: number) {
    this.value = value;
    this.size = size;
  }
}

export type Response = {
    value: number;
    sum: number;
  };



