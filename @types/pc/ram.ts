import {IPcType} from "./pc-type";
import {IRAMType} from "./ram-type";

export interface IRAM {
    id: number;
    ramTypeId: number;
    capacity: number;
    ram_type: IRAMType;
    pcTypes: IPcType[];
}
