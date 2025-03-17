import { Routes } from '@angular/router';

/* Generic things */
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HowToStreamComponent } from './components/how-to-stream/how-to-stream.component';
import { ThemesComponent } from './components/themes/themes.component';

/* Stuffs/gear suggestions per level*/
import * as StuffsComponents from './components/stuffs';

/* Gameplay guides */
import * as gameplayComponents from './components/classes-gameplay';

/* Rifts guides */
import * as RiftComponents from './components/rifts';

/* Guides misc */
import { DungeonsComponent } from './components/dungeons/dungeons.component';
import { MimicsComponent } from './components/mimics/mimics.component';
import { ModulationComponent } from './components/modulation/modulation.component';
import { ExternalResourcesComponent } from './components/external-resources/external-resources.component';
import { EldersWisdomComponent } from './components/elders-wisdom/elders-wisdom.component';
import { KamasTipsComponent } from './components/kamas-tips/kamas-tips.component';
import { EnchantementComponent } from './components/enchantement/enchantement.component';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { TierlistMakerComponent } from './components/tierlist-maker/tierlist-maker.component';
import { BetteringWakfuComponent } from './components/bettering-wakfu/bettering-wakfu.component';


export const routes: Routes = [
    { path:'home', component : HomeComponent },    
    { path:'beforeGearing', component : StuffsComponents.StuffPagesLayoutComponent,
        children :[
            { path:'', component : StuffsComponents.BeforeGearingUpComponent },
        ] },
    { path:'stuff', component : StuffsComponents.StuffPagesLayoutComponent,
        children :[
            { path:'20', component : StuffsComponents.Stuffs20Component },
            { path:'50', component : StuffsComponents.Stuffs50Component },
            { path:'80', component : StuffsComponents.Stuffs80Component },
            { path:'110', component : StuffsComponents.Stuffs110Component },
            { path:'140', component : StuffsComponents.Stuffs140Component },
            { path:'170', component : StuffsComponents.Stuffs170Component },
            { path:'200', component : StuffsComponents.Stuffs200Component },
            { path:'230', component : StuffsComponents.Stuffs230Component },
        ]
     },
    { path:'gameplays', component : gameplayComponents.GameplaysPageLayoutComponent,
        children :[
            { path:'', component :gameplayComponents.ClassesGameplayComponent },
            { path:'elio', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.ElioGameplaysComponent },
                    { path:'base', component : gameplayComponents.ElioBasicComponent},
                    { path:'melee', component : gameplayComponents.ElioMeleeComponent },
                    { path:'dist', component : gameplayComponents.ElioDistComponent },
                ]
            },
            { path:'osa', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.OsaGameplaysComponent},
                    { path:'base', component : gameplayComponents.OsaBasicComponent },
                    { path:'support', component : gameplayComponents.OsaSupportComponent },
                    { path:'melee', component :gameplayComponents. OsaDragonComponent },
                ]
            },
            { path:'cra', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.CraGameplaysComponent},
                    { path:'base', component : gameplayComponents.CraBasicComponent},
                    { path:'classic', component : gameplayComponents.CraDistClassicComponent }
                ]
            },
            { path:'eca', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.EcaGameplaysComponent},
                    { path:'dist', component : gameplayComponents.EcaDistComponent},
                    { path:'support', component : gameplayComponents.EcaSupportComponent},
                ]
            },
            { path:'enu', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.EnuGameplaysComponent},
                    { path:'melee', component : gameplayComponents.EnuMeleeComponent},
                    { path:'support', component : gameplayComponents.EnuSupportComponent},
                ]
            },
            { path:'feca', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.FecaGameplaysComponent},
                    { path:'support', component : gameplayComponents.FecaSupportComponent},
                    { path:'glyph', component : gameplayComponents.FecaGlypheComponent},
                ]
            },
            { path:'steam', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.SteamGameplaysComponent},
                    { path:'support', component : gameplayComponents.SteamSupportComponent },
                    { path:'zone', component : gameplayComponents.SteamDptZoneComponent },
                    { path:'turret', component : gameplayComponents.SteamTourelleComponent }
                ]
            },
            { path:'hupper', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.HupperGameplaysComponent},
                    { path:'melee', component : gameplayComponents.HupperMeleeTerreComponent },
                    { path:'elem', component : gameplayComponents.HupperFullElemComponent },
                ]
            },
            { path:'iop', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.IopGameplaysComponent},
                    { path:'melee', component : gameplayComponents.IopMeleeComponent }
                ]
            },
            { path:'eni', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.EniGameplaysComponent},
                    { path:'support', component : gameplayComponents.EniSupportComponent },
                    { path:'poison', component : gameplayComponents.EniPoisonComponent }
                ]
            },
            { path:'ougi', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.OugiGameplaysComponent},
                    { path:'melee', component : gameplayComponents.OugiMeleeComponent },
                    { path:'poison', component : gameplayComponents.OugiPoisonComponent }
                ]
            },
            { path:'panda', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.PandaGameplaysComponent},
                    { path:'tank', component : gameplayComponents.PandaTankComponent }
                ]
            },
            { path:'roub', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.RoubGameplaysComponent},
                    { path:'default', component : gameplayComponents.RoubDefaultComponent},
                ]
            },
            { path:'sacri', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.SacriGameplaysComponent},
                    { path:'melee', component : gameplayComponents.SacriMeleeComponent },
                    { path:'tank', component : gameplayComponents.SacriTankComponent }
                ]
            },
            { path:'sadi', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.SadiGameplaysComponent},
                    { path:'dist', component : gameplayComponents.SadiDistComponent },
                    { path:'poison', component : gameplayComponents.SadiPoisonComponent },
                    { path:'support', component : gameplayComponents.SadiSupportComponent }

                ]
            },
            { path:'sram', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.SramGameplaysComponent},
                    { path:'melee', component : gameplayComponents.SramMeleeComponent }
                ]
            },
            { path:'xel', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.XelorGameplaysComponent},
                    { path:'dist', component : gameplayComponents.XelorDistFeuComponent },
                    { path:'zone', component : gameplayComponents.XelorDistZoneComponent },
                    { path:'support', component : gameplayComponents.XelorSupportComponent },
                ]
            },
            { path:'zobal', component : gameplayComponents.GenericClassPageLayoutComponent,
                children :[
                    { path:'', component : gameplayComponents.ZobalGameplaysComponent},
                    { path:'support', component : gameplayComponents.ZobalSupportComponent },
                    { path:'melee', component : gameplayComponents.ZobalMeleeComponent },
                    { path:'support', component : gameplayComponents.ZobalSupportComponent },
                    { path:'dopou', component : gameplayComponents.ZobalDoPouComponent }
                ]
            }
        ] },

    { path:'dungeons', component : DungeonsComponent },

    { path:'themes', component : ThemesComponent },
    { path:'howToStream', component : HowToStreamComponent },
    { path:'modulation', component : ModulationComponent },
    { path:'about', component : AboutComponent },
    { path:'extResources', component : ExternalResourcesComponent },
    
    { path:'eldersWisdom', component : EldersWisdomComponent },
    { path:'kamas', component : KamasTipsComponent },
    { path:'enchant', component : EnchantementComponent },
    { path:'mimics', component : MimicsComponent },
    { path:'glossary', component : GlossaryComponent },

    { path:'rift', component : RiftComponents.RiftPageLayoutComponent, // todo : create layout with subnavar to navigate between rifts easily (like /stuff) OR side bar
        children :[
            { path:'', component : RiftComponents.RiftOverviewComponent },
            { path:'tainela', component : RiftComponents.RiftTainelaComponent },
            { path:'sufokia', component : RiftComponents.RiftSufokiaComponent },
        ]
    },
    { path:'tierlist', component : TierlistMakerComponent },
    { path:'bettering-wakfu', component : BetteringWakfuComponent },
    { path:'todo', component : InProgressComponent },

    { path:'',   redirectTo: '/home', pathMatch: 'full' },
    { path:'**', component: PageNotFoundComponent }
];
