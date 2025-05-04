import {IPcType} from "./pc-type";
import {IProcessorProducer} from "./processor-producer";

export interface IProcessor {
    id: number;
    processorProducerId: number;
    model: string;
    processor_producer: IProcessorProducer;
    pcTypes: IPcType[];
}
