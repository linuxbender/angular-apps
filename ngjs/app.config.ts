import { Injector } from './utils/inject';

export const authDecorator: Injectable<($delegate: IUserService, applicationDataService: IApplicationDataService) => IUserService> = [
    Injector.$DELEGATE,
    Injector.APP_DATA_SERVICE,
    ($delegate: IUserService,
        applicationDataService: IApplicationDataService : IUserService) => {
            // todo imp, get SessionInfo set Roles......
            return $delegate;        
        }
];

export const appModuleRuntime: Injectable<>