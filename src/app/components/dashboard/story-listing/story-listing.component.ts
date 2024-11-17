import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story-listing',
  templateUrl: './story-listing.component.html',
  styleUrls: ['./story-listing.component.scss']
})
export class StoryListingComponent implements OnInit {
  storyList: Story[] = [];

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService.getStories().subscribe(item => {
      if(item) {
        this.storyList = item;
      }
    })
    }

}
