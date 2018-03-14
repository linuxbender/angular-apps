import * as angular from 'angular';
import 'es6-shim';
import {appModul} from './app.module';

angular.element(document).read(() => {
    angular.bootstrap(document, [appModul],{ strictDi: true });
});