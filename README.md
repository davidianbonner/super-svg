# Easy SVG

###### N.B. This plugin is very much in it's infancy and was put together to handle my personal needs with a project. Both tests and build scripts are coming soon. A CSS stylesheet will be included shortly as well.

## How easy?

@todo

## Usage

#### Step 1

Include jQuery (but you knew that already).

#### Step 2

Include the plugin:

```html
<script src="dist/jquery.easy-svg.min.js"></script>
```

#### Step 3

Set the path to the SVG sprite sheet. Sprite sheets can be generated at https://icomoon.io/ or put together manually.

```javascript
// 'window.$svgpath' can be a string
$.fn.svgIcon.options.path = window.$svgpath;
```

#### Step 4

Use `[data-icon="svg-id"]` to initialise the icons. The `data-icon` attribute takes the ID associated with the symbol within the SVG document.

```html
<span class="my-icon-class" data-icon="star"></span>
```

## Contributing

Check [CONTRIBUTING.md](https://github.com/dbonner1987/easy-svg/blob/master/CONTRIBUTING.md) for more information.

## License

[MIT License](https://dbonner1987.mit-license.org/) © David Bonner
