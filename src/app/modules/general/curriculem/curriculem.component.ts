import { Component, OnInit } from '@angular/core';
import { CuriculumElement } from '../../Models/curriculum_element.module'
@Component({
  selector: 'app-curriculem',
  templateUrl: './curriculem.component.html',
  styleUrls: ['./curriculem.component.css']
})
export class CurriculemComponent implements OnInit {
  ListOfStudies: CuriculumElement[] = [
    {
      title: 'Baccalaureate of Mathematics',
      description: '******',
      location: 'Metouia High School, Gabes',
      logoUrl: '',
      duration: '2017-2018',
    },
    {
      title: 'Fundemental licence of computer science and multimedia',
      description: '******',
      location: 'Higher Institute of computer science and multimedia Gabes',
      logoUrl: '',
      duration: '2018-2021',
    },
    {
      title: "Research Master's of computer science and multimedia",
      description: '******',
      location: 'Higher Institute of computer science and multimedia Gabes',
      logoUrl: '',
      duration: '2021-2022',
    },
    {
      title: "Software Engineering",
      description: '******',
      location: 'Institute polytechnical of advanced science of Sfax',
      logoUrl: '',
      duration: '2021-2022',
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}

