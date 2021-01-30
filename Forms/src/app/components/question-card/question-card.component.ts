import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question
  @Output() outputToParent = new EventEmitter<Object>()
  @Output() outputEmail = new EventEmitter<string>()
  public email
  constructor() { }

  answers = {
    _id: 0,
    ans: '',
    isCorrect: false
  }

  ngOnInit(): void {
  }

  onSendToParent() {
    
    this.answers._id = this.question._id
    this.outputToParent.emit(this.answers)
    if(this.question.title == "Email") this.sendEmail(this.answers)

    
  }

  onSendToParentRadio() {
    let correctAns = this.question.optionList.find(o => o.status == true)
    if(correctAns.name == this.answers.ans) this.answers.isCorrect = true
    
    this.answers._id = this.question._id
    this.outputToParent.emit(this.answers)
  }

  sendEmail(ans) {
    this.outputEmail.emit(ans)
  }

}
