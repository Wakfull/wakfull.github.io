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
import { GenericClassPageLayoutComponent } from './components/classes-gameplay/generic-class-page-layout/generic-class-page-layout.component';
import { OsaGameplaysComponent } from './components/classes-gameplay/Osa/osa-gameplays/osa-gameplays.component';
import { CraGameplaysComponent } from './components/classes-gameplay/Cra/cra-gameplays/cra-gameplays.component';
import { CraDistClassicComponent } from './components/classes-gameplay/Cra/cra-dist-classic/cra-dist-classic.component';
import { EcaGameplaysComponent } from './components/classes-gameplay/Eca/eca-gameplays/eca-gameplays.component';
import { EcaDistComponent } from './components/classes-gameplay/Eca/eca-dist/eca-dist.component';
import { EnuGameplaysComponent } from './components/classes-gameplay/Enu/enu-gameplays/enu-gameplays.component';
import { EnuMeleeComponent } from './components/classes-gameplay/Enu/enu-melee/enu-melee.component';
import { EnuSupportComponent } from './components/classes-gameplay/Enu/enu-support/enu-support.component';
import { FecaGameplaysComponent } from './components/classes-gameplay/Feca/feca-gameplays/feca-gameplays.component';
import { FecaSupportComponent } from './components/classes-gameplay/Feca/feca-support/feca-support.component';
import { FecaGlypheComponent } from './components/classes-gameplay/Feca/feca-glyphe/feca-glyphe.component';
import { SteamGameplaysComponent } from './components/classes-gameplay/Steam/steam-gameplays/steam-gameplays.component';
import { SteamSupportComponent } from './components/classes-gameplay/Steam/steam-support/steam-support.component';
import { SteamDptZoneComponent } from './components/classes-gameplay/Steam/steam-dpt-zone/steam-dpt-zone.component';
import { HupperMeleeTerreComponent } from './components/classes-gameplay/Hupper/hupper-melee-terre/hupper-melee-terre.component';
import { HupperFullElemComponent } from './components/classes-gameplay/Hupper/hupper-full-elem/hupper-full-elem.component';
import { HupperGameplaysComponent } from './components/classes-gameplay/Hupper/hupper-gameplays/hupper-gameplays.component';
import { IopGameplaysComponent } from './components/classes-gameplay/Iop/iop-gameplays/iop-gameplays.component';
import { IopMeleeComponent } from './components/classes-gameplay/Iop/iop-melee/iop-melee.component';
import { EniGameplaysComponent } from './components/classes-gameplay/Eni/eni-gameplays/eni-gameplays.component';
import { EniSupportComponent } from './components/classes-gameplay/Eni/eni-support/eni-support.component';
import { EniPoisonComponent } from './components/classes-gameplay/Eni/eni-poison/eni-poison.component';
import { OugiGameplaysComponent } from './components/classes-gameplay/Ougi/ougi-gameplays/ougi-gameplays.component';
import { OugiMeleeComponent } from './components/classes-gameplay/Ougi/ougi-melee/ougi-melee.component';
import { OugiPoisonComponent } from './components/classes-gameplay/Ougi/ougi-poison/ougi-poison.component';
import { PandaGameplaysComponent } from './components/classes-gameplay/Panda/panda-gameplays/panda-gameplays.component';
import { PandaTankComponent } from './components/classes-gameplay/Panda/panda-tank/panda-tank.component';
import { RoubGameplaysComponent } from './components/classes-gameplay/Roub/roub-gameplays/roub-gameplays.component';
import { RoubDefaultComponent } from './components/classes-gameplay/Roub/roub-default/roub-default.component';
import { SacriGameplaysComponent } from './components/classes-gameplay/Sacri/sacri-gameplays/sacri-gameplays.component';
import { SacriMeleeComponent } from './components/classes-gameplay/Sacri/sacri-melee/sacri-melee.component';
import { SacriTankComponent } from './components/classes-gameplay/Sacri/sacri-tank/sacri-tank.component';
import { SadiGameplaysComponent } from './components/classes-gameplay/Sadi/sadi-gameplays/sadi-gameplays.component';
import { SadiDistComponent } from './components/classes-gameplay/Sadi/sadi-dist/sadi-dist.component';
import { SadiPoisonComponent } from './components/classes-gameplay/Sadi/sadi-poison/sadi-poison.component';
import { SadiSupportComponent } from './components/classes-gameplay/Sadi/sadi-support/sadi-support.component';
import { SramGameplaysComponent } from './components/classes-gameplay/Sram/sram-gameplays/sram-gameplays.component';
import { SramMeleeComponent } from './components/classes-gameplay/Sram/sram-melee/sram-melee.component';
import { XelorGameplaysComponent } from './components/classes-gameplay/Xelor/xelor-gameplays/xelor-gameplays.component';
import { XelorDistFeuComponent } from './components/classes-gameplay/Xelor/xelor-dist-feu/xelor-dist-feu.component';
import { XelorDistZoneComponent } from './components/classes-gameplay/Xelor/xelor-dist-zone/xelor-dist-zone.component';
import { XelorSupportComponent } from './components/classes-gameplay/Xelor/xelor-support/xelor-support.component';
import { ZobalGameplaysComponent } from './components/classes-gameplay/Zobal/zobal-gameplays/zobal-gameplays.component';
import { ZobalSupportComponent } from './components/classes-gameplay/Zobal/zobal-support/zobal-support.component';
import { ZobalMeleeComponent } from './components/classes-gameplay/Zobal/zobal-melee/zobal-melee.component';

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
            { path:'elio', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : ElioGameplaysComponent },
                    { path:'melee', component : ElioMeleeComponent },
                    { path:'dist', component : ElioDistComponent },
                ]
            },
            { path:'osa', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : OsaGameplaysComponent},
                    { path:'support', component : OsaSupportComponent },
                    { path:'melee', component : OsaDragonComponent },
                ]
            },
            { path:'cra', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : CraGameplaysComponent},
                    { path:'classic', component : CraDistClassicComponent }
                ]
            },
            { path:'eca', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : EcaGameplaysComponent},
                    { path:'dist', component : EcaDistComponent},
                ]
            },
            { path:'enu', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : EnuGameplaysComponent},
                    { path:'melee', component : EnuMeleeComponent},
                    { path:'support', component : EnuSupportComponent},
                ]
            },
            { path:'feca', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : FecaGameplaysComponent},
                    { path:'support', component : FecaSupportComponent},
                    { path:'glyph', component : FecaGlypheComponent},
                ]
            },
            { path:'steam', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : SteamGameplaysComponent},
                    { path:'support', component : SteamSupportComponent },
                    { path:'zone', component : SteamDptZoneComponent }
                ]
            },
            { path:'hupper', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : HupperGameplaysComponent},
                    { path:'melee', component : HupperMeleeTerreComponent },
                    { path:'elem', component : HupperFullElemComponent },
                ]
            },
            { path:'iop', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : IopGameplaysComponent},
                    { path:'melee', component : IopMeleeComponent }
                ]
            },
            { path:'eni', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : EniGameplaysComponent},
                    { path:'support', component : EniSupportComponent },
                    { path:'poison', component : EniPoisonComponent }
                ]
            },
            { path:'ougi', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : OugiGameplaysComponent},
                    { path:'melee', component : OugiMeleeComponent },
                    { path:'poison', component : OugiPoisonComponent }
                ]
            },
            { path:'panda', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : PandaGameplaysComponent},
                    { path:'tank', component : PandaTankComponent }
                ]
            },
            { path:'roub', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : RoubGameplaysComponent},
                    { path:'default', component : RoubDefaultComponent},
                ]
            },
            { path:'sacri', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : SacriGameplaysComponent},
                    { path:'melee', component : SacriMeleeComponent },
                    { path:'tank', component : SacriTankComponent }
                ]
            },
            { path:'sadi', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : SadiGameplaysComponent},
                    { path:'dist', component : SadiDistComponent },
                    { path:'poison', component : SadiPoisonComponent },
                    { path:'support', component : SadiSupportComponent }

                ]
            },
            { path:'sram', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : SramGameplaysComponent},
                    { path:'melee', component : SramMeleeComponent }
                ]
            },
            { path:'xel', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : XelorGameplaysComponent},
                    { path:'dist', component : XelorDistFeuComponent },
                    { path:'zone', component : XelorDistZoneComponent },
                    { path:'support', component : XelorSupportComponent },
                ]
            },
            { path:'zobal', component : GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : ZobalGameplaysComponent},
                    { path:'support', component : ZobalSupportComponent },
                    { path:'melee', component : ZobalMeleeComponent }
                ]
            }
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
