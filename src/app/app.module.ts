import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {effects} from './store/effects';
import {NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, POSITION, SPINNER} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  blur: 15,
  overlayColor: 'rgba(40,40,40,0.92)',
  bgsColor: 'blue',
  pbColor: 'blue',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 70,
  pbThickness: 3,
  fgsPosition: POSITION.bottomRight,
  fgsSize: 70,
  fgsColor: 'blue',
  bgsType: SPINNER.doubleBounce,
  fgsType: SPINNER.doubleBounce,
  masterLoaderId: 'loader-01'
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
