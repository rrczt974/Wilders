/* 

Créer un projet node et utilise un paquet externe :
Tu dois créer un nouveau projet appelé wilders.
Lorsque tu lances la commande npm start dans la console, le programme doit afficher les noms de 4 de tes collègues wilder dans des couleurs différentes. Pour ce faire, utilise le module chalk.
Ton code doit être versionné et disponible sur ton compte github.
Demande à un de tes collègues de le cloner et de le tester (et clone et teste le code d’un collègue 😉).

*/

import chalk from "chalk";

console.log(chalk.blue('Jeremy') + " " + chalk.red('Marvin') + " " + chalk.yellow('Peny') + " " + chalk.grey('Flavien'));