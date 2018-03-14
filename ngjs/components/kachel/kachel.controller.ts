import { Injector } from '../../utils/inject';
import { IStateService } from '../../services/state/state.module';

export class KachelController {
    public static $inject: string[] = [
        Injector.APP_STATE_SERVICE,
    ];
    // todo, placeholder
    public param1: string;
    public param2: string;

    constructor(private appStateService: IStateService) {
    }

    public onKachelClick(): void {
        // todo:  
    }
}
