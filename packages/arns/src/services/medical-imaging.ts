export interface DatastoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datastoreId: string
}
export type DatastoreArn = `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}`
export function datastoreArn(parameters: DatastoreArnParameters): DatastoreArn {
  return `arn:${parameters.partition ?? ''}:medical-imaging:${parameters.region}:${parameters.account}:datastore/${parameters.datastoreId}`
}

export interface ImagesetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datastoreId: string
  imageSetId: string
}
export type ImagesetArn = `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}/imageset/${string}`
export function imagesetArn(parameters: ImagesetArnParameters): ImagesetArn {
  return `arn:${parameters.partition ?? ''}:medical-imaging:${parameters.region}:${parameters.account}:datastore/${parameters.datastoreId}/imageset/${parameters.imageSetId}`
}