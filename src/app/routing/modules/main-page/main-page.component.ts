import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  


  nextPage(){
    if(localStorage.getItem('login') == 'admin'){
      this.router.navigate(['adminpage']);
      
      console.log(`Welcome ${localStorage.getItem('login')}`)
      
    }else{    

    console.log('You are not logged in');
    this.router.navigate(['login']);}

  }
}
