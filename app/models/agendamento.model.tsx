export class Agendamento {
  constructor(
    IDAgendamento: number,
    NomeRemedio: string,
    DataAgendamento: string
  ) {
    this.IDAgendamento = IDAgendamento;
    this.NomeRemedio = NomeRemedio;
    this.DataAgendamento = DataAgendamento;
  }
  public IDAgendamento: number;
  public NomeRemedio: string;
  public DataAgendamento: string;
}
