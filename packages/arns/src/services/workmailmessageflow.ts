export interface RawMessageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  organizationId: string
  context: string
  messageId: string
}
export type RawMessageArn = `arn:${string}:workmailmessageflow:${string}:${string}:message/${string}/${string}/${string}`
export function rawMessageArn(parameters: RawMessageArnParameters): RawMessageArn {
  return `arn:${parameters.partition ?? ''}:workmailmessageflow:${parameters.region}:${parameters.account}:message/${parameters.organizationId}/${parameters.context}/${parameters.messageId}`
}