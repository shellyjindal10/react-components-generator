# generator-fanatics-components 

## Installation

First, install [Yeoman](http://yeoman.io) and react-components-generator using (https://github.com/shellyjindal10/react-components-generator.git)(we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
git clone https://github.com/shellyjindal10/react-components-generator.git
cd react-components-generator
npm link
```

Then generate your new react component:

```bash
yo react-components
```

Example Output

```bash
bash$ yo react-components

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |  Welcome to react component |
   `---------´   |       generator      |
    ( _´U`_ )    | react components |
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

