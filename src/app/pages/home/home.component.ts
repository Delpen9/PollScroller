import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HomePollService, HomePoll } from '../../services/home-poll-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newPolls: HomePoll[];
  watchedPolls: HomePoll[];
  yourPolls: HomePoll[];
  clicked: boolean = false;

  // ------------------------------------------

  textSize: object = {'font-size': '3vw', 'position': 'absolute', 'top': '2.2vw', 'right': '-0.5vw'};
  showText: boolean = false;

  // ------------------------------------------
  newPollDescription: boolean[];
  watchedPollDescription: boolean[];
  yourPollDescription: boolean[];

  constructor( private router: Router, private homePollService: HomePollService ) {
      this.newPolls = this.homePollService.newPollList.map(poll => poll);
      this.watchedPolls = this.homePollService.watchedPollList.map(poll => poll);
      this.yourPolls = this.homePollService.yourPollList.map(poll => poll);

      this.newPollDescription = this.newPolls.map(poll => false);
      this.watchedPollDescription = this.watchedPolls.map(poll => false);
      this.yourPollDescription = this.yourPolls.map(poll => false);
  }

  ngOnInit() {
    this.textPollSizeDecider();
  }

  onPollClick() {
      this.router.navigateByUrl('/voting-slide');
  }

  // -----------------------------------------------------------------
  // Function used to scroll to correct element in lists of polls
  // -----------------------------------------------------------------

  scroll(id: string): void {
      this.clicked = true;
      if ((id === 'your-polls' ||  id === 'watched-polls') && document.getElementById(id).scrollLeft === document.getElementById(id).scrollWidth - document.getElementById(id).offsetWidth){
        let scrollRight = 0;
        const tempLength = document.getElementById(id).scrollWidth;
        document.getElementById(id).scrollLeft = document.getElementById(id).scrollWidth;
        let scrollTimer = setInterval( () => {document.getElementById(id).scrollLeft -= tempLength/200; scrollRight += 1; if (scrollRight === 200) clearInterval(scrollTimer)}, 1);
        setTimeout( () => {this.clicked = false}, 1000);
      }
      else {
        let scrollLeft = 0;
        const tempLength = document.getElementById(id).offsetWidth;
        let scrollTimer = setInterval( () => {document.getElementById(id).scrollLeft += (tempLength - 100)/100; scrollLeft += 1; if (scrollLeft === 100) clearInterval(scrollTimer)}, 1);
        if (document.getElementById(id).scrollLeft - document.getElementById(id).scrollWidth < document.getElementById(id).offsetWidth){
          setTimeout( () => {this.clicked = false}, 1000);
        }
        else {
          setTimeout( () => {this.clicked = false}, 1500);
        }
      }
  }

  // -----------------------------------------------------------------
  // Functions used to display specific text within poll items
  // -----------------------------------------------------------------
  hoverDescriptionNewPollSet(index: number): void {
    setTimeout( () => {this.newPollDescription[index] = true}, 500);
  }

  hoverDescriptionNewPollRemove(index: number): void {
    setTimeout( () => {this.newPollDescription[index] = false;}, 500);
  }

  // -------------------------------------------------------

  hoverDescriptionWatchedPollSet(index: number): void {
    setTimeout( () => {this.watchedPollDescription[index] = true}, 500);
  }

  hoverDescriptionWatchedPollRemove(index: number): void {
    setTimeout( () => {this.watchedPollDescription[index] = false;}, 500);
  }

  // -------------------------------------------------------

  hoverDescriptionYourPollSet(index: number): void {
    setTimeout( () => {this.yourPollDescription[index] = true}, 500);
  }

  hoverDescriptionYourPollRemove(index: number): void {
    setTimeout( () => {this.yourPollDescription[index] = false;}, 500);
  }

  // -----------------------------------------------------------------
  // Functions used to change size of poll titles
  // -----------------------------------------------------------------
  @HostListener('window:resize')
  textPollSizeDecider(): void {
    if (window.innerWidth < 765){
      this.showText = true;
    }

    if (window.innerWidth >= 765){
      this.showText = false;
    }

    if (window.innerWidth > 2000){
      this.textSize = {'font-size': '2vw', 'position': 'absolute', 'top': '3vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 1800 && window.innerWidth > 1600){
      this.textSize = {'font-size': '2.5vw', 'position': 'absolute', 'top': '2.6vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 1600 && window.innerWidth > 1400){
      this.textSize = {'font-size': '3vw', 'position': 'absolute', 'top': '2.2vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 1400 && window.innerWidth > 1200){
      this.textSize = {'font-size': '3.5vw', 'position': 'absolute', 'top': '1.8vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 1200 && window.innerWidth > 1000){
      this.textSize = {'font-size': '4vw', 'position': 'absolute', 'top': '1.4vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 1000 && window.innerWidth > 800){
      this.textSize = {'font-size': '4.5vw', 'position': 'absolute', 'top': '1vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 800 && window.innerWidth > 600){
      this.textSize = {'font-size': '5vw', 'position': 'absolute', 'top': '0.5vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 600 && window.innerWidth > 400){
      this.textSize = {'font-size': '5.5vw', 'position': 'absolute', 'top': '0vw', 'right': '-0.5vw'};
    }

    else if (window.innerWidth <= 400 && window.innerWidth > 200){
      this.textSize = {'font-size': '6vw', 'position': 'absolute', 'top': '-0.5vw', 'right': '-0.5vw'};
    }
  }
}
