import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../Task';
import Tasks from '../../Fake-tasks';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.apiUrl);
    return tasks;
  }
  deleteTask(id: number): Observable<Task[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Task[]>(url);
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}`;
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
