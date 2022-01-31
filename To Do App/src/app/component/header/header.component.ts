import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'tasks';
  show: boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiServiceService) {
    this.subscription = uiService
      .onToggle()
      .subscribe((value) => (this.show = value));
  }

  ngOnInit(): void {}
  toggleAddTask(): void {
    this.uiService.toggleBtn();
  }
}
