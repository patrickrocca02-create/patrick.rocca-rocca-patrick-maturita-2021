import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {DBService} from '../service/DBService';
import {TopicsComponent} from '../topics/topics.component';
import {ChaptersComponent} from '../chapters/chapters.component';
import {RouterService} from '../service/RouterService';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor(private router: Router, private dbService: DBService) {  }

  ngOnInit(): void {
    RouterService.goBack = true;
    if (AuthService.loggedIn) {
      this.loadChapter();
    }else {
      this.router.navigate(['/login']);
    }
  }

  loadChapter(): void{
    this.dbService.getChapterText(TopicsComponent.topicID, ChaptersComponent.chapterID).subscribe((result) => {
      document.getElementById('chapter-container').innerHTML = result;
    });
  }

}
