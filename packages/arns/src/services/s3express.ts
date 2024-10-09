export interface BucketArnParameters {
  partition?: string | undefined
  region: string
  account: string
  bucketName: string
}
export type BucketArn = `arn:${string}:s3express:${string}:${string}:bucket/${string}`
export function bucketArn(parameters: BucketArnParameters): BucketArn {
  return `arn:${parameters.partition ?? ''}:s3express:${parameters.region}:${parameters.account}:bucket/${parameters.bucketName}`
}