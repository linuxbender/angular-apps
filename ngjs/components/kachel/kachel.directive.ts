import {IDirective} from 'angular';
import { KachelController } from "./kachel.controller";

export function KachelDirective(): IDirective {
    return {
        bindToConctroller: {
            param1: '=',
            param2: '=?'
        },
        controller: KachelController
        controllerAs: 'kacheklCtrl',
        restrict: 'E',
        scope: true,
        templateUrl: 'components/kachel/kachel.tpl.html'
    }
}