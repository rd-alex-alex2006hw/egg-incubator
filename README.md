# Egg Incubator
Starter kit for anyone that wants to use the next generation CSS before all browsers support it with the power of [postCSS](https://github.com/postcss/postcss "postCSS")

###Requirements:
- [Node.js](https://nodejs.org/)
- [Node Package Manager (npm)](https://www.npmjs.com/)

###Get up and running: 
1. `$ npm install` - this will install the following packages:
    - [cssnext](https://github.com/cssnext/cssnext) lets you future CSS syntax and compiles it to more compatible CSS. It includes:
        - [autoprefixer](https://github.com/postcss/autoprefixer-core), to adds vendor prefixer to your CSS
        - [cssnano](https://github.com/ben-eb/cssnano) to minify, optimise and obscurify your CSS
    - [grunt](http://gruntjs.com/) is our chosen task runner
    - [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) lets us combine the content of files and jam it into one
    - [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from src to dist
    - [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) is a grunt task for watching files and directories for changes
    - [grunt-postcss](https://github.com/nDmitry/grunt-postcss) is a tool for transforming CSS with JS plugins, such as cssnano and cssnext
    - [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) makes the Gruntfile.js a lot cleaner. Everything we add to node_modules will be loaded as a task so you don't have to list all of them
3. `$ grunt` - this will create a dist/ directory with your processed files from src/ 
4. `$ grunt watch` - listens to changes to css, js and html files and processes them into dist/
5. Open /dist/index.html in a browser. If you see the text "Congratulations!" and a spinning egg at the bottom of the screen you're all set!
