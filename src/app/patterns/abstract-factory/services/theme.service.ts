import { Injectable } from '@angular/core';
import {
  DarkThemeFactory,
  LightThemeFactory,
  ThemeFactory,
} from './theme-factory';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private factory: ThemeFactory = new LightThemeFactory(); // Mặc định Light Theme

  constructor() {
    this.applyTheme(); // Áp dụng Light Theme mặc định khi khởi động
  }

  setTheme(theme: 'light' | 'dark') {
    this.factory =
      theme === 'light' ? new LightThemeFactory() : new DarkThemeFactory();
    this.applyTheme();
  }

  getButton() {
    return this.factory.createButton().render();
  }

  getCheckbox() {
    return this.factory.createCheckbox().render();
  }

  applyTheme(): void {
    document.documentElement.style.setProperty(
      '--background-color',
      this.factory.getBackgroundColor()
    );
    document.documentElement.style.setProperty(
      '--text-color',
      this.factory.getTextColor()
    );
  }
}
