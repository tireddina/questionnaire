import { Component, OnInit, DoCheck } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public end: boolean = false
  public test
  public email
  public answers = []
  public id = this.route.snapshot.paramMap.get('id')
  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }
  public personal
  public second
  public third
  ngOnInit(): void {
    this.questionService.getDetails(this.id).subscribe(data => {
      this.test = data
      this.personal = data.first.questions
      this.second = data.second.questions
      this.third = data.third.questions
    })
  }
  
  public correctAnswers = 0
  public questinoModeCounter = 0
  getFromChild(answer) {
    this.answers.push(answer)
    if (answer.isCorrect == true) this.correctAnswers += 1
    
    let counter = 0
    this.second.forEach(element => {
      if(element.mode != 'textAns')
      {
        counter ++
        this.questinoModeCounter = counter
      }
    });
    // counter = 0
    this.third.forEach(element => {
      if(element.mode != 'textAns')
      {
        counter ++
        this.questinoModeCounter = counter
      }
    })
  }

  onSend() {
    this.questionService.onAnswerSend(
                                      this.test._id, this.email, 
                                      this.answers, this.questinoModeCounter, 
                                      this.correctAnswers
                                      ).subscribe()
    console.log(this.answers)
    this.end = true
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 2000)

  }

  getEmail(email) {
    this.email = email
  }

}
