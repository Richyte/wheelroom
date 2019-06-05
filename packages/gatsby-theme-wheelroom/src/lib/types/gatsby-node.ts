import { ModelInfo } from '../model-api/types'

export interface Options {
  defaultLocale: string
  appTheme: string
  globals: {
    [globalName: string]: string
  }
  subPageContent: {
    [contentName: string]: string
  }
  pageTemplate: string
}

export interface ContentfulNode {
  id: string
  [key: string]: string
}

export interface ContentfulObject {
  node: ContentfulNode
  node_locale: string
}

export interface NamedPaths {
  [pathName: string]: {
    path: string
    [localeName: string]: string
  }
}

export interface Data {
  /** Each key contains the results of a globals query */
  globals: {
    [globalName: string]: ContentfulObject[]
  }
  /** Each key contains the results of a subPageContent query */
  subPageContent: {
    [contentName: string]: ContentfulObject[]
  }
  /** Array with all configured models */
  models?: ModelInfo[]
  /** Models dictionary by type key */
  modelsByType?: any
  /** Contains for each named path: path: raw path, xx: localized xx path */
  namedPaths: NamedPaths
  /** The plugin configuration options */
  options: Options
  /** Results of the page query */
  pages: ContentfulObject[]
  /** Path to the page template used to generate each page */
  pageTemplate: string
  createPage(params: object): Promise<any>
  graphql(query: string): Promise<any>
}

export interface Context {
  pageId: string
  locale: string
  namedPaths: NamedPaths
  [IdKey: string]: string | NamedPaths | Options
}

export interface GetContext {
  data: Data
  page: ContentfulNode
  subPageContent?: ContentfulObject
}