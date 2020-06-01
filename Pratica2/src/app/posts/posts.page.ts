import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],

})
export class PostsPage implements OnInit {

    posts: any;
    postsPage: any[];
    private index: number = 0;
    private readonly offset: number = 15 ;
    barra = 0; 

    constructor(private postsService: PostsService, private toastController: ToastController) {
        setTimeout(() => {
            this.barra += .1;
        }, 1000)
    }

    async mostrarToast() {
        const toast = await this.toastController.create({
            message: "Hello World :)",
            duration: 500000
        });
        toast.present();
    }

    async ngOnInit() {
        let data = await this.postsService.getPost();
        this.posts = data;
        this.postsPage = this.posts.slice(this.index, this.offset + this.index);
        this.index += this.offset;
       
    }

    loadData(event) {
        setTimeout(() => {
            let newPosts = this.posts.slice(this.index, this.offset + this.index);
            this.index += this.offset;

                for (let i = 0; i < newPosts.length; i++) {
                this.postsPage.push(newPosts[i]);
                }

        console.log('Done');
        event.target.complete();
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.postsPage.length == this.posts.length) {
            event.target.disabled = true;
        }
        }, 500);
    }

}
