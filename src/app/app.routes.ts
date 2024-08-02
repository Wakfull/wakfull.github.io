import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Stuffs20Component } from './components/stuffs/stuffs20/stuffs20.component';
import { Stuffs50Component } from './components/stuffs/stuffs50/stuffs50.component';
import { Stuffs80Component } from './components/stuffs/stuffs80/stuffs80.component';
import { Stuffs110Component } from './components/stuffs/stuffs110/stuffs110.component';
import { Stuffs140Component } from './components/stuffs/stuffs140/stuffs140.component';
import { Stuffs170Component } from './components/stuffs/stuffs170/stuffs170.component';
import { Stuffs200Component } from './components/stuffs/stuffs200/stuffs200.component';
import { Stuffs230Component } from './components/stuffs/stuffs230/stuffs230.component';
import { AboutComponent } from './components/about/about.component';
import { BeforeGearingUpComponent } from './components/stuffs/before-gearing-up/before-gearing-up.component';
import { StuffPagesLayoutComponent } from './components/stuffs/stuff-pages-layout/stuff-pages-layout.component';
import { HowToStreamComponent } from './components/how-to-stream/how-to-stream.component';
import { ModulationComponent } from './components/modulation/modulation.component';
import { ThemesComponent } from './components/themes/themes.component';
import { ExternalResourcesComponent } from './components/external-resources/external-resources.component';
import { EldersWisdomComponent } from './components/elders-wisdom/elders-wisdom.component';
import { KamasTipsComponent } from './components/kamas-tips/kamas-tips.component';

export const routes: Routes = [
    { path:'home', component : HomeComponent },    
    { path:'beforeGearing', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : BeforeGearingUpComponent },
        ] },
    { path:'stuff20', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs20Component },
        ]
     },
    { path:'stuff50', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs50Component },
        ] },
    { path:'stuff80', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs80Component },
        ] },
    { path:'stuff110', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs110Component },
        ] },
    { path:'stuff140', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs140Component },
        ] },
    { path:'stuff170', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs170Component },
        ] },
    { path:'stuff200', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs200Component },
        ] },
    { path:'stuff230', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : Stuffs230Component },
        ] },
    { path:'themes', component : ThemesComponent },
    { path:'howToStream', component : HowToStreamComponent },
    { path:'modulation', component : ModulationComponent },
    { path:'about', component : AboutComponent },
    { path:'extResources', component : ExternalResourcesComponent },
    { path:'eldersWisdom', component : EldersWisdomComponent },
    { path:'kamas', component : KamasTipsComponent },
    { path:'',   redirectTo: '/home', pathMatch: 'full' },
    { path:'**', component: PageNotFoundComponent }
];
