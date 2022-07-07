import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.alertForPage();
  }

  alertForPage(){
    alert("Welcome to News Page");
  }

}
