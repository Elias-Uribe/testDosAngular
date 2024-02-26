import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrlApi: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  async getPosts(): Promise<Post[]> {
    return await lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrlApi}posts`)
    );
  }

  async getPostById(id: number): Promise<Post> {
    return await lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrlApi}posts/${id}`)
    );
  }

  async getCommentPostById(id: number): Promise<Comment[]> {
    return await lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrlApi}posts/${id}/comments`)
    );
  }
}
