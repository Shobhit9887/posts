import { Component } from '@angular/core';
import { MapObj } from "./servie";
import { ServService } from "./serv.service";
import * as Flatted from 'flatted';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  private posts: MapObj[] = []

  constructor(private po: ServService) {
    this.po.serv.subscribe((res: MapObj[]) => {
      this.posts = res;
    })
  }

  createPost(title: string, body: string) {
    let post = [{ 'title': title, 'body': body }];
    const str = Flatted.stringify(post);
    post = JSON.parse(str);
    post[1].title = title;
    post[1].body = body;
    this.po.httpElement.post(this.po.myUrl, post[1]).subscribe((data: any) => {
      console.log(data);
    })
  }

  get Posts() {
    return this.posts
  }
}
