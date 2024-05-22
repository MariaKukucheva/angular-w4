import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})

export class TrafficLightComponent implements OnInit, OnChanges {
  @Input() color: 'red' | 'yellow' | 'green' | 'default' = 'default';
  @Input() num!: 1 | 2 | 3 | 4;
  @Input({required: true}) Emergency: boolean = false;
  
  activeLightIndex: number = 0;
  prevColor: string = 'red';
  timerGR: any;
  timerY: any;

  constructor() { }
  ngOnInit(): void {
    this.start();
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Emergency'].isFirstChange()) 
      return;
    if(this.Emergency)
      {
        clearInterval(this.timerGR);
        clearInterval(this.timerY);
        this.color = 'yellow';
        this.timerGR=window.setInterval(() => 
          {
            this.flash();
          }, 1000); 
            this.Emergency=false;
      }
      else
      {
        this.greenOrRed();
        this.start();
      }
  }

  start() {
    clearInterval(this.timerGR);
    clearInterval(this.timerY);
    this.timerGR = window.setInterval(() => 
      {
        if (this.activeLightIndex === 0) 
        {
          this.greenOrRed();
        }
      }, 7000); 
    window.setTimeout(() => 
      {
        this.yellowLight();
        this.timerY = setInterval(() => this.yellowLight(), 7000);
      }, 5000);
  }

  greenOrRed() {
    if (this.prevColor == 'green') 
    {
      this.color = 'red';
    } 
    else if (this.prevColor == 'red') 
    {
      this.color = 'green';
    }
  }

  yellowLight() {
    this.prevColor = this.color;
    this.color = 'yellow';
  }

  onCrossClick() {
    if (this.color === 'yellow') 
    {
      alert("Неправилно пресичане!");
    }
  } 
  
  flash()
  {
    if(this.color == 'default') this.color = 'yellow';
    else this.color = 'default';
  }
}




