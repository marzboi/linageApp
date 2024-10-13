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
    audioController: {
      trackTitle: string;
      next: string;
      previous: string;
    };
  };
  audioTracks: AudioTrack[];
}
