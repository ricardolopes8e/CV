import {Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() English: any;
 
  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public headPortugues: any = { title: 'HABILIDADES', subtitle: 'HABILIDADES E FERRAMENTAS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'HTML',
      progress: 95
    }],
    [{
      title: 'CSS',
      progress: 90
    }],
    [{
      title: 'Javascript/Typescript',
      progress: 70
    }]
  ];

  public skill_2: any = [

    [{
      title: 'SQL',
      progress: 75
    }],
    [{
      title: 'Java',
      progress: 70
    }],
    [{
      title: 'Node.js',
      progress: 60
    }]
  ];

  public skill_3: any = [

    [{
      title: 'C#',
      progress: 100
    }],
    [{
      title: 'Unity',
      progress: 100
    }],
    [{
      title: 'C/C++',
      progress: 50
    }]
  ];

  

  public skill_4: any = [

    [{
      title: 'Improvising when design team is busy',
      progress: 85
    }],
    [{
      title: 'Seeing the positive in horrible situations',
      progress: 100
    }],
    [{
      title: 'Singing in the shower',
      progress: 10
    }]
  ];
  
  public skillEnglish: any = [
    { title: 'Front-end', info: this.skill_1 },
    { title: 'Back-end', info: this.skill_2 },
    { title: 'General Scripting', info: this.skill_3 },
    { title: 'Others', info: this.skill_4 },
  ];
  // END ENGLISH


  // PORTUGUES
  public habilidade_1: any = [
    [{
      title: 'HTML',
      progress: 95
    }],
    [{
      title: 'CSS',
      progress: 90
    }],
    [{
      title: 'Javascript/Typescript',
      progress: 70
    }]
  ];

  public habilidade_2: any = [

    [{
      title: 'SQL',
      progress: 75
    }],
    [{
      title: 'Java',
      progress: 70
    }],
    [{
      title: 'Node.js',
      progress: 60
    }]
  ];

  public habilidade_3: any = [

    [{
      title: 'C#',
      progress: 100
    }],
    [{
      title: 'Unity',
      progress: 100
    }],
    [{
      title: 'C/C++',
      progress: 50
    }]
  ];

  

  public habilidade_4: any = [

    [{
      title: 'Improvisar quando a equipa de design está ocupada',
      progress: 85
    }],
    [{
      title: 'Ver o positivo em situações horríveis',
      progress: 100
    }],
    [{
      title: 'Cantar no chuveiro',
      progress: 10
    }]
  ];


  public skillPortugues: any = [
    { title: 'Front-end', info: this.habilidade_1},
    { title: 'Back-end', info: this.habilidade_2},
    { title: 'Programação Geral ', info: this.habilidade_3},
    { title: 'Outras', info: this.habilidade_4},
  ];
  // FIN PORTUGUESE


  // DEFAULT 
  public skills: any = this.skillEnglish;




  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
    } else {
      this.skills = this.skillPortugues;
      this.head = this.headPortugues;
    }
  }


}
