export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6074a91f1940f82084655d2a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yf2kif8c',
                  apiId: '0995b929-700a-457a-a0b9-fc90329d5af7'
                },
                {
                  buildHookId: '6074a91f22d3771cfa73d9bb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nzkbqhgo',
                  apiId: '5fe546f8-2076-4994-97c4-9de37c52716e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/insidemedia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nzkbqhgo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
