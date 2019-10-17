## Description

This is a boilerplater setup for a simple blog. The stack is GatsbyJS and Contentful. GatsbyJS is a static site generator which uses React. Contentful is a headless content management system (CMS).

## Setup


Latest Node installed. It is a good idea to use NVM but not mandatory.

`npm install --global gatsby-cli`

`npm install --global surge`

`npm install`

Create a free account at [Contentful](https://www.contentful.com/get-started/).

Then in your space create a content model called BlogPost. This field will need 4 fields to start with.

- title - Will be the title of the post
- slug - Name for the route to be used on the site(should not contain white space)
- createdDate - It's a date :). Needed to sort blog post. 
- postBody - The post it self. Should be set up as "long text" and Appearence should be set to Markdown

Then go to Settings -> API keys -> Copy both Space ID and Content Delivery API - access token. 

Create a file called `.env` 

Add the following:

CONTENTFUL_SPACE_ID='YOUR-PERSONAL-SPACE-ID'

CONTENTFUL_DELIVER_API_TOKEN='YOUR-PERSONAL-DELIVERY-TOKEN'

Now create a real blog post!

## Running the project

cmd: gatsby develop

-> Will start the devserver with HMR and GraphQL playouground.

You can reach your site at: http://localhost:8000

You can reach your GraphQl playground at: http://localhost:8000/___graphql

## 💫 Deploy

We will deploy the blog to Surge.sh. In order to do so we will first run gatsby build which will put the static site under /public. Navigate in your terminal to the public folder.

Watch this [mini-tutorial](https://surge.sh/help/getting-started-with-surge)

So when standing in /public run the command surge. Enter your information and give your domain a name. After completing the setup the surge-cli tool will make your site live. Now send a mail to your mom, tell her you have quit your job as an IT-consultant in order to become a full time influencer. 

## Further assigments


So now we have something running. But in order to get to know the stack better I have some assignments waiting.


# Contentful


- Update your content model with a list field. You have decided that you want to list a couple of links at the bottom of every blog post. When doing this you will have to make changes in the blog-post template, the and the model in contentful. Start with the model and use the GraphQl playground in order to see what you can query.

- The contentful plugin has the ability to cache content and assets. This means that you can still build your project without having a network connection. Perhaps not the latest content but perfect for the days when you are stuck in a train deep beneath the earth. Before the Battle Royal starts you can always get some work done. Look att the documentation and try it out for your self. [DOCS](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)

- Right now you are getting published content. Look at the docs of the gatsby-source-contentful plugin and switch to the preview API! [DOCS](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)


# Styling

- Does your blog look boring. GatsbyJs has suport for different CSS approaches. Read more in the [DOCS](https://www.gatsbyjs.org/docs/styling/). Then style your blog!


# Gatsby

- If you want to be a world class influencer you have got to work with SEO. Add some basic SEO by follwing this [tutorial](https://www.gatsbyjs.org/docs/add-seo-component/).

- Build a footer component that can be used through out the site. 

- Sourcing from the local filesystem. Right now we are using data from Contentful mainly. Lets query a JSON file using the filesystem plugin. I have prepared a file in the project. In the _data_ folder there is a json file _contact.json_. In order to be able to query it you have to add another dependency to project in the form of a gatsby [transformer](https://www.gatsbyjs.org/tutorial/part-six/) called [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/). You also have to add it to your gatsby-config file. The last step is to set up new entry point for filesystem queries. Right now we can only query files in the images folder. Retrieve the email and put it in your about page. Use the docs and the GraphQl playground in order to find out how the query should be structured.  

- Change the image on the index site to something you like. If you want to learn more about the gatsby-image API read the [DOCS](https://www.gatsbyjs.org/packages/gatsby-image/). Try changing the image from _fluid_ to _fixed_.

## Final words

The Gatsby site has a lot of documentation. This workshop has been based on something called a _starter_. There are many more starters available. The _starters_ are mini repos designed for you to get up to speed quickly.  so if blogging is not your thing take a looke [here](https://www.gatsbyjs.org/plugins/?).

Gatsby har a lot of plugins for handling various things. Take a look at the [marketplace](https://www.gatsbyjs.org/starters/?).

## Description of folder and files that GatsbyJS uses:

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

