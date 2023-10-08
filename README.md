# node-ws-counter

## Installation
- Installer [Node.js](https://nodejs.org/fr) et [Git](https://git-scm.com/)
- [Télécharger le code](https://github.com/dsaadesignv/node-ws-counter.git) ou cloner le _repository_ avec la commande :
```console
$ git clone git@github.com:dsaadesignv/node-ws-counter.git
```
- Installer les dépendances depuis le dossier node-ws-counter (ou node-ws-counter-master)
```console
$ cd chemin/node-ws-counter
$ npm install
```

## Usage
- Dans le ficher server.js modifiez l'adresse IP avec celle de votre machine, ligne 45
```javascript
const ipAddress = '192.168.0.27';
```
- Lancer le script
```console
$ node server.js
```

## Changer l'apparence
- Modifier les styles définis entre les balise `<style>`et `</style>` du cichier `index.html`
- `body` correspond à l'arrière-plan et `#counter` au nombre
- Tout sur CSS : https://developer.mozilla.org/fr/docs/Web/CSS