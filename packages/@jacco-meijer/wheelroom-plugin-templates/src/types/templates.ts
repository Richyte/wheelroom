/** Passed to plugin for processing */
export interface Templates {
  [templateName: string]: Template
}

export interface Template {
  /** Custom options passed to each template */
  options: any
  /** E.g. path/to/file/README.md */
  path: string
  /** Template data  */
  template: any
  /** Module component was imported from */
  sourceModule: string
}
