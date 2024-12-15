/**
 * @name ApiName
 * @desc Description
 * @param {event} 传递给服务器的参数.
 */

export default defineEventHandler((event) => {
  return [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Features',
      route: '/feature',
    },
    {
      label: 'Projects',
      items: [
        {
          label: 'Components',
        },
        {
          label: 'Blocks',
        },
        {
          label: 'UI Kit',
        },
        {
          label: 'Templates',
          items: [
            {
              label: 'Apollo',
            },
            {
              label: 'Ultima',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
    },
  ]
})
