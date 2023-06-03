import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private databaseService: DatabaseService, private router: Router){  
  }

  post: Post = new Post;
  
  createPost(){
    this.databaseService.addPost(this.post);
    this.backToHome();
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

  clickInputFile(){
    var img = document.getElementById('imgFile');
    img?.click()
  }

  exibirAlert(){
    alert("Imagem inserida com sucesso!");
  }

}
