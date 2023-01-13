/*
 * Default For things like accordion/dialog should be surface
 * Informational default should be grey. (view chip)
 *
 */
export type Colors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'default'
  | 'inherit'
  | 'surface'
  | 'background';

export type TextColors =
  | Colors
  | 'on-primary'
  | 'on-secondary'
  | 'on-error'
  | 'on-success'
  | 'on-warning'
  | 'on-info'
  | 'on-surface'
  | 'on-background'
  | string;
