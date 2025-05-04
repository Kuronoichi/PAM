import {IPcType} from "./pc-type";

export interface IImage {
    pc_type_image_id: number;
    pc_type_id: number;
    is_main: boolean;
    path: string;
    pc_type: IPcType;
}
