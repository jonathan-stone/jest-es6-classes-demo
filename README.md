Repo to illustrate Jest issue with ES6 class imports.

To repro, clone, `yarn`, `yarn test`.
File ./src/es6-classes/demo/sound-player-consumer-factory-mock.test.js fails due to the issue.
File ./src/es6-classes/demo/sound-player-consumer.test.js illustrates the workaround using `mock.mockImplementation()`.
