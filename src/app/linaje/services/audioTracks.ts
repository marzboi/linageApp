export interface AudioTrack {
  number: string;
  title: string;
  url: string;
}

export const getAudioTracks = (locale: 'es' | 'en'): AudioTrack[] => {
  const tracks: Record<'es' | 'en', AudioTrack[]> = {
    es: [
      {
        number: '00',
        title: 'Intro',
        url: 'assets/es/00.mp3',
      },
      {
        number: '01',
        title: 'La era pre-occidente',
        url: 'assets/es/01.mp3',
      },
      {
        number: '02',
        title: 'La llegada a Amsterdam',
        url: 'assets/es/02.mp3',
      },
      {
        number: '03',
        title: 'Las que volvieron',
        url: 'assets/es/03.mp3',
      },
      {
        number: '04',
        title: 'Nuestras reliquias familiares',
        url: 'assets/es/04.mp3',
      },
      {
        number: '05',
        title: 'Arte sin dueña',
        url: 'assets/es/05.mp3',
      },
      {
        number: '06',
        title: 'Artist statement',
        url: 'assets/es/06.mp3',
      },
    ],
    en: [
      {
        number: '00',
        title: 'Intro',
        url: 'assets/en/00.mp3',
      },
      {
        number: '01',
        title: 'The Pre-Western Era',
        url: 'assets/en/01.mp3',
      },
      {
        number: '02',
        title: 'Arrival in Amsterdam',
        url: 'assets/en/02.mp3',
      },
      {
        number: '03',
        title: 'Those Who Returned',
        url: 'assets/en/03.mp3',
      },
      {
        number: '04',
        title: 'Our Family Relics',
        url: 'assets/en/04.mp3',
      },
      {
        number: '05',
        title: 'Ownerless Art',
        url: 'assets/en/05.mp3',
      },
      {
        number: '06',
        title: 'Artist Statement',
        url: 'assets/en/06.mp3',
      },
    ],
  };
  return tracks[locale];
};
