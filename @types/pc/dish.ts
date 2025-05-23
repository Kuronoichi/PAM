import {IImage} from "./image";

export interface IDish {
    dish_id: number;
    name: string;
    calories: number;
    cost: number;
    description: string;
    dish_images: IImage[];
}
