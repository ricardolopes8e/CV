import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Job[];
  jobsPortuguese: Job[];
  
  public headEnglish: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };
  public headPortuguese: any = { title: 'EXPERIENCIA', subtitle: 'EDUCAÇÃO E EXPERIÊNCIA' };
  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('C# Developer and Full Stack Developper', '2021-2024', 'EXAUD',
      '<P>' 
        + '</P><ul><li><a href="https://www.learningdesignnetwork.com/ldn-interactive"><b>Learning Design Network</b></a><P>A virtual lobby with common areas and mini games for Kaiser Permanente workers and patients.</P></il><li><a href="https://twentytwenty.com/pipeline/vs-2020/"><b> VS Headset</b></a><P>Two applications designed to provide diagnostic of a patient\'s eyesight through the use of HTC Vive Pro Eye eye tracking camera.</P></li></ul><li><a href="https://www.testsociety.pt/"><b>TestSociety</b></a><P>A static website promoting a QA Conference.</P></li></ul><li><b>Exaud HR</b><P>An in-house project designed for senior team-members to easily search for all co-workers skills and leaves.</P></li></ul>', 1);


    const job_2: Job = new Job('Back-End Sofware Developper', '2021', 'Altice Labs',
      '<P> I was in charge of monitoring, implementing and fixing unit and integration tests on Altaia. Simultaniously I was in charge of a migration to a new Quarkus REST API.</p>', 1);

    const job_3: Job = new Job('Full-Stack Sofware Developper', 'Summers of 2017 and 2018', 'IPBrick',
      '<P> Implementing new features, code reviewing and unit testing.</p>', 1);

    const job_4: Job = new Job('C# Developer', 'Since 2024', 'Sqill',
      '<P>' 
        + '</P><ul><li><a href="https://play.google.com/store/apps/details?id=com.heysqill.enterprise&hl=en"><b>Sqill Go</b></a><P>A social media suite, designed to help both social media managers simplify their workflow and creators editing and fullfilling the manager requests.</P></li></ul>', 1);


    const school_1: Job = new Job('M.Sc. in Informatics and Computing Engineering', '2012-2021', 'Faculdade de Engenharia da Universidade do Porto',
      '<P></P>', 1);

    const school_2: Job = new Job('Level 3 QRQ - Scientific/Tecnological in Informatic', '2010-2012', 'Colégio Internato dos Carvalhos',
      '<P></P>', 1);

    const trabalho_1: Job = new Job('Progamador C# e Full Stack', '2021-2024', 'EXAUD',
      '<P>' 
        + '</P><ul><li><a href="https://www.learningdesignnetwork.com/ldn-interactive"><b>Learning Design Network</b></a><P>Um ambiente virtual com áreas comuns e mini-jogos para funcionários e pacientes da Kaiser Permanente.</P></il><li><a href="https://twentytwenty.com/pipeline/vs-2020/"><b> VS Headset</b></a><P> Duas aplicações desenvolvidades para diagnóstico de condições visuais de pacientes através do uso da câmera de rastreamento ocular do HTC VIVE Pro Eye.</P></li></ul><li><a href="https://www.testsociety.pt/"><b>TestSociety</b></a><P>Um website estático para promover um conferência de QA.</P></li></ul><li><b>Exaud HR</b><P>Um projecto interno para os engenheiros-chefes para procurarem facilmente as habilidades, ferramentas, saídas de escritório e férias dos funcionários.</P></li></ul>', 1);


    const trabalho_2: Job = new Job('Programador Back-End', '2021', 'Altice Labs',
      '<P> Estive encarregue de monitorizar, implementar e corrigir testes unitários e testes de integração in a project named Altaia. Simultaneamente estive encarregue da migração para uma nova REST API Quarkus.</p>', 1);

    const trabalho_3: Job = new Job('Programador Full-Stack', 'Verão de 2017 e de 2018', 'IPBrick',
      '<P> Implementar novas funcionalidades, testes unitários e revisão de código.</p>', 1);

    const trabalho_4: Job = new Job('C# Developer', 'Desde 2024', 'Sqill',
      '<P>' 
        + '</P><ul><li><a href="https://play.google.com/store/apps/details?id=com.heysqill.enterprise&hl=pt"><b>Sqill Go</b></a><P>Um pacote de ferramentes de gestão de social media desenhado para ajudar tanto os gerentes de social media a simplificar seu fluxo de trabalho como os criadores a editar e a corresponder às solicitações dos gerentes..</P></li></ul>', 1);


    const escola_1: Job = new Job('Mestrado Integrado em Engenharia Informática e Computação', '2012-2021', 'Faculdade de Engenharia da Universidade do Porto',
      '<P></P>', 1);

    const escola_2: Job = new Job('Nível 3 QRQ - Científico/Tecnológico em Informática', '2010-2012', 'Colégio Internato dos Carvalhos',
      '<P></P>', 1);
    
    
    
    this.jobsEnglish = [job_4, job_1,job_2,school_1,job_3,school_2];
    this.jobsPortuguese = [trabalho_4, trabalho_1,trabalho_2,escola_1, trabalho_3,escola_2];
    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
    if (this.English) {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
    } else {
      this.head = this.headPortuguese;
      this.jobs = this.jobsPortuguese;
    }
  }

}
