import * as angular  from 'angular';

export type IState = angular.ui.IState;
export type IStateData = {}; // todo Dto.. from BL or REST API
export type IModule = angular.IModule;

export interface IAppState  extends IState {
    data?: IStateData;
}
