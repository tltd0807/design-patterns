import { Button, DarkButton, LightButton } from '../components/button';
import { Checkbox, DarkCheckbox, LightCheckbox } from '../components/checkbox';

// Abstract Factory Interface
export interface ThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
  getBackgroundColor(): string;
  getTextColor(): string;
}

// Concrete Factory for Light Theme
export class LightThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
  getBackgroundColor(): string {
    return '#ffffcc';
  }
  getTextColor(): string {
    return '#000000';
  }
}

// Concrete Factory for Dark Theme
export class DarkThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }

  getBackgroundColor(): string {
    return '#1e1e1e';
  }
  getTextColor(): string {
    return '#ffffcc';
  }
}
