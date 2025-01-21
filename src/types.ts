export type BadgeStyle = 'flat' | 'plastic' | 'flat-square' | 'for-the-badge' | 'social';

export interface BadgeOptions {
  label: string;
  message: string;
  color?: string;
  labelColor?: string;
  style?: BadgeStyle;
  logo?: string;
  logoWidth?: number;
  links?: [string, string];
}

export interface RenderMetrics {
  totalWidth: number;
  labelWidth: number;
  messageWidth: number;
  height: number;
}
