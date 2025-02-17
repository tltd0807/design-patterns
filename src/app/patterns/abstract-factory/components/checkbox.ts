export interface Checkbox {
  render(): string;
}

export class LightCheckbox implements Checkbox {
  render(): string {
    return 'Light Checkbox Rendered!';
  }
}

export class DarkCheckbox implements Checkbox {
  render(): string {
    return 'Dark Checkbox Rendered!';
  }
}
