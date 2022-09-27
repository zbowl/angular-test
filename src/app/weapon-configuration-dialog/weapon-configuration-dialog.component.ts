import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-weapon-configuration-dialog',
  templateUrl: './weapon-configuration-dialog.component.html',
  styleUrls: ['./weapon-configuration-dialog.component.css']
})
export class WeaponConfigurationDialogComponent {

  weaponConfiguration =  {
    rifle: '',
    optic: '',
    magazine: ''
  }
  rifles = ['M-16','Ak-47'];
  optics = ['Red dot scope', 'Acog scope'];
  magazines = ['30 round magazine', '50 round magazine'];

  constructor(
    private dialogRef: MatDialogRef<WeaponConfigurationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.weaponConfiguration.rifle = data.rifle;
    this.weaponConfiguration.optic = data.optic;
    this.weaponConfiguration.magazine = data.magazine;

  }

  save() {
    this.dialogRef.close();
    this.storeWeaponConfiguration();
  }

  close() {
    this.dialogRef.close();
    this.storeWeaponConfiguration();
  }

  storeWeaponConfiguration() {
    localStorage.setItem('bohemia-angular-test', JSON.stringify(this.weaponConfiguration));
  }

}
