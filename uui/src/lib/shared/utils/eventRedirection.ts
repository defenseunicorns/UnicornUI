import type { current_component } from 'svelte/internal';

/* For Internal Use */
/*
 * Svelte action that passes events down to component children.
 * allows redirection of events from multiple components to the
 * node that implements it
 * Components (current_component) should be watched as it updates
 * during initialization and life cycles.
 * with great power comes great responsibility.
 */
export function eventRedirection(node: Node, components: (typeof current_component)[]) {
  const events: [string, VoidFunction][] = [];
  for (const component of components) {
    // Ensure the component is initialized.
    if (component) {
      // extract out the on:events (stored as callbacks)
      const callbacks = Object.entries(component.$$.callbacks);
      // iterate on the callback object with the name of the event and a list of VoidFns as unknown.
      for (const [event, eventFns] of callbacks) {
        // Create a listener and a reference for
        // destructions for each method associated with event.
        if (Array.isArray(eventFns)) {
          eventFns.forEach((fn) => {
            events.push([event, fn]);
            node.addEventListener(event, fn);
          });
        }
      }
    }
  }

  return {
    destroy: () => {
      events.map(([event, fn]: [string, VoidFunction]) => {
        node.removeEventListener(event, fn);
      });
    }
  };
}
