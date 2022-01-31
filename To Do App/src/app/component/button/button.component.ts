import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  show: boolean = false;
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.btnClick.emit();
  }
}
