# Bingsu.js but with 11ty

I build this to learn 11ty, a static site generator. The original one is on GitLab.
I copied only the events folder and recreate this.


# How to run?

1. Install and generate data

```shell
yarn
node generate.js
```

11ty cannot use multiple file with various title. It's temporatory solution.

2. Run development sereve using

```shell
yarn dev
```

3. For production use.

```shell
yarn build
```