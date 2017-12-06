import SoundPlayerConsumer from './sound-player-consumer';
import SoundPlayer from './sound-player';

jest.mock('./sound-player');

// These tests pass, using mockImplementation().
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
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
