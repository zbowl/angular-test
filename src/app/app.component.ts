import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WeaponConfigurationDialogComponent } from './weapon-configuration-dialog/weapon-configuration-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weapon Configuration';
  storedWeaponConfiguration?: {
    rifle: '',
    optic: '',
    magazine: ''
  };

  constructor(public dialog:MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.retrieveWeaponConfiguration();

    dialogConfig.data = {
      rifle: this.storedWeaponConfiguration?.rifle,
      optic: this.storedWeaponConfiguration?.optic,
      magazine: this.storedWeaponConfiguration?.magazine
    };

    this.dialog.open(WeaponConfigurationDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(WeaponConfigurationDialogComponent, dialogConfig);

    dialogRef.afterClosed();
  }

  retrieveWeaponConfiguration() {
    if(localStorage.getItem('bohemia-angular-test')) {
      // @ts-ignore
      this.storedWeaponConfiguration = JSON.parse(localStorage.getItem('bohemia-angular-test'));
    } else {
      this.destroyWeaponConfiguration();
    }
  }
  destroyWeaponConfiguration() {
      localStorage.removeItem('bohemia-angular-test');
  }
}
