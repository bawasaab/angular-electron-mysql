import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public db : any;
  constructor(
    private _ElectronService: ElectronService
  ) {

    const mysql = this._ElectronService.remote.require('mysql');

    this.db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "db_institute"
    });
  }

  query( qry, cb ) {

    this.db.connect( ( err ) => {
      if( err ) {
        console.log("Connection error!");
        this.db.end();
        cb( err );
      } else {
        console.log("Connected!");
        this.db.query( qry, ( err, result ) => {
          this.db.end();
          cb( err, result );
        } );
      }
    } );
  }
}
