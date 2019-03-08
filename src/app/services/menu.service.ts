import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router"
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private shell;

  constructor(
    private _electronService: ElectronService,
    private ngZone: NgZone,
    private router: Router
  ) {

    this.shell = this._electronService.shell;
  }

  getFileSubmenu() {

    return [
      { role: 'quit' }
    ]
  }

  getEditSubmenu() {

    return [
      { role: 'undo' },
      { role: 'redo' },
      // { type: 'seprator' }, // seperator
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  }

  getViewSubmenu() {
    
    return [
      // { role: 'reload' }, // reloads the app
      // { role: 'forcereload' },
      { role: 'toggledevtools' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { role: 'togglefullscreen' }
    ]
  }

  getWindowSubmenu() {
    
    return [
      { role: 'minimize' },
      { role: 'zoom' },
      { role: 'close' }
    ]
  }

  getHelpSubmenu() {
    
    return [
      {
        label: 'Learn More',
        click: () => { this.shell.openExternalSync('https://electronjs.org') }
      }
    ]
  }

  getMasterSubmenu() {

    return [
      {
        label: 'Main Masters',
        click: () => {
          this.ngZone.run(() => this.router.navigate(['/masters']));
        }
      },
      // { type: 'seprator' },
      {
        label: 'Test Master',
        click: () => {
          this.ngZone.run(() => this.router.navigate(['/masters/test']));
        }
      }
    ]
  }

  getReportSubmenu() {

    return [
      {
        label: 'Reports',
        click: () => {
          // this.ngZone.run(() => this.router.navigate(['/masters/main']));
        }
      },
      // { type: 'seprator' },
      {
        label: 'Test Report Master',
        click: () => {
          alert('Test Report Master');
          // this.ngZone.run(() => this.router.navigate(['/masters/main']));
        }
      }
    ]
  }

  getMenuTemplate() {

    return [
      { label: 'File', submenu: this.getFileSubmenu() },
      { label: 'Edit', submenu: this.getEditSubmenu() },
      { label: 'View', submenu: this.getViewSubmenu() },
      { label: 'Window', submenu: this.getWindowSubmenu() },
      { role: 'help', submenu: this.getHelpSubmenu() },
      { label: 'test', submenu: this.getMasterSubmenu() },
      { label: 'Reports', submenu: this.getReportSubmenu() }
    ]
  }
}
