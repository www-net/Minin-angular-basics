import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit
{


  @Input()
  post!: Post;
  @ContentChild('info', { static: true })
  infoRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
}
