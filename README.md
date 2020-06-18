# Serverless Typescript project template

Use this template to quickly build serverless typescript projects without dealing with webpack and babel configurations.

## Getting started

Before using this you will need to install the project dependencies.

```sh
yarn install
```

Once everything is installed you can deploy the project with

```sh
yarn deploy
```

By default it will use the `dev` stage but you can provide your own using the `--stage` arg

```sh
yarn deploy --stage foo
```

After the deployment is completed you will see your API endpoints, go ahead test them 🚀.

Don't forget to change the package name and the service name in `serverless.yml`
