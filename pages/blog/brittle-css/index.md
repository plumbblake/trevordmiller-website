### What is brittle CSS?

When something is "brittle" it means it is easy to break. Brittle code means code you can't change easily without breaking something. CSS is a language that is prone to a lot of brittleness. There are some things we can do to make working with CSS better though! Let's look at some examples from our codebase.

### Example 1: a social media @mention tag

We have text inputs that let users at-mention social media accounts. They should look like this:

![at-mention component CSS](/static/edgar-at-mentions.png)

One day, we noticed the alignment had broken and they looked like this:

![@mention broken alignment screenshot](/static/edgar-at-mentions-broken.png)

The problem was that the CSS for our @mention tag was brittle. Making an "unrelated" change in the codebase had caused the styles to break here unintentionally.

#### Before

Here are some of the styles we had:

```css
.mention {
  position: relative;
  padding: 1px 2px 1px 8px;
  ...;
}

.socialIconContainer {
  position: absolute;
  top: 0.06em;
  left: 0.24em;
  ...;
}
```

#### After

Here are the same styles after refactoring:

```css
.mention {
  display: inline-flex;
  align-items: center;
  padding: 2px;
  ...;
}

.socialIconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-right: 2px;
}
```

We replaced the absolute positioning and hard-coded numbers with fluid self-calculating values. This means that now we can change other styles without breaking this code. Hard-coded positioning can almost always be replaced with fluid self-calculating values like this.

### Example 2: a sidebar layout

Sidebar layouts are really common in CSS. We had one in our app that looked like this:

![Sidebar layout screenshot](/static/edgar-sidebar-layout.png)

This worked well on desktop, but not on smaller screens:

![Sidebar layout mobile broken screenshot](/static/edgar-sidebar-layout-mobile-overflow.png)

#### Before

The styles were hard-coded for desktop:

```css
.root {
  padding: 20px;
  width: 1000px;
  margin: 0 auto;
}

.aside {
  float: left;
  width: 310px;
  margin-right: 20px;
}

.main {
  width: 670px;
}
```

#### After

After refactoring the styles look like this:

```css
.root {
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
}

.aside {
  max-width: 400px;
}

@media (min-width: 600px) {
  .root {
    padding: 20px;
  }
}

@media (min-width: 1000px) {
  .root {
    display: flex;
  }

  .aside {
    flex: 1;
    margin-right: 20px;
  }

  .main {
    flex: 2;
  }
}
```

Now we use "additive" media queries like this so the styles work on any screen size (mobile, tablet, desktop, TV...whatever); we start with the base styles that should apply always, then only add changes on top for explicit overrides. We replaced `width` with `max-width` to ensure items are 100% width on mobile so they don't overflow. Also, as with the first example, we replaced hard-coded values with fluid self-calculating values using flexbox.

### Red flags and alternatives

- `width` values can usually be replaced with `max-width` so that they don't overflow on smaller screens.
- Hard-coded numbers, absolute positioning, negative margins, and floats can almost always be replaced with modern flexible alternatives (flexbox, CSS grid, and CSS transitions like `translate` etc.).
- `max-width` _undo_ media queries can usually be replaced with `min-width` _additive_ media queries (or container queries, element queries etc.).
- `important!` and other "undo" rules are usually a symptom of bad cascading/inheritance that should be broken up into explicit styles.

Although there are legitimate uses for these, they are usually a code smell.

### Summary

If CSS is "hacky", there is probably a cleaner way! Using clean, flexible styles will keep styles self-contained so they don't break randomly.
