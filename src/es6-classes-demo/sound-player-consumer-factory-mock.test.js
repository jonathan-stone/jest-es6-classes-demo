// Test SoundPlayer using the factory parameter

import SoundPlayerConsumer from './sound-player-consumer';
import SoundPlayer from './sound-player';

jest.mock('./video-player');

let mockPlaySoundFile = jest.fn();
jest.mock('./sound-player', () => {
  return jest.fn().mockImplementation(() => { // Works and lets you check for constructor calls
    return {
      playSoundFile: mockPlaySoundFile
    };
  });
});

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

// jest.mock('./sound-player', () => {
//   return function() { // Works but does not provide a way to track constructor calls
//     return {
//       playSoundFile: mockPlaySoundFile
//     };
//   };
// });

// jest.mock('./sound-player', () => {
//   return function() { // Works but does not provide a way to track constructor calls
//     return {
//       playSoundFile: () => {}
//     };
//   };
// });

// jest.mock('./sound-player', () => {
//   return () => { // Does not work; arrow functions can't be called with new
//     return { playSoundFile: () => {} };
//   };
// });

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(soundPlayerConsumer).toBeTruthy(); // Constructor ran with no errors
});

it('We can check if the consumer called the class constructor', () => {
  expect(SoundPlayer).not.toHaveBeenCalled(); // ensure our mockClear() is working
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalled();
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
