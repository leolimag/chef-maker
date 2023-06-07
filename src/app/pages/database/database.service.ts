import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { Post } from '../post/post';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { 
  }

  getPosts()  {
    let posts = this.db.list('posts').valueChanges();
    return posts;
  }

  addPost(post: Post) {
    this.db.list('posts').push(post);
  }

  updatePost(key: string, value: any) {
    this.db.list('posts').update(key, value);
  }

  deletePost(key: string) {
    this.db.list('posts').remove(key)
  }

}