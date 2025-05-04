import {IPcRoom} from "./pc-room";
import {IPcOrder} from "./order";
import {IPcStatus} from "./pc-status";
import {IPcType} from "./pc-type";

export interface IPc {
    pc_id: number;
    pc_room_id: number;
    pc_type_id: number;
    pc_status_id: number;
    row: number;
    place: number;
    description: string;
    pc_room: IPcRoom;
    pc_type: IPcType;
    pc_status: IPcStatus;
    pc_orders: IPcOrder[];
}
