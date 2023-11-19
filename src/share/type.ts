export interface SetWinAttrProps {
  resizable?: boolean;
  minSize?: { width: number; height: number };
  size?: { width: number; height: number; animate?: boolean };
}
