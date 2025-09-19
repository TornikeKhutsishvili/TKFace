import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirestoreModule
  ],
  templateUrl: './profile-view.html',
  styleUrls: ['./profile-view.scss']
})
export class ProfileView {

}
