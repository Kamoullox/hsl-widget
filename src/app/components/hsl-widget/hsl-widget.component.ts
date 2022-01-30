import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsl-widget',
  templateUrl: './hsl-widget.component.html',
  styleUrls: ['./hsl-widget.component.scss']
})
export class HslWidgetComponent implements OnInit {

  hue: number = 155;
  saturation: number = 60;
  light: number = 50;

  primary: string = '';
  analogue: string = '';
  complementaire: string = '';

  codeText: string = '';

  onChangeColor() {
    this.primary = `hsl( ${this.hue}, ${this.saturation}%, ${this.light}%)`;
    this.analogue = `hsl( ${this.analogueCalcul()}, ${this.saturation}%, ${this.light}%)`;
    this.complementaire = `hsl( ${this.complementaireCalcul()}, ${this.saturation}%, ${this.light}%)`;

    this.codeText = `:root {
      \t--clr-primary: hsl(${this.hue}, ${this.saturation}%, ${this.light}%);
      \t--clr-secondary: hsl(${this.analogueCalcul()}, ${this.saturation}%, ${this.light}%);
      \t--clr-tertiary: hsl(${this.complementaireCalcul()}, ${this.saturation}%, ${this.light}%);
      }
      `
  }

  analogueCalcul () {
    return (this.hue + 30 > 360) ? ((this.hue + 30) - 360) : (this.hue + 30);
  }

  complementaireCalcul() {
    return (this.hue + 180 > 360) ? ((this.hue + 180) - 360) : (this.hue + 180);
  }


  constructor() { }

  ngOnInit(): void {
    this.onChangeColor();
  }

}
