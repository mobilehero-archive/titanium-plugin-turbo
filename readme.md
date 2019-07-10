# @titanium/plugin-turbo

![https://www.npmjs.com/package/@titanium/plugin-turbo](https://img.shields.io/npm/v/@titanium/plugin-turbo.png)

> Titanium Mobile plugin to use locally installed Turbo or Alloy (if available)


- [📝 Description](#-Description)
- [🚀 Getting Started](#-Getting-Started)
- [🔗 Related Links](#-Related-Links)
- [📚 Learn More](#-Learn-More)
- [📣 Feedback](#-Feedback)
- [©️ Legal](#️-Legal)

## 📝 Description

Here are how things currently work by default:

- [Titanium Mobile](https://www.npmjs.com/package/titanium) will use the globally installed [Alloy](https://www.npmjs.com/package/alloy) package when compiling mobile apps.
- [Appcelerator](https://www.npmjs.com/package/appcelerator) bundles a version of [Alloy](https://www.npmjs.com/package/alloy) with it and will use that when compiling mobile apps.

The goal and purpose of this plugin is to allow you to install a specific version of [Turbo](https://www.npmjs.com/package/@titanium/turbo) or [Alloy](https://www.npmjs.com/package/alloy) locally and to be able to have Titanium and/or Appcelerator use this when compiling your app.

## 🚀 Getting Started

> NOTE:  Before installing this plugin, make sure you have a `package.json` file in the root of your project.   If you don't, you can just run the following in the project root directory and it will create one for you:

```
npm init --yes
```

To install this plugin, run the following in the project root directory:

```
npm install --save-dev @titanium/plugin-turbo
```

This will install the npm package as well as run a post-install script that will also create the Titanium plugin for you.

> Don't worry about having this plugin installed if you do not have Turbo or Alloy installed locally.  If the plugin cannot find Turbo or Alloy locally, it will fallback to the default location depending on your tool (see above).

## 🔗 Related Links

- [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.
- [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.
- [Turbo](https://www.npmjs.com/package/@titanium/turbo) - Variation of Titanium Alloy that adds some enhancements and customizations for rapid development.
- [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool

## 📚 Learn More

- [Axway Developer Portal](https://developer.axway.com)

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-plugin-turbo/issues)! 

## ©️ Legal

Alloy is developed by Appcelerator and the community and is Copyright © 2012-Present by Appcelerator, Inc. All Rights Reserved.

Alloy is made available under the Apache Public License, version 2. See their license file for more information.

Appcelerator is a registered trademark of Appcelerator, Inc. Titanium is a registered trademark of Appcelerator, Inc. Please see the LEGAL information about using trademarks, privacy policy, terms of usage and other legal information at http://www.appcelerator.com/legal.