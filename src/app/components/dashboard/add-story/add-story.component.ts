import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  storyForm: FormGroup;
  isDuplicated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService
  ) {
    this.storyForm = this.fb.group({
      name: ['', [Validators.required]],
      points: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.storyForm.get('name')!.valueChanges.subscribe(() =>{
      this.isDuplicated = false;
    })
  }

  addStory() {
    this.isDuplicated = this.checkDuplicateStories();
      if (this.storyForm.valid && !this.isDuplicated) {
        this.storyService.setStories(this.storyForm.value);
        this.storyForm.reset();
        this.isDuplicated = false;
    }

  }
  checkDuplicateStories() {
   const stories = this.storyService.getAllStories();
   return stories.some(story => story.name === this.storyForm.get('name')!.value);
  }
}
