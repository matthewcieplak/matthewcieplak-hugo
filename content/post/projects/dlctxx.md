+++
showonlyimage = true
draft = false
image = "img/projects/dlctxx.png"
date = "2022-11-25T09:09:09+05:00"
title = "Recreating MS-DOS Aesthetics in HTML/CSS/JS"
categories = ["projects"]
+++

I recently prototyped an interactive "trading desk" interface in CRT monochrome for use as an easily-customizable film prop for 1980's-themed movie scenes.

<!--more-->

(<a href="https://matthewcieplak.com/dlctxx" target="_blank">Try out the interactive UI here&rarr;</a>)


Revisiting the aesthetics of the 1980's, one typically thinks of brash colors, neon sunsets, and polyester suits. But in the world of computers, monochrome was the only option. Before the development of Windows and Mac, we had MS-DOS, POSIX, and a host of other command-line interfaces that dominated computers. This aesthetic is commonly reproduced for "hacking" scenes in movies and television (often with charmingly poor accuracy). 

For a similar such effect in a music video, I created the mock terminal stock-trading application "DLCTXX" in the web browser using HTML/CSS and javascript.

![DLCTXX Graph Detail image](/img/projects/dlctxx.png)

Simply by setting our background color to black and text to lime green, we already get a nice retro effect. One of the characteristic features of CRT displays is typically monospaced fonts, so I chose the font <a href="https://fonts.google.com/specimen/Source+Code+Pro" target="_new">Source Code Pro</a> to give an updated, clean look to the fixed-width display.

The menu and display are composed of randomly generated stock symbols, names, and prices. To make them quasi-realistic, I typed out <a href="https://matthewcieplak.com/dlctxx/dialectixx.js">long lists of business and industrial sounding words</a> that begin with each letter. Letters are then jumbled at random to create symbols, and then each symbol is extrapolated using the word lists to create ficticious company nomes.

The stock prices are also randomly generated. However, stock price momevents, are not random, and generating chart data using random numbers produces weird, ugly results. Instead, I used the "drunken walk" algorithm to randomly choose a vector by which to change the price over time, and then randomly perturb that vector with each step. This produces a smooth, but unpredictable motion that appears like the real variation of prices in a real-time market.

![DLCTXX Graph Detail image](/img/projects/dlctxx-graph.png)

The charts themselves are made using CSS, simply by taking DIVs of a semi-random height, floating them left, and offsetting them by the corresponding price. This produces a convincing "graph-like" appearance without having to involve &lt;canvas&gt; elements, allowing us to style everything consistently with CSS.

The left-hand menu lists all the stock symbols and responds to keyboard navigation input like *up*, *down*, and *right* arrow keys. When the "keyboard cursor" reaches the edge of the menu, it jumps by 2/3 of a "page" height to allow continuous scrolling. The scrollbar at the right of the column is re-style extensively using CSS pseudo-elements like <code>::-webkit-scrollbar-thumb</code>. To create the "spaced" scroll cursor and border look requires some clever use of borders and box-shadows, as these pseudo-elements do not have spacing properties:

<pre>
::-webkit-scrollbar-thumb{
    background-color: rgb(124, 198, 118);
    box-shadow: inset 0px 0px 0 5px #000;
    border-width: 0px 2px;
    border-color: transparent !important;
    border-style: dashed;
}
</pre>

![DLCTXX scrollbar detail image](/img/projects/dlctxx-detail1.png)

The final interface element is a simple text input that functions as the basic command-line interface. It responds to the simple keyword commands <code>BUY, SELL, TRADE,</code> and <code>ALERT your text here</code> (try the last one!). Creating this simple input was more of a challenge as the default &lt;input&gt; and &lt;textarea&gt; elements do not suffice for managing the classic flashing-block DOS cursor. Instead, keyboard inputs are captured on a hidden input element with "keypress" events, and stored in  a visible &lt;span&gt; element whenever its value changes. This allows the default delete key logic to work without any complex string management which would be error-prone. A blinking cursor sits and the end of the visible &lt;span&gt;, and is pushed around by the text when its contents change. The blinking cursor is styled with a simple looping CSS animation:

<pre>
.cursor	i {
	width: 20px;
	height: 25px;
	background-color: rgb(124, 198, 118);
	animation-name: blink;
	animation-duration: 800ms;
	animation-iteration-count: infinite;
	opacity: 1;
}

@keyframes blink {`;
	from { opacity: 1; }
	to { opacity: 0; }
}
</pre>