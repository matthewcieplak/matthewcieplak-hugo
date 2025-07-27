+++
showonlyimage = true
draft = false
image = "img/projects/guitarsynth.jpg"
date = "2021-10-19T18:25:22+05:30"
title = "Analog Guitar Synth with 70's Fuzz Circuit"
weight = 0
categories = ["Projects"]
+++

I created a eurorack analog guitar synthesizer patch loosely based on the Moog Moogerfooger MF-107. It uses an envelope follower, a VCO with sync input, and a custom-made comparator fuzz designed in the 1970's.

<!--more-->

{{< rawhtml >}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/sxaSmwYTNHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{{< /rawhtml >}}

The [Moog MF-107 FreqBox](https://www.moogmusic.com/products/moogerfooger-mf-107-freqbox) is an underappreciated design which has been used by artists like Ratatat to create psychedelic synth guitar tones based on square and saw waves with glitchy, analog pitch control. By feeding the the guitar signal into an oscillator's sync input and then modifying the oscillator's base pitch with the guitar's envelope CV signal, you can create an expressive, wah-wah like effect with a huge, buzzy top end. Unfortunately, most guitar signals are not hot enough to trigger a VCO's oscillator sync without amplification or distortion into the envelope signal.

The solution is to use the envelope follower on the raw guitar sigal then process it after the fact with a comparator fuzz. Rather than a clipping distortion, the comparator produces a true pulse wave output. Craig Anderton's classic "Ultra Fuzz" circuit from his 1970's classic, "[Electronics projects for musicians](https://www.amazon.com/Electronic-Projects-Musicians-Craig-Anderton/dp/0825695023)" is perfect for the task. With a few updates to incorporate modern op-amps and eurorack compatible power, this fuzz makes a perfect eurorack format guitar synth.

