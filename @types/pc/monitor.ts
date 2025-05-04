import {IMonitorProducer} from "./monitor-producer";

export interface IMonitor {
    id: number;
    monitorProducerId: number;
    model: string;
    monitor_producer: IMonitorProducer;
}
