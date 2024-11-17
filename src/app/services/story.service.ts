import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private stories = new BehaviorSubject<Story[]>([]);
  private selectedStories = new BehaviorSubject<Story[]>([]);


  setStories(newStory: Story) {
    const availableStories = this.stories.value;
    this.stories.next([...availableStories, newStory]);
  }
  getStories() {
    return this.stories.asObservable();
  }

  getAllStories() {
    return this.stories.value;
  }

  setAutoSelectedStories(sprintPoints: number) {
   const currentSprintStories: Story[] =  [];
   let currentPoints = 0;
   const stories = this.stories.getValue().sort((a, b) => b.points - a.points);
   stories.forEach(item => {
    if(item.points + currentPoints <= sprintPoints ) {
      currentSprintStories.push(item);
      currentPoints = item.points + currentPoints;
    }
    this.selectedStories.next(currentSprintStories)
   });
  }

  getAutoSelectdStories() {
    return this.selectedStories.asObservable();
  }

  clearStories() {
   this.stories.next([]);
  }
  clearSelectedStories() {
    this.selectedStories.next([]);
  }
}
