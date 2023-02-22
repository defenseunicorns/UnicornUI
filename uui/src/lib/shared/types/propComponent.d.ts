export type ComponentProps<T> = {
  [K in keyof T]: T[K];
};

export type ComponentAsProp<T extends Record<string, any>> = {
  component: ComponentType<SvelteComponentTyped>;
  props: ComponentProps<T>;
};
