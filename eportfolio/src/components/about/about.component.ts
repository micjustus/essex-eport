import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elm = document.querySelector(".about-profile");
    let wpf = document.querySelector(".wallpaper-filter") as HTMLElement;

     if (!elm || !wpf) return;

    elm.addEventListener("mouseenter", ()=>{
       wpf.style.animation = 'fade-header-in .2s ease-in 0.1s 1 normal backwards';
    });

    elm.addEventListener("mouseleave", ()=>{
      wpf.style.animation = 'fade-header-out .2s ease-in 0.1s 1 normal forwards';
    })
  }

}
