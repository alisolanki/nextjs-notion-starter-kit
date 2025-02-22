import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2a0bbc47e22444788d0777851e5938f9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ali Solanki Portfolio Website',
  domain: 'alisolanki.com',
  author: 'Ali Solanki',

  // open graph metadata (optional)
  description: 'Ali Solanki Portfolio Website',

  // social usernames (optional)
  twitter: 'alisolankii',
  github: 'alisolanki',
  linkedin: 'AliSolanki',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: 'https://alisolanki.substack.com', // optional newsletter URL
  youtube: 'AliSolanki', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/projects': '6195934f09cf4d5298eee674e0a17646',
    '/sponsor': 'c02fcfe93ee44648b14a714456d8d147',
    '/blogs': 'c4410427ab294d3d9ad91d8fed7377cd',
    '/press-kit': '1084450bd43944488d5d3ef95e17552c',
    '/my-story':'a162169b6ee641e9b06c2c2c379a0d62'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Projects',
      pageId: '6195934f09cf4d5298eee674e0a17646'
    },
    {
      title: 'Sponsor',
      pageId: 'c02fcfe93ee44648b14a714456d8d147'
    },
    {
      title: 'Blogs',
      pageId: 'c4410427ab294d3d9ad91d8fed7377cd'
    }
  ]
})
