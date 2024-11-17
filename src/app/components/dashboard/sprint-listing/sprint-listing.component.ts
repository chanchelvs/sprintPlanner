import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-sprint-listing',
  templateUrl: './sprint-listing.component.html',
  styleUrls: ['./sprint-listing.component.scss']
})
export class SprintListingComponent implements OnInit {
  public sprintStoryListing: Story[] = [];
  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService.getAutoSelectdStories().forEach(item => {
      if(item) {
        this.sprintStoryListing = item;
      }
    })
  }

}
