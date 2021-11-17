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

## Sending a Pull Request

TVA is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### Coding style

Please follow the coding style of the project. TVA uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `yarn lint:js` runs manually the linting rules for all js/ts files.
- `yarn lint:css` runs manually the linting for all css files.
- `yarn lint:ts` run manually the linting for only ts files.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## PR edicate

Before "creating a pull request", please consider instead [creating a draft](https://github.blog/2019-02-14-introducing-draft-pull-requests/) while the CI is waiting to complete. Once **all your tests pass**, then open your pull request. There is no need to assign anyone as our maintainers will recieve notifications when any PR's are posted.

## License

By contributing your code to the [pluralsight/tva](https://github.com/pluralsight/tva) GitHub repository, you agree to license your contribution under the [Apache 2.0 license](/LICENSE).
