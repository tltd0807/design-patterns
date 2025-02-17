import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'abstract-demo',
  templateUrl: './abstract-factory-demo.component.html',
  styleUrls: ['./abstract-factory-demo.component.scss'],
})
export class AbstractFactoryDemoComponent {
  buttonText: string = '';
  checkboxText: string = '';

  constructor(private themeService: ThemeService) {
    this.updateUI();
  }

  changeTheme(theme: 'light' | 'dark') {
    this.themeService.setTheme(theme);
    this.updateUI();
  }

  updateUI() {
    this.buttonText = this.themeService.getButton();
    this.checkboxText = this.themeService.getCheckbox();
  }
}
