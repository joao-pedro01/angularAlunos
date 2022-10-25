import { Component, OnInit } from '@angular/core';
import { ALUNOS } from '../../mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  constructor() { }
  alunos = ALUNOS;

  ngOnInit(): void {
  }

}
