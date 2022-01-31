import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Task } from '../../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  id: number = 10;
  text: string;
  day: string;
  reminder: boolean = false;
  subscription: Subscription;
  show: boolean;
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  constructor(private uiService: UiServiceService) {
    this.subscription = uiService
      .onToggle()
      .subscribe((value) => (this.show = value));
  }

  ngOnInit(): void {
    document.forms[0].getBoundingClientRect();
  }
  onSubmit(): void {
    if (!this.text) alert('Please Enter A Task');
    else {
      const newTask: Task = {
        id: 10,
        day: this.day,
        text: this.text,
        reminder: this.reminder,
      };
      this.addTask.emit(newTask);
      this.text = this.day = '';
      this.reminder = false;
    }
  }
}
