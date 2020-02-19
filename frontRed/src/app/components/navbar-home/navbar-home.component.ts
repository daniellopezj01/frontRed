import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatePersonComponent } from '../update-person/update-person.component';
import { Person } from 'src/app/logic/Person';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})

@Injectable()
export class NavbarHomeComponent implements OnInit {
  searchForm: FormGroup;
  validateSearch = false;
  inputSearch: String = "";
  name: number;
  sendperson: any;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('persona')) {
      this.sendperson = JSON.parse(sessionStorage.getItem('persona'));
      console.log(this.sendperson)
    }
    this.searchForm = this.formBuilder.group({
      user: ['', Validators.required],
    });
  }

  get getsearchForm() { return this.searchForm.controls; }

  onSubmitSearch() {
    this.validateSearch = true;
    if (this.searchForm.invalid) {
      return;
    }
  }

  update(): void {
    const dialogRef = this.dialog.open(UpdatePersonComponent, {
      width: '550px',data: {  name: 1, sendperson: this.sendperson }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("cambio de datos de usuario")
    });
  }
}
