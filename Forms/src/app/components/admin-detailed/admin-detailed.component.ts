import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-admin-detailed',
  templateUrl: './admin-detailed.component.html',
  styleUrls: ['./admin-detailed.component.css']
})
export class AdminDetailedComponent implements OnInit {
  public mark
  public res
  constructor(private questionService: QuestionService, private route: ActivatedRoute) { }
  public id = this.route.snapshot.paramMap.get('id')
  public ansList = []
  ngOnInit(): void {
    this.questionService.getAnswers(this.id).subscribe(data => {
      this.ansList = data
    })
  }

}
