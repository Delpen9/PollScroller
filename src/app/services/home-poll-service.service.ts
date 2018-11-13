import { Injectable } from '@angular/core';


export class HomePoll {
  public name: string;
  public id: number;
  public description: string;
  public user = null;
  public creationTime: number = null;
  constructor( name: string, id: number, description: string, user = null, creationTime: number | null ){
    this.name = name;
    this.id = id;
    this.description = description;
    this.user = user;
    this.creationTime = creationTime;
  }
}

@Injectable({
  providedIn: 'root'
})
export class HomePollService {
  placeholderDate: Date = new Date();
  timeOfPlaceholderDate: number = this.placeholderDate.getTime();

  newPollList: HomePoll[] = [
    new HomePoll("Alibaster", 1, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 2, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 3, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 4, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 5, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 6, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 7, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 8, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 9, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 10, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 11, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 12, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate)
  ]

  watchedPollList: HomePoll[] = [
    new HomePoll("Alibaster", 13, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 14, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 15, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 16, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 17, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 18, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 19, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 20, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 21, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 22, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 23, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 24, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate)
  ]

  yourPollList: HomePoll[] = [
    new HomePoll("Alibaster", 25, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 26, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 27, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 28, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 29, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 30, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 31, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 32, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 33, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 34, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 35, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate),
    new HomePoll("Alibaster", 36, "Make it or break it, which should I do? To be or not to be, that is the actual question. ", null, this.timeOfPlaceholderDate)
  ]
  constructor() { }
}
