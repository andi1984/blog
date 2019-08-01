---
title: "VSCode Extensions"
date: 2019-07-30T08:45:39+02:00
spotify: ""
series: ["Tools"]
draft: false
---

I'm using [VSCode](https://code.visualstudio.com/) since several years for private projects, but also during my working time as a frontend developer.

Within this time I got [a lot of extensions](https://gist.github.com/andi1984/690e55c1bcf192299abf1e4f42e13404) installed, tested and uninstalled again. But today I would like to report about those extensions that I kept in and use in my daily work. So those extensions have a high value to myself.

## Themes

- **[i - A Minimal Theme](https://marketplace.visualstudio.com/items?itemName=ctrlplusb.i-minimal-theme)**:
  I used that one for most of my time in VSCode. It is a very good black white theme.
- **[Ayu Light Bordered](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu)**:
  I started to use that one after the black and white theme and I like it very much.

## Workflows

- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)**:
  I think this one is already a well known extesion. Nothing much to say, but I use this extension everyday for seeing inlined git blames within the editor and ability to see full file or line history. I can highly recommend this extension.
- **[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)**: This is probably my most used extension since start. It allows you to sync all your editor settings and installed extensions in a Gist [like this one](https://gist.github.com/andi1984/690e55c1bcf192299abf1e4f42e13404). It is super stable and works like a charm!
- **[Jira and Bitbucket (Official)](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode)**: In case you are working a lot with Bitbucket or Jira, you will like this official Atlassian extension. It provides access to interact, view and edit Jira tickets directly within VSCode or in my opinion more interesting: review PRs directly in your editor and jump to the code locations that changed and see a full diff of it. Thus it is very helpful for reviewing PRs in a better and known context, namely your editor. Really nice! For [Github](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) there is something similar for reviewing PRs.

## File based Extensions
- **[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)**: We all document and thus comment our code, right? 😊 This extension is helpful to highlight parts of your comments like todos, notes etc. It is customizable and very handy to find important comments more easily between all your code fragments.
- **[Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)**: This is an official Microsoft extension using AI to suggest you with better code autocompletion. I have no direct experience with that, but it comes close to what [TabNine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode) is doing as well. But I can not tell which of them is better. It is just interesting to see AI based autocompletion suggestions e.g. based on the existing code in your repo.

## Frontend extensions

There are thousands of programming language specific extensions and thus whatever you search in the [marketplace](https://marketplace.visualstudio.com), you will probably find something.

- **[colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)**: Colorize colors your CSS color definitions in the respective background color. Thus it is very handy to really "see" all colors at a glimpse.
- **[Name that color](https://marketplace.visualstudio.com/items?itemName=guillaumedoutriaux.name-that-color)**: You want to give your color definitions a name (e.g. for saving them in variables)? The extension is using the same logic as the respective french [online tool](http://chir.ag/projects/name-that-color/#6195ED).
- **[Node.js Modules Intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense)**: Simply THE extension for everything related to NPM packages.
- **[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)**: To see the size of JavaScript packages imported or included in your file. _Note_: Some while ago this extension was causing a very high CPU usage, thus in case of issues with VSCode beeing too greedy, probably look whether disabling this extension solves your issue. But since then I never had an issue again.
- **[Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)**: This extension is helpful for generating [JSDoc](https://devdocs.io/jsdoc/) comments in seconds.

What are your favourite VSCode exteions and why? Let me know about [Twitter](https://twitter.com/@andi1984).

{{< note >}}In case you want to share your extension suggestions, there is also the possibility to define so called
_extension packs_. [Centigrade](https://www.centigrade.de/en) for example did this by defining their [Centigrade Angular Extensions](https://marketplace.visualstudio.com/items?itemName=centigrade.centigrade-angular-essentials) which
could be very helpful for onboarding to directly point to this extension pack the developer can download and by that
directly has access to appropriate extensions and toolset in VSCode for his/her job.{{</ note >}}


Greets,

Andi

