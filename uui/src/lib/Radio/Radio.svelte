<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { RadioProps } from './Radio.types';

  // Props
  type $$Props = RadioProps<HTMLInputElement>;
</script>

<Box>
  <div class="mdc-form-field">
    <div class="mdc-radio">
      <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" />
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle" />
        <div class="mdc-radio__inner-circle" />
      </div>
      <div class="mdc-radio__ripple" />
    </div>
    <label for="radio-1">Radio 1</label>
  </div>
</Box>

<style lang="scss" global>
  @use '@material/radio/styles';
  @use '@material/form-field';

  @include form-field.core-styles;
</style>
