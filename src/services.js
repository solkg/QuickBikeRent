import { connection } from './mysql_connection';

class KundeService {
  getKunder(success) {
    connection.query('select * from Kunder', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getKunde(id, success) {
    connection.query('select * from Kunder where id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  addKunde(name, email, phone, success) {
    connection.query('insert into Kunder (name, email, phone) values (?, ?, ?)', [name, email], (error, results) => {
      if (error) return console.error(error);

      success(results.insertId);
    });
  }

  updateKunde(kunde, success) {
    connection.query(
      'update Kunder set name=?, email=?, phone=? where id=?',
      [kunde.name, kunde.email, kunde.phone, student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

  deleteKunde(id, success) {
    connection.query('delete from Bestillinger where kundeId = ?', [id], (error, results) => {
      connection.query('delete from Kunder where id = ?', [id], (error, results) => {
        if (error) return console.error(error);

        success();
      });
    });
  }
}
export let kundeService = new KundeService();
