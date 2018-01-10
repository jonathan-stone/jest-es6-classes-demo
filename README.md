## jest-es6-classes
Repo to illustrate Jest issue with ES6 class imports.

To repro, clone, `yarn`, `yarn test`.

File [`./src/es6-classes/demo/sound-player-consumer-factory-mock.test.js`](./src/es6-classes/demo/sound-player-consumer-factory-mock.test.js) fails due to the issue.

File [`./src/es6-classes/demo/sound-player-consumer.test.js`](./src/es6-classes/demo/sound-player-consumer.test.js) illustrates the workaround using `mock.mockImplementation()`.

---

To see everything working correctly, switch to the `mocks-working` branch.
