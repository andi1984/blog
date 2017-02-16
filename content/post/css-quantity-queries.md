+++
date = "2017-02-16T13:20:15+01:00"
draft = false
title = "CSS Quantity Queries"

+++

Hi,

today I want to talk about a handy CSS snippet for day to day usage. The _CSS Quantity Queries_!

##  How to use?
I don't want to give you the full background or insight into those. Especially as [Heidon Pickering](http://twitter.com/@heydonworks) has done this already in a great [A List Apart article](http://alistapart.com/article/quantity-queries-for-css).

Let's say you have an unordered list

``` html
<ul>
	<li>1st</li>
	<li>2nd</li>
	<li>3rd</li>
</ul>
```

you want or need to style somehow different depending on the _quantity_ of list items in it. Here come the _quantity queries_ into the game.

``` css
li:nth-last-child(3):first-child, 
li:nth-last-child(3):first-child ~ li {
	color: green;
}
```

## Explanation

I admit that those queries are not the prettiest looking things on earth, but they work as expected. The first selector gives us the li which is the 3rd one by start counting from the last `li` child of the list and the first child likewise — aka. the first li of a list with three elements — tada! This is apparently the _magic_ behind.

The second selector is only to select all upcoming `li` after the first one, to adapt the CSS rules in the end for all elements in the list.

Happy usage!
