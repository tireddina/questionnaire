import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = {
    email: '',
    password: ''
  }
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.adminService.login(this.userModel).subscribe(res => {
      localStorage.setItem('email', this.userModel.email)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/admin'])
    })
  }
  
}
