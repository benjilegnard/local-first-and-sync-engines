---
lang: fr
---


<!-- .slide: data-background-image="images/hollow-knight/city-of-tears.webp" data-background-position="center center" data-background-size="cover" --> 
# Local-first <br/>& <br/>sync-engines : l'architecture du futur ?



<!-- .slide: data-background-image="images/hollow-knight/hollow-knight.webp" data-background-position="center center" data-background-size="cover" --> 
## 1. Notre héros du jour

Notes :
- un développeur web, dans sa zone de confort. (~ 2 minutes)
- en reconversion, découvre le monde


## Front / Back
<div id="classic-architecture"></div>

Notes :
- il arrive sur les projets et on lui dit, tu va faire du front
- il fait sa feature, en local, boume, il livre et là : bugs de partout, on peut cliquer plusieurs fois sur un bouton, son appli crashe en cas de réponse 500 du serveur.


### le dev web front aujourd'hui c'est l'enfer
<img src="images/memes/npm-massive-worm.jpeg" style="max-height:50vh"/>
Notes :
- bon... ceci n'est pas un talk pour cracher sur l'écosystème NPM
- ni sur js, ni sur node.js
- on va cracher sur le réseau surtout


### Taille des bundle javascript.
<img src="images/memes/node-modules-big-ahah.webp" style="max-height:50vh"/>

- 📦 ne sera pas addressée dans ce talk.<!-- .element class="fragment"-->
Notes :
- oui, désolé, c'est pas le sujet
- contexte, je vais parler d'APPLICATIONS WEB, pas de sites statiques.
- ça s'applique aussi au mobile


### Architecture... populaire ?
<div id="cloud-first-software"></div>
<!--<img src="schemas/cloud-first-software.webp"/>-->

Notes :
- SPA/UI <=> API <=> DB
- prenons une architecture typique client serveur
- on fait ça de base en démarrant un nouveau projet.
- ca a des avantages, mais beaucoup de problèmes.
- une base de données centralisée, un bon gros server spring-boot, du java, de l'angular ou du react en front


### lenteurs principalement dues au réseau, asynchronicité
```
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy             3,000   ns        3 us
Send 1K bytes over 1 Gbps network       10,000   ns       10 us
Read 4K randomly from SSD*             150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from disk    20,000,000   ns   20,000 us   20 ms  80x memory, 20X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms
```
[Latency numbers every programmer should know]
<https://gist.github.com/jboner/2841832>


#### Latence
<div id="latency-balls"></div>


#### Latence (source)

<https://planetscale.com/blog/caching>

<img class="qrcode" src="images/qrcodes/qrcode-planetscale-caching.png"/>

Notes :
- à garder en tête, ici on est à l'intérieur d'un ordinateur
- en dessous de la milliseconde, si vous avez des appliquations qui mettent plus d'une seconde à démarrer faut se poser des questions
- nos applications web et distribuées d'aujourd'hui elles ont un impondérable: la latence réseau


#### Network Calls
<div id="network-balls"></div>

- Qu'est ce qui est "acceptable" ?

Notes :
- C'est physique, la distance fait qu'on doit gérer ça
- acceptable en terme de tmps de réponse ? je pose la question ?
- à l'heure ou la loi de moore n'en finit plus, mais on ne la voit plus
- des centaines de milliards de petaflop de GPU dans le cloud.


#### Pas tout le monde il a la fibre
- 🚃 Dans les transports<!-- .element class="fragment"-->
- 🛜 Wifi de conférence<!-- .element class="fragment"-->
- 🍻 Au fond de votre bar préféré<!-- .element class="fragment"-->
Notes :
- j'entends souvent : des trucs du genre oui, mais à l'heure de la fibre,
- à l'heure du cloud et du haut débit, c'est pas si grave
- c'est pas grave si notre api principale mets 1,5 secondes à répondre ? QUOI ? je hurle
- 


#### Rappel
- 300ms 👀

Notes :
- on percoit la lenteur, la latence à partir d'environ ce temps
- en dessous, on a une "impression" de rapidité
- c'est pas parce qu'on fait des nimations à cette lenteur que vos services sont "autorisés" à prendre autant de temps  !!!


### What could go wrong ?

```javascript
import React, { useState, useEffect } from 'react'; 

function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      // here be dragons ?
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError (error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return ( 
    <div>
      <h1>Fetched Data</h1>
	  <pre>{JSON. stringify(data, null, 2)}</pre> 
	</div>
  );
}
```

#### EVERYTHING!<!-- .element class="fragment"-->
Notes :
- Qu'est ce qui va pas dans ce code ? en dehors que c'est du react
- // TODO ajouter du code fetch / json


### Synchronisation...
- plusieurs onglets ouvert<!-- .element class="fragment"-->
- ctrl+R / F5 qui cassent tout<!-- .element class="fragment"-->
- state!<!-- .element class="fragment"-->
Notes :
- ça vous est déjà arriver de remplir un champ de formulaire et de le perdre en fermant l'onglet ?
- problèmes de SPA classique


### Gestion d'état
- Plus de session en back (*tousse tousse* REST)
- Guess what... c'est le front qui gère...
- Complexité ++
Notes :


### Optimistic UI ?
- Oui, mais...
<https://stephaniewalter.design/fr/blog/tricher-grace-ux-plus-de-code-optimisable/>
- // TODO example
Notes :
- On a tenté de mitigier ces latences.
- Par des pratiques UI, example, like sur twitter, direct animation, mais si échec ?


### There is no cloud
#### it's just someone else's computer


### Data leaks
🏴‍☠️

Notes :
- Pourtant il y a, du moins il y aurait
- Du coup est apparu le concept principal dont je veux parler aujourd'hui
- Le "local-first"


### Complexité du front
- gestion d'erreurs possibles
- asynchronicité / conditions de course
Notes :
- aujourd'hui si on a des SPA, gestion d'état et que le front web est devnu
- c'es à cause de la latence à gérer



<!-- .slide: data-background-image="images/hollow-knight/bench.webp" data-background-position="center center" data-background-size="cover" --> 
## 2. Qu'est-ce qu'on VEUT faire avec le local-first ?
Notes :
- Bon c'est quoi, d'où ça sort ?


### Ink and switch
<img src="public/images/qrcodes/qrcode-inkandswitch-localfirst.png" class="qrcode"/>

Essai : [https://www.inkandswitch.com/essay/local-first/](https://www.inkandswitch.com/essay/local-first/)

Notes :
- Le concept n'est pas de moi
- Regroupe quelques concepts sous la même bannière.


### Principes du "local-first"


#### 1. No spinners: work at your fingertips
- 🛞 Pas de spinner<!-- .element class="fragment"--> 
- 💈 Pas progress-bar<!-- .element class="fragment"-->
- 💀 Pas de squelettes<!-- .element class="fragment"-->


#### 2. Your work is not trapped on one device
- 📦 Au delà du local storage<!-- .element class="fragment"-->
- 📱 Mobile<!-- .element class="fragment"-->
- 💻 Portable<!-- .element class="fragment"-->
- 🖥️ Pas portable<!-- .element class="fragment"-->


#### 3. The network is optional
- Le.<!-- .element class="fragment"-->
- Réseau.<!-- .element class="fragment"-->
- Est.<!-- .element class="fragment"-->
- Optionnel.<!-- .element class="fragment"-->
Notes :
- oui, ironiquement, il y a tout ajd pour qu'une app web fonctionne hors ligne
- `navigator.connection`
- service worker


<img src="image/memes/phoebe-teaching-joey-in-friends.jpg" style="max-height: 40vh"/>


#### 4. Seamless collaboration with your colleagues
- Si pas de centralisation...
- Pas de `409 Conflict`
Notes :
- changement de paradigme avec différence d'état
- on considère que tout le monde a tout le temps la même version
- gérer les conflits avec les données des autres plutôt que sous une autorité centrale


#### 5. The long now

Notes :
- L'idée, c'est que vous faite du code pour longtemps
- Sur des formats qui périment pas au bout de 3 ans
- 


#### 6. Security and privacy by default
- RGPD, anyone ?


#### 7. You retain ultimate ownership and control
- Vous possédéz vos données.
- Vous contrôlez vos données.


### Les idéaux...
- c'est bien d'en avoir.
- Dans la réalité...


### Problèmes

- pas très vendeur
- on veut pouvoir collaborer, si c'est que local... bof
- c'est là ou on veut avoir besoin...


### Dans quel cas d'usage
- ✅ édition de documents/fichiers (graphes/canvas, dessins, texte, musique)<!-- .element class="fragment"-->
- ✅ données personnelles (notes, chat, calendriers, budget, localisation)<!-- .element class="fragment"-->
- ❌ Back office CRUD de gestion<!-- .element class="fragment"-->
- ✅ Back office CRUD de gestion<!-- .element class="fragment"-->
- ❌ réseau social<!-- .element class="fragment"-->
- ❌ e-commerce<!-- .element class="fragment"-->
- ❌ banque<!-- .element class="fragment"-->

Notes :
- tout ce qui a besoin d'une centralisation / autorité / source of truth
- CRUD de gestion : si pas besoin d'instantanéité
- en vrai



<!-- .slide: data-background-image="images/hollow-knight/hornet.jpeg" data-background-position="center center" data-background-size="cover" --> 
## 3. Qu'est ce que ça veut dire, et en quoi c'est différent ?


### local-first: comment on fait ?

On a vu ce que c'était maintenant, comment on implémente ?


### Un petit schéma
<img src="schemas/local-first-software.webp" />


<div id="local-first-software"></div>
Notes :
- l'idée c'est que tout tourne en local d'abord.


#### Base de données locale
- IndexedDB (natif)
- SQLite
- PGLite
- Turso 🦀
- DuckDB 🦆
- TinyBase
- etc...
Notes :
- BDD qui tourne dans votre navigateur
- en WASM pour les deux derniers
- y'en asurement plein d'autres


#### But why?
<img src="images/memes/ryan-reynolds-but-why.gif" alt="L'acteur Ryan Reynolds en tenue de chirurgien quie demande 'mais pourquoi?'"/>

Notes :
- vitesse
- offline
- privacy
- simplicité


#### Sync Database
- Supabase
- Firebase
- InstantDB
- PouchDB + CouchDB
- Triplit
- Fireproof
- Livestore
- etc...
Notes :
- ou service paas/saas


#### Service Worker
Notes :
- thread local on va dire
- permets d'intercepter des requêtes http d'assets et :
- les pré-charger, les mettres en cache.


#### et les PWA alors ?
Notes :
- les deux supporte un mode offline
- pas indispensable, mais très pratique
- mode connecté / déconnecté
- notifications natives
- on reste sur des appels api en cache


### 3.2 sync engine : qu'est-ce que c'est ?
- 🧩 la pièce manquante à notre puzzle<!-- .element class="fragment"-->
- 🔄 Synchronise IHM & BDD<!-- .element class="fragment"-->
- 🧙 Magic!<!-- .element class="fragment"-->


### la logique est côté front, plus de serveur "intelligents", le back sert à synchroniser uniquement


### différentes approches pour un même but: agir d'abord, synchronizer ensuite



<!-- .slide: data-background-image="images/hollow-knight/rest.jpeg" data-background-position="center center" data-background-size="cover" --> 
## 4. Notre héros galère, mais va s'adapter

Notes :
- de nouveaux problèmes apparaissent, quelles solutions existent ? ( ~ 7 minutes )


### Un moteur de synchronisation

Notes:
- les devs, vous en utilisez un tous les jours.


### Qui utilise ça déjà ?
- Discord
- Slack
- Notion
- Figma
- Linear
- Google Docs


### expérimentations


### le classique du distribué : comment résoudre les conflits
```
// TODO implement the conflictHandler() method
```
Notes :
- pour le coup c'est un vrai todo,
- en mode certaines solutions vous demande d'implémenter ça


### Git


### CRDT 
- __C__onflit-free 
- __R__eplicated 
- __D__ata
- __T__ypes
Notes :
- au coeur de ces moteurs de synchro, il y a la notion primordiale
- l'idée c'est qu'au niveau du modèle de donnée, la résolution de conflits va être automatique


### Yjs


### Example de CRDT avec Yjs

```typescript
import * as Y from 'yjs'

// Yjs documents are collections of
// shared objects that sync automatically.
const ydoc = new Y.Doc()
// Define a shared Y.Map instance
const ymap = ydoc.getMap()
ymap.set('keyA', 'valueA')

// Create another Yjs document (simulating a remote user)
// and create some conflicting changes
const ydocRemote = new Y.Doc()
const ymapRemote = ydocRemote.getMap()
ymapRemote.set('keyB', 'valueB')

// Merge changes from remote
const update = Y.encodeStateAsUpdate(ydocRemote)
Y.applyUpdate(ydoc, update)

// Observe that the changes have merged
console.log(ymap.toJSON()) // => { keyA: 'valueA', keyB: 'valueB' }
```


### décentralisation, réplication etc...

Notes :
- 


<!-- .slide: data-background-image="images/hollow-knight/bench-crooked.jpeg" data-background-position="center center" data-background-size="cover" --> 
## 5. Les péripéties
Notes :
Notre héros rencontre des péripéties, différentes implémentations, comparatifs de solutions existantes pour arriver à notre but.  ( ~ 10 minutes )


### bases de données

- indexedDB + pouchdb
- rxdb + couchdb + pouchdb
- electric sql
- fireproof
- orbitDB 


### conflict free data-types (CRDT): Yjs / automerge
- Yjs
- automerge


### sync engines
- zero
- replicache 
- electricSQL
- Livestore
- Powersync
- Evolu
- Ditto
- etc...
Notes :
- J'ai pas tout testé, voir encore rien du tout, juste zero me plait


#### Zero
<img src="images/logos/zero.svg" />
<img src="images/qrcodes/qrcode-zero.png" class="qrcode" />

[https://zero.rocicorp.dev/](https://zero.rocicorp.dev/)

Notes :
- // TODO qrcode + logo


#### Show us the code!
```typescript
function Playlist({id}: {id: string}) {
  // This usually resolves *instantly*, and updates reactively
  // as server data changes. Just wire it directly to your UI –
  // no HTTP APIs, no state management no realtime goop.
  const [playlist] = useQuery(
    zero.query.playlist
      .related('tracks', track => track
        .related('album')
        .related('artist')
        .orderBy('playcount', 'asc'))
      .where('id', id)
      .one()
  );

  const onStar = (id: string, starred: boolean) => {
    zero.mutate.track.update({
      id,
      starred,
    });
  }

  if (!playlist) return null;

  return (
    <>
      <div>{playlist.name}</div>
      <div>
        {playlist.tracks.map(track => (
          <TrackRow key={track.id} track={track} onStar={onStar}/>
        ))}
      </div>
    </>
  );
}
```
Notes :
- c'est tiré de la doc officielle
- on est sur du React, vous avez un hook
- méthodes mutate / query


### Apparté sur Zero
- encore en alpha
- pas complètement "local-first" pour l'instant
Notes :
- je préfères pas le recommander, mais
- la base est là


### Query / Mutation
| ?  | HTTP |
| - | - |
| query  | GET  |
| mutate  | POST  |
|   | PUT  |
|   | PATCH  |
|   | DELETE  |
|   | OPTIONS |
|   | TRACE |
|   | CONNECT |
|   | HEAD |

Notes :
- Si vous avez fait du graphql ca doit vous parler,
- Bien plus simple à appréhender
- de toutes facons est-ce que vous utilisiez vraiment autre chose que GET et POST
- y'a pas que Zero qui offre ce genre d'api, la plupart des stores / sync engines s'en approche



<!-- .slide: data-background-image="images/hollow-knight/mantis-lords.webp" data-background-position="center center" data-background-size="cover" -->
## 6. La souffrance du changement
Notes :
- , notre héros galère pour atteindre son but  ( ~ 5 minutes )


### changement de paradigme
<img src="schemas/data-fetching.png"/>


<div id="data-fetching"></div>


<img src="schemas/data-sync.png"/>


<div id="data-sync"></div>


### MPA / SPA / PWA / local-first
Notes :
- déjà un paradigme en ce moment


### Intérêts vs coûts d'implémentation.
Notes :
- faut pas se leurre, la plupart de nos clients vont pas en voir l'intérêt
- 


### et la sécurité dans tout ça ?
🛡️?
Notes :
- pas encore creusé, mais elle est à implémenter au niveau du serveur de syncro moteur


### Optimistic Reads & Writes
- write to local device first ?
- write to cloud first ?


### Authorité serveur vs décentralisation ?
Notes :
- pas de réponse , pas creusé encore.
- en théorie, yks automerge etc peuvent fonctionner en P2P
- jazz ditto evolu


### et si je veux une API
Notes :
- en gros votre API est un client du moteur de synchronization
- déplacé côté serveur, nécéssite de code isomorphique/universel


### oui, mais si on danse ?
- si besoin d'autorité centrale
- 
Notes :
- ( Il n'y a pas de balles en argent = quand ne pas l'utiliser )
- 



<!-- .slide: data-background-image="images/hollow-knight/blue-lake.webp" data-background-position="center center" data-background-size="cover" -->
## 7. Retour à la situation initiale


### Démonstration / POC.
Pas aujourd'hui.


### Pourquoi c'est bien tout ça ?
- plus besoin de librairie de gestion d'état ?
- la base de données locale est votre état.
- redonner contrôle à vos utilisateurs


### C'est toujours des webapps
- on reste sur du web (js/html/css)
- webap mobile 


### Juste la manière d'interagir au niveau client serveur n'est plus du tout la même
- pas de loaders!
- pas d'asynchrone dans le code métier!


### Move logic to the frontend
Notes :
- je vais me prendre des tomates.
- Mais c'est une bonne chose.
- on peut prototyper rapidement sans ce soucier de l'hosting / database dans un premier temps.
- arrêtons de siloter devs back vs devs front, faites tout dans le même language = le bonheur


<!-- .slide: data-background-image="images/hollow-knight/colloseum-arena.webp" data-background-position="center center" data-background-size="cover" -->
## 8. Conclusion

Notes :
- est-ce que ça va changer le développement web et mobile ? (~= 3 minutes) 
- local first et sync engines, deux concepts différents, mais reliés
- ensemble on est plus fort
- 7 idéals du local -first, controversé
- sync engines va peut-être devenir le nouveau défaut (pas mme irma)


### gneugneu, ça existait déjà.
- Oui, mais...

Notes :
- dans des cas de niche (mon premier vrai projet pwa / mobile => implémentait lui même la sync)
- vous étiez obligé de l'implémenter vous-même.
- de plus en plus de libs/framework
- écosystème:


### Ce qui a changé surtout :


#### Ecosystème
<https://www.localfirst.fm/landscape>

<img class="qrcode" src="images/qrcodes


#### Adoption
<img src="images/local-first-popularity.jpeg" />


### La complexité
- Devrait être abstraite par vos fwk.
- Pas dans vos serveurs.


### Inconvénients
- résoudre des conflits, reste un problème compliqué
- applications distribuées : modèle mental
- limites dans les choix d'hébergeurs
- vendor-lock / sticky
Notes :
- pas de balle en argent





### Agentique Sync ?
<img src="schemas/agentic-ia-sync.webp" />


### Au minimum, pensons-y.
Notes :
- essayez, passez une partie de vos applis dessus.
- en mode POC.


### Votre serviteur

<img src="images/memes/benjilegnard.png" style="border-radius:50%"/>

`@benjilegnard`

<img src="images/logos/onepoint-logo.png" class="fragment" />
Notes :
- je m'appelle..
- RS
-



<!-- .slide: data-background-image="images/hollow-knight/thanks.jpeg" data-background-position="center center" data-background-size="cover" -->
## Merci !
Notes :
😘 Et jouez à Hollow Knight / Silksong


## Slides / Feedback

<div class="row">
<a>
Feedback :<br/>
<img src="images/qrcodes/bdxio-openfeedback.png" /></a>
<a>
Slides :<br/>
<img src="images/qrcodes/slides-on-github.png" /></a>
</div>
