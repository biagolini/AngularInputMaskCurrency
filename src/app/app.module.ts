import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
