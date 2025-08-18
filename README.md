---
lang: fr
---

# Local-first et sync-engines, l'architecture du futur ?

Une conférence de [Benjamin Legrand]() sur un pattern d'architecture moderne, efficace et performant, mais pas forcément simple à appréhender.

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

Conférence sélectionnée à :

- BDX/IO le 7 novembre 2025.

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

- <https://www.inkandswitch.com/local-first/>
- <https://www.localfirst.fm/> + <https://www.localfirst.fm/landscape>
- <https://www.localfirstconf.com/>
- <https://electric-sql.com/use-cases/local-first-software>
- <https://www.powersync.com/blog/local-first-is-a-big-deal-especially-for-the-web>
- <https://www.powersync.com/blog/local-first-key-concepts-developer-benefits-of-local-first>
- <https://dev.to/isaachagoel/are-sync-engines-the-future-of-web-applications-1bbi>
- <https://rxdb.info/replication.html>
- <https://stack.convex.dev/object-sync-engine>
- <https://zero.rocicorp.dev/>
- <https://tonsky.me/blog/crdt-filesync/>
- <https://www.typeonce.dev/article/how-to-implement-a-sync-engine-for-the-web>


