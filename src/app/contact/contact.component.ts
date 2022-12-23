import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  list=[
    {
      number: '1',
      name: 'Address',
      d:'Suryabinyak-9,Bhaktapur, Nepal',
      icon: 'fa fa-map-marker'
      // src:'  '
    },
    {
      number: '2',
      name: 'Phone',
      d:'+977-9861494803',
      icon: 'fa fa-phone',
    },
    {
      number: '3',
      name: 'Email',
      d:'www.khatrisanjay@gmail.com',
      icon: 'fa fa-envelope'
    },
    {
      number: '4',
      name: 'Github',
      d:'Khatri-Sanjay',
      icon: 'fab fa-github',
  
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
