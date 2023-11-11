import { RedeSocial } from "./RedeSocial";
import { Evento } from "./Evento";
import { UserUpdate } from "./identity/UserUpdate";

export interface Palestrante {
  id: number;
  miniCurriculo: string;
  user: UserUpdate;
  redesSociais: RedeSocial[];
  palestrantesEventos: Evento[];
}
