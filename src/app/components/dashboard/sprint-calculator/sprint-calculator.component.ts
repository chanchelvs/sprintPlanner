import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent implements OnInit {

  sprintForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService
  ) {
    this.sprintForm = this.fb.group({
      sprintPoints: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {}

  autoSelect() {
    if (this.sprintForm.valid) {
      this.storyService.setAutoSelectedStories(this.sprintForm.value.sprintPoints);
    }
  }

  clearStories() {
    this.storyService.clearStories();
    this.sprintForm.reset();
  }

  clearSelectedStories() {
    this.storyService.clearSelectedStories();
  }
}
