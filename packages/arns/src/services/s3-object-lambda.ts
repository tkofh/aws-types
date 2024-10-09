export interface ObjectlambdaaccesspointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  accessPointName: string
}
export type ObjectlambdaaccesspointArn = `arn:${string}:s3-object-lambda:${string}:${string}:accesspoint/${string}`
export function objectlambdaaccesspointArn(parameters: ObjectlambdaaccesspointArnParameters): ObjectlambdaaccesspointArn {
  return `arn:${parameters.partition ?? ''}:s3-object-lambda:${parameters.region}:${parameters.account}:accesspoint/${parameters.accessPointName}`
}