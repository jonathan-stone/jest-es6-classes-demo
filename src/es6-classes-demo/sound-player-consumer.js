import SoundPlayer from './sound-player';
import VideoPlayer from './video-player';

export default class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
    this.videoPlayer = new VideoPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    const coolVideoFileName = 'show.mp4';
    this.soundPlayer.playSoundFile(coolSoundFileName);
    this.videoPlayer.playVideoFile(coolVideoFileName);
  }
}
