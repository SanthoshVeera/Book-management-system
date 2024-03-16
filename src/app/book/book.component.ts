import { Component } from '@angular/core';
import { book } from '../models/book.model'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  appTitle: string = 'Book Management System';

  id: number = 0;
  title: string = '';
  author: string = '';

  myBooks: book[] = [];


  addBook(){
    if(this.title && this.author)
      {
        let x = {
          id : this.id,
          title: this.title.toUpperCase(),
          author: this.author
        }
        this.myBooks.push(x);
        this.id++;
        this.author = '';
        this.title = '';
        console.log('x : '+x);
        console.log('list : '+this.myBooks);
      }

  }
}
