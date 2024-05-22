import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


  export class AppComponent {
    emergencyOn : boolean = false;
    public emergencyTag: boolean = false;
  
    triggerEmergency()
     {
      this.emergencyTag = true;
      this.emergencyOn = true; 
      window.setTimeout(() => {
        this.emergencyTag = false;
      }, 10000);
      window.setTimeout(() => {
        this.emergencyOn = false;
      }, 20000);
     }
  }
