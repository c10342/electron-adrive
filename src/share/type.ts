export interface CommomParams {
  name?: string;
}

export interface SetWinPositionParams {
  x: number;
  y: number;
}

export type GetWinPositionRespond = {
  x: number;
  y: number;
} | null;
