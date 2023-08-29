import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/internal/operators/timeout';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'I want to learn Angular', text: 'i still learn components', id: 1},
    {title: 'second block', text: 'will derectives', id: 2},
  ]

ngOnInit(): void {
  // setTimeout( () => {
  //   console.log('Timeout')
  //   this.posts[0] = {
  //     title: 'changed',
  //     text: 'changed 2',
  //     id: 33
  //   }
  // }, 5000)
}

  updatePosts(post: Post) {
    // console.log('Post', post)
    this.posts.unshift(post)
  }
}
function handler(args_0: any, args_1: number): void {
  throw new Error('Function not implemented.');
}

