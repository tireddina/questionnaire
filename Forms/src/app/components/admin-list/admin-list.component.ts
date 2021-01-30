import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  public list = []
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.refresh.subscribe(() => {
      this.getList()
    })
    this.getList()
  }

  getList() {
    this.questionService.getQuestions().subscribe(data => {
      this.list = data
    })
  }

  onDelete(id) {
    this.questionService.delete(id).subscribe()
  }

}
