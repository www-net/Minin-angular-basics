import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E
  str = 'hello world'
  slice = '0123456789'
  date: Date = new Date();
  float = 0.42

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread'},
    {title: 'Javascript', text: 'The best language'}
  ]

  addPost() {
    this.posts.unshift({
       title: 'Angular',
       text: 'Vladilen Angular course'
    })
  }

}
