import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class helpComponent implements OnInit {
  formBuku: FormGruop;
  constructor(private formBuild: FromBuilder,){}

  ngOnInit(): void{
    this.formBuku = this.formBuild.group(controlsConfig :{
          'nama':[null],
          'email':[null],
          'keterangan':[null],
    })
  }
}
