import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';
import { SeoComponent } from './seo.component';


@NgModule({
  bootstrap: [ AppComponent, SeoComponent ],
  declarations: [ AppComponent, XLargeDirective, SeoComponent ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
