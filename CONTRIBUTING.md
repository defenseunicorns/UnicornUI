# Contributing

## Prerequisites

- Node LTS (18)
- [Signed Commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)

## Project Set up

**all commands should be run in the root of the cloned folder.**

- `git clone https://github.com/defenseunicorns/UnicornUI.git`
- `npm i`
- `npm run dev` starts the docs dev server.
- `npm run test:unit` runs unit tests for both projects.
- Components are in the **uui** folder.

## Recommended VSCode plugins

- svelte `svelte.svelte-vscode`
- prettier `esbenp.prettier-vscode`
  - Should be configured as default formatter for project.
- Sass `syler.sass-indented`
- Playwright Test for VSCode `ms-playwright.playwright`

# Internal

## Creating issues

1. Go to [issues](https://github.com/defenseunicorns/UnicornUI/issues/new/choose)
2. Select the issue template you wish to create.
   1. bug
   2. feature
   3. vulnerability
3. Fill out the issues following the template selected.
4. Add to the UnicornUI project. (Projects on the rhs under labels).

## Picking issues.

1. Go to [Unicorn UI Project](https://github.com/orgs/defenseunicorns/projects/14/views/1)
2. Choose an issue from the **Ready** section
3. Open then click "Open in new tab""
4. Assign yourself
5. set the issue status to **In Progress**
6. Click **Create a branch**
7. Copy the Branch name
8. Click **Create Branch** lower right corner
9. On your machine **from main branch**
   1. `git fetch origin`
   2. `git checkout paste-branch-name-here`
10. Do the thing.

## Commits

- Commit early and often.
  - If life happens another dev should be able tag in.
  - Fear of not finishing shouldn't stop you from contributing.
  - Partial contributions are better than no contributions.
- Commits should be brief but thorough with the following convention:
  - Action (Update, create, fix, ...ect)
  - Project (uui || Website)
  - Target (text-field.svelte, text-field.types, text-field page, etc..)
  - quick summary
  - ex: "Update uui box.svelte to take in new prop. Update website box +page with new prop declaration".

## Pull Requests

- Create a draft PR after first commit.
  - assign @mike-winberry (Cole) as reviewer.
- PR should only be merged once.
- Branch should be deleted after merge.
  - If more work needs to be done, create a new issue and new pr.

### Checklist for moving pr to review

- [changelog](./changelog.md) updated.
- The docs [website](./website/) should be updated to reflect changes.

### Important!

- feel free to bug Cole in Gather or Slack at anytime.
  - This is especially true if I look like I am in an "important" conversation.
- Look at existing work for patterns/conventions to maintain consistency.
- Create issue with needs-input for convention updates, changes, suggestions.
