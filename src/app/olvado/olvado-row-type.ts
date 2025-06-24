export class OlvadoType{
  public name: string = "";
  public dbperContainer: number = 0;
  public db: number = 0;
  public yesterdaySold: number = 0;
  public lastWeekTommorowSold: number = 0;
  public todaySold: number = 0;
  public lastWeekTodaySold: number = 0;

  public calculateNeeded(): number {
    const mean: number = (this.yesterdaySold + this.lastWeekTommorowSold) / 2;
    return (mean + this.lastWeekTodaySold - this.todaySold) / this.dbperContainer - this.db
  }
}
