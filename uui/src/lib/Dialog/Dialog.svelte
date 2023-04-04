<script lang="ts">
  import Box from '../Box/box.svelte';
  import { onDestroy, onMount } from 'svelte';
  import Paper from '../Paper/Paper.svelte';
  import type { DialogProps } from './Dialog.types';
  import { current_component } from 'svelte/internal';
  import type { SSX } from '../shared/theme/config/theme-config.types';

  type T = $$Generic<EventTarget>;
  // vars
  let scrollBehavior: string;

  // Props
  export let open = false;
  export let clickAway = true;
  export let elevation = 16;
  export let containerSSX: SSX = {};
  export let toggleDialog = () => {
    open = !open;
  };

  type $$Props = DialogProps<T>;

  let documentRef: Document;

  let keydownListener = (e: KeyboardEvent) => {
    if (clickAway && open && e.key === 'Escape') {
      toggleDialog();
    }
  };

  // LifeCycle
  onMount(() => {
    documentRef = document;
    scrollBehavior = documentRef.body.style.overflow;

    documentRef.addEventListener('keydown', keydownListener);
  });
  onDestroy(() => {
    document.body.style.overflow = scrollBehavior;
    documentRef.removeEventListener('keydown', keydownListener);
  });

  // Watch
  $: dialogClass = `dialog-container ${(open && 'dialog-open') || ''}`;
  $: dialogSurfaceClass = `dialog-surface ${$$restProps.class || ''}`;
  $: if (documentRef) {
    document.body.style.overflow = open ? 'hidden' : scrollBehavior;
  }
</script>

<Box class={dialogClass} ssx={containerSSX}>
  <Paper
    eventComponent={current_component}
    role="alertdialog"
    aria-modal="true"
    {...$$restProps}
    {elevation}
    class={dialogSurfaceClass}
  >
    <slot name="title" />
    <div class="dialog-content">
      <slot name="content" />
    </div>
    <slot name="actions" />
  </Paper>
  {#if clickAway}
    <Box on:click={toggleDialog} class="dialog-scrim" />
  {:else}
    <Box class="dialog-scrim" />
  {/if}
</Box>

<style lang="scss" global>
  @use '@material/button';
  @use '@material/dialog';
  @include dialog.core-styles;

  .dialog-open {
    @extend .mdc-dialog--open;
  }

  .dialog-container > .dialog-surface:not(.paper-rounded) {
    border-radius: 0px;
  }
  .dialog-container > .dialog-surface {
    color: var(--paper-color);
    background-color: var(--paper-bg-color);
  }

  .dialog-container {
    @extend .mdc-dialog;
    @extend .mdc-dialog--scrollable;
  }
  .dialog-surface > .dialog-actions,
  .dialog-surface > .dialog-content,
  .dialog-surface > .dialog-title {
    color: inherit;
  }
  .dialog-surface {
    @extend .mdc-dialog__surface;
  }
  .dialog-content {
    @extend .mdc-dialog__content;
    max-height: 80vh;
    overflow: scroll;
  }
  .dialog-actions {
    @extend .mdc-dialog__actions;
  }
  .dialog-title {
    @extend .mdc-dialog__title;
  }
  .dialog-scrim {
    @extend .mdc-dialog__scrim;
  }
</style>
