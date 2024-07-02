import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "TITLE";
  public subtitleEnglish: string = "SUB TITLE";
  
  public titlePortuguese: string = 'TÍTULO';  
  public subtitlePortuguese: string = 'SUB TÍTULO';


  public title = this.titleEnglish;
  public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'Who am I?', data: '<p>Hello, I\'m Ricardo Lopes and welcome to my corner on the Internet.<BR>I\'m both a C# Developer and a Full-Stack Developer, although lately I\'ve been mostly working in Front-end. Aside from the technicals roles, my prefered part of the job is comunicating with my peers and making sure everything is going as smoothly as possible (on their side and on my side) for the next deadline, kinda like a symbiotic relationship.<BR>If you like what you see, feel free to contact me.</p>',
      contact: 'CONTACTS', sp: 'SOCIAL MEDIA'
    };
  
    public profilePortuguese: any =
      {
        title: 'Quem sou eu?', data: '<p>Olá, eu sou o Ricardo Lopes e bem-vindo(a).<BR>Sou tanto um programador C# como Full-Stack, embora ultimamente tenha trabalhado mais em Front-end. Para além de cargos técnicos como os mencionados, a minha parte favorita do trabalho é comunicar com os meus colegas para e verificar se estamos a caminho de completar os objectivos que nos proposemos para a próxima deadline e ajudar ou ser ajudado quando é preciso, mais ou menos como uma relação simbiótica.<BR>Se capturei a atenção, está à vontade de entrar em contacto comigo.</p>',
        contact: 'CONTACTO', sp: 'REDES SOCIAIS'
      };
  
  public profile = this.profileEnglish;
  @Input() English: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.title = this.titleEnglish;
      this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
    } else {
      this.title = this.titlePortuguese;
      this.subtitle = this.subtitlePortuguese;
      this.profile = this.profilePortuguese;
    }
  }


}
