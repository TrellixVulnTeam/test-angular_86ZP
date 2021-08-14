import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backToLogin(){
    this.router.navigate(['']);
    localStorage.clear();
  }
  backToMainPage(){
    this.router.navigate(['mainpage']);
  }
}
