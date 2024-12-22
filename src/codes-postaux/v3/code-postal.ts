export interface CodePostal {
  id: number;
  commune: string;
  localite: string;
  code: number;
  typeDomicile: boolean;
  typeBp: boolean;
  bpMin: string | null;
  bpMax: string | null;
}
