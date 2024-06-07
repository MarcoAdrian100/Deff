//archivoslider.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators=true;
  @Input() controls=true;

  selectedIndex = 0;

  ngOnInit(): void {
  }
  selectImage(index: number): void{
    this.selectedIndex=index;
  }
  onPrevClick():void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length-1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void{
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    }else{
      this.selectedIndex++;
    }
  }
}

