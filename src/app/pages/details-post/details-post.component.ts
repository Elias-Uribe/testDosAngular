import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-details-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.scss',
})
export class DetailsPostComponent implements OnInit {
  post!: Post;

  commentsPost!: Comment[];

  constructor(
    private postsService: PostsService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params: any) => {
      let idPost = params.id;
      this.post = await this.postsService.getPostById(idPost);
      this.commentsPost = await this.postsService.getCommentPostById(idPost);

      console.log(this.post);
      console.log(this.commentsPost);
    });
  }

  trackByFn(index: number, item: Comment) {
    //console.log(item.id)
    return item.id; // unique id corresponding to the item
  }
}
