import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public inputType: string;
  public valeur: string;
  constructor() {
    this.inputType = "";
    this.valeur = "";
  }

  ngOnInit(): void {
    this.inputType = "date";
  }
  functionClick(): void {
    this.valeur = "click a fonctionné";
  }
}
