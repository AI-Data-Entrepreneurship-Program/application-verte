# Turtle

Ce repository contient le code source de l'application mobile de Turtle.
Ce projet est issu d'une formation (ou bootcamp) du programme Entrepreneurship in IATech.

Notre groupe s'est lancé dans la création d'une application accompagnant
l'utilisateur dans sa transition écologique avec des actions
adaptées à tous niveau d'investissement.

## Lancer l'application

La technologie utilisée ici est React Native afin d'avoir une application
cross platform. Pour lancer l'application en local vous aurez besoin d'Expo et NodeJS.

Vous aurez également besoin des identifiants vous permettant d'envoyer des
requêtes à notre api. Pour ce faire munissez-vous des identifiants et ajouter les
au fichier `./src/api/auth.js`.

```js
const username = ''; // username token here
const password = ''; // password token here
```

Après avoir installé les outils et ajouter les identifiants vous pouvez lancer les commandes suivantes dans votre invité de commande:

```
# avec yarn

yarn install
yarn start

# avec npm

npm install
npm start
```

Une fenêtre va alors s'ouvrir dans votre navigateur, et vous pourrez scanner
le QR code depuis l'application Expo sur votre téléphone, ce qui vous permettra de
tester l'application en direct. Si vous voulez tester l'application sur votre navigateur
cliquez sur le bouton `Run from web browser` dans le menu à gauche.

NOTE: L'application n'est pas optimisée pour le web, il y a donc des chances
qu'elle soit assez lente.

## Télécharger l'application

Si vous voulez télécharger l'application sous forme d'apk, il vous suffit
d'entrer cette commande et de suivre les indications dans votre invité de commandes.

```
# pour android

expo build:andoid

# pour ios

expo build:ios
```

NOTE: Vous pouvez également build la version web avec la commande
`expo build:web`, mais encore une fois, l'application n'est pas optimisée pour cette platforme.
Toutefois, nous avons déjà déployé l'application sur web à [cette](https://ia-entrepreneur-track-turtle.netlify.app/) adresse.
