import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class helpComponent implements OnInit {
  formBuku: FormGruop;
  constructor(private formBuild: FromBuilder,){}

  ngOnInit(): void{
    this.formBuku = this.formBuild.group({
          'nama':[null],
          'email':[null],
          'keterangan':[null],
    })
  }
}
