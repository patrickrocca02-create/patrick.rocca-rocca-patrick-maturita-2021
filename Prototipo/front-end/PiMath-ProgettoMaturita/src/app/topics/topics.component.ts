import { Component, OnInit } from '@angular/core';
import {DBService} from '../service/DBService';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {RouterService} from '../service/RouterService';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor(private dbService: DBService, private router: Router) { }
  static topicID;
  topics = [];

  ngOnInit(): void {
    RouterService.goBack = true;
    if (AuthService.loggedIn) {
      this.loadTopics();
    }else {
      this.router.navigate(['/login']);
    }
  }

  loadTopics(): void{
    this.dbService.getAvailableTopics().subscribe((result) => {
      this.topics = result;
    });
  }

  openTopic(topicID: number): void{
    // @ts-ignore
    TopicsComponent.topicID = topicID;
    this.router.navigate(['chapters']);
  }

}
