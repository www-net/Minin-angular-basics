import { Component } from '@angular/core';

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
export class AppComponent {
  posts: Post[] = [
    {title: 'I want to learn Angular', text: 'i still learn components', id: 1},
    // {title: 'second block', text: 'will derectives', id: 2},
  ]

  updatePosts(post: Post) {
    console.log('Post', post)
    this.posts.unshift(post)
  }
}
