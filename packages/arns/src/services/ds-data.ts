export interface DirectoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  directoryId: string
}
export type DirectoryArn = `arn:${string}:ds:${string}:${string}:directory/${string}`
export function directoryArn(parameters: DirectoryArnParameters): DirectoryArn {
  return `arn:${parameters.partition ?? ''}:ds:${parameters.region}:${parameters.account}:directory/${parameters.directoryId}`
}