import { Agendamento } from "../models/agendamento.model";
import { DatabaseConnection } from "../database/database-connection";

const table = "agendamento";
const db = DatabaseConnection.getConnection();

export default class AgendamentoService {
  static AddData(param: Agendamento) {
    return;
  }
}
