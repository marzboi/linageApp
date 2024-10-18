import { AudioTrack } from './audioTracks';

export interface State {
  currentLocale: 'es' | 'en';
  localeContent: {
    introPage: {
      title: string;
      subtitle: string;
    };
    messagePage: {
      paragraphOne: string;
      paragraphTwo: string;
      audioTitle: string;
    };
    chapterOne: {
      title: string;
      subtitle: string;
    };
    audioController: {
      next: string;
      previous: string;
    };
  };
  audioTracks: AudioTrack[];
  track: AudioTrack;
}
