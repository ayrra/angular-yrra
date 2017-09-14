import { Component, OnInit } from '@angular/core';

import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements OnInit {

  tictactoe: string = "<iframe height='400px' scrolling='no' title='freecodecamp: Tic Tac Toe ' src='//codepen.io/ayrra/embed/mMEWXQ/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/mMEWXQ/'>freecodecamp: Tic Tac Toe </a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  simon: string = "<iframe height='400px' scrolling='no' title='freecodecamp: Simon Game' src='//codepen.io/ayrra/embed/brrBbW/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/brrBbW/'>freecodecamp: Simon Game</a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  pomodoro: string = "<iframe height='400px' scrolling='no' title='freecodecamp: pomodoro clock ' src='//codepen.io/ayrra/embed/mmwogy/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/mmwogy/'>freecodecamp: pomodoro clock </a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  calculator: string = "<iframe height='400px' scrolling='no' title='freecodecamp: calculator' src='//codepen.io/ayrra/embed/yavgmv/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/yavgmv/'>freecodecamp: calculator</a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  rqg: string = "<iframe height='400px' scrolling='no' title='freecodecamp:Random Quote Machine' src='//codepen.io/ayrra/embed/VKKbvA/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/VKKbvA/'>freecodecamp:Random Quote Machine</a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  weather: string = "<iframe height='400px' scrolling='no' title='mycodecamp: weather app' src='//codepen.io/ayrra/embed/wzGPOm/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/wzGPOm/'>mycodecamp: weather app</a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  wiki: string = "<iframe height='400px' scrolling='no' title='Wikipedia Viewer' src='//codepen.io/ayrra/embed/XjNRNm/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/XjNRNm/'>Wikipedia Viewer</a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";
  twitch: string = "<iframe height='400px' scrolling='no' title='Using twitch.tv json v.04' src='//codepen.io/ayrra/embed/ORWbpk/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-width: 60%;'>See the Pen <a href='https://codepen.io/ayrra/pen/ORWbpk/'>Using twitch.tv json v.04</a> by Andres Yrra (<a href='https://codepen.io/ayrra'>@ayrra</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>";

  constructor(private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle("Yrra.net | Stuff");
  }


}
