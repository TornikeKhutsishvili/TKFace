import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirestoreModule
  ],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {

}
