
/************************************************************************************/
                                     HTML STRUCTURE
/************************************************************************************/
                            Vi använder inbyggda <Format Document>
<div class="A">                                     
    <ul>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
    <ul>
</div>

<comment style>
<!--
multi row
comments 
-->

<smal part comment style>
<!-- comment -->


/************************************************************************************/
                                     CSS STRUCTURE
/************************************************************************************/
                            Vi använder inbyggda <Format Document>
How do we write a class?
.menu-button or .menu_button 

// Siffrorna är inte korrekt, bortse från de
<button class="menu-button">
    <span class="1.menu-button__text 2.menu-button__text--red 3.menu-button__text--disabled"></span>
</button>

<button class="menu-button">
    <span class="1.menu-button__text 2.menu-button__text--blue 3.menu-button__text--active"></span>
</button>

.menu-button {
    font-family: whatever;
    display: inline-block;
    border: 1px solid orange;
    border-radius: 5px;
}

.menu-button__text {
    border: 1px solid red;
}

.menu-button__text--red {
    color: red;
}

.menu-button__text--blue {
    color: blue;
}

.menu-button__text--disabled {
    background-color: grey;
}


BEM EXAMPLE
1. Block: Represents a standalone entity or component on a page. It is a top-level abstraction.
.block {}

2. Element: Represents a component part of a block and is always delimited by two underscores (__).
.block__element {}

3. Modifier: Represents a different state or variation of a block or element. It is always delimited by two hyphens (--).
.block--modifier {}
.block__element--modifier {}


<menu>
.menu

<btn>
.menu__btn

<comments style>
// =====================================================================
// _filename.scss or big section part in a (s)css file
// =====================================================================

<small part comments style>
/* Small comment */





/************************************************************************************/
                                     JAVASCRIPT STRUCTURE
/************************************************************************************/
                                Använd <Prettier> som standard
<variable & function names>
camelCase

<class names>
PascalCase

console.log(){
    
}

1 röst Mikael, Jonathan
console.log() {
    
}

if() {
    
} else {
    
}

if() {

}
else {

}    


/************************************************************************************/
Commit standard
/************************************************************************************/
header: added menu-button, removed black color, added one new item to the menu-button.
added menu-button, removed black color, added one new item to the menu-button.

index: added basic html structure, added header and meta tags.
added basic html structure, added header and meta tags.


<branch name>
Use project>Backlog>> create issue and use default git name
