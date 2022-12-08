import { bubble, listen, current_component } from 'svelte/internal';
// Taken from https://github.com/hperrin/svelte-material-ui/blob/273ded17c978ece3dd87f32a58dd9839e5c61325/components/forwardEvents.js
export function eventHandler(component: typeof current_component, additionalEvents: string[] = []) {
  const events = [
    'focus',
    'blur',
    'fullscreenchange',
    'fullscreenerror',
    'scroll',
    'cut',
    'copy',
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'auxclick',
    'click',
    'contextmenu',
    'dblclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',
    'pointerlockchange',
    'pointerlockerror',
    'select',
    'wheel',
    'drag',
    'dragend',
    'dragenter',
    'dragstart',
    'dragleave',
    'dragover',
    'drop',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'pointerover',
    'pointerenter',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointercancel',
    'pointerout',
    'pointerleave',
    'gotpointercapture',
    'lostpointercapture',
    ...additionalEvents
  ];
  function forward(e: Event) {
    bubble(component, e);
  }

  return (node: Node) => {
    const destructors: VoidFunction[] = [];

    events.map((key: string) => {
      destructors.push(listen(node, key, forward));
    });
    return {
      destroy: () => {
        destructors.forEach((fn: VoidFunction) => fn());
      }
    };
  };
}
