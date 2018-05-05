### Which color scheme?

This post is about how [Nova - A color scheme with meaning](/projects/nova) was built.

### Project goals

I had a set of goals for the project

![Nova color scheme goals](/static/nova-characteristics.png)

I especially wanted each color to have a dedicated meaning so that the color scheme was functional

![Nova color scheme color meanings](/static/nova-color-meanings.png)

### Project implementation

I wanted the project to be easy to maintain, so I decided to create a source module called [nova-colors](https://github.com/trevordmiller/nova-colors) that could contain all of the color values (organized by color meaning), and then use this module in the repo for each editor and tool so that they could all be updated from the same source. I did this for editors (Vim, Atom), terminal emulators (Hyper, iTerm), and other tools (Git, tmux).

Here is an example of [the Nova Vim plugin](https://github.com/trevordmiller/nova-vim/blob/master/src/index.js); you can see how the src/ directory contains the vim-specific wire-up while using the nova-colors package for color values, and then this gets compiled.

The nice thing about having nova-colors as its own package is it can be used anywhere; for example, [I'm using it on my own website as part of the style guide module](https://github.com/trevordmiller/trevordmiller-website/blob/master/utils/theme/index.js).

### Conclusion

I would recommend using a shared location for source values for things like style guides and color schemes, with a compile step - it makes using and maintaining them a lot easier ;)
