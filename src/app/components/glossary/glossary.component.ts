import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.css'
})
export class GlossaryComponent {

  // { word:"", definition: "" },
  wordList: { word:string, definition:string }[] = [
    { word:"Modu", definition: " \"Modulation\", il s'agit du système permettant de changer son niveau temporairement. Si quelqu'un demande à faire un donjon \"modu\", celà veut dire que cette personne souhaite faire le donjon en étant modulé au niveau de ce donjon. Par exemple le donjon Moogr est un donjon de niveau 50, donc pour le faire en \"modu 50 \", on change notre niveau au niveau 50. Si vous avez besoin de plus d'informations, n'hésitez pas à consultaer la page du site sur la modulation (Divers => Modulation)."},
    { word:"S3", definition: "\"Stasis 3\", avant d'entrer dans un donjon, il est possible de choisir une difficulté. dans ce context, le nom donné à cette difficulté est le niveau de Stasis. Le niveau normal est Stasis2 (S2), et le plus souvent les gens souhaitent réaliser les donjons en Stasis 3 (S3) ou Stasis 5 (S5) car ce sont de bons compromis entre difficulté et bonus de récompenses (Et pour valider des exploits (\"succès\", \"achievements\"), aussi). Par exemple, quelqu'un qui souhaite réaliser le donjon moogr en difficulté Stasis 3 dira \"recrute pour dj Moogr S3\"." },
    { word:"S5", definition: "\"Stasis 5\", voir \"S3\"" },
    { word:"DPT", definition: "\"Dégat Par Tour\", l'équivalent de DPS dans d'autres jeux. Il s'agit des personnages dont le rôle principal dans une équipe est d'infliger de gros dégats." },
    { word:"Modulox", definition: "Il s'agit d'une quête journalière débloquée au niveau 51. Elle s'obtient en parlant au pnj Modulox se trouvant dans notre havre-sac. Celui-ci propose chaque jour de réaliser des donjons aléatoires en étant modulé." },
    { word:"Noza", definition: "\"Nozadah\", l'un des plus gros streamer et youtuber Wakfu. Il a réalisé un grand nombre de guides et de vidéos sur Wakfu." },
    { word:"Subli(s)", definition: "\"Sublimation(s)\", il s'agit de sortes de parchemins utilisables lors de l'enchantement d'items, qui ajoutent des effets variés." },
    { word:"Breche", definition: "Les brèches sont un type de contenu proposant des combats longs, où il est possible d'affronter des \"vagues\" de monstres pendant 40 tours. Elles sont particulièrement appréciées pour l'xp qu'elles apportent." },
    { word:"Dj", definition: "Donjon" },
    { word:"Stuff", definition: "L'ensemble des items équipés sur un personnage. Par exemple mon \"stuff 50\" est l'ensemble des items que je mets sur mon personnage quand il est niveau 50." },
    { word:"Enflammé", definition: "Il s'agit d'une mécanique de jeu. L'enflammé est un état que certaines classes peuvent appliquer sur un alié, qui fait que l'alié infligera des dégats autours de lui au début de son prochain tour." },
    { word:"Enfla", definition: "Voir \"Enflammé\"" },
    { word:"Echaudé", definition: "Il s'agit d'un debuff applicable par certaines classe sur les ennemis. Les ennemis qui se retrouvent avec un état échaudé prennent + de dégats indirects." },
    { word:"PW", definition: "\"Points de Wakfu\", il s'agit de la ressource additionelle que la plupart des classes possèdent, à côté des Points d'Action (PA). contrairement aux PA, les personnages ne récupèrent pas tous leurs PW au début de leurs tours. Chaque classe a une mécanique différente lui permettant de regagner des PW." },
    { word:"CC", definition: "\"Coup Critique\"" },
    { word:"PA", definition: "\"Points d'Action\"" },
    { word:"PM", definition: "\"Points de Mouvement\"" },
    { word:"PO", definition: "\"Portée\"" },
    { word:"Pando", definition: "\"Pandora\", le serveur multicompte francophone. Aussi le nom d'un PNJ de l'histoire principale." },
    { word:"Booster", definition: "L'équivalent de l'abonnement sur Wakfu." },
    { word:"Mode Hero", definition: "Il s'agit de la possibilité de jouer jusqu'à trois personnage du compte en même temps dans son groupe. Cette fonctionalité est réservée aux comptes sous Booster (= l'abonnement)." },
    { word:"Archi", definition: "\"Archimonstre\", un type de monstre rare qui n'apparait que quelques fois par jour, et ce de façon pseudo-aléatoire. En règle générale, il existe un archimonstre par famille de monstre (ex : un archi pour les bouftous, un pour les tofus, etc.). Ceux-ci ont souvent des drops rares. Ils font également partie de la quête de Ruel." },
    { word:"Method", definition: "Voir \"MethodWakfu\"" },
    { word:"MethodWakfu", definition: "Il s'agit d'un site de référence créé par des joueurs, contenant des guides et explications couvrant la majorité du contenu et des quêtes du jeu." },
    { word:"Zenith", definition: "Voir \"ZenithWakfu\"" },
    { word:"ZenithWakfu", definition: "Il s'agit d'un \"site de builds\", permettant aux joueurs de théoriser, prévisualiser et partager leurs builds." },
    { word:"BQ", definition: "\"Brise Quadramentale\", il s'agit de la ressource additionelle des Huppermage, qui remplace les PW chez eux." },
    { word:"hdv", definition: "\"Hotel De Vente\"" },
    { word:"CE", definition: "\"Concentration Elementaire\", le nom d'une sublimation épique très jouée." },
    { word:"Artéfact(s)", definition: "Un ensemble d'items de quête obtenables par des quêtes qui se débloquent automatiquement à certains niveaux. Ils sont essentiels à la progression de la quête principale. Les obtenir débloque également des passage sur la map externe. Un artefact permet par exemple de sauter par dessus de petits espaces/trous, ou encore de grimper à des lianes." },
    { word:"BU", definition: "\"Boss Ultime\", il s'agit d'un donjon très spécial, où il n'y a qu'un seul gros boss de donjon à tuer. Comme leur nom l'indique, les BU ont tendance à être assez difficiles." },
    { word:"TM", definition: "\"Tour Minérale\", il s'agit d'un donjon 3 joueurs." },
    { word:"Influ", definition: "\"Influence\", il s'agit d'une série de sublimations donnant des bonus de coup critique." },
    { word:"Mimic", definition: "Il s'agit de sortes de coffres animés qui ont une chance de spawn aléatoirement en donjon lorsqu'un mob ennemi meurt. Elles n'attaquent pas, et disparaissent après deux tours, ou si tous les ennemis meurent. Il existe différents types de Mimic, chacune ayant des drops différents. La plus prisée est la Mimic Runique, laquelle peut drop des Sublimations telles que Influence." },
    { word:"QE", definition: "\"Quêtes environnementales\", il s'agit des quêtes qui aparaissent lorsqu'on rentre dans une zone, et qui demandent d'accomplir des objectifs variés, tels qu'interagir avec un certain nombre d'objets, combattre des groupes de monstres, ou encore être le premier à trouver un objet dans la zone." },
    { word:"PP", definition: "\"Prospection\", la statistique qui augmente le taux de drop. Elle est cappée à un maximum de 200, peu importe la source (Conso, Challenges, bonus de zones, etc.)." },
    { word:"HP", definition: "\"Health Points\", les points de vie, en français." },
    { word:"rall PA", definition: "Il s'agit du fait de retirer des PA à une entité. Le terme vient de Dofus, du sort \"Ralentissement\" du xelor." },
    { word:"rall PM", definition: "Il s'agit du fait de retirer des PM à une entité." },
    { word:"rall res", definition: "Il s'agit du fait de retirer de la resistance à une entité. Notez qu'il est possible d'enlever un maximum de 200 res par entité." },
  ];

  // Reminder : sorting in constructor rather than onInit because that way it's statically generated when building. This avoids having to have the client sort the array every single time the page loads.
  constructor(){
    this.sortWordList();
  }

  sortWordList() {
    this.wordList.sort((a, b) => a.word.localeCompare(b.word));
  }

}
