import {
  createNewAsset,
  getAsset,
  publishAsset,
  updateAsset,
  uploadFile,
} from '../../contentful-api/asset'
import { getClient, getEnvironment, getSpace } from '../../contentful-api/init'
import { ContentfulApiContext } from '../../types/contentful-api-context'

const finish = async (context: ContentfulApiContext) => {
  console.log(`Succesfully created asset`)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const createAsset = async (context: ContentfulApiContext) => {
  console.log(`Creating demo asset =============`)
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getAsset(context)
    await createNewAsset(context)
    await uploadFile(context)
    await updateAsset(context)
    await publishAsset(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}