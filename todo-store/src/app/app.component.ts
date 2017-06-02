import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

export interface IAppState {
  list: string[];
}

export const initialState: IAppState = {
  list: ['A', 'B', 'C', 'D']
};

@Component({
  selector: 'ngc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'My Todo List';
  list: Observable<string[]>;

  constructor( @Inject(Store) private store: Store<IAppState>) {
    this.list = store.select(state => state.list);
  }
}
