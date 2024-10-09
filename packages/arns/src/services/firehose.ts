export interface DeliverystreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deliveryStreamName: string
}
export type DeliverystreamArn = `arn:${string}:firehose:${string}:${string}:deliverystream/${string}`
export function deliverystreamArn(parameters: DeliverystreamArnParameters): DeliverystreamArn {
  return `arn:${parameters.partition ?? ''}:firehose:${parameters.region}:${parameters.account}:deliverystream/${parameters.deliveryStreamName}`
}