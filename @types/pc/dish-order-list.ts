import {IDish} from "./dish";

export interface IDishOrderList {
    dish_order_id: number
    count: number
    dish: IDish
}
