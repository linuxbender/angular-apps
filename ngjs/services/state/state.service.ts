import { IStateService, INgStateService, INgStateParamsService } from "./state.module";
import { IAppState } from "../../utils/types";

export class StateService implements IStateService {
    
        public static $inject: string[] = [
            '$state',
            '$staeParams'
        ];
    
        constructor(private $state: INgStateService, private $stateParams: INgStateParamsService) {
            // 
        }
    
        go(state: IAppState): Promise<any> {
            // todo iml extend params and with options all  with the optional flag?
            return this.$state.go(state);
        }
    }
    