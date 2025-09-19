import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirestoreModule
  ],
  templateUrl: './post-details.html',
  styleUrls: ['./post-details.scss']
})
export class PostDetails {

}
