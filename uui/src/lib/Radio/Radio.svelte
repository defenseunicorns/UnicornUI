<script lang="ts">
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import Box from '../Box/box.svelte';
  import type { RadioProps } from './Radio.types';

  // Props
  type $$Props = RadioProps<HTMLInputElement>;
  export let checked = false;
  export let value: any = undefined;
  export let color = 'on-surface';

  const { id, name, disabled } = $$restProps;
</script>

<Box {...$$restProps} class="mdc-form-field {$$restProps.class || ''}">
  <Box class="radio mdc-radio" style="--color: {makeThemeColor(color)}">
    <input
      type="radio"
      bind:value
      {checked}
      {id}
      {name}
      {disabled}
      class="mdc-radio__native-control"
    />
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle" />
      <div class="mdc-radio__inner-circle" />
    </div>
    <div class="mdc-radio__ripple" />
  </Box>
  <label for={id}>{$$restProps.label || ''}</label>
</Box>

<style lang="scss" global>
  @use '@material/radio';
  @use '@material/radio/styles';
  @use '@material/form-field';

  @include form-field.core-styles;

  .radio.mdc-radio {
    height: 40px;
    width: 40px;

    @include radio.unchecked-stroke-color(var(--color));
    @include radio.checked-stroke-color(var(--color));
    @include radio.ink-color(var(--color));
    @include radio.disabled-unchecked-stroke-color(var(--disabled));
    @include radio.disabled-checked-stroke-color(var(--disabled));
    @include radio.disabled-ink-color(var(--disabled));
  }
</style>
