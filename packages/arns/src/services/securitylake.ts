export interface DataLakeArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type DataLakeArn = `arn:${string}:securitylake:${string}:${string}:data-lake/default`
export function dataLakeArn(parameters: DataLakeArnParameters): DataLakeArn {
  return `arn:${parameters.partition ?? ''}:securitylake:${parameters.region}:${parameters.account}:data-lake/default`
}

export interface SubscriberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subscriberId: string
}
export type SubscriberArn = `arn:${string}:securitylake:${string}:${string}:subscriber/${string}`
export function subscriberArn(parameters: SubscriberArnParameters): SubscriberArn {
  return `arn:${parameters.partition ?? ''}:securitylake:${parameters.region}:${parameters.account}:subscriber/${parameters.subscriberId}`
}