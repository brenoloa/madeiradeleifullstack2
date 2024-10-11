import { Movel } from './movel';

export interface Pedido {
  id: number;
  movel: Movel;
  quantidade: number;
  status: string;
}
