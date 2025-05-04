import {IVideoCardProducer} from "./video-card-producer";
import {IPcType} from "./pc-type";

export interface IVideoCard {
    id: number;
    videoCardProducerId: number;
    model: string;
    video_card_producer: IVideoCardProducer;
    pcTypes: IPcType[];
}
