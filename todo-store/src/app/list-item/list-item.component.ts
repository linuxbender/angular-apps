import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngc-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item: any;
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  remove(event) {
    this.onRemove.emit();
  }
}
