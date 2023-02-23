export type ComponentAsProp<T> = {
  component: ComponentType<SvelteComponentTyped>;
  props: T;
};
