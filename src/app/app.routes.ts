import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CareerComponent } from './pages/career/career.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

export const routes: Routes = [

    { path: '', component: HomepageComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'career', component: CareerComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'blog', component: BlogsComponent },

];

