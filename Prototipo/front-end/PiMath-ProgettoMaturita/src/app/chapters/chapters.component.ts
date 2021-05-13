import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {DBService} from '../service/DBService';
import {TopicsComponent} from '../topics/topics.component';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  static chapterID;

  chapters = [];

  constructor(private router: Router, private dbService: DBService) { }

  ngOnInit(): void {
    if (AuthService.loggedIn) {
      this.loadContent();
    }else {
      this.router.navigate(['/login']);
    }
  }

  loadContent(): any{
    this.dbService.getTopicContent(TopicsComponent.topicID).subscribe((result: any[]) => {
      this.chapters = result.sort((a, b) => {
        return a.chapterID > b.chapterID ? 1 : a.chapterID < b.chapterID ? -1 : 0;
      });
    });
  }

  openChapter(chapterID: number): void{
    // @ts-ignore
    ChaptersComponent.chapterID = chapterID;
    this.router.navigate(['chapter']);
  }
}
