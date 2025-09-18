import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// Import Firebase SDKs
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


import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../environments';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'TKFace';

  constructor() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    const auth = getAuth(app);
  }

}
