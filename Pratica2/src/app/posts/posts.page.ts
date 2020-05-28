import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

    posts: any;


    constructor(private PostsService: PostsService) { }

    async ngOnInit() {
        let response = await this.PostsService.getPost();

  }

}
