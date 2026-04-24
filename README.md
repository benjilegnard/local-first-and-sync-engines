---
lang: fr
---

# Local-first et sync-engines, l'architecture du futur ?

Une conférence de [Benjamin Legrand](https://www.benjaminlegrand.net) sur un pattern d'architecture moderne, efficace et performant, mais pas forcément simple à appréhender.

## Abstract

```markdown
Et si on arrêtait de "récupérer" des données ? et qu'on les synchronisait plutôt.

Vous avez surement déjà utilisé ce type d'applications web, qui semblent un peu magiques tellement elles sont rapides et agréables à utiliser : Linear, Figma, Trello, pour n'en citer que quelques-unes.

Toutes se sont retrouvées autour du concept de "local-first" et à implémenter ce qu'on appelle un moteur de synchronisation.

Finies les requêtes réseau à chaque interaction : c'est le retour du hors-ligne, et de l'instantanéité dans nos interfaces utilisateurs.

Comment ça fonctionne ? Quels sont les impacts de cette architecture sur nos projets, et qu'est-ce que ça veut dire pour le code de nos applications ?

Ensemble, nous verrons les grands principes du local-first, qu'est-ce qu'un moteur de synchronisation, et quelques exemples de librairies et bases de données permettant de les mettre en œuvre.
```

## Sélections

Conférence sélectionnée / donnée à :

- [BDX/IO]() - le 7 novembre 2025.
- [Codeurs en Seine](https://www.codeursenseine.com/2025/programme/conference-b-2-local-first-et-sync-engines-l-architecture-du-futur-benjamin-legrand) - le 21 novembre 2025.
- ~~Snowcamp à Grenoble - le  14-16 février 2026~~ annulé, indisponible
- [Touraine Tech 2026](https://touraine.tech/talk/cmfz7neh8001o1enve10obqb4?day=2) - le 13 février
- [Devoxx FR 2026](https://m.devoxx.com/events/devoxxfr2026/talks/26845/localfirst-et-syncengines-larchitecture-du-futur-) - le 23 Avril 2026
- [DevLille](https://devlille.fr/talk-page-52218b28-7876-437b-9637-590ba597e81c/) - le 12 juin 2026
- [Sunny Tech](https://sunny-tech.io/sessions/cmlgj2kfq01ib01k2019lf1r2) - le 2 juillet 2026

## Slides 

Visibles sur <https://benjilegnard.github.io/local-first-and-sync-engines/>

## Plan

### 1. Notre héros du jour, un développeur web, dans sa zone de comfort. ( ~ 2 minutes )
- le dev web front aujourd'hui c'est l'enfer
- taille monstrueuse des bundle javascript.
- lenteurs principalement dues au réseau, asynchronicité
- synchronisation d'onglets, ctrl+R / F5 qui cassent tout
- on a accepté "la merdification du web"
### 2. Qu'est-ce qu'on VEUT faire avec le local-first ? ( ~ 3 minutes )
- simplicité du local, instantanéité des interactions
- tout faire tourner localement => une DX améliorée
- Maitriser ses données (RGPD yo!)
- ne plus afficher de loaders partout
### 3. Qu'est ce que ça veut dire, et en quoi c'est différent de nos applis "SPA+API Rest classiques" ( ~10 minutes
- local-first: qu'est-ce que c'est ?
- sync engine : qu'est-ce que c'est ?
- la logique est côté front, plus de serveur "intelligents", le back sert à synchroniser uniquement
- différentes approches pour un même but: agir d'abord, synchronizer ensuite
### 4. Notre héros galère, mais va s'adapter: de nouveaux problèmes apparaissent, quelles solutions existent ? ( ~ 7 minutes )
- expérimentations, galères et incompréhensions
- le classique du distribué : comment résoudre les conflits
- CRDT (Conflit-free Replicated Data Types)
- décentralisation, réplication etc...
### 5. Notre héros rencontre des péripéties, différentes implémentations, comparatifs de solutions existantes pour arriver à notre but.  ( ~ 10 minutes )
- bases de données  : rxdb + couchdb + pouchdb / electric sql / fireproof / orbitDB 
- conflict free data-types (CRDT): Yjs / automerge
- sync engines : zero / replicache 
### 6. La souffrance du changement, notre héros galère pour atteindre son but  ( ~ 5 minutes )
- changement de paradigme
- Intérêts vs coûts d'implémentation.
- et la sécurité dans tout ça ?
- oui, mais si on danse ? ( Il n'y a pas de balles en argent = quand ne pas l'utiliser )
### 7. Retour à la situation initiale ( ~ 5 minutes )
- Démonstration / POC.
- C'est toujours des webapps
- Juste la manière d'interagir au niveau client serveur n'est plus du tout la même
### 8. Conclusion et élargissement, est-ce que ça va changer le développement web & mobile ?  ( ~= 3 minutes )
- j'espère que oui.
- Au minimum, pensons-y.

## Sources 

- The ink and switch essay : <https://www.inkandswitch.com/local-first/>
- Localfirst podcast : <https://www.localfirst.fm/> ( et particulièrement : <https://www.localfirst.fm/landscape> )
- Local first conf : <https://www.localfirstconf.com/>
- Electric SQL : <https://electric-sql.com/use-cases/local-first-software>
- Local first is a big deal, especially for the web : <https://www.powersync.com/blog/local-first-is-a-big-deal-especially-for-the-web>
- Local first key concepts : <https://www.powersync.com/blog/local-first-key-concepts-developer-benefits-of-local-first>
- Are sync engines the future of web applications ? : <https://dev.to/isaachagoel/are-sync-engines-the-future-of-web-applications-1bbi>
- Rxdb : <https://rxdb.info/replication.html>
- Convex: <https://stack.convex.dev/object-sync-engine>
- Zero : <https://zero.rocicorp.dev/>
- CRDT filesync: <https://tonsky.me/blog/crdt-filesync/>
- How to implement a sync engine for the web ? : <https://www.typeonce.dev/article/how-to-implement-a-sync-engine-for-the-web>
- local first vs sync engines : <https://www.sandromaglione.com/articles/local-first-vs-sync-engines>
- Cory House tweet : <https://x.com/housecor/status/1923373896260050976>
- and conference : <https://x.com/housecor/status/1956035949621580160> ( slides: <https://www.dropbox.com/scl/fi/ofac1voz9hwj3mgrzfd6o/Local-first-web-apps.pptx?rlkey=mzy7iphgcq7vtbb1d1vrw6sz9&st=fz86cybq&dl=0> )
- The hard thing about sync : <https://expertofobsolescence.substack.com/p/the-hard-things-about-sync>
- List of CRDT implementations : <https://crdt.tech/implementations>
- Research paper on CRDT : <https://arxiv.org/abs/1805.06358>
- Paper from INRIA on CRDT : <https://inria.hal.science/inria-00609399v1/document>

## TODOLIST:

- [x] ajouter latency values :
- [x] ajouter cacheing : https://planetscale.com/blog/caching
- [x] intro trop longue
- [x] aborder permission / sécurité
- [x] pre-shot les inquiétudes, cas d'usage.
- [x] insister sur le "on a déjà fait ça", oui mais on savait plus comment "we do not know why"
- [ ] ajouter examples de synchros (multi-utilisateurs)
- [ ] réduire introduction (virer jokes npm)
- [ ] enlever slides latence 300ms, cloud computer, data leaks.
- [ ] expliciter mieux CRDT, détailler state-based CRDT vs op-based
- [ ] examples de backend / adapter devant bases
- [ ] principes des shapes d'elastic-sql

## Feedbacks

à adresser...

### DevLille 2026

<https://openfeedback.io/devlille-2026/2026-06-12/9a93ac0d-aade-4a54-9ef4-e5b640b0d113>

### Devoxx FR 2026

> ça manque un peu de profondeur sur le contenu. Qu'est ce qui transite en sync de db ? comment on gère l'async ? comment on communique à 'lutilisateur ? Les patern proche (faire du local fist avec des api c'est possible ?)

> Je pense ressortir avec le principal pour savoir quand et si on doit creuser de se côté. Il me manque encore la vision côté utilisateur (faut-il informer quand le cache est synchronisé et comment).

> Le sujet est vaste et pas facile, et j'aurais aimé un peu plus de concret pour illustrer les propos. Ex: Quelle impact sur les modèlesde donnée et leurs conception ? Une app de démo, peut être ?

### Touraine Tech 2026

<https://openfeedback.io/nIlFquxGUZ1IJ1cDkc1z/2026-02-13/cmfz7neh8001o1enve10obqb4>

> Le concept est Cool, l'ayant développé pour 3 pwa qui peuvent se retrouver hors réseau (et oui en forêt ou en mer on a pas toujours du réseau), merci les services workers ! Et malgré tout tu m'a appris quelques tips alors merci pour ce partage !

> J'aurais aimé un exemple d'implémentation ou même que tu creuses le benchmark dont tu parlais à la fin des services! Le sujet est complexe et je pense que c'est une des raisons du peu d'utilisation. Les conflits, la synchro avec la base etc c'est vraiment très complexe. C'était sûrement impressionnant pour toi de passer devant autant de monde, et peut-être aussi que la forme de tes slides aurait pu être enrichie avec un peu plus de couleurs, de schémas etc. Merci pour le talk et prends de la distance avec les commentaires plus que désagréables de personnes qui n'ont probablement jamais pris la parole en public !

> Aurait pu être traité avec le même niveau de profondeur en 15 minutes

> Concept bien présenté, j’aurais apprécié un peu plus de technique

> Présentation sombre et monotone

### Codeurs en seine 2025

> Je vais jouer à Hollow Knight :)

### BDX/IO 2025

> 


