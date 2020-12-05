import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class MatSnackbarService {
    constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

    openError(message: string): void {
        this.zone.run(() => {
            this.snackBar.open(message, '', { duration: 3000, panelClass: ['mat-toolbar', 'mat-primary'] });
        });
    }
}
