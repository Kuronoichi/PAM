import {IImage} from "./image";
import {IRAM} from "./ram";
import {IMonitor} from "./monitor";
import {IVideoCard} from "./video-card";
import {IProcessor} from "./processor";

export interface IPcType {
    pc_type_id: number;
    processor_id: number;
    video_card_id: number;
    monitor_id: number;
    ram_id: number;
    name: string;
    description: string;
    hour_cost: number;
    processor: IProcessor;
    video_card: IVideoCard;
    monitor: IMonitor;
    ram: IRAM;
    pc_type_images: IImage[];
}
