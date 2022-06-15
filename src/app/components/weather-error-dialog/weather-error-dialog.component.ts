import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-weather-error-dialog',
  templateUrl: './weather-error-dialog.component.html',
  styleUrls: ['./weather-error-dialog.component.scss']
})
export class WeatherErrorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WeatherErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}
