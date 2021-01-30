import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logged: boolean = false
  constructor() { }

  ngOnInit(): void {
    let token = localStorage.getItem('email')
    if (token) this.logged = true
  }

  onLogout() {
    this.logged = false
    localStorage.removeItem('email')
    localStorage.removeItem('token')
  }

}
