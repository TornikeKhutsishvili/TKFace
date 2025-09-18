import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../../environments';

import { getStorage } from "firebase/storage";

import {
  initializeApp,      // Initialize Firebase
  getApps,            // Check if Firebase apps are initialized
  getApp              // Get the default app
} from "firebase/app";

import {
  getFirestore,       // Firestore database
  collection,         // for collections
  addDoc,             // for adding documents
  getDocs,            // for fetching documents
  doc,                // for document references
  updateDoc,          // for updating documents
  deleteDoc,          // Firestore functions
  query,              // for queries (e.g., filtering users)
  where,              // for conditions in queries
  orderBy,            // for sorting
  limit               // for limiting results
} from "firebase/firestore";


import {
    getAuth,                              // for authentication
    createUserWithEmailAndPassword,       // for registration
    signInWithEmailAndPassword,           // for login
    signOut,                              // for logout
    onAuthStateChanged                    // to track user login state
} from "firebase/auth";

// Initialize Firebase app if not already initialized
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const store = getStorage(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    this.app = app;
    this.db = db;
    this.auth = auth;
    this.store = store;
  }

  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  store = getStorage(app);

}
