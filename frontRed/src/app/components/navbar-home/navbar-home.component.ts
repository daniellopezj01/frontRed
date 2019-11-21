import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      user:['', Validators.required],
    });
  }

 get getsearchForm() { return this.searchForm.controls; }

  onSubmitSearch() {
    this.validateSearch = true;
    if (this.searchForm.invalid) {
      return;
    }
  }

}
