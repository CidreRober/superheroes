import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public form: FormGroup;
  public showDeleteDialog: boolean = false;
  public superhero:string;
  public operation: string;
  public id: number;

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) data:any) {
      this.superhero = data.data.superhero;
      this.operation = data.operation;
      this.id = data.data.id;
      if (this.operation === 'Delete SuperHero') {
        this.showDeleteDialog = true;
      }
  }

  ngOnInit() {
      this.form = this.fb.group({
        superhero: [this.superhero, [Validators.required, Validators.minLength(4)]],
      });
      console.log(this.id , "ID");
  }

  public save() {
    if (this.id) {
      this.dialogRef.close({id: this.id, superhero: this.form.value.superhero});
    } else {
      this.dialogRef.close(this.form.value);
    }
     
  }

  public close() {
      this.dialogRef.close();
  }
}
