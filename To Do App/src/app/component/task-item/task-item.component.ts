import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() ontoggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
  onDelete() {
    this.onDeleteTask.emit();
  }
  toggleReminder(): void {
    this.ontoggleReminder.emit();
  }
}
