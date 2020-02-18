# CSS Basics

## What is CSS?
CSS or 'Cascading Style Sheets' indicates the concept of the style integration to one or more documents with a fall lecture (top to bottom).

It is a type of programming language that browsers such as Chrome, Firefox, Explorer, among others, can understand clearly. This type of coding is considered as a component that allows modifying and giving multiple attributes such as color, shape and position to an HTML document.

CSS allows the separation for the page design to be in its document, letting the HTML document to only manage the data and distribution of information, while the CSS document or style sheet work on the visual aspect. 

This gives way to different advantages: 
- More organization.
- Greater accessibility to design.
- Simple content search.
- Less effort in the visual modification of multiple pages.

## How does it work?
A style sheet represents a design template that will be implemented in an HTML, this is achieved by linking the CSS document in HTML with the 'link' tag. 

Example:
<br>
Linking an internal/own document: 
```html
<link rel="stylesheet" href="example1.css">
```
<br>
Or external document:
```html
<link rel="stylesheet" href="https://aaaa.com/css/stylesheet.css">
```

The property **rel** allows defining the receiving material, in this case, a _stylesheet_. While **href** links a CSS ubication which can be from your own or someone else's document as shown in the examples. Once done, the HTML document will follow the style regulation defined by the style sheet, and this will be displayed visually in the browser or simulator.

## What does it consist of?
What defines CSS is the set of rules, which are defined by **declarations** given to **selectors**.

### Selectors
These are HTML references or tags that call specific elements and allow us to only change their appearance. To call these references, different selectors are represented according to their task or name, as the next list shows.

- Universal: *
    - Affects the whole page.
- Element: body
    - Only affects the element or HTML tag. 
- Attribute: [attr] a[href=“https://aa.com”]
    - It affects any element that contains the specified attribute.
- Class: .myClass
    - Its effect is for all HTML tag with the called class.
- Pseudo-class: a:hover
    - It is used to define a particular state of an element. 
- ID: #myId
    - Its effect is for all HTML tags with the caller ID.
- Sibling: 
    - Adjacent: div + p 
        - According to its position in the code, it is expected that the effect will be shown in the second selector. For example, it will take the next _p_ after your _div_.
    - General: div ~ p
        - It will take every _p_ beside _div_, but not inside it.
- Descendiente: div p a
    - It affects the last element of the descendant chain.
- Mix: div .contenido #articulo_01
    - It affects the last element of the mix chain.

Each one is called by a specific task or requirement, these requirements being divided as:

- Base: <br>
Sets basic attributes that the HTML document will follow, such as page size, margin or main typography.
- Generals: <br>
Specifying general elements or repeating multiple times, such as the size of titles, text, size of buttons.
- Specific or from page: <br>
Those attributes that are only found within a section, for example: My homepage has blue buttons, while my contact page has green buttons.
- Unique or unrepeatable: <br>
The attribute is given to a single object and isn't repeated at any other time.

### Declarations
The statements combine **properties** and **values** to give attributes to the selectors.

#### Properties
Each property attribute to an element that can be modified or added to a selector within HTML. Since there are multiples properties, there will be only three referenced by type in the following example list.

- Fonts
    1. Font family
    2. Font style
    3. Font weight
- Color and background
    1. Color
    2. Background color
    3. Background image
- Text
    1. Text decoration
    2. Text alignment
    3. Word Spacing
- Picture or space
    1. Margin
    2. Padding
    3. Border
- Classification
    1. Display
    2. Whitespace
    3. List Style Position
- Units
    1. Url
    2. Color units
    3. Percentages units

#### Values
These are the elements assigned to the properties that allow you to specify or modify the HTML. 
Example:
<br>
"My button is green"
The value being the color GREEN, it would be written like this: 
`button { background-color: green } `
<br>
"My title is red, with text of 20px"
Here we have two values. Red and 20px. This should be written as follow: 
`h1{ color: red; font-size: 20px }` 


## Practical example
The following example is presented to show its use in code and to solve any query about implementation.

We have three containers that, by position, assume that it is a browser, the main section and an adjacent one, and they are empty, only a line break will be placed to obtain blank space.

> HTML document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example 1</title>
    <link rel="stylesheet" href="CSS_Basics_Example.css">
</head>
<body>
    <header>
        <nav>
            <br>
        </nav>
    </header>
    <main>
        <aside id="container_1">
            <br>
        </aside>
        <section id="container_2">
            <br>
        </section>
    </main>
</body>
</html>
```

Since there are few elements, the attributes will be defined in a general way by their HTML tags, specifying only those that have an ID to give them a unique value. Some elements need the same rules so they will be assigned in a single section, separating them with a comma (,).

> CSS document

```css
body{
    margin:0;
    padding:0;
    background-color: lightgray;
}
header, main{
    margin: 30px 160px;
}
header, aside, section{
    background-color: blue; 
}
header{
    height: 80px;
}
main{
    display: flex;
    flex-wrap: nowrap;
}
aside, section{
    height: 400px;
}
aside{
    width: 40%;
}
section{
    width: 60%;
}
#container_1{
    margin-right: 5px;
}
#container_2{
    margin-left:5px;
}
```
For better understanding, experiment with this code and see how it changes based on your CSS document. Investigate new attributes and/or elements to add and create something new with this as base. 

### References
- CSS Basics, (2019). CSS Introduction. Web site: https://www.cssbasics.com/
- Manz, (2017). What is CSS?. April 2019, from @Manz. Web site: https://lenguajecss.com/p/css/introduccion/que-es-css#disqus_thread
- López, B. (2019). La guía rápida para aprender CSS básico desde cero, from Ciudadano 2.0. Web site: 
https://www.ciudadano2cero.com/aprender-css-basico-desde-cero/
- Diario BF. (2014). Tutorial CSS3: The use of rules. Web site: https://www.dariobf.com/tutorial-css3-regla-cs/