import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StorageService } from './services/localstorage/storage.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        HttpClientModule,
        MatSnackBarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatAutocompleteModule,
        MatChipsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSkeletonLoaderModule
    ],
    providers: [StorageService, {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent],
})
export class AppModule { }
