![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# MarkdownToHTML Component

This stencil markdowntohtml component will render a markdown text to HTML. It is based on [marked](https://marked.js.org/#/README.md).

## Installation
Stencil components can be integrated with many javascript frameworks (angular, react, ...) or with javascript native.. More information on this [here](https://stenciljs.com/docs/overview)

## Usage

Simply include the component into html code like any other HTML tag. Use the 'content' attribute to pass the markdown text to be rendered into HTML.
Example :

```bash
<markdowntohtml-component content="# Markdown Component

This stencil markdown component will render a markdown text to HTML. It is based on [marked](https://marked.js.org/#/README.md)."></markdown-component>
```
## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/markdowntohtml-component@0.0.1/dist/markdowntohtmlcomponent.js'></script>` in the head of your index.html

### Node Modules
- Run `npm install markdown-component --save`
- Put a script tag similar to this `<script src='node_modules/markdowntohtml-component/dist/markdowntohtmlcomponent.js'></script>` in the head of your index.html

### In a stencil-starter app
- Run `npm install markdowntohtml-component --save`
- Add an import to the npm packages `import markdowntohtml-component;`

### Use in template
You can then use the element anywhere in your template, JSX, html etc
Simply include the component into html code like any other HTML tag. Use the 'content' attribute to pass the markdown text to be rendered into HTML.

Example :

```bash
<markdown-component content="# Markdown Component

This stencil markdown component will render a markdown text to HTML. It is based on [marked](https://marked.js.org/#/README.md)."></markdown-component>
```
