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
    };
    chapterOne: {
      title: string;
      subtitle: string;
    };
    chapterTwo: {
      title: string;
      subtitle: string;
    };
    chapterThree: {
      title: string;
      subtitle: string;
    };
    chapterFour: {
      title: string;
      subtitle: string;
    };
    chapterFive: {
      title: string;
    };
    chapterSix: {
      title: string;
    };
    audioController: {
      next: string;
      previous: string;
    };
  };
  audioTracks: AudioTrack[];
  track: AudioTrack;
}
