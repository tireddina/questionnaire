import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-first',
  templateUrl: './admin-first.component.html',
  styleUrls: ['./admin-first.component.css']
})
export class AdminFirstComponent implements OnInit {

  title: string
  
  personal = [
    {
      id: 0,
      title: 'ФИО',
      mode: 'textAns'
    },
    {
      id: 0,
      title: 'Дата рождения',
      mode: 'textAns'
    },
    {
      id: 0,
      title: 'Email',
      mode: 'textAns'
    },
    {
      id: 0,
      title: 'Номер телефона',
      mode: 'textAns'
    },
    {
      id: 0,
      title: 'Адрес',
      mode: 'textAns'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAdd() {
    localStorage.setItem('title', this.title)
    localStorage.setItem('first', JSON.stringify(this.personal))
    this.router.navigate(['/admin/2'])
  }

}
