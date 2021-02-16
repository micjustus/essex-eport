import { Artefact } from "./Artefact";

export interface Reflection extends Artefact{
  content: string;
  published?: string;
  author?: string;
}
