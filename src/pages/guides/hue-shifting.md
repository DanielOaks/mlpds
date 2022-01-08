---
title: Hue Shifting
subtitle: Making natural tones in lights and shadows
author: pixienop
type: guide
---
<Ponymote mote="twibeam" text="Hi there! This is the first guide I've written here, so I hope you enjoy it! If you have any questions, comments, or other suggestions, please let me know so I can update this page."/>

-----

Have you ever looked at a piece of art and thought "Dang, the lights and shadows look so **luscious** and **rich**. How did they do that?"

Well if you have, the answer probably includes _hue shifting_. This is a technique where in lit areas the hues are shifted towards the colour of the light, and in shadows hues are shifted away from the light.

<GuideNote>
This guide is going to include a lot of general colour theory and information. If you already know this, what HSV means, and cool/warm colours, then you can skip the intro and get straight into the hue-shifting sections.
</GuideNote>


## Hue, Saturation, Value

Since we're talking about 'hue shifting', I should explain what 'hue' means – as well as some of the other terms and words I'll be using.

### Colour

To me, this is a combo of a hue, saturation, and value. But when artist talk about colours, we also can just mean the hue. It's a bit confusing. For example, I'd say that <HSV h="0" v="50%"/> and <HSV h="0" v="30%"/> are different 'colours', even though they're just different brightnesses…

### Hue

The 'colour' part of a colour. All of these are the same saturation / value, but **different hues**:

<HSV v-for="hue in [0,45,100,190,240,290,335]" :h="hue"/>

### Saturation

How intense the colour is. All of these are the same hue / value, but **different saturations**:

<p><HSV v-for="(_, i) in 11" h="335" :s="`${10*i}%`"/></p>

### Value

How light or dark a colour is. All of these are the same hue / saturation, but **different values**:

<p><HSV v-for="(_, i) in 11" h="335" :v="`${10*i}%`"/></p>

<Ponymote mote="ajcower" text="The less-saturated colours look so dull and ugly, even I can't stand it!"/>
<Ponymote mote="rarityjudge" text="Everything has its place, darling – just wait a little while."/>


## The Colour Wheel

Here's the colour wheel:

<div class="chart"></div>

There are a lot of colour wheel variants, but this is the one we'll be using in this guide.

As we move around the wheel, the hue changes. And as we move towards the centre the **value** gets higher (things get lighter).

### Warm and Cool Colours

The main way to split up colours on the wheel are into two sections, **warm** and **cool**. Imagine a line going through the wheel from pinkish-red, through the middle, and to blueish-green. The side with red and yellow in it is the 'warm' side, and the side with blue and purple is the 'cool' side.

#### Warm

<p><HSV v-for="(_, hue) in 10" :h="((hue*(180/10))-30)"/></p>

These are supposed to feel warm and bright! Like fire, or going on an exciting adventure!

#### Cool

<p><HSV v-for="(_, hue) in 10" :h="180+((hue*(180/10))-30)"/></p>

These are supposed to feel cool and damp, like you're sitting under the stars.

#### But!

How cool or warm a colour is depends on context! Where it is in the picture, the colours around it, and even more. In particular, cool colours are usually less-saturated than warm colours when you use them. In traditional painting kits you normally get a set of warm and cool colours to play with, with the each one's hue leaning towards the warmer or cooler side of the wheel.

Cool and Warm Reds: <HSV h="-30" s="85%"/><HSV h="0"/>

Cool and Warm Yellows: <HSV h="63" s="90%"/><HSV h="53"/>

Cool and Warm Blues: <HSV h="233" s="90%"/><HSV h="253"/>

<Ponymote mote="ajbaffle" text="Wait, why do we need to know this?"/>
<Ponymote mote="raritydress" text="Well this affects how lights and shadows work, darling! Lit areas are *usually* warm and shadows are *usually* cool. We use hue shifting to show these differences more naturally on the objects in our scene."/>


## Hue Shifting

Finally! At the most basic level, hue shifting can be summed up as:

- In lit areas, the hue shifts towards the hue of the light source.
- In shaded areas, the hue shifts away from the hue of the light source.

Let's dive into this a bit more.

### Example Spheres

Take a look at these two spheres:

<GuideFullWidthImage :src="PixieHueshifting1" artist="pixienop"/>

-----

The top sphere's shaded areas get a darker value and the lit areas just get a lighter value. Nothing too complex, just moving towards black and towards white:

<p><HSV h="57" v="43%"/> <HSV h="57"/> <HSV h="57" v="80%"/></p>

-----

The bottom sphere's shaded areas tint towards red, and the lit areas tint towards green. This makes it look like the sphere's being lit by a light, cool-ish light source:

<p><HSV h="46" v="47%"/> <HSV h="57"/> <HSV h="63" v="73%"/></p>

-----

Because we're shifting the hue, we _also_ don't need to change the value as much to get the same visual effect.

### Colour Examples

In this section we'll have a few lights and example objects. The hue shifts here might be a bit exaggerated, so feel free to shift more or less in your own pictures. We'll also include a small colour wheel alongside each section for reference.

#### Yellow Light

<div class="chart smol"></div>

This is the colour of our light source: <HSV big h="60"/>

So the shadows for this light source would be: <HSV big h="240"/>

-----

Let's say we have a red object: <HSV h="0"/>

This could be a wall, a sphere, a cube, or a pony's coat! If we look at our colour wheel, the lit areas will tint towards orange and the shadow areas will tint towards purple.

Compare:

Shadow <HSV h="-32" v="30%"/><HSV h="-26" v="39%"/><HSV h="-16" v="42%"/><HSV big h="0"/><HSV h="15" v="55%"/><HSV h="23" v="60%"/> Light – with hue shifting

vs

Shadow <HSV h="0" v="30%"/><HSV h="0" v="39%"/><HSV h="0" v="42%"/><HSV big h="0"/><HSV h="0" v="60%"/><HSV h="0" v="70%"/> Light – no hue shifting

The effect is subtle, but noticable when applied across your scene. Your shadows and lit areas end up looking **much** more dynamic, interesting, and natural. It also helps it feel like your light source is actually interacting with your scene.

-----

Let's say we have an aqua object: <HSV h="170"/>

If we look at our colour wheel, the lit areas will tint towards yellow/green and the shadow areas will tint towards blue.

Shadow <HSV h="198" v="45%"/><HSV h="186" v="46%"/><HSV h="180" v="47%"/><HSV big h="170"/><HSV h="150" v="70%"/><HSV h="130" v="80%"/> Light – with hue shifting

vs

Shadow <HSV h="170" v="33%"/><HSV h="170" v="40%"/><HSV h="170" v="45%"/><HSV big h="170"/><HSV h="170" v="70%"/><HSV h="170" v="80%"/> Light – no hue shifting

<br>

#### Blue Light

<div class="chart smol"></div>

This is the colour of our light source: <HSV big h="200"/>

So the shadows for this light source would be: <HSV big h="20"/>

-----

Let's say we have a pink object: <HSV h="-30"/>

If we look at our colour wheel, the lit areas will tint towards purple and the shadow areas will tint towards red/orange.

Shadow <HSV h="10" v="39%"/><HSV h="0" v="42%"/><HSV h="-15" v="45%"/><HSV big h="-30"/><HSV h="-45" v="60%"/><HSV h="-60" v="73%"/> Light – with hue shifting

vs

Shadow <HSV h="-30" v="39%"/><HSV h="-30" v="42%"/><HSV h="-30" v="45%"/><HSV big h="-30"/><HSV h="-30" v="60%"/><HSV h="-30" v="73%"/> Light – no hue shifting

-----

Let's say we have a green object: <HSV h="100"/>

If we look at our colour wheel, the lit areas will tint towards aqua/blue and the shadow areas will tint towards yellow.

Shadow <HSV h="70" v="32%"/><HSV h="80" v="40%"/><HSV h="90" v="44%"/><HSV big h="100"/><HSV h="130" v="72%"/><HSV h="155" v="75%"/> Light – with hue shifting

vs

Shadow <HSV h="100" v="32%"/><HSV h="100" v="40%"/><HSV h="100" v="44%"/><HSV big h="100"/><HSV h="100" v="72%"/><HSV h="100" v="85%"/> Light – no hue shifting

<Ponymote mote="raritydress" text="And that's how you integrate the light source into your scene, darlings."/>
<Ponymote mote="ajfrown" text="I think I'll need to see this being used in an actual picture to compare…"/>

### More Examples

From <router-link to="/guide/shading">viw's shading guide</router-link>, here's some art from Hobbular:
<GuideFullWidthImage :src="HobbularHueShifting" artist="Hobbular"/>

On the left image, you can see the hues being changed in the shaded areas of Fluttershy. On the right image only the value is changed, so it ends up looking washed-out.

<Ponymote mote="ajsup" text="Hot dang, Fluttershy. Nice hue shifting!"/>
<Ponymote mote="raritydaww" right text="I agree, darling. Wonderful work."/>
<Ponymote mote="fluttershh" text="Th-thank you girls…"/>

### Videos

<YouTube videoId="RL_5va7jEx8"/>

<YouTube videoId="gwLQ0cDb4cE"/>

<YouTube videoId="6hmWUfH_wOo"/>


## In Conclusion

While you're painting:

- Keep the colour of your light source in mind.
  - If you have multiple light sources, try to figure out how the effective colours change – and in which parts of the scene they'd merge and where they'd stay separate.
- Use that to determine the hue/tone your shadows would take on.
- Shift the hues in the lit areas _towards_ the hue of your light sources.
- Shift the hues in the shaded areas _away from_ the hue of your light sources.

And that's about all you need to do! Go out there and use some effective colours!

<Ponymote mote="ajhappy" text="Wow, that was a mighty helpful lesson. Ah learned a lot!"/>
<Ponymote mote="rarityjudge" text="'Ah'? Dear, you don't need to *write* in your accent, I'm sure they'll be able to get it themselves."/>
<br>


<style scoped lang="scss">
$stops: ();
$totalStops:36;
$radius:0.9;

@for $i from 0 through $totalStops{
  $stops:  append($stops,hsl($i *(360deg/$totalStops),100%,50%),comma);
}

.chart {
  margin: 1.5em auto;
  width: 25em;
  height: 25em;
  max-width: 100%;
  &.smol {
    width: 10em;
    height: 10em;
    border: 2px solid #fff;
  }
  /* width: 100vh * $radius;
  height: 100vh * $radius;
  position: absolute; 
  top: 50%; 
  left:50%;
  transform:translate(-50%, -50%); */
  
  background: #000;
  background: 
    radial-gradient(
      circle closest-side,
      hsl(0,0%,100%),
      hsl(0,0%,0%) 90%
    ),
    conic-gradient($stops);
  border: 5px solid #fff;
  box-shadow: 0px 5px 10px rgba(#000,0.5);
  background-blend-mode: screen;
  border-radius: 50%
}
</style>

<script setup lang="ts">
import PixieHueshifting1 from './pixienop-hueshifting-1.jpg'
import HobbularHueShifting from './hobbular-hue-shifting.png'
</script>