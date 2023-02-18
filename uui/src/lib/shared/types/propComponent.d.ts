export type ComponentProps<T> = {
  [K in keyof T]: T[K];
};

export type ComponentAsProp<T extends Record<string, any>> = {
  element: ComponentType<SvelteComponentTyped>;
  props: ComponentProps<T>;
};
