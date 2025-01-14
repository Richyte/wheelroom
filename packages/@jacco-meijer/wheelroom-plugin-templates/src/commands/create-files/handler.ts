import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import {
  getAvailableTemplateSets,
  getTemplateSet,
} from '../../lib/get-template-sets'
import { writeFiles } from '../../lib/write-files'
import { Options } from '../../types/options'

export const handler = async (argv: any) => {
  const pluginOptions = argv.options[
    '@jacco-meijer/wheelroom-plugin-templates'
  ] as Options

  const templateSet = getTemplateSet(
    argv.templateSet,
    pluginOptions.templateSets
  )
  if (!templateSet) {
    const templateSets = getAvailableTemplateSets(pluginOptions.templateSets)
    console.log(`Could not find templateSet ${argv.templateSet}`)
    console.log(`Avaialble templateSets are: ${templateSets}`)
    return
  }

  await writeFiles(
    argv.path,
    templateSet,
    pluginOptions,
    getFilteredComponents(argv)
  )
}
