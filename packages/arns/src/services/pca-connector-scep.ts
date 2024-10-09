export interface ChallengeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
  challengeId: string
}
export type ChallengeArn = `arn:${string}:pca-connector-scep:${string}:${string}:connector/${string}/challenge/${string}`
export function challengeArn(parameters: ChallengeArnParameters): ChallengeArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-scep:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}/challenge/${parameters.challengeId}`
}

export interface ConnectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
}
export type ConnectorArn = `arn:${string}:pca-connector-scep:${string}:${string}:connector/${string}`
export function connectorArn(parameters: ConnectorArnParameters): ConnectorArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-scep:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}`
}