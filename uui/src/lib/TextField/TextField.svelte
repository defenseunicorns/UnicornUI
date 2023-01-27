<script lang="ts">
  import type { TextFieldProps, TextFieldVariant } from './TextField.types';

  //Props
  type $$Props = TextFieldProps;
  export let variant: TextFieldVariant = 'outlined';
  export let label = 'test';

  let input: HTMLInputElement;
  let focused = '';
  let notched = '';
  let floating = '';
  function clickAway(evt: any) {
    if (document.activeElement !== evt.target) {
      focused = '';
      if (input.value === '') {
        notched = '';
        floating = '';
      }
    }
  }
</script>

<svelte:window on:click={clickAway} />

<div class={`mdc-text-field text-field-${variant} ${focused}`}>
  <slot name="leadingIcon" />
  <input
    bind:this={input}
    on:focus={() => {
      focused = 'focused';
      notched = 'notched';
      floating = 'floating';
    }}
    type="text"
    class="mdc-text-field__input"
    aria-labelledby="textfield-label"
  />
  <slot name="trailingIcon" />
  <span class={`mdc-notched-outline mdc-notched-outline--upgraded ${notched}`}>
    <span class="mdc-notched-outline__leading" />
    <span class="mdc-notched-outline__notch">
      <label class={`mdc-floating-label ${floating}`} for="text-field-outlined" id="textfield-label"
        >{label}</label
      >
    </span>
    <span class="mdc-notched-outline__trailing" />
  </span>
</div>

<style lang="scss">
  @import '@material/textfield/mdc-text-field';

  .text-field-outlined {
    @extend .mdc-text-field--outlined;
    @include mdc-text-field-outline-color(var(--mdc-theme-primary));
    @include mdc-text-field-label-color(var(--color));
    @include mdc-text-field-ink-color(var(--color));
    @include mdc-text-field-hover-outline-color(var(--color));
    @include mdc-text-field-placeholder-color(var(--color));
    @include mdc-text-field-focused-outline-color(var(--mdc-theme-primary));
  }

  .mdc-text-field.focused {
    @extend .mdc-text-field--focused;
  }

  .mdc-notched-outline.notched {
    @extend .mdc-notched-outline--notched;
  }

  .mdc-floating-label.floating {
    @extend .mdc-floating-label--float-above;
  }
</style>
