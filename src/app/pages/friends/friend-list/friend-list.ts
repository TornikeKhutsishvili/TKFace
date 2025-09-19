import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirestoreModule
  ],
  templateUrl: './friend-list.html',
  styleUrls: ['./friend-list.scss']
})
export class FriendList {

}
