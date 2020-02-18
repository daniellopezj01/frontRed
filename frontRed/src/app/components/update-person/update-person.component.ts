import { NavbarHomeComponent } from './../navbar-home/navbar-home.component';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePerson } from './../../services/ServicePerson';
import { Person } from 'src/app/logic/Person';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  person: Person;
  name: any;
  sendPerson: any;
  tittle: String;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdatePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public componentPerson: NavbarHomeComponent, private NewsServices: ServicePerson) {
    this.person = new Person();
    this.tittle = ""
  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      emailLogin: ['', [Validators.required, Validators.email]],
    });
    this.loadinfo();
  }

  loadinfo() {
    if (this.componentPerson.name == 1) {
      this.tittle = "Actualizar"
      this.person = this.componentPerson.sendperson;
      console.log(this.person);
    }
  }

  insertOrUpdatePerson() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.update();
  }

  update() {
    this.NewsServices.UpdatePerson(this.person).subscribe(res => {
      if (res['status'] == 200) {
        alert("datos actualizados")
        this.dialogRef.close();
      } else {
        alert("Ocurrio un error")
      }
    })
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
