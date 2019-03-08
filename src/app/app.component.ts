import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { MenuService } from "./services/menu.service";
import { DatabaseService } from "./services/database.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-electron';
  private remote;
  private menu;
  private shell;

  constructor( 
    private ngZone: NgZone,
    private _electronService: ElectronService,
    private _MenuService: MenuService,
    private db: DatabaseService
  ) {

    this.shell = this._electronService.shell;
    this.remote = this._electronService.remote;
    
    // this.ngZone.run(() => {} );
    this.menu = this.remote.Menu.buildFromTemplate( this._MenuService.getMenuTemplate() );
    this.remote.Menu.setApplicationMenu( this.menu );

    this.testQuery();
  }

  launchWindow() {
    this.shell.openExternal('https://google.com');
  }

  testQuery() {

    let qry = "SELECT * FROM users";
    this.db.query( qry, ( err, result ) => {
      if( err ) {

        console.log('err', err);
      } else {

        console.log('result', result);
      }
    } );
  }
}