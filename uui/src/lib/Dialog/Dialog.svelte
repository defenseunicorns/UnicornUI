<script lang="ts">
  import Box from '../Box/box.svelte';
  import { onDestroy, onMount } from 'svelte';

  // vars
  let scrollBehavior: string;

  // Props
  export let open = false;
  export let clickAway = true;

  // Function
  export let toggleDialog = () => {
    open = !open;
  };
  let documentRef: Document;
  // LifeCycle
  onMount(() => {
    documentRef = document;
    scrollBehavior = documentRef.body.style.overflow;
  });
  onDestroy(() => {
    document.body.style.overflow = scrollBehavior;
  });

  // Watch
  $: dialogClass = `mdc-dialog mdc-dialog--scrollable ${open && 'mdc-dialog--open'}`;
  $: if (documentRef) {
    document.body.style.overflow = open ? 'hidden' : scrollBehavior;
  }
</script>

<div class={dialogClass}>
  <div class="mdc-dialog__surface" aria-describedby="my-dialog-content">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface" role="alertdialog" aria-modal="true">
        <slot name="title" />
        <div class="mdc-dialog__content">
          <slot name="content" />
        </div>
        <slot name="actions" />
      </div>
    </div>
  </div>
  {#if clickAway}
    <Box on:click={toggleDialog} class="mdc-dialog__scrim" />
  {:else}
    <Box class="mdc-dialog__scrim" />
  {/if}
</div>

<style lang="scss" global>
  @use '@material/button';
  @use '@material/dialog';
  @include dialog.core-styles;

  .mdc-dialog__content {
    max-height: 80vh;
    overflow: scroll;
    color: var(--mdc-theme-on-surface) !important;
  }
  .mdc-dialog__title {
    color: var(--mdc-theme-on-surface) !important;
  }
</style>
