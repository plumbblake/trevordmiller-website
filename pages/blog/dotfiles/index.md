### What are dotfiles?

Dotfiles are a file that has a filename prefixed with a dot (period) like `.bashrc`, `.gitconfig`, and `.vimrc`. This means they are hidden by default on most operating systems. Most of them live in your home directory (although projects can have local dotfiles that override global settings such as `.gitignore`, `.travis.yml` etc).

You can see your global dotfiles by listing the hidden files in your home directory (`ls -a ~`). You will most likely see a few of them.

![Listing hidden dotfiles in your root directory](/static/dotfiles-list.png)

### Where do dotfiles come from?

Some tools generate dotfiles automatically, others you can add and manage yourself. For example, I manage a few dotfiles that are critical for my workflow.

![My managed dotfiles](/static/dotfiles.png)

- `.snippets` is where I keep my code snippets.
- `.bash_profile` is run when my shell (Bash) starts. This is where I set up my `$PATH`, shell prompt, Unix command aliases, etc.
- `.gitconfig` is used by Git for global configuration. This includes my default Git options, logging colors, etc.
- `.tmux.conf` is used by tmux (a window manager for the terminal) to set up keyboard shortcuts, styles etc..
- `.vimrc` is used by Vim (a terminal editor) to configure editor settings, plugins, styles etc.

### Backing up dotfiles with Git

The beauty of dotfiles is it is how you like to use your tools organized in one place! You can move them to any computer you work on to feel right at home. I keep my dotfiles backed up in a Git repo so I don't loose them and so they can be easily cloned and used on any machine I am on.

[View my dotfiles repo](https://github.com/trevordmiller/dotfiles)

Most tools that use dotfiles require their dotfiles to exist in your home directory, so once you organize them in a Git repo like this, you need to symlink (symbolic link) them to your home directory. The index script at the root of my dotfiles repo is run to do this automatically for any amount of dotfiles in the files directory.

### Conclusion

Dotfiles are a great way to organize your settings and are the default option for many tools. I'd recommend organizing yours in a Git repo like this so that you can keep track of and duplicate your settings anywhere.
