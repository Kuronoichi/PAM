import {IProcessor} from "./processor";

export interface IProcessorProducer {
    id: number;
    name: string;
    processors: IProcessor[];
}
