export interface Button {
  render(): string;
}

export class LightButton implements Button {
  render(): string {
    return 'Light Button Rendered!';
  }
}

export class DarkButton implements Button {
  render(): string {
    return 'Dark Button Rendered!';
  }
}
