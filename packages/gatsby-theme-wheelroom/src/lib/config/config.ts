import { ModelConfig } from '../types/config'

export const getAppDir = () => {
  return process.cwd()
}

export const getPackageDir = (packageName: string) => {
  return getAppDir() + '/node_modules/' + packageName
}

export const getGatsbyConfig = async () => {
  let config
  try {
    config = await import(getAppDir() + '/gatsby-config.js')
  } catch (error) {
    console.log('Could not find gatsby-config.js in', getAppDir(), error)
  }
  return config
}

export const getModelConfig = (config: any): ModelConfig[] => {
  const modelConfigs = [] as ModelConfig[]
  config.__experimentalThemes.forEach(theme => {
    theme.options.models.forEach(model => {
      modelConfigs.push(Object.assign(model, { resolve: theme.resolve }))
    })
  })
  return modelConfigs
}
