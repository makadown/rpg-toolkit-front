# Rpg Toolkit (FrontEnd)

Este es un proyecto que es un test de cierta empresa de desarrollo que nunca se molestó en
darme retroalimentacion ni respuesta alguno, de modo que me tomé el tiempo de hacerlo a mi manera.

Just for fun By Mario Arturo Serrano Flores. 2019-2020

## API's used

examples:

GETs
```
http://localhost:3000/heroclasses
http://localhost:3000/heroclasses/5b416bc700725479c67519e5
http://localhost:3000/firstnames
http://localhost:3000/firstnames/5b416613fb6fc043c8cd155d
http://localhost:3000/lastnames
http://localhost:3000/lastnames/5b4169e900725479c6750be3
http://localhost:3000/monsterpowers
http://localhost:3000/monsterpowers/5b416e9c00725479c67531a7
http://localhost:3000/monsterraces
http://localhost:3000/monsterraces/5b416db500725479c6752b0f
http://localhost:3000/races
http://localhost:3000/races/5b416c3600725479c6751deb
http://localhost:3000/weapons
http://localhost:3000/weapons/5b416caf00725479c675228c
http://localhost:3000/heroes
http://localhost:3000/heroes/5b425319b06122c625db0b2e
http://localhost:3000/monsters
```

POSTs
```
http://localhost:3000/heroes
http://localhost:3000/monsters
```

## Introduction

The purpose of this project is to create a Role Playing Game (RPG) toolkit. A web app that anyone can use to generate adventures, heroes, monsters and more.

Each Module in the RPG toolkit is unique and has its own functions. Some Modules require other Modules to function. For better understanding, here’s a list of all the different Modules and sections created:

1. Layout
2. Dashboard
3. Hero Module
4. Monster Module

### Layout

- This Layout will be used on all pages on the site
- The Layout contains 2 areas:
    - Main Area
    - Menu/Navigation Area
    - The content on the Main Area will change depending on which Module the User currently is
- The content on the Menu/Navigation Area will remain the same across all pages
- The User should be able to
    - Know exactly where he/she is
    - Know which modules are available with his/her current stored data
    - Know which modules are working and which are incomplete/not working
    - Go back/up to a previous section

### Dashboard

Dashboard is the main page. It’s RPG Toolkit’s landing page.

Here, we’re going to show some Statistics from data taken from the other Modules. Note that we would only show data from Modules that we already completed.

Using data taken from the Hero Module’s backend
- Show the Maximum Number of Available Heroes
- Show the most Popular* Hero Race
- Show the most Popular* Hero Class
- Show the most Popular* Weapon

Using data taken from the Monster Module’s backend
- Show the Maximum Number of Available Monster
- Show the most Popular* Race
- Show the most Popular* Ability

*Popular = summatory of all elements with a common field

### Hero Module

In the Hero Module, you will be able to create new characters, with their own characteristics, stats and abilities. You will need extra information not provided in this document, so please check the Hero Module information in the APPEND & EXTRAS section at the end of this document.


In the Hero Module, the User should be able to:
- See a list of current generated Heroes
- Manage Heroes
    - Create Heroes
        - Manual Creation
        - Randomize Creation
    - Edit Heroes
    - Delete Heroes (using soft deletes)

If the User wants to generate a Hero, he can create it Manually or Randomly:
- Manual Creation
    - It contains the Hero Data Form, with their respective fields enabled, a Save button and a Discard button.
    - The Discard button will clear the entire form.
    - Some Fields are not editable even in creation (see “Hero Data Form” and “Creation Rules” below).
- Randomize Creation
    - Same Form as Manual creation, but with all the fields disabled.
    - In addition to Save and Discard, there will be a new button called Randomize, which will randomize all the fields on the form.
    - There’s no way to manually change any value on the form, except by using the Randomize button.
    - Randomizing a Character will have to follow the same rules as Manual Creation, as well as new ones only for this section (see “Creation Rules” below).

If the User wants to edit a Hero, he can edit everything that the Manual Creation form allows,
applying the same rules regarding Class, Race, etc (see “Creation Rules” below).

#### Hero Data Form
A Hero is a character that contains the following data:
- First Name and Last Name
    - These are two different fields
    - All characters must have a First Name, but not all characters need a Last Name
    - During Randomize Creation, there are some rules that need to be applied (see “Creation Rules” below)
- Level
    - All new Heroes start at Level 1
    - Cannot be changed or edited
- A Race
    - A list of available Races (see APPEND & EXTRAS)
- A Character Class
    - A list of available Classes (see APPEND & EXTRAS)
    - Some Classes cannot be assigned to certain Races (see “Creation Rules” below)
- Weapon
    - A list of available Weapons
    - Some Weapons cannot be assigned to certain Classes (see “Creation Rules” below)
- Stats
    - Strength, Intelligence and Dexterity
        - Each field will contain a numeric value that can range from 0 to 100
        - These values cannot be assigned directly (see “Creation Rules” below)

#### Creation Rules

There are some rules regarding Character Creation. We’ll try to lay down all the information needed for you.
- Names and Last Names (during Randomize Creation Only)
    - Names will be taken from the APPEND & EXTRAS section at the end of the document
    - Half-orcs and Dragonborns don’t have a Last Name
    - Elfs’ Last Name must be its First Name, but mirrored (i.e. Jimmy => Ymmij)
    - Dwarfs First and Last name must contain at least an “R” or an “H”
- Class Limitations
    - Humans and Half-elves can only be Paladins
    - Dwarfs cannot be Rangers
    - Elves, Half-elves and Halflings cannot be Barbarians
    - Half-orcs and Dwarfs cannot be Wizards
    - Dragonborn, and Half-orcs cannot be Clerics
    - Elfs cannot be Warriors
- Weapon Limitation
    - Paladins can only use Swords
    - Rangers can only use Bow and Arrows
    - Barbarian cannot use Bow and Arrows or Staffs
    - Wizards and Clerics can only Use Staffs
    - Thieves cannot use Hammers
    - In addition to their current Weapon limitations, all Classes can use Daggers
- Stats
    - In order to generate the Hero’s Stats (Strength, Intelligence, Dexterity), we’ll need to create the following process:
        - For each Stat field, you should have a “Roll” button right beside it
        - When you click the Roll button, it should trigger the following effects:
            - An extra field on the right side of the roll button will show an array of 4 different random values (min 1, max 6), with the highest 3 values highlighted/bolded (example: [6 3 2 4])
            - The sum of the 3 highest values on this array will be the value assigned to the Stat that you Roll the numbers for. Only 3 values are going to be used. (example: [6 3 2 4] = 6+3+4 = 13)
            - You decide how to handle Ties in case one of the values repeats twice or more (example: [5 3 3 3] = *invalid result* )

### Monster Module

In the Monster Module, you will be able to create new Monsters, with their own characteristics, stats and abilities. You will need extra information not provided in this document, so please check the Monster Module information in the APPEND & EXTRAS section at the end of this document.

In the Monsters Module, the User should be able to:
- See a list of current generated Monsters
- Manage Monsters
    - Create Monsters
        - Manual Creation
        - Randomize Creation
    - Edit Monsters
    - Delete Monsters (using soft deletes)

If the User wants to generate a Monster, he can create it Manually or Randomly:
- Manual Creation
    - It contains the Monster Data Form, with their respective fields enabled, a Save button and a Discard button
    - The Discard button will clear the entire form
    - Some Fields are not editable even in creation (see “Monster Data Form” and “Creation Rules” below)
- Randomize Creation
    - Same Form as Manual creation, but with all the fields disabled.
    - In addition to Save and Discard, there will be a new button called Randomize, which will randomize all the fields on the form.
    - There’s no way to manually change any value on the form, except by using the Randomize button.
    - Randomizing a Monster will have to follow the same rules as Manual Creation, as well as new ones only for this section (see “Creation Rules” below).

If the User wants to edit a Monster, he can edit everything that the Manual Creation form allows,
applying the same rules regarding Race, abilities, etc (see “Creation Rules” below).

#### Monster Data Form

A Monster is a character that contains the following data:
- Monster Picture
    - A picture depicting the Monster (see “Monster Picture” below)
- Monster name
    - A text field with the name. Cannot be empty
    - During Randomize Creation, there are some rules that need to be applied (see “Creation Rules” below)
- Level
    - All new Monsters start at Level 1
    - Cannot be changed or edited
- A Race
    - A list of available Monster Races (see APPEND & EXTRAS)
- Abilities
    - A list of all available Abilities
    - A Monster can have several abilities selected at the same time
    - For each ability selected beyond the first one, increase the Monster’s level by 2
        - 1 Ability = Level 1
        - 2 Abilities = Level 3
        - 3 Abilities = Level 5 and so on
    - Some abilities cannot be assigned to some Monster Races (see “Creation Rules” below)
- Stats
    - Strength, Intelligence and Dexterity
        - Each field will contain a numeric value that can range from 0 to 100
        - These values cannot be assigned directly (see “Creation Rules” below)

#### Monster Picture

We’ll need to create a special canvas in which the user will draw a simple picture of the monster. To do this, you will need to do the following rules:
- Using CSS and Javascript, create a container with a grid of 8x8 square spaces. We will call these spaces “pixels”
    - Each pixel can be Div, Span, label, or another basic HTML element, but all of them need to be the same type that all the elements on the grid
    - Each pixel can be as small as 10x10px, or as big as 50x50px. You choose how big you want the pixels to be
- Next, you will need to create a Color Selector, using just buttons or simple html elements with javascript triggers
    - You will need to add at least 4 elements that represent 4 colors: white, black, red and yellow. You can add more colors if you want
        - If you have experience using a color selector palette plugin, you can use it here instead of building one of your own
    - Clicking an element on the Color Selector, that color becomes your “active” color
- If you click an element on the Pixel Grid while you have an active color, that element will change color
- All of this should be stored as a JSON on the DB whenever you save the Monster Data form.

#### Creation Rules

There are some rules regarding Character Creation. We’ll try to lay down all the information needed for you.

- Names and Last Names (during Randomize Creation Only)
    - The name will depend of the monster Race
    - The name will use the Race as a base and then change its characters using the following formulas:
        - Every A char in the name will be replaced with O
        - Every U char in the name will be replaced with A
        - Every I will add another I right next to it
        - Every E char in the name will change position with the next character on the right
        - Every O char in the name will add an R on the left side of it
        - Every R and G chars will change to “an apostrophe and a space” ( or \’\s in regular expression)
        - Non alphanumeric chars (like spaces or dashes) will make everything on the right to be ignored
        - All this rules can be applied more than once, recursively, if the string allows it and if it keeps adding characters
            - To prevent issues with endless loop, make each rule work a maximum of 3 times per character
- Abilities Limitations
    - Shadow Ball can only be used by Beholder and Mind Flayer
    - Aerial Ace can only be used by Owlbear, Dragons, Cloud Giant, Storm Giant, Umber Hulk
    - Surf can only be used by Yuan-ti, Gelatinous Cube and Drow
    - Kobold can only use Double Team and Crunch
    - Giga Drain can only be used by Mind Flyer
    - In addition to their current ability limitations, Beholder can use all other monster abilities
- Stats
    - In order to generate the Monster’s Stats (Strength, Intelligence, Dexterity), we’ll need to create the following process:
        - For each Stat field, you should have a “Roll” button right beside it
        - When you click the Roll button, it should trigger the following effects:
                - An extra field on the right side of the roll button will show an array of 4 different random values (min 6, max 20), with the highest 3 values highlighted/bolded (example: [16 20 11 14] )
                - The sum of the 3 highest values on this array will be the value assigned to the Stat that you Roll the numbers for. Only 3 values are going to be used. (example: [16 20 11 14] = 16+20+14 = 50)
                - You decide how to handle Ties in case one of the values repeats twice or more (example: [15 11 11 11] = *invalid result* )
- Monster Picture (random generation only)
    - Random Generation will take two steps:
    - All spaces in the Pixel Grid will be colored randomly black or white, but not yellow or red until the next step
    - Add randomly one or more eyes (yellow pixel, max 5) and/or one or more mouths (red pixel, max 5), at random places inside the Pixel Grid

## Append & Extras

### HERO MODULE

First Names
- Bheizer, Khazun, Grirgel, Murgil, Edraf, En, Grognur, Grum, Surhathion, Lamos, Melmedjad, Shouthes, Che, Jun, Rircurtun, Zelen
Last Names
- Nema, Dhusher, Burningsun, Hawkglow, Nav, Kadev, Lightkeeper, Heartdancer, Fivrithrit, Suechit, Tuldethatvo, Vrovakya, Hiao, Chiay, Hogoscu, Vedrimor
Classes
- Paladin, Ranger, Barbarian, Wizard, Cleric, Warrior, Thief
Races
- Human, Elf, Halfling, Dwarf, Half-orc, Half-elf, Dragonborn
Weapons
- Sword, Dagger, Hammer, Bow and Arrows, Staff

### MONSTER MODULE

Monster Races
- Beholder, Mind Flayer, Drow, Dragons, Owlbear, Bulette, Rust Monster, Gelatinous Cube, Hill Giant, Stone Giant, Frost Giant, Fire Giant, Cloud Giant, Storm Giant, Displacer Beast, Githyanki, Kobold, Kuo-Toa, Lich, Orc, Slaad, Umber Hulk, Yuan-ti
Monster Powers
- Shadow Ball, Aerial Ace, Giga Drain, Thunderbolt, Earthquake, Crunch, Double Team, Psychic, Ice Beam, Surf






