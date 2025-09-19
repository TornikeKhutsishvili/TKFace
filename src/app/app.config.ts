import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';

import {
  initializeApp,
  provideFirebaseApp
} from '@angular/fire/app';

import {
  getFirestore,
  provideFirestore
} from '@angular/fire/firestore';

import {
  getAuth,
  provideAuth
} from '@angular/fire/auth';

import {
  provideHttpClient,
  withFetch
} from '@angular/common/http';

import {
  provideClientHydration,
  withIncrementalHydration
} from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { firebaseConfig } from '../environments';


export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideClientHydration(withIncrementalHydration())
  ]

};