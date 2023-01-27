<script lang="ts">
  import type { TextFieldProps, TextFieldVariant } from './TextField.types';

  //Props
  type $$Props = TextFieldProps;
  export let variant: TextFieldVariant = 'outlined';
  export let label = 'test';

  let focused = '';
  function clickAway(evt: MouseEvent) {
    if (document.activeElement !== evt.target) focused = '';
  }
</script>

<svelte:window on:click={clickAway} />

<div class={`mdc-text-field text-field-${variant} ${focused}`}>
  <slot name="leadingIcon" />
  <input
    on:focus={() => {
      focused = 'focused';
    }}
    type="text"
    class="mdc-text-field__input"
    aria-labelledby="textfield-label"
  />
  <slot name="trailingIcon" />
  <span class={`mdc-notched-outline mdc-notched-outline--upgraded ${focused}`}>
    <span class="mdc-notched-outline__leading" />
    <span class="mdc-notched-outline__notch">
      <label class={`mdc-floating-label ${focused}`} for="text-field-outlined" id="textfield-label"
        >{label}</label
      >
    </span>
    <span class="mdc-notched-outline__trailing" />
  </span>
</div>

<style lang="scss">
  @import '@material/textfield/mdc-text-field';
  @import '@material/textfield/_text-field-theme';

  .text-field-outlined {
    @extend .mdc-text-field--outlined;
    @include mdc-text-field-outline-color(var(--mdc-theme-primary));
    @include mdc-text-field-label-color(var(--color));
    @include mdc-text-field-ink-color(var(--color));
    @include mdc-text-field-hover-outline-color(var(--color));
    @include mdc-text-field-placeholder-color(var(--color));
  }

  .mdc-text-field.focused {
    @extend .mdc-text-field--focused;
  }

  .mdc-notched-outline.focused {
    @extend .mdc-notched-outline--notched;
  }

  .mdc-floating-label.focused {
    @extend .mdc-floating-label--float-above;
  }
</style>
