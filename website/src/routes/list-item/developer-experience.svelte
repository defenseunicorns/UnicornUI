<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import InlineCode from '../../lib/inline-code.svelte';
  import {
    type ListItemProps,
    type IconButtonProps,
    type ComponentAsProp,
    type CheckboxProps,
    IconButton,
    List,
    ListItem,
    ListItemAdornment,
    Typography,
    Accordion,
    Box,
    Checkbox
  } from '@uui';

  type ExtendedListItems1 = svelte.JSX.IntrinsicAttributes &
    ListItemProps<EventTarget> & {
      leadingAdornment?: boolean;
      trailingAdornment?: boolean;
    };

  const listItemsIteration1: ExtendedListItems1[] = [
    { text: 'List Item', selected: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      trailingAdornment: true,
      divider: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      leadingAdornment: true,
      trailingAdornment: true
    }
  ];

  type ExtendedListItems2 = svelte.JSX.IntrinsicAttributes &
    ListItemProps<EventTarget> & {
      leadingAdornment?: Record<string, any>;
      trailingAdornment?: Record<string, any>;
    };

  const listItemsIteration2: ExtendedListItems2[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      selected: true,
      leadingAdornment: {
        content: 'favorite'
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: {
        content: 'warning'
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      trailingAdornment: {
        component: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'close' }
      } as ComponentAsProp<IconButtonProps>
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary',
      trailingAdornment: {
        component: Checkbox,
        props: {}
      } as ComponentAsProp<CheckboxProps<HTMLInputElement>>
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary',
      disabled: true,
      trailingAdornment: {
        component: Checkbox,
        props: {}
      } as ComponentAsProp<CheckboxProps<HTMLInputElement>>
    }
  ];

  let example1SelectedIndex: number | undefined = 0;
  let example1Click = (index: number) => {
    if (example1SelectedIndex === index) example1SelectedIndex = undefined;
    else example1SelectedIndex = index;
  };

  let example2SelectedIndex: number | undefined = 0;
  let example2Click = (index: number) => {
    if (example2SelectedIndex === index) example2SelectedIndex = undefined;
    else example2SelectedIndex = index;
  };
</script>

<Typography variant="h2">Developer Experience</Typography>

<Typography variant="body1">
  While <InlineCode>List</InlineCode> does not accept an array of items as a prop, you can still use
  the svelte way of looping. So if you have more than a few list items, you can iterate through an array
  of ListItemProps objects, even conditionally rendering adornments if some items have them and some
  do not. To add adornment properties to an array of ListItemProps objects (assuming you're using typescript),
  you need to extend the ListItemProps interface as seen in the below code example.
</Typography>

<Typography variant="h5">Iteration: Example 1</Typography>
<Typography variant="body1">
  In this case, we know that every type of adornment will be the same (i.e. favorite for leading,
  close for trailing), so we've extended our ListItemProps interface to use a boolean for indicating
  if an adornment is needed.
</Typography>

<List class="demo-list">
  {#each listItemsIteration1 as item, index}
    <ListItem
      {...item}
      selected={example1SelectedIndex === index}
      on:click={() => !item.disabled && example1Click(index)}
    >
      <svelte:fragment slot="leading-adornment">
        {#if item.leadingAdornment}
          <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
            send
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailing-adornment">
        {#if item.trailingAdornment}
          <ListItemAdornment>
            <IconButton
              disabled={item.disabled}
              iconClass="material-symbols-outlined"
              iconContent="close"
              iconColor="primary"
            />
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
    </ListItem>
  {/each}
</List>

<Accordion>
  <Typography slot="headerContent" variant="h6">Iteration 1 Code</Typography>
  <Box slot="content">
    <VariantExample
      code={`

type ExtendedListItems1 = ListItemProps & {
  leadingAdornment?: boolean;
  trailingAdornment?: boolean;
};

const listItemsIteration1: ExtendedListItems1[] = [
    { text: 'List Item', selected: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      trailingAdornment: true,
      divider: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      leadingAdornment: true,
      trailingAdornment: true
    }
  ];
`}
    />
    <VariantExample
      code={`
   <List class="demo-list">
  {#each listItemsIteration1 as item, index}
    <ListItem
      {...item}
      let:disabled
      selected={example1SelectedIndex === index}
      on:click={() => !item.disabled && example1Click(index)}
    >
      <svelte:fragment slot="leading-adornment">
        {#if item.leadingAdornment}
          <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
            send
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailing-adornment">
        {#if item.trailingAdornment}
          <ListItemAdornment>
            <IconButton
              {disabled}
              iconClass="material-symbols-outlined"
              iconContent="close"
              iconColor="primary"
            />
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
    </ListItem>
  {/each}
</List>
`}
    />
  </Box>
</Accordion>

<Typography variant="h5">Iteration: Example 2</Typography>
<Typography variant="body1">
  Now we want to allow for adornments to be different. So we've extended our ListItemProps to allow
  for more complex adornment metadata.
</Typography>

<List class="demo-list">
  {#each listItemsIteration2 as item, index}
    <ListItem
      {...item}
      selected={example2SelectedIndex === index}
      on:click={() => !item.disabled && example2Click(index)}
    >
      <svelte:fragment slot="leading-adornment">
        {#if item.leadingAdornment}
          <ListItemAdornment
            slot="leading-adornment"
            class="material-symbols-outlined"
            disabled={item.disabled}
          >
            {item.leadingAdornment.content}
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailing-adornment">
        {#if item.trailingAdornment}
          <ListItemAdornment slot="trailing-adornment">
            <svelte:component
              this={item.trailingAdornment.component}
              checked={example2SelectedIndex === index}
              disabled={item.disabled}
              {...item.trailingAdornment.props}
            />
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
    </ListItem>
  {/each}
</List>

<Accordion>
  <Typography slot="headerContent" variant="h6">Iteration 2 Code</Typography>
  <Box slot="content">
    <VariantExample
      code={`

type ExtendedListItems2 = svelte.JSX.IntrinsicAttributes &
    ListItemProps<EventTarget> & {
      leadingAdornment?: Record<string, any>;
      trailingAdornment?: Record<string, any>;
    };

const listItemsIteration2: ExtendedListItems2[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      selected: true,
      leadingAdornment: {
        content: 'favorite'
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: {
        content: 'warning'
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      trailingAdornment: {
        component: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'close' }
      } as ComponentAsProp<IconButtonProps>
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary',
      trailingAdornment: {
        component: Checkbox,
        props: {}
      } as ComponentAsProp<CheckboxProps<HTMLInputElement>>
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary',
      disabled: true,
      trailingAdornment: {
        component: Checkbox,
        props: {}
      } as ComponentAsProp<CheckboxProps<HTMLInputElement>>
    }
  ];
`}
    />

    <VariantExample
      code={`
<List class="demo-list">
  {#each listItemsIteration2 as item, index}
    <ListItem
      {...item}
      let:selected
      let:disabled
      selected={example2SelectedIndex === index}
      on:click={() => !item.disabled && example2Click(index)}
    >
      <svelte:fragment slot="leading-adornment">
        {#if item.leadingAdornment}
          <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined" {disabled}>
            {item.leadingAdornment.content}
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailing-adornment">
        {#if item.trailingAdornment}
          <ListItemAdornment slot="trailing-adornment">
            <svelte:component
              this={item.trailingAdornment.component}
              checked={selected}
              {disabled}
              {...item.trailingAdornment.props}
            />
          </ListItemAdornment>
        {/if}
      </svelte:fragment>
    </ListItem>
  {/each}
</List>
`}
    />
  </Box>
</Accordion>
