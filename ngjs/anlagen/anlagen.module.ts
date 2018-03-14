import * as angular from 'angular';
import { anlagenModulConfig } from './anlagen.config';
import { NeueAnlageErstellenDirective } from './components/neue-anlage-erstellen/anlage.component.neue-anlage-erstellen.controller';
import { IModule } from '../utils/types';

export const anlagenModul: IModule = angular.module('app.anlagen', [
    // todo impl any modul dependencies like angular ui route...
    'ui.router',
    'angular-clipboard'
]);

anlagenModul.config(anlagenModulConfig);
anlagenModul.directive('appNeueAnlageErstellen', NeueAnlageErstellenDirective );