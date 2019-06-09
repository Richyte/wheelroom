import { ComponentConfig } from './components-map'

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

export interface GatsbyNodeContext {
  /** Array with all configured models */
  componentConfigs?: ComponentConfig[]
  /** Contains for each named path: path: raw path, xx: localized xx path */
  namedPaths: NamedPaths
  /** The plugin configuration options */
  options: Options
  /** Path to the page template used to generate each page */
  pageTemplate: string
  queries?: {
    /** Each key contains the results of a global query */
    global?: {
      [globalName: string]: ContentfulObject[]
    }
    /** Each key contains the results of a subPage query */
    subPage?: {
      [contentName: string]: ContentfulObject[]
    }
    /** Each key contains the results of a page query */
    page: {
      [pageName: string]: ContentfulObject[]
    }
  }
  createPage(params: object): Promise<any>
  graphql(query: string): Promise<any>
}

export interface PageContext {
  pageId: string
  locale: string
  namedPaths: NamedPaths
  [IdKey: string]: string | NamedPaths | Options
}

export interface GetPageContext {
  context: GatsbyNodeContext
  page: ContentfulNode
  subPageContent?: ContentfulObject
}