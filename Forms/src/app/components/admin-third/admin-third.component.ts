import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-third',
  templateUrl: './admin-third.component.html',
  styleUrls: ['./admin-third.component.css']
})
export class AdminThirdComponent implements OnInit {
  cardValue: string
  questionList = [
  ]

  questions = [
    {
      title: ''
    },
    {
      name: 'first',
      questions: []
    },
    {
      name: 'second',
      questions: []
    },
    {
      name: 'third',
      questions: []
    }
  ]
  
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  getOutputValue(itemVal) {
    if(itemVal.mode == '')
      itemVal.mode = 'oneAns'
    if(itemVal) {
      this.questionList.push(itemVal)
    }
  }

  onAdd() {
    this.questions[0].title = localStorage.getItem('title') 
    this.questions[1].questions = JSON.parse(localStorage.getItem('first'))
    this.questions[2].questions = JSON.parse(localStorage.getItem('second'))
    this.questions[3].questions = this.questionList
    this.adminService.sendQuestionList(this.questions).subscribe()
    localStorage.removeItem('first')
    localStorage.removeItem('second')
    localStorage.removeItem('title')
  }

  onDeleteQuestion(question) {
      // let index = this.questionList.indexOf(question)
      // if(index > 0 && this.questionList.length > 1) { 
        // this.questionList.splice(index, 1)
      // }
      console.log('typa deleted')
  }

}
