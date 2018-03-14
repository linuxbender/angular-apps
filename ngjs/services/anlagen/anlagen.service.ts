import { AnlageListe } from './../contract';
import { IAnlagenService } from './anlagen.module';

export class AnlagenService implements IAnlagenService {
    
    getAllOpenAnlagen(): Promise<AnlageListe> {
        const anlagenListe = new AnlageListe();
        return Promise.resolve(anlagenListe);
    }
}