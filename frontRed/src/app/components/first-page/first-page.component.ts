import { ServicePerson } from './../../services/ServicePerson';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/logic/Person';
import { MustMatch } from 'src/app/logic/must-match.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})

@Injectable()
export class FirstPageComponent implements OnInit {
  title = 'Red';
  person: Person;
  registerForm: FormGroup;
  LoginForm: FormGroup;
  validateRegister = false;
  validateLogin = false;
  email: String;
  password: String;
  value:any;

  constructor(private formBuilder: FormBuilder,private _router: Router, private servicePerson: ServicePerson) {
    if(sessionStorage.getItem("persona")){
      this.person = JSON.parse(sessionStorage.getItem('persona')); 
      this._router.navigate([`/inicio`]);
    }else{
      this.person = new Person();
      this.email = "daniellopezj0327@gmail.com";
      this.password = "ssssss";
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.LoginForm = this.formBuilder.group({
      emailLogin: ['', [Validators.required, Validators.email]],
      passwordLogin: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  //get registerForm "Color rojo de los mensajes"
  get getRegisterForm() { return this.registerForm.controls; }


  //alerta del formulario de registro "Color rojo de los mensajes"
  get getLoginForm() { return this.LoginForm.controls; }

  onSubmitRegister() {
    this.validateRegister = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.person.id_person = parseInt(this.getRandom(100, 1000))
    this.person.image = "https://st2.depositphotos.com/1898481/5240/i/450/depositphotos_52406645-stock-photo-unknown-person.jpg";
    this.servicePerson.insertPerson(this.person).subscribe(res => {
      if (res['status'] == 200) {
        alert("datos almacenados");
       
      }
    },
      err => {
        console.log("Error occured" + err);
      }
    );
  }

  onSubmitLogin() {
    this.validateLogin = true;
    if (this.LoginForm.invalid) {
      return;
    }
    this.servicePerson.login({ "email": this.email, "password": this.password }).subscribe(res => {
      if(res.responseCode == 200){
        this.value = res.object
        sessionStorage.setItem('persona', JSON.stringify(this.value[0]));
        this._router.navigate([`/inicio`]);
      }else{
        alert("Upsss ocurrio un fallo");
      }
    })
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}
