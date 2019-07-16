import { getComponentFields } from '../partials/get-component-fields'
import { getGraphqlFields } from '../partials/get-graphql-fields'
import { Vars } from '../types/vars'

export const graphqlFragmentQuery = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (!vars.options.filter.includes(vars.answers.wheelroomType)) {
    return
  }

  const fields = getComponentFields(vars.answers.componentFields)
  const graphqlFields = getGraphqlFields(fields)

  return `/**
 * Graphql definitions
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.answers.wheelroomType}
 *
 */

export const fragment = \`
  fragment ${vars.componentName.pascalCase} on Contentful${vars.componentName.pascalCase} {
${graphqlFields}
  }
\`

export const query = \`
{
  ${vars.componentName.camelCase}: allContentful${vars.componentName.pascalCase}(
    limit: 10
  ) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
\`
`
}