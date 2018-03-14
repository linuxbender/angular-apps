import { AnlageListe } from "../contract";

export interface IAnlagenService {
    getAllOpenAnlagen(): Promise<AnlageListe>;
}
