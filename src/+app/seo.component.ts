import { Component, ViewEncapsulation } from '@angular/core';
import { SeoService } from './shared/seo.service';

@Component({
  selector: 'head',
  encapsulation: ViewEncapsulation.None,
  template: `
    <meta charset="UTF-8">
    <meta name="author" content="PatrickJS">
    <meta name="viewport" content="width=device-width,minimum-scale=1">

    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <base href="/">
    <title>{{ seoModel.title }}</title>
    <meta name="description" content="{{ seoModel.description }}">
    <meta name="keywords" content="Angular 2,Universal">
  `
})
export class SeoComponent {
    public seoModel: any;

    constructor(private seoService: SeoService) {
      this.seoModel = {title:'', description: ''}

      this.seoService.event$.subscribe((seoModel) => {
          console.log(this.seoModel);
          this.seoModel = seoModel;
      });
    }
}

