<script lang="ts">
  export let selected = false;
  export let placement: 'graphic' | 'meta' = 'meta';
  let strokeColor = 'black';

  function setSelected() {
    selected = !selected;
  }
</script>

<div
  class="mdc-checkbox mdc-deprecated-list-item__{placement} mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded"
  class:mdc-checkbox--selected={selected}
  class:mdc-ripple-upgraded--background-focused={selected}
>
  <input
    type="checkbox"
    class="mdc-checkbox__native-control"
    on:change={setSelected}
    checked={selected}
  />
  <div class="mdc-checkbox__background">
    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
      <path
        class="mdc-checkbox__checkmark-patch"
        fill="none"
        stroke={`${strokeColor}`}
        d="M1.73,12.91 8.1,19.28 22.79,4.59"
      />
    </svg>
    <div class="mdc-checkbox__mixedmark" />
  </div>
  <div class="mdc-checkbox__ripple" />
</div>

<style lang="scss">
  @use '@material/ripple';
  @use '@material/list';
  @use '@material/checkbox';
  @use '@material/form-field';

  @include checkbox.core-styles;
  @include form-field.core-styles;
  @include list.deprecated-core-styles;
</style>
