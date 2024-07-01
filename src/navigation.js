import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'About',
          href: getPermalink('/#about'),
        },
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Why Zanzibar',
          href: getPermalink('#zanzibar'),
        },
        {
          text: 'Benefits',
          href: getPermalink('#benefits'),
        },
        {
          text: 'Presale',
          href: getPermalink('#presale'),
        },
      ],
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Docs',
      href: 'https://ourworldfreezone.github.io/info_freezone/intro/intro_readme.html',
      target: '_blank',
    },
  ],
  actions: [{ text: 'Contact', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'OurWorld',
      links: [
        { text: 'OurWorld', href: 'https://ourworld.tf' },
        { text: 'ODFZ Demo', href: 'https://ourworld.vindo.ai/slider/95' },
      ],
    },
    {
      title: 'Partners',
      links: [
        { text: 'ThreeFold', href: 'https://threefold.io' },
        { text: 'Govt of Zanzibar', href: 'https://egaz.go.tz/en/' },
        { text: 'Incubaid', href: 'https://incubaid.com/' },
        { text: 'Sikana', href: 'https://sikana.tv/' },
        { text: 'VVerse', href: 'https://vverse.co/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://ourworldfreezone.github.io/info_freezone/intro/intro_readme.html' },
        { text: 'Community Forum', href: 'https://forum.threefold.io' },
        { text: 'Telegram', href: 'https://t.me/threefoldnews' },
        { text: 'Support', href: 'https://threefoldfaq.crisp.help/en/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Blog', href: '#blog' },
        { text: 'FAQ', href: '#faq' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href:'https://library.threefold.me/info/legal/#/legal__terms_conditions_websites', target: '_blank', },
    { text: 'Privacy Policy', href: 'https://library.threefold.me/info/legal/#/legal__privacypolicy', target: '_blank', },
  ],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/threefoldnews' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ourworldventures/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Docs', icon: 'tabler:book', href: 'https://ourworldfreezone.github.io/info_freezone/intro/intro_readme.html' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/images/logo.svg" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://ourworld.tf/"> OurWorld Holdings</a> · All rights reserved.
  `,
};
