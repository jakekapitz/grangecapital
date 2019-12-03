# Grange Capital Website

This repository is the codebase from which the [Grange Capital](https://grangecapital.com.au) website is deployed onto Netlify. The site uses NetlifyCMS to manage News posts, as well as Netlify Forms to manage it's contact form.

## Site Structure
The `src` folder contains the code of the website. The various folders within there are where you'll find the pages that make up the site itself; I've detailed below what each of the subfolders are that make up the site.

#### Admin
Ignore this folder; these files drive the Content Editor that allows you to make News posts

#### Assets
Ignore this folder; these are the images on the site and the CSS (styling) code

#### Components
The files in here are each named for the Component they make up; these Components are used in various areas of the site.

Component Name | Usage
--- | ---
Header | Navigation bar that sits at the top of the site
Footer | Grey section at the bottom of each page
ContactForm | Form that sits on the Contact page that will send an email to enquiries@grangecapital.com.au
PageTitleBar | Light grey area with red page title on most pages
LatestNews | Renders the most recent 5 posts in the sidebar on individual News posts pages

#### Layouts
This is the parent layout file for the site; it renders the Header and Footer component for every page and the specific page content

#### Pages
The files in here are each named for the specific page that it renders; these are the files that you'll need to update if you wish to change any of the body copy on the site.

Page Name | Usage
--- | ---
About | 'About Us' page
Business | 'Our Business' page
Contact | 'Contact' page; uses the ContactForm component
Index | 'Home' page
News | 'News' parent page
Success | Displayed only when a user submits an enquiry via the ContactForm
Team | 'Our Team' page

#### Templates
The 'Post' template drives the layout of the individual News article pages

## Adding News Articles
A GitHub account granted access to this private repository is required to login to the backend where a user can post news articles.

1. Navigate to the [Admin page](https://grangecapital.com.au/admin)
2. Click 'New Posts' button
3. Fill in the fields
|Field              | Details|
|-------------------|---|
|**Title**          | Title of the post|
|**Publish Date**   | Defaults to today's date, can backdate if required|
|**Featured Image** | Upload or select existing image to associate with the article; will display as a thumbnail on the News Page and in full size on the post page|
|**Body**           | Write the body of the post here|
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
