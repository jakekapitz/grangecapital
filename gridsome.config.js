// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Grange Capital',
  siteUrl: 'https://grangecapital.com.au',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: `/admin`
      }
    }
  ],
  icon: '/src/favicon.png',
  css: {
    loaderOptions:{
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
