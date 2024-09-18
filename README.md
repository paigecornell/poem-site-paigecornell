# IDMX 11ty Sass Starter

The set of development scripts in this starter is configured to watch and compile a simple Sass structure using 11ty.

The code is located in the `src` folder and the page is created in the `public` folder.

The `settings.json` in the `.vscode` folder sets the `LiveServer` configuration to serve from the `public` folder and can be used to serve the built page.

The build process includes minifiying and autoprefixing of styles via the `postbuild` script, which runs automatically after a `build`.

## Installation

**`npm install`**

PS C:\Users\Paige\poem-site-paigecornell> npm install

up to date, audited 398 packages in 2s

104 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\Paige\poem-site-paigecornell> 


## Development Scripts

**`npm start`**

PS C:\Users\Paige\poem-site-paigecornell> npm start

> idmx-11ty-sass-starter@2.0.0 start       
> npm-run-all build:sass --parallel watch:*

> idmx-11ty-sass-starter@2.0.0 build:sass
> sass  --no-source-map src/sass:public/css

> idmx-11ty-sass-starter@2.0.0 watch:sass
> sass  --no-source-map --watch src/sass:public/css

> idmx-11ty-sass-starter@2.0.0 watch:eleventy
> eleventy --serve

Sass is watching for changes. Press Ctrl-C to stop.

[11ty] Writing public/index.html from ./src/index.html (liquid)
[11ty] Copied 5 files / Wrote 1 file in 0.09 seconds (v2.0.1)
[11ty] Watching…
[11ty] Server at http://localhost:8080/

**`npm run build`**

> This script does a production build and includes minified, autoprefixed CSS.

Use this as the "Publish command" if needed by hosting services such as Netlify.

## Resources

Poem by Alfred Joyce Kilmer. Photograph by Simon Wilkes.
