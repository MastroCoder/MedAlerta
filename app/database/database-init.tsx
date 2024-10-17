import { SQLiteDatabase } from "expo-sqlite";
import { DatabaseConnection } from "./database-connection";

let db : SQLiteDatabase;
export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();
    db.execSync("PRAGMA foreign_keys = ON;");
    this.InitDb();
  }
  private InitDb() {
    var sql = `
              DROP TABLE IF EXISTS agendamentos;
              CREATE TABLE IF NOT EXISTS agendamentos(
              IDAgendamento int primary key autoincrement,
              NomeRemedio text,
              DataAgendamento text,
            )`;
    db.withTransactionSync(
      () => db.execSync(sql)
    );
  }
}
