# NativeScript Mobile app with Angular #

- Course by [egghead.io][0]
- Author from this repo: [Francis Rodrigues][1]

## NativeScript Angular Template ##

This template creates a "Hello, world" NativeScript app using TypeScript and Angular.

You can create a new app that uses this template with either the `--template` option.

```bash
~$ tns create my-app-name --template tns-template-hello-world-ng
```

Or the `--ng` shorthand.

```bash
~$ tns create my-app-name --ng
```

> Note: Both commands will create a new NativeScript app that uses the latest version of this template published to [npm][2].

If you want to create a new app that uses the source of the template from the `master` branch, you can execute the following:

```bash
~$ tns create my-app-name --template https://github.com/NativeScript/template-hello-world-ng.git#master
```

**NB:** Please, have in mind that the master branch may refer to dependencies that are not on NPM yet!

## NativeScript live reloading ##

You can watch changes in files in development mode to compile faster.

Using the `--emulator` flag running in emulator:

```bash
~$ tns run android --emulator --watch
```

Without `--emulator` flag running in device and emulator in the same time:

```bash
~$ tns run android --watch
```

Without platform specified it will run run on all connected devices and emulators:

```bash
~$ tns run --watch
```

## License ##

MIT

  [0]: https://egghead.io/courses/create-native-mobile-apps-with-nativescript-for-angular
  [1]: https://github.com/francisrod01
  [2]: https://www.npmjs.com/package/tns-template-hello-world-ng
