<script lang="ts">
  import { Paper } from '@uui';
</script>

<Paper elevation={20} class="scrolling-paper">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus at odio non pulvinar.
  Etiam ut posuere mi, sed sagittis ligula. In porta, purus sed sagittis imperdiet, mauris leo
  iaculis elit, eget eleifend erat ipsum ac massa. Vivamus lacinia turpis eget urna rhoncus, eget
  consectetur lorem feugiat. Nulla vel orci arcu. Cras sed risus blandit, consequat tellus quis,
  pulvinar eros. Cras lobortis sagittis leo, in pellentesque mi viverra id. Vestibulum efficitur
  magna in diam auctor dapibus. Nulla nec velit orci. Nunc a libero malesuada, dignissim mauris
  quis, luctus nibh. Vivamus ac dui ut felis semper molestie. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia curae; Ut ultricies leo vel mattis porttitor.
  Proin accumsan, ante auctor posuere aliquet, dui magna iaculis augue, ac lobortis libero metus
  vitae augue. Aenean iaculis lectus ligula, a pulvinar urna blandit ac. Aliquam vitae condimentum
  tellus, ac sodales risus. Donec dictum faucibus massa, sed porttitor metus aliquam eget. Donec
  consectetur risus turpis, non ullamcorper elit tempor a. Duis a turpis vitae mi accumsan
  malesuada. Etiam sagittis nisl vel sapien porttitor congue. In hendrerit cursus metus ac maximus.
  Curabitur vitae condimentum arcu. Curabitur nibh quam, finibus non ante eu, vulputate faucibus mi.
  Maecenas a libero eget nulla tristique viverra. Mauris congue odio vitae luctus eleifend. Nulla
  hendrerit elementum velit, eget iaculis ligula consectetur et.
</Paper>

<style>
  :global(.scrolling-paper) {
    padding: 1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 7rem;
  }
</style>
