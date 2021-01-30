import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-admin-question-item',
  templateUrl: './admin-question-item.component.html',
  styleUrls: ['./admin-question-item.component.css']
})
export class AdminQuestionItemComponent implements OnInit {
  @Input() value
  @Output() outputToParent = new EventEmitter<Object>()
  @Output() onDelete = new EventEmitter<Object>()

  public mode: string
  public done: boolean
  adminQuestionModel = {
    id: 0,
    title: '',
    mode: '',
    optionList: [
      {
        name: '',
        status: false
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.mode = 'oneAns'
    // this.adminQuestionModel.id = this.value.index
    if(this.value) {
      this.mode = 'textAns'
      this.adminQuestionModel.title = this.value.title
      this.adminQuestionModel.id = this.value.id
      this.adminQuestionModel.mode = this.value.mode
    }
    // console.log(this.value)
    // this.outputToParent.emit(this.adminQuestionModel)
  }

  onModeSelect(mode) {
    this.mode = mode
    this.adminQuestionModel.mode = mode
  }
  
  onAddOption() {
    this.adminQuestionModel.optionList.push({ name: '', status: false })
  }

  onStatusChange(option) {
    let index = this.adminQuestionModel.optionList.indexOf(option)
    if(option.status)
      this.adminQuestionModel.optionList[index].status = false
    else
      this.adminQuestionModel.optionList[index].status = true
  }

  onDeleteOption(option) {
    if (this.adminQuestionModel.optionList.length > 1) {
    let index = this.adminQuestionModel.optionList.indexOf(option)
    this.adminQuestionModel.optionList.splice(index, 1)
    }
  }

  onSubmit() {
    if(!this.done) {
      this.done = true
      this.outputToParent.emit(this.adminQuestionModel)
    }
    else {
        this.onDelete.emit(this.adminQuestionModel)
    }
  }

}
