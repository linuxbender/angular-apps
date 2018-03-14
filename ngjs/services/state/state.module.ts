import { IStateService } from './state.module';
import { IAppState } from "../../utils/types";
import * as angular from 'angular';

export type INgStateService = angular.ui.IStateService;
export type INgStateParamsService = angular.ui.IStateParamsService;

export interface IStateService {
    // todo angular ui route wrapper
    go(state: IAppState): Promise<any>;
}
