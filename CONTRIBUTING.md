# Contributing to TVA

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the TVA community. Here are a few guidelines that will help you along the way.

## Code of Conduct

TVA has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## A large spectrum of contributions

There are many ways to contribute to TVA, code contribution is one aspect of it. For instance, documentation improvements are as important as code changes.

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than a week, it's fine to take it over but you should still leave a comment.
If there has been no activity on the issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Posting a Pull Request

TVA is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

## PR edicate

Before "creating a pull request", please consider instead [creating a draft](https://github.blog/2019-02-14-introducing-draft-pull-requests/) while the CI is waiting to complete. Once **all your tests pass**, then open your pull request. There is no need to assign anyone as our maintainers will recieve notifications when any PR's are posted.

## Online one-click setup for contributing

You can use the new [github.dev](https://github.dev/pluralsight/tva) feature. While you are browsing any file, changing the domain name from github.com to github.dev will turn your browser into an online editor. You can start making changes and send pull requests right away.

### Coding style

Please follow the coding style of the project. TVA uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `yarn lint:js` runs manually the linting rules for all js/ts files.
- `yarn lint:css` runs manually the linting for all css files.
- `yarn lint:ts` run manually the linting for only ts files.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional. If your change is specific to one/two packages, consider adding the scope. Scopes should be brief but recognizable, e.g. `content-docs`, `theme-classic`, `core`

The various types of commits:

- `fix`: a bug fix **for the end user**.
- `feat`: a new API or behavior **for the end user**.
- `style`: a code style update (formatting, local variables, etc.)
- `refactor`: a change to production code that leads to no behavior difference, e.g. splitting files, renaming internal variables, improving code style...
- `build`: a release related commit
- `ci`: anything related to Github Actions or .github
- `docs`: a change to the website or other Markdown documents in our repo.
- `test`: adding missing tests, refactoring tests; no production code change.
- `chore`: upgrading dependencies, releasing new versions... Chores that are **regularly done** for maintenance purposes.
- `perf`: performance improvements to any part of the codebase.
- `revert`: a change that reverts code recently pushed.

Do not get too stressed about PR titles, however. The maintainers will help you get them right, and we also have a PR label system that doesn't equate with the commit message types. Your code is more important than conventions!

### Example

```
feat(core): allow overriding of webpack config
^--^^----^  ^------------^
|   |       |
|   |       +-> Summary in present tense.
|   |
|   +-> The package(s) that this change affected.
|
+-------> Type: see below for the list we use.
```

Use lower case not title case!

## Updating Docs

When you plan on making changes to our docs (design.pluralsight.com), you just need to be aware of versioned docs.

- `website/docs` - The files in here are responsible for the "next" version at https://docusaurus.io/docs/next/installation.
- `website/versioned_docs/version-X.Y.Z` - These are the docs for the X.Y.Z version at https://docusaurus.io/docs/X.Y.Z/installation.

To make a fix to the published versions you must edit the corresponding markdown file in both folders. If you only made changes in `docs`, be sure to be viewing the `next` version to see the updates (ensure there's `next` in the URL).

> Do not edit the auto-generated files within `versioned_docs/` or `versioned_sidebars/` unless you are sure it is necessary. For example, information about new features should not be documented in versioned docs. Edits made to older versions will not be propagated to newer versions of the docs.

## License

By contributing your code to the [pluralsight/tva](https://github.com/pluralsight/tva) GitHub repository, you agree to license your contribution under the [Apache 2.0 license](/LICENSE).
