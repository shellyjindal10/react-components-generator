# generator-fanatics-components 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-fanatics-components using (jaxf-github.fanatics.corp)(we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
git clone https://jaxf-github.fanatics.corp/3c-web-ui/fanatics-components-generator.git
cd fanatics-components-generator
npm link
```

Then generate your new Fanatics UI component:

```bash
cd 3c-web-ui/fanatics-ui/src/components/
yo fanatics-components
```

Example Output

```bash
bash$ yo fanatics-components

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |  Welcome to the Fanatics |
   `---------´   |       UI component       |
    ( _´U`_ )    | generator-fanatics-components |
    /___A___\    |        generator!        |
     |  ~  |     '--------------------------'
   __'.___.'__
 ´   `  |° ´ Y `

? What is your Component name ? product-title
   create product-title/product-title.js
   create product-title/product-title-container.js
   create product-title/product-title-root.js
   create product-title/product-title-route.js
   create product-title/product-title-client.js
   create product-title/package.json
   create product-title/styles/product-title.scss
   create product-title/test/product-title-test.js
   create product-title/test/data/base.js
   create product-title/test/dev/server.js
```

