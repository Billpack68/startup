# CSS Notes

## Basics

- CSS is for defining rulesets
- Rulesets have a selector (what object to apply the stuff to)
- Within the selector are declarations that have a property and a value (color: green; for example)
- Preferred method to include link to css file in the head element of the html doc, see below for example:
- `<link rel="stylesheet" href="styles.css" />`
- Properties are applied from the top down, so if you have all paragraphs set to red but then specify one to be blue, it will be blue because the bottom instructions override the top
i
## CSS selectors

- using the `body` selector will affect the entire document
- using `body section` any section that is a descendant of a body (within)
- using `section > p` any p that is a direct child of a section
- using `div ~ p` any p that has a div sibling
- using `div + p` any p that has an adjacent div sibling
- putting a period infront of a class from the HTML (so `<p class="intro">` would be `.intro` will give us all elements of the html with that class, intro in our example.
- can combine p.intro for paragraphs with the intro class
- HTML IDs are unique so you can do #[IDName] in the CSS to get just that specific element
- You can also affect any element with a specific attribute, like so:
- `p[class='summary']` any paragraph with that as it's class
- `a[href]` any a element with an href attribute (any attribute)
- `a[href="./fish.png"]` any a element where the href is fish.png
- `p[href*="https://"]` any paragraph element where the href element includes the https thing
- `section:hover` would trigger when the mouse hovers over the element

## CSS Properties

- font-family
- font-size
- color
- text-shadow
- border-bottom (border-top too probably)
- background (color)
- padding (size of padding) (can be -left, -top, -bottom, etc)
- margin-bottom (size of margin, margin-top too?)

## Display types

- none (Don't display)
- block (Width fills parent element)
- inline (Width only as big as content)
- flex (Flexible orientation? you specify a flex direction like row or column)
- grid (Put the children in a grid)

- Put this meta tag in the head of all HTML Docs to make it work better on mobile devices:
- `<meta name="viewport" content="width=device-width,initial-scale=1" />`

- Float lets something just kind of be on its own (on the right, left, etc.) and everything else wraps around it

- @media selector detects size and orientation of the screen. It takes one or more predicates and does stuff with it

- Flex adjusts parts within a section based on screen size
- Setting the flex variable tells us how much of the space goes to which, ie if there's two sections (two columns) and one is flex: 1 and one is flex: 3 then the flex: 3 one gets 75% of the space