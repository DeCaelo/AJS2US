import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { SeoService } from '../shared/seo.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'about',
  template: 'About component'
})
export class AboutComponent {
  constructor(@Inject('req') req: any, public seoService: SeoService) {
    // console.log('req',  req)
    let seoModel = {
        description: 'About description',
        title: 'About page'
      };

    this.seoService.set(seoModel);
  }
}
