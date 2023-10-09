import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  cardTitle:string="";
  photoCover:string = "";
  cardDescription:string = "";
  private id:string | null= "0";

  constructor(
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      this.id = params.get('id');
    });
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id
    )[0];

    this.cardTitle = result.title
    this.cardDescription = result.description
    this.photoCover = result.photo
  }

}
