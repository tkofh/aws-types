export interface StreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamName: string
}
export type StreamArn = `arn:${string}:kinesis:${string}:${string}:stream/${string}`
export function streamArn(parameters: StreamArnParameters): StreamArn {
  return `arn:${parameters.partition ?? ''}:kinesis:${parameters.region}:${parameters.account}:stream/${parameters.streamName}`
}

export interface ConsumerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamType: string
  streamName: string
  consumerName: string
  consumerCreationTimpstamp: string
}
export type ConsumerArn = `arn:${string}:kinesis:${string}:${string}:${string}/${string}/consumer/${string}:${string}`
export function consumerArn(parameters: ConsumerArnParameters): ConsumerArn {
  return `arn:${parameters.partition ?? ''}:kinesis:${parameters.region}:${parameters.account}:${parameters.streamType}/${parameters.streamName}/consumer/${parameters.consumerName}:${parameters.consumerCreationTimpstamp}`
}

export interface KmsKeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyId: string
}
export type KmsKeyArn = `arn:${string}:kms:${string}:${string}:key/${string}`
export function kmsKeyArn(parameters: KmsKeyArnParameters): KmsKeyArn {
  return `arn:${parameters.partition ?? ''}:kms:${parameters.region}:${parameters.account}:key/${parameters.keyId}`
}