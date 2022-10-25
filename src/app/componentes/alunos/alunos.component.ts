import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: Aluno = {
    id: 1,
    name: 'João Pedro'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
