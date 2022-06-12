# The Dark forest game

<br>

<br>


## Peerfeedback evaluatie


> **4.Classes**
>Licht hier toe of het project volgens de methoden uit de lessen gebruikt maakt van classes met specifieke verantwoordelijkheden, eigenschappen en gedrag. Is er een klassendiagram gemaakt? Wat zijn eventuele verbeterpunten?

Het project heeft volgens de methode uit de lessen gebruikt gemaakt van classes met specifieke verantwoordelijkheden, eigenschappen en gedrag. Zo is de Player class de "main character" die je zelf kunt besturen. De Unicorn class is verspreid over de map en als deze met de Player class in aanraking komt is de Unicorn "saved".
Er is een klassendiagram gemaakt, maar deze gaat niet over de huidige game. In het klassendiagram gaat het over start en pauze schermen, die op dit moment niet in de game zitten. Mijn verbeterpunt zou dan ook zijn om het klassendiagram nogmaals te maken op de game die er nu is en de classes die er zijn. Of om de game zo aan te passen dat er uiteindelijk startschermen etc zijn. In het huidige diagram zijn helemaal geen classes te zien met composition of inheritance, dus dat zou een goed verbeterpunt zijn.
Ook zou ik de Voldemort class graag willen zien (ik zie wel de afbeelding, maar wordt nergens gebruikt)
<br>
<br>
> **5.Composition**
> Licht hier toe of het project volgens de methoden uit de lessen gebruikt maakt het samenstellen van een game uit meerdere classes. Wat zijn punten van verbetering in het beoordeelde project?

Het project maakt gebruik van composition volgens de methoden uit de lessen. Er zijn meerdere classes aangemaakt die in de Game class worden opgeroepen. Vervolgens worden alle eigenschappen, verantwoordelijkheden en gedrag meegenomen in de Game class en is er in deze class ook collision die de classes tegen elkaar meet om te zien of ze samen komen.
Ik heb vind de composition er goed uit zien, maar ik heb zo'n gevoel dat er nog meer classes bij komen. Dat is geen verbeterpunt ik ben benieuwd hoe de game dan is.
<br>
<br>
> **6.Encapsulation**
>Licht hier toe of het project volgens de methoden uit de lessen gebruikt maakt van encapsulation. Wat zijn punten van verbetering in het beoordeelde project?

In de game is in bijna elke class encapsulation op een goede manier toegepast (in mijn ogen). De variabelen in de Player en Unicorn classes staan op een logische manier private op public (op één na, kom ik zo op terug). En in de Game class zijn ook bepaalde functies goed private gezet, waardoor andere classes deze niet aan kunnen roepen/veranderen.
Ik zie alleen dat in de Player class op dit moment de Game variabele op private staan en in de Unicorn class staat deze op public. Er is op dit moment geen reden om de game variabelen op public te zetten (geloof ik).
<br>
<br>
> **7.Inheritance**
>Licht hier toe of het project volgens de methoden uit de lessen gebruikt maakt van inheritance. Is er overerving van PIXI classes of van eigen classes? Wat zijn punten van verbetering in het beoordeelde project?

Er is overerving van PIXI classes. Dit is te zien in de `extends PIXI.Sprite` en `super(texture)` in de Player en Unicorn classes. Bij de Player class betekend dit dat de sprite van zowel de player als de achtergrond word geüpdatet als de Player beweegt. Bij de Unicorn worden ook de eigenschappen hiermee aangepast, door nadat de Player en Unicorn colliden er een eigenschap van "saved" aan toe te voegen waardoor de Unicorn een andere afbeelding wordt. Als verbeterpunt zou er inheritance vanuit de eigen classes kunnen worden toegevoegd. Door bijvoorbeeld een Unicorn class te hebben die bestaat uit 'Saved' en 'Hurt' classes. (Is misschien overbodig) Ook zou het leuk zijn om een score te hebben van hoeveel Unicorns er gered zijn in the dark forest.
<br>
<br>
>**9.Game design**
>Licht hier toe of de game volgens jou voldoende is uitgewerkt op het gebied van besturing, speelbaarheid en fun. Is het duidelijk wat de speler moet doen? Werkt de game goed? Zijn er onverwachte bugs?

Op het gebied van besturing is het zeker goed uitgewerkt. Het top down idee voor deze game is heel leuk en hierdoor is het vinden van een unicorn ook een soort spannend. Het is nu alleen niet heel duidelijk wat het doel van het spel is. Je kunt de unicorns redden, ja, maar er zijn verder geen punten te verdienen of er is geen tijd die afloopt. Ook is er nu nog geen vijand (kan ook de timer zijn), waardoor er nog geen goede gameplay is. De game werkt verder goed, de character kan niet uit beeld lopen etc. Er waren geen onverwachte bugs. Zodra de verbeterpunten die ik heb genoemd (en vast al in werking zijn) is de game wel fun om te spelen, voor nu helaas nog even niet.
