import plugin_gridsome_plugin_netlify_cms_6 from "C:\\sites\\client\\grangecapital\\node_modules\\gridsome-plugin-netlify-cms\\gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_7 from "C:\\sites\\client\\grangecapital\\node_modules\\@gridsome\\plugin-google-analytics\\gridsome.client.js"
import plugin_gridsome_plugin_tailwindcss_8 from "C:\\sites\\client\\grangecapital\\node_modules\\gridsome-plugin-tailwindcss\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_netlify_cms_6,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"C:\\sites\\client\\grangecapital\\node_modules\\gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"C:\\sites\\client\\grangecapital\\node_modules\\gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_7,
    options: {"id":"UA-153750486-1"}
  },
  {
    run: plugin_gridsome_plugin_tailwindcss_8,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelistPatterns":[{},{},{}],"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true}
  }
]
