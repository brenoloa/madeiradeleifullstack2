import { Material } from './material';

export interface Movel {
  id: number;
  nome: string;
  materiais: { [key: number]: number };
}
