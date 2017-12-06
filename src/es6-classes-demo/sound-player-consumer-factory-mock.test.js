import SoundPlayerConsumer from './sound-player-consumer';
import SoundPlayer from './sound-player';

// These tests all fail when SoundPlayerConsumer calls the constructor of SoundPlayer,
// throwing TypeError: _soundPlayer2.default is not a constructor

jest.mock('./sound-player', () => {
  return {
    playSoundFile: jest.fn()
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
  expect(SoundPlayer.playSoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
