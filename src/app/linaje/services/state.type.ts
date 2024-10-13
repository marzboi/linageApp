export interface State {
  currentLocale: 'es' | 'en';
  localeContent: {
    introPage: {
      title: string;
      subtitle: string;
    };
    messagePage: {
      paragraph1: string;
      paragraph2: string;
      audioTitle: string;
    };
  };
}
