import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-second',
  templateUrl: './admin-second.component.html',
  styleUrls: ['./admin-second.component.css']
})
export class AdminSecondComponent implements OnInit {
  cardValue: string
  questionList = [
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.questionList = JSON.parse(localStorage.getItem('second'))
  }

  getOutputValue(itemVal) {
    if(itemVal.mode == '')
      itemVal.mode = 'oneAns'
    if(itemVal) {
      this.questionList.push(itemVal)
    }
  }

  onAdd() {
    localStorage.setItem('second', JSON.stringify(this.questionList))
    this.router.navigate(['/admin/3'])
  }

  onDeleteQuestion(question) {
      // let index = this.questionList.indexOf(question)
      // if(index > 0 && this.questionList.length > 1) { 
        // this.questionList.splice(index, 1)
      // }
      console.log('typa deleted')
  }

}
