import { Component, OnInit } from '@angular/core';
import { repos } from 'src/app/Model/repos';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userName: string = 'MadhavT-1';
  repo?: repos[];

  constructor(private gitHubServices: GithubService) {}

  getRepos() {
    this.gitHubServices.getRepos(this.userName).subscribe(
      (data) => {
        this.repo = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  ngOnInit(): void {}
}
