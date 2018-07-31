### The code

The code is [available on GitHub](https://github.com/trevordmiller/trevordmiller-website).

![The home page of trevordmiller.com](/static/trevordmiller-website.png)

### Scripts

The project has a [minimal package.json](https://github.com/trevordmiller/trevordmiller-website/blob/master/package.json). This file declares dependencies, scripts, and some config for compilation and linting. The only steps needed to work in the app are to clone it, run `npm install` to install dependencies, then run `npm run dev` to develop. `npm run verify` can additionally be run to check builds, linting, and tests. Once a pull request is merged into master, `npm run stage` is run to deploy the latest code to a test release URL; if everything looks good, `npm run release` is run to tie the latest deployment to the `trevordmiller.com` URL.

![Screenshot of working on the website in vim](/static/trevordmiller-website-workflow.jpg)

### Directories

The project has three directories: `static`, `components`, and `pages`.

[The static directory](https://github.com/trevordmiller/trevordmiller-website/tree/master/static) holds static files (like favicons and raster images). When the app is deployed, these can be accessed at `/static/*`. This functionality works by default with Next.js.

[The components directory](https://github.com/trevordmiller/trevordmiller-website/tree/master/components) holds generic components used across app pages. These are ES2015 modules that export React components, things like Icons, Buttons, Headings etc.

[The pages directory](https://github.com/trevordmiller/trevordmiller-website/tree/master/pages) holds app pages. A page is just a component, but it is special because Next.js wires up the file path to the matching route (ie `pages/index.js` becomes `https://trevordmiller.com` and `pages/projects/guitar-lessons` becomes `https://trevordmiller.com/projects/guitar-lessons`). This functionality works by default with Next.js. The page components generally just compose the generic components in the `components` folder to create a page.

Files are organized in `SomeFile` named directories with an `index.js` for the entry point. This allows them to have sub-components or utilities that are referenced with a relative path for easy extraction into an npm published package.

### Style guide

The project uses [a module for a style guide](https://github.com/trevordmiller/trevordmiller-website/blob/master/utils/theme/index.js). This is the source for shared styles like colors, spacing (padding/margin), font sizes, etc. The color scheme is [Nova](/projects/nova), which I use across my projects and tools - so the style guide module simply maps colors to the `nova-colors` npm package values.

![Screenshot of nova color tiles](/static/nova-colors.jpg)![Screenshot of the guitar lessons fretboard pattern picker](/static/guitar-lessons.jpg)

### Conclusion

I'm happy with how this has turned out. It seems to be easy to maintain and add-to. Let's see how it does going forward :)
