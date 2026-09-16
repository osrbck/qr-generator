import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiInput, TuiRoot, TuiTextfield } from '@taiga-ui/core';
import QRCode from 'qrcode';

const GENERATE_DELAY = 2000;

@Component({
  imports: [FormsModule, TuiButton, TuiInput, TuiRoot, TuiTextfield],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {
  protected readonly url = signal('');
  protected readonly error = signal('');
  protected readonly qr = signal('');
  protected readonly loading = signal(false);

  protected async generate(): Promise<void> {
    if (this.loading()) {
      return;
    }

    const value = this.url().trim();
    this.error.set('');

    if (!value) {
      this.error.set('Lütfen bir URL girin.');
      this.qr.set('');
      return;
    }

    this.loading.set(true);
    this.qr.set('');

    try {
      const canvas = document.createElement('canvas');
      await Promise.all([
        QRCode.toCanvas(canvas, value, { width: 512, margin: 2 }),
        new Promise((resolve) => setTimeout(resolve, GENERATE_DELAY)),
      ]);
      this.qr.set(canvas.toDataURL('image/jpeg', 0.95));
    } catch {
      this.error.set('QR kod oluşturulamadı, tekrar deneyin.');
    } finally {
      this.loading.set(false);
    }
  }
}
