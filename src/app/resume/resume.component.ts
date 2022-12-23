import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  details = [
    {
      firstName: 'Sanjay',
      lastName: 'Khatri',
      email: 'www.khatrisanjay@gmail.com',
      country: 'Nepal',
      address: 'Suryabinyak-9, Bhaktapur',
      mobile: '+977-9861494803',
      dob: 'March 5, 2002',
      status:'Single',
      nationality: 'Nepalese'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
