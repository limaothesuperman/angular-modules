import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    { name: 'John', age: 25, job: 'Designer', employed: true },
    { name: 'Wiki', age: 26, job: 'Engineer', employed: true },
    { name: 'Mao', age: 24, job: 'Engineer', employed: true }

  ];

  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

}
