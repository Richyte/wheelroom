module.exports = {
  newModel: [
    {
      default: 'My new component',
      message: 'What is the name of the component?',
      name: 'componentName',
      type: 'input',
    },
    {
      choices: ['section', 'part', 'block', 'subPage', 'global'],
      message: `
          
      Section: A section is a part of a page and has no query
      Part:    A part is part of a section and has no query
      Block:   A part of a richText field, has no fragment or query
      SubPage: defines fields and a query, if the slug field matches, the page is fetched
      Global:  defines fields and a query, always fetched and added to every page
      
      What is the component wheelroom type?`,
      name: 'wheelroomType',
      type: 'rawlist',
    },
    {
      default: 'author, bodyText, heading',
      message: `
      
      This will setup required Symbol fields. Title and variation fields are always created.
      
      What fields would you like to setup?`,
      name: 'componentFields',
      type: 'input',
    },
  ],
}
