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
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-153750486-1'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelistPatterns: [/svg-inline--fa/]
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
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
