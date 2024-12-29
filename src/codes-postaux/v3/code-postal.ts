export interface CodePostal {
  id: number;
  commune: string;
  localite: string;
  code: number;
  typeDomicile: boolean;
  typeBp: boolean;
  intervalles: string[][];
}
