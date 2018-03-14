import { AppController } from './app';
import { anlagenModul } from './anlagen/anlagen.module';
import { Injector } from './utils/inject';
import { StateService } from './services/state/state.service';
import { IModule } from './utils/types';
import * as angular from 'angular';

export const appModul: IModule = angular.module('app', [
    // todo impl any modul dependencies like angular ui route...
    'ui.router',
    'angular-clipboard',
    anlagenModul.name,
]);

angular.controller('app.controller', AppController);
anlagenModul.service(Injector.APP_STATE_SERVICE, StateService );