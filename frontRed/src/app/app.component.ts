import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { MustMatch } from '../app/logic/must-match.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'Red';
  registerForm: FormGroup;
  LoginForm: FormGroup;
  ValidateRegister = false;
  ValidateLogin = false;
  maxid: Number;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private http: HttpClient) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //get registerForm "Color rojo de los mensajes"
  get getRegisterForm() { return this.registerForm.controls; }


  //alerta del formulario de registro "Color rojo de los mensajes"
  get getLoginForm() { return this.LoginForm.controls; }

  onSubmitRegister() {
    this.ValidateRegister = true;
    if (this.registerForm.invalid) {
      return;
    }
    /*
    this.empresa.url = this.empresa.nombre_empresa + "" + this.maxid;
    this.service.saveEmpresa(this.empresa).subscribe(res => {
      if (res.responseCode == 200) {
        alert(res.message);
        location.href = `/${this.empresa.url.replace(/['"]+/g, '')}`;
      }
    },
      err => {
        console.log("Error occured" + err);
      }
    );*/
  }
  onSubmitLogin() {
  this.ValidateLogin = true;
    if (this.LoginForm.invalid) {
      return;
    }
  }

}
