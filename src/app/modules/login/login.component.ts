import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }

  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.inittializeForm();
  }

  hidePasswordEyeIcon = true;

  errorHint : boolean = false;

  
  private inittializeForm(): FormGroup{
    return new FormGroup({
      'login': new FormControl('',
      [Validators.pattern('^[a-zA-Z]*$'),
      Validators.required]),
      'password' : new FormControl('',
      [Validators.required,
        Validators.minLength(8)])
    })
  }

  get errorLoginRequired(){
    if(this.form.controls['login'].hasError('required')){
      return 'Данное поле обязательно';
      } return this.form.controls['login'].hasError('login') ? 'Not a valid login' : 'Логин должен состоять только из английских символов';
    }
  get errorPasswordRequired(){
    if(this.form.controls['password'].hasError('required')){
      return 'Данное поле обязательно';
      } return this.form.controls['password'].hasError('password') ? 'Not a valid login' : 'Пароль должен быть от 8 символов';
    }
    
    submit(){
      console.log(this.form);
      if(this.form.controls['login'].value == 'admin' && this.form.controls['password'].value == 'qwerty123'){
        this.router.navigate(['adminpage']);
        this.errorHint = false;
        localStorage.setItem('login', this.form.controls['login'].value);
        localStorage.setItem('password', this.form.controls['password'].value);
      }else{
        this.errorHint = true;
      }
    }
  }





