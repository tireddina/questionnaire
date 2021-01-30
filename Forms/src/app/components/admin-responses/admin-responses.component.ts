import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-admin-responses',
  templateUrl: './admin-responses.component.html',
  styleUrls: ['./admin-responses.component.css']
})
export class AdminResponsesComponent implements OnInit {
  public userAnswer
  public userPersonalQuestion
  public userSecondQuestion
  public userThirdQuestion

  public questionCards = []

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }
  public id = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.questionService.getAnswer(this.id).subscribe(data => {
      this.userAnswer = data
      this.questionService.getDetails(data.question_id).subscribe(data => {
        this.userPersonalQuestion = data.first.questions
        this.userSecondQuestion = data.second.questions
        this.userThirdQuestion = data.third.questions
        this.userPersonalQuestion.forEach(element =>
          this.appendQuestion(element)
        );

        this.userSecondQuestion.forEach(element =>
          this.appendQuestion(element)
        );

        this.userThirdQuestion.forEach(element =>
          this.appendQuestion(element)
        );
      })
    })
    console.log(this.questionCards)
  }

  appendQuestion(element) {
    let answer = this.userAnswer.answers.find(o => o._id == element._id)
    let correct = {name: ''}
    if(element.optionList && element.mode != 'textAns')
      correct = element.optionList.find(o => o.status == true)

    this.questionCards.push({
      title: element.title,
      optionList: element.optionList,
      answer: answer.ans,
      mode: element.mode,
      correct: correct.name
    })
  }

}
