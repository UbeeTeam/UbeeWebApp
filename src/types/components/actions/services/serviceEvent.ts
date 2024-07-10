import type { ServiceAction } from './serviceActions';

export interface ServiceEvent {
  action: ServiceAction;
  price: number;
  serviceId: number;
}