## jest-es6-classes

Repo to illustrate mocking ES6 class imports with Jest.

To demo, clone, `yarn`, `yarn test`.

File [src/es6-classes-demo/sound-player-consumer-factory-mock.test.js](src/es6-classes-demo/sound-player-consumer-factory-mock.test.js) illustrates a working factory mock.

File [src/es6-classes-demo/sound-player-consumer.test.js](src/es6-classes-demo/sound-player-consumer.test.js) illustrates working mocks using `mock.mockImplementation()` and a manual mock.

[`video-player.js`](src/es6-classes-demo/video-player.js) is manually mocked in [src/es6-classes-demo/\__mocks\__](src/es6-classes-demo/__mocks__).
