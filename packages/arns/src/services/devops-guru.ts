export interface TopicArnParameters {
  partition?: string | undefined
  region: string
  account: string
  topicName: string
}
export type TopicArn = `arn:${string}:sns:${string}:${string}:${string}`
export function topicArn(parameters: TopicArnParameters): TopicArn {
  return `arn:${parameters.partition ?? ''}:sns:${parameters.region}:${parameters.account}:${parameters.topicName}`
}