import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, Autoplay} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public swiperConfig: SwiperOptions = {
  pagination: true,
  autoplay:true,
  freeMode:true,

}

  constructor() { }

  ngOnInit() {
    Swiper.use([Pagination]);
    Swiper.use([Autoplay]);
  }

}
