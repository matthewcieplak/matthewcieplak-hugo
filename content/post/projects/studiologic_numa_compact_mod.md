+++
showonlyimage = true
draft = false
image = "img/projects/numa.jpg"
date = "2022-01-10T18:25:22+05:30"
title = "Studiologic Numa Compact 2 filter control mod"
weight = 0
categories = ["projects"]
+++

My new Studiologic keyboard is a great compact stage piano and synth, but it's missing 1 key feature: fixed filter frequency control! I performed a quick circuit bend to make the joystick/modwheel mounted filter input more fine-adjustable with a simple rotary control.

<!--more--> 

{{< rawhtml >}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ovuy4qSYZs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{{< /rawhtml >}}


Both of the spring-loaded joysticks are fitted to an auxiliary PCB, and they are 2-axis dual potentiometer models from C&K. By reverse-engineering the PCB layout and following the signal, ground, and power traces I was able to insert my own switch and potentiometer circuit between the microcontroller and auxiliary PCB, creating a bypass and secondary control for the filter frequency.

This project received coverage in and [MatrixSynth](https://www.matrixsynth.com/2019/09/korg-monotron-cv-input-mod-eurorack.html).

