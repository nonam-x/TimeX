import { Component, Input , } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alert',
   imports: [
    CommonModule,
  ],
  template: `
    <div>
      <div
        *ngIf="alert === 'danger'"
        id="dangerAlert"
        class="fixed top-5 right-5 max-w-sm w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg flex items-center justify-between"
        role="alert"
      >
        <span class="block sm:inline">Danger! Something went wrong.</span>
        <button
          (click)="closeAlert('dangerAlert')"
          class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        >
          Close
        </button>
      </div>

      <div
        *ngIf="alert === 'success'"
        id="successAlert"
        class="fixed top-5 right-5 max-w-sm w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg flex items-center justify-between"
        role="alert"
      >
        <span class="block sm:inline">Success! Your action was completed.</span>
        <button
          (click)="closeAlert('successAlert')"
          class="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          Close
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class AlertComponent {
  @Input() alert: string = '';

  closeAlert(alertId: string) {
    const alertElem = document.getElementById(alertId);
    if (alertElem) {
      alertElem.style.display = 'none';
    }
  }
}
