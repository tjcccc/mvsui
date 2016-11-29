// rxjs
import './rxjs-extensions';

// Angular2 Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Route
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// App components
import { AppComponent } from './app.component';
import { HeaderComponent } from './_component/header/header.component';
import { TopbarComponent } from './_component/topbar/topbar.component';
import { NavComponent } from './_component/nav/nav.component';
import { AsideComponent } from './_component/aside/aside.component';
import { ContainerComponent } from './_component/container/container.component';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { FormComponent } from './_component/form/form.component';
import { FooterComponent } from './_component/footer/footer.component';

// Pipe
import { AsideLevelPipe } from './_component/aside/aside-level.pipe';
import { AsideParentPipe } from './_component/aside/aside-parent.pipe';

// Service
import { AsideService } from './_component/aside/aside.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TopbarComponent,
        HeaderComponent,
        NavComponent,
        AsideComponent,
        ContainerComponent,
        DashboardComponent,
        FormComponent,
        FooterComponent,
        AsideLevelPipe,
        AsideParentPipe
    ],
    providers: [AsideService],
    bootstrap: [AppComponent]
})
export class AppModule {}
