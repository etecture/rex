# Contribution Guide for @etecture/rex

Thank you for considering contributing to this project!

This document will guide you on how to contribute to this project.

## Getting Started

### Changes to the documentation

If you spot typos or outdated info in the documentation you can edit the corresponding file directly on Github. \
All relevant doc files are found at https://github.com/etecture/rex/tree/main/docs/src/app/docs

### Changes to the codebase

1. Fork the repository
2. Follow the [README](./README.md#development) to set everything up.
3. Make your changes and commit them [with a fitting commit message](#commits)
4. Create a PR pointing to the main branch

## Commits

Make sure every commit you make only contains the changes associated to the commit message.
If you wish to make multiple changes be sure to split them into separate commits.

Your commit message should have the following format:

```
[<component>]: Fixes a missing default style for the horizontal thumb
```

e.g.

```
[Scrollbar]: Fixes a missing default style for the horizontal thumb
[useSwiper]: Adds initial hook
[docs]: improves next.js config
```

You can also provide more information on additional lines but your first line should always be concise and include the package and scope.
