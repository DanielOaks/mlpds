---
title: The Opponent Process (neurological) theory of color
author: ponytron5000
type: guide
---
Advanced warning: here there be sciency things!

I recently started to wonder about something:

The conventional artist's color system deems red, yellow, and blue as the primary colors. And yet, there are a staggering number of examples of graphic designs that seem to use red, yellow, _green_, and blue as if all four were primary colors. Right now on my desktop I can see the Windows logo, the Chrome icon, and even the various widgets on this subreddit as examples. Take a look at children's toys -- especially for toddlers and infants. They practically drown in red, yellow, green, blue. Why is this so prevalent?

The explanation is provided by the [Opponent Process](http://en.wikipedia.org/wiki/Opponent_process) theory of color. This theory is directly rooted in the biological/neurological process of human color perception. In spite of how fundamental it is to our actual perception of color, it rarely seems to come up in discussion about color.


## The spectrum

First a quick word about light itself: light is transmitted in distinct "chunks" called photons. Any given photon has exactly one frequency associated with it. The frequency of light and the wavelength of light are "inversely proportional". This is just a fancy way of saying "low frequency" = "long wavelength", "high frequency" = "short wavelength". We can arrange light by frequency (or wavelength) to produce a spectrum. The [visible spectrum](http://en.wikipedia.org/wiki/Visible_spectrum) is the portion of the spectrum that the human eye can actually detect. It ranges from about 390nm (nanometers) to 700nm. Arranged from long wavelength (low frequency) to short wavelength (high frequency), we perceive red, orange, yellow, green, cyan, and then blue. Colors like purple and magenta are [non spectral](http://en.wikipedia.org/wiki/Spectral_color) colors. That is, no single frequency of light is actually purple. Purple exists only in your head. Your brain invented it as a way to interpret a mixture of low and high frequency light (red and blue).


## The human eye

The human eye contains two types of photoreceptor cells (light sensors): [rods](http://en.wikipedia.org/wiki/Rod_cell) and [cones](http://en.wikipedia.org/wiki/Cone_cell). The rod cells sense the overall intensity of light in a black & white fashion. Normally, humans also have three types of cone receptors, each of which is sensitive to a different part of the visible spectrum: long wavelength (low frequency, red), middle wavelength (medium frequency, green), and short wavelength (high frequency, blue).

### Color receptors

Here's where things get interesting. Check out this graph of the response range of each type of cell:

[Cone responsiveness](http://en.wikipedia.org/wiki/File:Cone-response.svg)

Notice that there is considerable overlap between the response range of our red and green receptors, and that the response range of the green receptors isn't actually centered on the middle of the visible spectrum. Our perception of color is quite skewed. We perceive more color variation in the low-to-middle frequencies than we do among high frequencies. Ironically, people with red-weak or green-weak color blindess (protonopia and deuteranopia) might actually have a more realistic (or at least more egalitarian) view of the spectrum.


## Opponency

Like many neurological processes, our perception of color is antagonistic (hence "opponent process"). Groups of cells are pitted against one another in a shouting match, and the loudest group wins. The losing side actually gets silenced (stops sending signals) until the external stimulus changes. Our brain perceives color by pitting the signals from our three types of cones against one another in just such a process. Our color perception is thus differential rather than a direct perception of the underlying signals from the cones and rods.

Our brain uses three different opposition "channels" to create our full visual perception. One of these channels is black-white (achromatic) opponency. This channel is pretty intuitive. The signal from your rod cells is compared to its own inverse. If the positive signal is greater, you perceive the presence of white. If the inverse signal is stronger, you perceive the presence of black. If both signals are equally strong, they cancel each one another out and you perceive grey.

As for our color perception, the second channel is a red-green opponency. The strength of the signal from our green receptors is compared to the strength of the signal from our red receptors, _and only one of them will win_. You cannot perceive the presence of both red and green simultaneously. Your eye is quite capable of sensing this, but your brain won't permit you to experience it. If a single frequency of light falls right in the middle so that both receptors activate equally, or there is a mixture of light which causes both to activate equally, the two signals cancel each other out, with the result being that you do not perceive any red or green at all!

The missing piece of the puzzle is the blue-yellow opponency channel. Because there is so much overlap between the response range of our red and green receptors, comparing blue directly to red or directly to green wouldn't make much sense. What happens instead is that the blue signal is compared to the _combined red and green signals_. If the blue side wins, we perceive the presence of blue. If the combined red/green signal wins, you perceive the presence of yellow. As with the red-green opponency, you cannot perceive both blue and yellow at the same time.


## Putting it all Together

Now suppose that you are exposed to a frequency of light which falls right in between the peak response for your red and green receptors, or you are exposed to a mixture of red and green light (but no blue), which causes both receptors to activate equally. The red-green opponency cancels out any perception of red or green. Nevertheless, both signals contribute to one side of the blue-yellow opponency. Since no blue light is present, we will experience a strong sense of yellow.

If instead the red receptors are activated slightly more than the green, the green signal partially cancels the red signal in the red-green opponency. This results in a slight perception of red, but _no perception of green_. Meanwhile, the blue-yellow channel plays out much as it did before, giving us at the same time a strong perception of yellow. Since yellow and red do not exclude one another in an opponency process, our brain mixes them to produce orange.

If all of our cone receptors are equally activated, both the red-green and blue-yellow channels annihilate each other, and we're left with only our perception of black or white. This explains another perceptual paradox: white light seems colorless when in reality it is a mixture of many colors of light.


## Epilogue

Personally, this was a major "ah hah!" moment. I accept as fact that a mixture of red and green light produces yellow, but intuitively this has never made the slightest bit of sense to me. To me, pure yellow does not seem to be any sort of mixture of red and green, but a totally unique color that inhabits the space between red and green. Indeed, I can't for the life of me imagine what a mixture of red and green _ought_ to look like. By the same token, I have no trouble accepting that orange is a mixture of yellow and red, but it seems inconceivable that it could contain any green. Neurologically speaking, this is exactly right. Yellow isn't so much "a mix of red and green" as it is "not blue". I cannot conceive of a reddish-green because the red-green opponency process prohibits me from ever experiencing it. Reddish-green is a so-called [impossible color](http://en.wikipedia.org/wiki/Impossible_color), along with yellowish-blue.

So looking back on my initial line of inquiry, it's easy to see where the red, yellow, green, blue phenomenon comes from. We often say that humans are trichromats, but this isn't quite accurate. Our eyes are trichromatic, but our brains are more accurately described as tri-axial: red-green, blue-yellow, white-black. And in that sense, you could say that these are our 6 primary colors.


## Some Extra Notes

### Color blindness

I found a filter for GIMP a little while ago that simulates the effects of various kinds of (common) color deficiency/color blindness. I was fascinated by the results of the protonopia (red blindness) and deuteranopia (green blindness) filter.

<GuideFullWidthImage :src="ColorBlindness1" caption="source image"/>

<GuideFullWidthImage :src="ColorBlindness2" caption="total protonopia (red blindness)"/>

<GuideFullWidthImage :src="ColorBlindness3" caption="total deuteranopia (green blindness)"/>

The results are strikingly similar, which I found unexpected. Both images become starkly blue-yellow-white-black, the difference largely being just a matter of where the neutral point falls. Knowing about the opponency process, it now makes perfect sense. In reality, red and green are actually much closer together than it seems to those of us with "normal" vision. Whether your red receptors or green receptors are defective, the end result is that the red-green opponency channel is broken, leaving you with just yellow-blue and black-white channels.

### Apparent brightness

If you look at the [rod and cone response ranges](http://en.wikipedia.org/wiki/File:Cone-response.svg), you may notice a few interesting things.

First, you can see that your rods (white/black sensors) have an asymmetrical response range. They are less receptive to long wavelength (red) light than to short wavelength (blue) light. This is why red light is often used for illumination in situations where you want to preserve your "night vision". The rod receptors are the most sensitive to light, so we depend on them the most in very dim light. Red light is less fatiguing to the rod receptors since they are less sensitive to that frequency.

Also notice that the peak response for our rod receptors is closer to the peaks for green and red than it is to blue. Because of this, we perceive green as being the most luminous, red the next luminous, and blue as the least luminous. This explains the stage lighting convention of using blue light for night scenes. This is a habit which carries over into television, movies, video games, and -- yes -- art.

### Doing the impossible

[Impossible colors](http://en.wikipedia.org/wiki/Impossible_colors) are pretty trippy. Your brain normally prohibits you from experiencing them, but it is sometimes possible. You'd probably need specialized equipment to make yourself experience reddish-green or bluish-yellow, but it's fairly easy to make yourself experience a sort of hyper-red/green/blue/yellow.

Using your image software of choice, fill a layer with pure red (#FF000). Drop a layer on top of this and fill it with pure green (#00FF00). Hover your mouse over the green layer's visibility control. Stare at the green layer for a few minutes and then click to reveal the red layer underneath. You may experience a very intense and peculiar red that lies outside of your normal perception. You can do this the other way around or give it a try with yellow (#FFFF00) and blue (#000FF) instead.

### JPEG compression

An interesting aspect of JPEG compression (and a number of other compression methods) is that they don't use the RGB or CMYK color space. Instead they use YCbCr: Y = luminance, Cb = blue chrominance, Cr = red chrominance. More or less, these correspond to the black-white, blue-yellow, and red-green opponency channels respectively. JPEG compression exploits the relative sensitivity of these channels to achieve higher compression without lower impact on fidelity. There is considerably more compression in the Cr and Cb channels than in the Y channel because our rod receptors are more sensitive than our cone receptors. That is, we can see small differences in luminosity more readily than we can see small differences in hue.

<script setup lang="ts">
import ColorBlindness1 from './color-blindness-1.jpg'
import ColorBlindness2 from './color-blindness-2.jpg'
import ColorBlindness3 from './color-blindness-3.jpg'
</script>