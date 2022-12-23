import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {

  list = [
    {
      number: '1',
      name: 'Blood Bank',
      icon: 'fa fa-home',
      url: 'https://github.com/Khatri-Sanjay/BloodBankProject',
      image:'../../assets/images/Picture1.png',
      desc:'Blood Bank is a place where people can request for blood and can donate blood'
    },
    {
      number: '2',
      name: 'Gadget Hub',
      icon: 'fa fa-users',
      image:'../../assets/images/Picture2.png',
      // url: ''
      desc:'Gadget Hub is an application where different type of mobile and mobile accoreied are available'
    },
    {
      number: '3',
      name: 'Comming Soon',
      icon: 'fa fa-users',
      image:'../../assets/images/commingsoon.jpg',
      // url: '',
      desc:'Next project Comming Soon....'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
