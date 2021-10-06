import 'react-i18next';
import resources from '../../src/i18n/config';

declare module 'react-i18next' {
  export interface CustomTypeOptions {
    defaultNS: 'pl';
    resources: {
      pl: typeof resources['pl']['translation'];
    };
  }
}
