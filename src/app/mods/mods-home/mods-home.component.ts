import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like an orange' },
    { title: 'What color is that cat?', content: 'The color of that cat is white with blended grey' }
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
