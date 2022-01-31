import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../Task';
import { TaskService } from '../../services/task.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res) => (this.tasks = res));
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }
  addNewTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t));
  }
}
