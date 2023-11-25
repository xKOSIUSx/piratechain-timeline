![Pirate Chain Logo](assets/img/Pirate_Logo_Stacked_WG.svg)

# Pirate Chain Roadmap

This repository is an open-source timeline of the history for the Pirate Chain network. This is open-source, please improve this page by submitting a PR

This timeline can be accessed at
### [https://scott-ftf.github.io/pirate-timeline/](https://scott-ftf.github.io/pirate-timeline/)

***

## How to add a new post
To add a new post, create a `.md` file in the [_milestones](https://github.com/scott-ftf/pirate-timeline/tree/main/_milestones) directory. The file must be formatted in markdown syntax which allows for formatting text, lists, links, image linking, etc.

Each post filename MUST be the date in YYYY-MM-DD format, followed by the Title and .md extension. For example, `2018-08-29-The-Idea.md`

Each file must have the date in the frontmatter. Frontmatter is the data at the top of the page between the three dashes (`---`). The date must be in the YYYY-MM-DD format. While not required, it should be followed with 00:00:00 (HH:MM:SS). The time will not be displayed, but in the case where there are more than one entries on the same day, adding one second to each post will ensure they render in the correct order. 

Each post should include a H3 title at the top of the content (`###` in markdown)

Images can be hosted anywhere and linked to, however it is recommended to upload the images to `assets/img/posts/` and linking to them there. When linking to an image, it is recommended to put them into a anchor link so they can be opened up larger by the reader.

Example post:

[2018-08-29-The-Idea.md](https://raw.githubusercontent.com/scott-ftf/pirate-timeline/main/_milestones/2018-08-29-The-Idea.md)
```YAML
---
date: 2018-08-29 00:00:00
---

### The Idea

A question gets asked in the ask-jl777 channel in the Komodo Discord, which started the discussion. [[link]](https://discordapp.com/channels/412898016371015680/455851625915875338/484319952849993748)

[![The Idea](assets/img/posts/The-Idea-is-Born-in-KMD-768x516.png)](assets/img/posts/The-Idea-is-Born-in-KMD-768x516.png)

```

***

For reference on markdown syntax, please visit 
[markdown cheet sheet](https://www.markdownguide.org/cheat-sheet/)