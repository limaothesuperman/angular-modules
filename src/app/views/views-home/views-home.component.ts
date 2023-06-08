import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {

  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reveiws' }
  ];

  items = [
    {
      images: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'THis is a perfect couch to sit!'
    },
    {
      images: 'assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresset to put stuff in!'
    }
  ];

}

 
