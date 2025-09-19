import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirestoreModule
  ],
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostList {

}
