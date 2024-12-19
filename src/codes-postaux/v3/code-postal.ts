export interface CodePostal {
  id: number;
  localite: string;
  code: number;
  typeDomicile: true;
  typeBp: boolean;
  bpMin: string | null;
  bpMax: string | null;
}
