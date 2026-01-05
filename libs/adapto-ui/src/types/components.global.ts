export type Variant = 'outlined' | 'fussy' | 'soft' | 'soul' | 'link'
export type Color = 'surface' | 'info' | 'success' | 'warning' | 'danger'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'full'
export type Radius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type Icon = {
  name: string,
  size?: number,
  color?: string
  strokeWidth?: number
  defaultClass?: string
}

export enum SortOrder {
  'asc' = 'ASC',
  'desc' = 'DESC',
};
