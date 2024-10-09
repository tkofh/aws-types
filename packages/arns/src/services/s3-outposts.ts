export interface AccesspointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  outpostId: string
  accessPointName: string
}
export type AccesspointArn = `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/accesspoint/${string}`
export function accesspointArn(parameters: AccesspointArnParameters): AccesspointArn {
  return `arn:${parameters.partition ?? ''}:s3-outposts:${parameters.region}:${parameters.account}:outpost/${parameters.outpostId}/accesspoint/${parameters.accessPointName}`
}

export interface BucketArnParameters {
  partition?: string | undefined
  region: string
  account: string
  outpostId: string
  bucketName: string
}
export type BucketArn = `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/bucket/${string}`
export function bucketArn(parameters: BucketArnParameters): BucketArn {
  return `arn:${parameters.partition ?? ''}:s3-outposts:${parameters.region}:${parameters.account}:outpost/${parameters.outpostId}/bucket/${parameters.bucketName}`
}

export interface EndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  outpostId: string
  endpointId: string
}
export type EndpointArn = `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/endpoint/${string}`
export function endpointArn(parameters: EndpointArnParameters): EndpointArn {
  return `arn:${parameters.partition ?? ''}:s3-outposts:${parameters.region}:${parameters.account}:outpost/${parameters.outpostId}/endpoint/${parameters.endpointId}`
}

export interface ObjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  outpostId: string
  bucketName: string
  objectName: string
}
export type ObjectArn = `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/bucket/${string}/object/${string}`
export function objectArn(parameters: ObjectArnParameters): ObjectArn {
  return `arn:${parameters.partition ?? ''}:s3-outposts:${parameters.region}:${parameters.account}:outpost/${parameters.outpostId}/bucket/${parameters.bucketName}/object/${parameters.objectName}`
}