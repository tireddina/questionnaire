import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  userModel = {
    email: '',
    password: ''
  }
  ngOnInit(): void {
  }

  onReg() {
    this.adminService.registration(this.userModel).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('email', this.userModel.email)
        this.router.navigate(['/admin'])
      }
    )
  }

}
