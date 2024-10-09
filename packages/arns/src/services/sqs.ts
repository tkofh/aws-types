export interface QueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  queueName: string
}
export type QueueArn = `arn:${string}:sqs:${string}:${string}:${string}`
export function queueArn(parameters: QueueArnParameters): QueueArn {
  return `arn:${parameters.partition ?? ''}:sqs:${parameters.region}:${parameters.account}:${parameters.queueName}`
}