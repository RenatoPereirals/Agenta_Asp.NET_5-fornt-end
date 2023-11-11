import { Evento } from "./Evento";

export interface Lote {
  id: number;
  nome: string;
  preco: number;
  dataInicial?: string;
  dataFinal?: string;
  quantidade: number;
  eventoId: number;
  evento: Evento;
}

