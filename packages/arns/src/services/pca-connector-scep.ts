import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChallengeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  readonly idChallenge: string
}
class ChallengeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Challenge',
  `arn:${string}:pca-connector-scep:${string}:${string}:connector/${string}/challenge/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Challenge' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  readonly idChallenge: string
  constructor(parameters: ChallengeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
    this.idChallenge = parameters.idChallenge
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-scep:${this.region}:${this.account}:connector/${this.idConnector}/challenge/${this.idChallenge}` as const
  }
}
export type { ChallengeArn }
export function challengeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChallengeArnParameters<Partition>,
) {
  return new ChallengeArn<Partition>(parameters)
}

export interface ConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Connector',
  `arn:${string}:pca-connector-scep:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Connector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-scep:${this.region}:${this.account}:connector/${this.idConnector}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}
