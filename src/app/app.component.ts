import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SliderComponent, CommonModule, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-def';
  images = [
    {
      imageSrc: 'https://imgs.search.brave.com/6LbQjRESsciwDQIT-VHxdPIViV74RjPH6zQlorp7oJg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZm9yZnVu/LmNvbS9mZXRjaC8y/ZC8yZDk2NzA0MTE4/NmQzNjUxZDFkZmVl/MjNjZTAxMjE2Yy5q/cGVn',
      imageAlt: 'numero1',
    },
    {
      imageSrc: 'https://imgs.search.brave.com/ejjQAgc2gSMtZU8uculOsMIyuI48vRZDuLM81np2F18/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9hbmlt/YWxlcy1ub2N0dXJu/b3MtcGVsaWN1bGEt/bmV0ZmxpeC02NjVk/ZWEyMDQyYTJhLmpw/Zz9jcm9wPTAuNTY2/eHc6MS4wMHhoOzAu/MjE4eHcsMCZyZXNp/emU9MzYwOio',
      imageAlt: 'numero2',
    },
    {
      imageSrc: 'https://imgs.search.brave.com/rg-2EDqvf-8MNPE9DCPnCIsKH6pWNq2rdIU9KrdR99k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFuYWNpb24uY29t/LmFyL3Jlc2l6ZXIv/VVBENWlDbjRIaU9x/YmNVWVJkVDFHVFM2/dmE0PS8yMTB4MzAw/L2Nsb3VkZnJvbnQt/dXMtZWFzdC0xLmlt/YWdlcy5hcmNwdWJs/aXNoaW5nLmNvbS9s/YW5hY2lvbmFyL0lQ/T1hFRVFEM1pCWFZN/UkxWVFI3RUtGSUk0/LnBuZw',
      imageAlt: 'numero3',
    },
    {
      imageSrc: 'https://imgs.search.brave.com/Lu9EiKPcWaWE5I5o2Y1UxfdSn2SWyYrx-gfmz6oVvlY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFuYWNpb24uY29t/LmFyL3Jlc2l6ZXIv/Z3QyMlVxckh6MTNG/NVJocjRZRGp2bmRw/LWRZPS8yMTB4MzAw/L2Nsb3VkZnJvbnQt/dXMtZWFzdC0xLmlt/YWdlcy5hcmNwdWJs/aXNoaW5nLmNvbS9s/YW5hY2lvbmFyL1BD/TkhTUUJTNU5FM1JL/TENJTjNTMkRBS1o0/LnBuZw',
      imageAlt: 'numero4',
    }
  ];
}
