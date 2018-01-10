// Test SoundPlayer using mockImplementation, and VideoPlayer using a manual mock

import SoundPlayerConsumer from './sound-player-consumer';
import SoundPlayer from './sound-player';
import VideoPlayer, { mockPlayVideoFile } from './video-player';

jest.mock('./sound-player');
jest.mock('./video-player');

const mockPlaySoundFile = jest.fn();
SoundPlayer.mockImplementation(() => {
  return {
    playSoundFile: mockPlaySoundFile
  };
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(soundPlayerConsumer).toBeTruthy(); // Constructor ran with no errors
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalled();
  expect(VideoPlayer).toHaveBeenCalled();
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  const coolVideoFileName = 'show.mp4';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlayVideoFile).toHaveBeenCalledWith(coolVideoFileName);
  // These are the same as the above checks:
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  expect(mockPlayVideoFile.mock.calls[0][0]).toEqual(coolVideoFileName);
});
