# DESCRIPTION DU PROGRAMME

Ce petit programme est un formulaire en 2 étapes qui doit déterminer si l'utilisateur est autorisé à rentrer dans l'établissement.

## A l'étape 1 :
- il renseigne son nom :
    qui doit avoir 2 caractères minimum, 20 maximum
    et qui n'accepte pas les caractères spéciaux
- il doit choisir un genre : masculin ou féminin 
    (comme il s'agit d'un exercice, nous n'avons pas pris en compte l'intégralité des genres ou non genre)
- le bouton suivant s'anime au survol
    au clic, il dirige vers l'étape 2

## A l'étape 2 :
- il renseigne son âge
    qui doit être supérieur à 18 ans
- il indique s'il conduit ou non
- le bouton précédent renvoie à l'étape 1
- le bouton envoyer valide et affiche le résultat

## Résultat :
- si l'utilisateur a moins de 18 ans, le message suivant s'affiche :
    Désolé "nom", tu es trop jeune pour entrer ici
- si l'utilisateur est majeur ET 
    - si c'est une femme, le message sera :
        Bienvenue "nom"! L'entrée est gratuite pour les femmes
    - si c'est un homme de 18 à 20 ans :
        Bienvenue "nom" ! Le prix de l'entrée est de 10€
    - si c'est un homme de plus de 20 ans :
        Bienvenue "nom" ! Le prix de l'entrée est de 15€
    - s'il/elle conduit, un deuxième message s'affiche :
        Tu conduis : récupère ton soft gratuit au bar!

## Gestion des erreurs a l'ETAPE 1 
- si le nom est trop court, message au clic sur "suivant" : 
    "Saisis au moins 2 caractères"
- si le nom est trop long, message au clic sur "suivant" : 
    "Ton nom ne peut pas faire plus de 20 caractères"
- si le nom comporte des caractères spéciaux, message au clic sur "suivant" : 
    "Le nom ne peut pas contenir de caractères spéciaux"
- si aucun genre n'est sélectionné, message au clic sur "suivant" :
    "Sélectionne un genre"

## Sources :
[FORM](https://uiverse.io/gharsh11032000/bitter-cow-59)
[SENDBTN](https://uiverse.io/Spacious74/horrible-horse-4)
[NAVBTN](https://uiverse.io/benjimich/lovely-octopus-40)
[RADIOBTN](https://uiverse.io/adeladel522/afraid-cat-83)
