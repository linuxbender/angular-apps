import * as ANLAGEN_STATES from "./anlagen.states";
import { AnlagenUebersichtController } from "./uebersicht/main/anlagen.uebersicht.main.controller";

export const anlagenModulConfig: any = [
    '$stateProvider',
    '$urlRouterProvider',
    (stateProvider: IAppStateProvider) => {
        stateProvider.state({
            controller: AnlagenUebersichtController,
            controllerAs: 'viewController',
            name: ANLAGEN_STATES.STATE_ANLAGEN_UEBERSICHT_MAIN,
            templateUrl:'anlagen/uebersicht/main.base.tpl.html',
            url: '/anlagen',
            data: {
                title: 'global.anlagenMainTitle'
            }
        })
        // todo impl any Views with States in your modul
        // stateProvider.state(),
    }
]
