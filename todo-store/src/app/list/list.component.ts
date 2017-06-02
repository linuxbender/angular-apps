import { Component, Inject, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { IAppState } from './../app.component';
import { ACTION_TODO_CREATE_ITEM, ACTION_TOTO_CLEAR, ACTION_TOTO_REMOVE_ITEM } from './../reducers/reducers';

@Component({
  selector: 'ngc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list: Observable<string[]>;
  @ViewChild('createInput') createInput: ElementRef;

  constructor( @Inject(Store) private store: Store<IAppState>) { }

  public removeItem(item: string): void {
    this.store.dispatch({type: ACTION_TOTO_REMOVE_ITEM, payload: item});
  }

  public clearList(): void {
    this.store.dispatch({type: ACTION_TOTO_CLEAR});
  }
  public keyUpEnter($event: KeyboardEvent, fun: () => void): void {
    if ($event.key === 'Enter') {
      fun();
    }
  }

  public createItem(): void {
    this.store.dispatch({
      type: ACTION_TODO_CREATE_ITEM,
      payload: this.createInput.nativeElement.value,
    });
    this.createInput.nativeElement.value = '';
  }
}
