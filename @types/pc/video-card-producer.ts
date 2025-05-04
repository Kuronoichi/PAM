import {IVideoCard} from "./video-card";

export interface IVideoCardProducer {
    id: number;
    name: string;
    videoCards: IVideoCard[];
}
