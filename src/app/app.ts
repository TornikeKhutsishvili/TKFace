import {
  RouterModule,
  RouterOutlet
} from '@angular/router';

import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreModule } from '@angular/fire/firestore';
import { Navigation } from "./shared/components/navigation/navigation";
import { Footer } from "./shared/components/footer/footer";
import { FirebaseService } from "./core/services/firebase-service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    FirestoreModule,
    Navigation,
    Footer
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected title = 'TKFace';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    console.log(this.firebaseService.auth);
    console.log(this.firebaseService.db);
    console.log(this.firebaseService.analytics);
  }

}