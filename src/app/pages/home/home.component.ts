import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  arrPosts: Post[] = [];

  private subscription!: Subscription;

  constructor(
    private postsService: PostsService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getSearchPostsByName();
  }

  getSearchPostsByName(): void {
    this.subscription = this.sharedDataService.data$.subscribe(
      (data) => {
        this.arrPosts = this.arrPosts.filter((p) => p.title.includes(data));
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async getPosts(): Promise<void> {
    try {
      let response = await this.postsService.getPosts();
      this.arrPosts = response.slice(0, 10);
      console.log(this.arrPosts);
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
    }
  }

  resumirTexto(texto: string, longitudMaxima: number = 100): string {
    return texto.length > longitudMaxima
      ? texto.slice(0, longitudMaxima) + '...'
      : texto;
  }

  trackByFn(index: number, item: Post) {
    //console.log(item.id)
    return item.id; // unique id corresponding to the item
  }
}
