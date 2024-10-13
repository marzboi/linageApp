export interface AudioTrack {
  number: string;
  title: string;
  url: string;
}

export const getAudioTracks = (locale: 'es' | 'en'): AudioTrack[] => {
  const tracks: Record<'es' | 'en', AudioTrack[]> = {
    es: [{ number: '00', title: 'Intro', url: 'assets/es/00.mp3' }],
    en: [{ number: '00', title: 'Intro ingles', url: 'assets/en/00.mp3' }],
  };
  return tracks[locale];
};
