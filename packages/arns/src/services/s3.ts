export interface AccesspointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  accessPointName: string
}
export type AccesspointArn = `arn:${string}:s3:${string}:${string}:accesspoint/${string}`
export function accesspointArn(parameters: AccesspointArnParameters): AccesspointArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:accesspoint/${parameters.accessPointName}`
}

export interface BucketArnParameters {
  partition?: string | undefined
  bucketName: string
}
export type BucketArn = `arn:${string}:s3:::${string}`
export function bucketArn(parameters: BucketArnParameters): BucketArn {
  return `arn:${parameters.partition ?? ''}:s3:::${parameters.bucketName}`
}

export interface ObjectArnParameters {
  partition?: string | undefined
  bucketName: string
  objectName: string
}
export type ObjectArn = `arn:${string}:s3:::${string}/${string}`
export function objectArn(parameters: ObjectArnParameters): ObjectArn {
  return `arn:${parameters.partition ?? ''}:s3:::${parameters.bucketName}/${parameters.objectName}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobArn = `arn:${string}:s3:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:job/${parameters.jobId}`
}

export interface StoragelensconfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configId: string
}
export type StoragelensconfigurationArn = `arn:${string}:s3:${string}:${string}:storage-lens/${string}`
export function storagelensconfigurationArn(parameters: StoragelensconfigurationArnParameters): StoragelensconfigurationArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:storage-lens/${parameters.configId}`
}

export interface StoragelensgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type StoragelensgroupArn = `arn:${string}:s3:${string}:${string}:storage-lens-group/${string}`
export function storagelensgroupArn(parameters: StoragelensgroupArnParameters): StoragelensgroupArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:storage-lens-group/${parameters.name}`
}

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

export interface MultiregionaccesspointArnParameters {
  partition?: string | undefined
  account: string
  accessPointAlias: string
}
export type MultiregionaccesspointArn = `arn:${string}:s3::${string}:accesspoint/${string}`
export function multiregionaccesspointArn(parameters: MultiregionaccesspointArnParameters): MultiregionaccesspointArn {
  return `arn:${parameters.partition ?? ''}:s3::${parameters.account}:accesspoint/${parameters.accessPointAlias}`
}

export interface MultiregionaccesspointrequestarnArnParameters {
  partition?: string | undefined
  account: string
  operation: string
  token: string
}
export type MultiregionaccesspointrequestarnArn = `arn:${string}:s3:us-west-2:${string}:async-request/mrap/${string}/${string}`
export function multiregionaccesspointrequestarnArn(parameters: MultiregionaccesspointrequestarnArnParameters): MultiregionaccesspointrequestarnArn {
  return `arn:${parameters.partition ?? ''}:s3:us-west-2:${parameters.account}:async-request/mrap/${parameters.operation}/${parameters.token}`
}

export interface AccessgrantsinstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type AccessgrantsinstanceArn = `arn:${string}:s3:${string}:${string}:access-grants/default`
export function accessgrantsinstanceArn(parameters: AccessgrantsinstanceArnParameters): AccessgrantsinstanceArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:access-grants/default`
}

export interface AccessgrantslocationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  token: string
}
export type AccessgrantslocationArn = `arn:${string}:s3:${string}:${string}:access-grants/default/location/${string}`
export function accessgrantslocationArn(parameters: AccessgrantslocationArnParameters): AccessgrantslocationArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:access-grants/default/location/${parameters.token}`
}

export interface AccessgrantArnParameters {
  partition?: string | undefined
  region: string
  account: string
  token: string
}
export type AccessgrantArn = `arn:${string}:s3:${string}:${string}:access-grants/default/grant/${string}`
export function accessgrantArn(parameters: AccessgrantArnParameters): AccessgrantArn {
  return `arn:${parameters.partition ?? ''}:s3:${parameters.region}:${parameters.account}:access-grants/default/grant/${parameters.token}`
}