# Notes

## Geschiedenis

- 1995/1996
- Brendan Eich
  - CEO Mozilla
- Netscape
  - Netscape Navigator
  - Netscape Communicator
- 10 werkdagen
- "even wat interactiviteit toevoegen aan de browser"
- ECMAScript <== formele naam van JS
- W3C - HTML/CSS
- ECMA

### Versies

- ES1
- ES2
- ES3
- ES5
- ES6 - ES - 2015
- ES7 - ES - 2016
- ES8 - ES - 2017
- ES9 - ES - 2018
- ES10 - ES - 2019
- ES11 - ES - 2020
- ES12 - ES - 2021
- ES13 - ES - 2022
- ES14 - ES - 2023
- ES15 - ES - 2024

Deze versies komen ook nog wel eens terug bij bijv. TypeScript's `tsconfig.json`: `target: "ES2022"`

## Operators

`&&` is ook heel handig als korte `if`, zoals [hier gezien bij Svelte](https://github.com/sveltejs/svelte/issues/4427):

```svelte
<input type="text" on:keyup={e=>e.key==='Enter' && action()}/>
```

## JavaScript engine/runtimes

- Firefox: SpiderMonkey
- Chrome/Chromium: V8 // JIT branch prediction
  - Ook door Node.js/Deno gebruikt
- IE/Edge: Chakra/ChakraCore
- Safari/WebKit: JavaScriptCore
  - Ook door bun gebruikt

## Modulesystemen geschiedenis

- Node.js - 2009 - CommonJS
  - `const customer = require('./customer.js');`
  - browserify
- AMD
  - require.js

Nu: ES Modules met `import`/`export`

## Paradigmas der webdevelopment

**SPA: Single Page Application (2010-)**
- 1 pagina hebt waar alles op gebeurt. geen continue refreshes.
- data ophalen gebeurt op de achtergrond via AJAX => REST API
  - Asynchronous JavaScript And JSON
  - spinners net te dom.
- dynamisch DOM
- hip
- techstacks: Angular Vue React Svelte Blazor ...
  - Blazor C# => WebAssembly  7MB "hello world"
- nadelen: wil nog wel eens trager zijn
- voordelen/use case: hoog niveau van interactie

**SSR: Server-side rendering**
- de allereerste pagina waar de gebruiker op komt, die HTML wordt server-side gerenderd
- terwijl de gebruiker geniet van een mooie pagina, op de achtergrond worden dan alle 
  interactieve brokken opgestuurd
  - hydration
- complementair aan de SPA
- techstack: Next.js (React)  Nuxt.js (Vue)  @angular/ssr (Angular) Blazor (ASP.NET Core)
  Qwik (QwikCity)  Solid (SolidStart)  Svelte (SvelteKit)
  ```html
  <ul>
    @for(var item of lijstje) {
      <li>@item.Ding</li>
    }
  </ul>
  ```

**SSG: Static Site Generation**
- wehkamp bol.com amazon  HET KC
- catalogus product wikipedia
- product.php?id=15423
- buildproces catalogus  voor ieder product een HTML-pagina genereren
  - product-haarborstel-roze-843834.html
- techstack: Astro 11ty Hugo @angular/ssr Next.js

**MPA: Multi Page Application**
- niet hip
- meer pagina's
- pagina afzondelijk opgehaald/ingeladen
- continue refreshes  klik op link => refresht
- statische content  Wikipedia MDN
- techstacks: PHP Geronimo JSF/JSP Google Play! Spring API/Thymeleaf Wicket ASP.NET Core

## DOM API libraries/frameworks

- Angular
- Vue
- Svelte
- React JSX/TSX
- Solid
- ...

Waarom? Grotendeels om de DOM API makkelijker bruikbaar te maken middels databinding en change detection.

```html
<tr>
	@for(tosti of tostis; track tosti.id) {
		<td>{{tosti.description}}</td>
	}
</tr>
```

En vroeger waren libraries ook een browserabstractie:

```js
let btn = document.getElementById('btn');
if (btn.addEventListener) {
	btn.addEventListener('click', function() { ... });
}
else { // IE 6/7/8
	btn.attachEvent('onclick', function() { ... });
}

// jQuery
$('#btn').click(function() { });

```
