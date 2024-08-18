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
import { RiftOverviewComponent } from './components/rifts/rift-overview/rift-overview.component';
import { RiftTainelaComponent } from './components/rifts/rift-tainela/rift-tainela.component';
import { RiftSufokiaComponent } from './components/rifts/rift-sufokia/rift-sufokia.component';
import { ClassesGameplayComponent } from './components/classes-gameplay/classes-gameplay.component';
import { ElioMeleeComponent } from './components/classes-gameplay/Elio/elio-melee/elio-melee.component';
import { ElioDistComponent } from './components/classes-gameplay/Elio/elio-dist/elio-dist.component';
import { OsaDragonComponent } from './components/classes-gameplay/Osa/osa-dragon/osa-dragon.component';
import { OsaSupportComponent } from './components/classes-gameplay/Osa/osa-support/osa-support.component';
import { EnchantementComponent } from './components/enchantement/enchantement.component';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { GameplaysPageLayoutComponent } from './components/classes-gameplay/gameplays-page-layout/gameplays-page-layout.component';
import { ElioGameplaysComponent } from './components/classes-gameplay/Elio/elio-gameplays/elio-gameplays.component';
import { RiftPageLayoutComponent } from './components/rifts/rift-page-layout/rift-page-layout.component';
import { ElioGameplaysPageLayoutComponent } from './components/classes-gameplay/Elio/elio-gameplays-page-layout/elio-gameplays-page-layout.component';
import { OsaGameplaysComponent } from './components/classes-gameplay/Osa/osa-gameplays/osa-gameplays.component';
import { OsaGameplaysPageLayoutComponent } from './components/classes-gameplay/Osa/osa-gameplays-page-layout/osa-gameplays-page-layout.component';

export const routes: Routes = [
    { path:'home', component : HomeComponent },    
    { path:'beforeGearing', component : StuffPagesLayoutComponent,
        children :[
            { path:'', component : BeforeGearingUpComponent },
        ] },
    { path:'stuff', component : StuffPagesLayoutComponent,
        children :[
            { path:'20', component : Stuffs20Component },
            { path:'50', component : Stuffs50Component },
            { path:'80', component : Stuffs80Component },
            { path:'110', component : Stuffs110Component },
            { path:'140', component : Stuffs140Component },
            { path:'170', component : Stuffs170Component },
            { path:'200', component : Stuffs200Component },
            { path:'230', component : Stuffs230Component },
        ]
     },
    { path:'gameplays', component : GameplaysPageLayoutComponent,
        children :[
            { path:'', component : ClassesGameplayComponent },
            { path:'elio', component : ElioGameplaysPageLayoutComponent,
                children :[
                    { path:'', component : ElioGameplaysComponent },
                    { path:'melee', component : ElioMeleeComponent },
                    { path:'dist', component : ElioDistComponent },
                ] },
            { path:'osa', component : OsaGameplaysPageLayoutComponent,
                children :[
                    { path:'', component : OsaGameplaysComponent},
                    { path:'support', component : OsaSupportComponent },
                    { path:'melee', component : OsaDragonComponent },
                ] },
        ] },

    { path:'themes', component : ThemesComponent },
    { path:'howToStream', component : HowToStreamComponent },
    { path:'modulation', component : ModulationComponent },
    { path:'about', component : AboutComponent },
    { path:'extResources', component : ExternalResourcesComponent },
    
    { path:'eldersWisdom', component : EldersWisdomComponent },
    { path:'kamas', component : KamasTipsComponent },
    { path:'enchant', component : EnchantementComponent },
    { path:'glossary', component : GlossaryComponent },

    { path:'rift', component : RiftPageLayoutComponent, // todo : create layout with subnavar to navigate between rifts easily (like /stuff)
        children :[
            { path:'', component : RiftOverviewComponent },
            { path:'tainela', component : RiftTainelaComponent },
            { path:'sufokia', component : RiftSufokiaComponent },
        ]},

    { path:'',   redirectTo: '/home', pathMatch: 'full' },
    { path:'**', component: PageNotFoundComponent }
];
