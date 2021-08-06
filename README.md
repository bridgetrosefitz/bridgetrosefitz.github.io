# Personal website

'·..·''·..·''·..·' View it at [https://bridgetro.se](https://bridgetro.se) '·..·''·..·''·..·'

<p float="left">
  <img alt='landing-page' src="https://bridgetro.se/project-snapshots/personal-website/personal-website-1-landing-page.png" width='400' />
  <img alt="exploding-spheres" src="https://bridgetro.se/project-snapshots/personal-website/personal-website-2-exploding-spheres.png" width='400'/>
  <img alt="company-logos-and-first-project" src="https://bridgetro.se/project-snapshots/personal-website/personal-website-3-company-logos-and-first-project.png" width='400'/>
    <img alt="about-page-french" src="https://bridgetro.se/project-snapshots/personal-website/personal-website-4-about-page-french.png" width='400'/>

</p>

## Why I made it

This website was a labor of ♡. I implemented 3D meshes and physics, rolled my own CSS, wrote and applied translations, and enjoyed developing the design. I hope you feel like you know me a little better by taking a look around. In any case, welcome. Please do drop me a line with feedback, I'm hungry to hear what you think and how I could make the site better.

## How it's made

### Technology

* [React.js](https://reactjs.org/)
* [Three.js](https://threejs.org/), to create the sphere (implemented with [React Three Fiber](https://github.com/pmndrs/react-three-fiber)) 
* [Cannon](https://github.com/pmndrs/use-cannon), to apply physics to the scene
* [drei](https://drei.pmnd.rs/), to attach an HTML element to the sphere which makes it clickable
* [i18next](https://react.i18next.com/), for translations
* [AOS](https://michalsnik.github.io/aos/), for the scroll animations

### User Stories

I kept myself organized with user stories, available [here](https://bridgetrosefitz.notion.site/Bridget-Fitzgerald-Personal-website-57cf2e253112453884670a3cb9b44ecc).

### I couldn't have made it without the help of...

* Bruno Simon, a Three.js afficionado. I took his three.js journey course, and you can too [here](https://threejs-journey.xyz/). Or visit Bruno's amazing portfolio [here](https://bruno-simon.com/)
* [Screenly.com](https://www.screely.com/), where you can easily turn screenshots into browser mock-ups
* These sources for my HDRi city textures:
  * Paris: [Xuan Prada](http://www.xuanprada.com/blog/2014/7/28/louvre-hdri-panorama)
  * Melbourne: XXX (Purchased)
  * NYC: [RenderHub](https://www.renderhub.com/cadforge/times-square-manhattan-nightlights-hdri#) (Purchased)
  * Tokyo: [Textures.com](https://www.textures.com/download/HDRPanoramas0091/134023)
  * Oslo: [Textures.com](https://www.textures.com/download/HDRPanoramas0078/134005)
* [This simple tool](https://matheowis.github.io/HDRI-to-CubeMap/) to convert HDRi equirectangular images to cube maps
* Michał Sajnóg, the creator of the [AOS (Animate on Scroll) library](https://michalsnik.github.io/aos/)


## What's next

* I'm still working on a bunch of tweaks...and the fun will be ongoing! But major next-up priorities (as of 07/27/21) are:
  * Improve UI affordances so it's easy to see how you can play with the sphere
  * Review and improve accessibility
  * Create a dark mode
  * Create video tours of projects
