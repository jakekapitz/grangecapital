# Grange Capital Website

This repository is the codebase from which the [Grange Capital](https://grangecapital.com.au) website is deployed onto Netlify. The site uses NetlifyCMS to manage News posts, as well as Netlify Forms to manage it's contact form.

## Adding News Articles
A GitHub account granted access to this private repository is required to login to the backend where a user can post news articles.

1. Navigate to the [Admin page](https://grangecapital.com.au/admin)
2. Click 'New Posts' button
3. Fill in the fields
  * **Title**: Title of the post
  * **Publish Date**: Defaults to today's date, can backdate if required
  * **Featured Image**: Upload or select existing image to associate with the article; will display as a thumbnail on the News Page and in full size on the post page
  * **Body**: Write the body of the post here
 4. Click 'Publish' button
 
Once an article is published, Netlify will automatically trigger a rebuild of the website. The new article will be shown on the site after ~1-2 minutes.

## Technologies Utilised
The below technologies are in use on the site:

#### [Gridsome](https://gridsome.org/)
VueJS framework used to develop the site

#### [TailwindCSS](https://tailwindcss.com/)
CSS framework used to style the site

#### [Netlify](https://netlify.com)
Used to build and host the site

## Additional Packages Used

Package Name | Usage
--- | ---
NetlifyCMS | Content Management System for creation of News articles
Gridsome Plugin - Netlify CMS | Plugin to enable the use of NetlifyCMS with Gridsome
@gridsome/source-filesystem | Used to support News pages with NetlifyCMS
@gridsome/transformer-remark | Used to read the Markdown files created by NetlifyCMS
AOS | Used to animate HTML elements on pages
Typeface-Abhaya-Libre | Packaged, self-hosted version of Google Font 'Abhaya Libre' used in logo/headings
Typeface-Open-Sans | Packaged, self-hosted version of Google Font 'Open Sans' used for body text
FontAwesome 5 | Various icons used across the site (Free Solid/Free Brands)

## 
