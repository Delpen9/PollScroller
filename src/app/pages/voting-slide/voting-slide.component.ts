import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting-slide',
  templateUrl: './voting-slide.component.html',
  styleUrls: ['./voting-slide.component.css']
})
export class VotingSlideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBackArrowClick() {
      this.router.navigateByUrl('/home');
  };

}
