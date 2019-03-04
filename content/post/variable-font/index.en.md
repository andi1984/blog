---
title: "Variable Fonts"
date: 2019-03-04T20:08:29+01:00
draft: true
---

Today I would like to talk about _variable fonts_ on the web. But what are those?

> Variable fonts are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a separate font file for every width, weight, or style. They let you access all the variations contained in a given font file via CSS and a single @font-face reference.
> -- <cite>[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)</cite>

<!--more-->

## Status quo BEFORE variable fonts

Let us first recap on how we brought in _variation_ into web fonts since the start of custom web fonts:

{{< youtube "B42rUMdcB7c" >}}

Okay, yes. So for different variations we had to load a number of different font files, each of them for a specific font type bringing in different variations of the typeface.

So how do the variable fonts solve this problem of requesting a bunch of files over the network?

## Technical background

### Design axes
Variable fonts define _axes of design_, thus dimensions of variations the typeface has like its _weight_.

_Before_ this was done by _redrawing_ each single glyph for each, different characteristic of the variations.

Now – with variable fonts – each glyph defines a delta inside which each of the glyph's control points can vary. Any variation within this delta can be _interpolated_ then and thus instead of saving a lot of variations of the glyphs, what is saved and shipped through the font file is this delta.

And with this we have the full power to create our own, custom variations within the whole delta range instead of just using the fixed variations given by the different font files before.

For a more detailed introduction I would like to highly recommend you [Chris Lilley](https://svgees.us/index.html), technical director at the W3C, and especially his talk on ["WebFonts in 2018: Everything Changes"](https://youtu.be/vNMJtxL5OgE).

{{< video >}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/vNMJtxL5OgE?start=413" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{{</video >}}

### Control design axes by font-variation-settings
as

```css
html {
	font-variation-settings: "liga" 0;
}
```


Links:

- https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604
- https://v-fonts.com/fonts/etc-grandstander
- https://www.axis-praxis.org
- https://caniuse.com/#feat=variable-fonts
- 
