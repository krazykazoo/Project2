import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  currentWord : string;

  constructor() { }

  ngOnInit() {
  }

  beginPhrase(phrase : string) {

    //not sure how this works with commas or periods
    //find better way to handle selections, works for now

    let wordArr = phrase.split(" ");
    let index = 0;
    const interval = 240;
    let startInterval = setInterval(
      () => {
          let nextWord = wordArr[index++];
          let len = nextWord.length;
          if(len === 1 || len === 2) {
            nextWord = this.wrapChar(nextWord, 0);
            nextWord = "&nbsp;&nbsp;&nbsp;" + nextWord;  //adds THREE spaces
          } else if(len === 3 || len === 4 || len === 5) {
            nextWord = this.wrapChar(nextWord, 1);
            nextWord = "&nbsp;&nbsp;" + nextWord;  //adds TWO spaces
          } else if(len === 6 || len === 7 || len === 8 || len === 9) {
            nextWord = this.wrapChar(nextWord, 2);
            nextWord = "&nbsp;" + nextWord;  //adds ONE spaces
          } else {
            nextWord = this.wrapChar(nextWord, 3);
          }


          this.currentWord = nextWord;
          
          if(index == wordArr.length) {
            clearInterval(startInterval);
          }
      }, interval);
  }

  wrapChar(str: string, index: number) : string {
    return str.substr(0, index) + '<span style="color:red">' + str.charAt(index) + '</span>' + str.substr(index+1);
  }
}
