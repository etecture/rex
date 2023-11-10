# rex - react exotics

Exotic components, hooks and functions that you wouldn't find in other react component libraries. \
The goal is to have a library with very specific features that other big component libraries might not cover.

> ⚠ This library is in a very early development stage. Expect breaking changes with minor version changes! \
> Once the library hits version 1.0.0 we will make sure to use a conventional [semver](https://semver.org/) approach and always keep minor version changes compatible.

## Installation

```sh
pnpm add @etecture/rex
yarn add @etecture/rex
npm i @etecture/rex
```

Some components might need styles to function properly so you should import the styles.css once in your project via

```ts
import "@etecture/rex/styles.css";
```

## Links

- [Documentation](https://etecture.github.io/rex/)

## Development

```sh
# Install workspace dependencies
pnpm i -r

# Start storybook
pnpm storybook
```

## Contributors

<a href="https://github.com/etecture/rex/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=etecture/rex" />
</a>

## License

[MIT](./LICENSE)
