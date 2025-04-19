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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  readonly challengeId: string
}
class ChallengeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Challenge',
  `arn:${string}:pca-connector-scep:${string}:${string}:connector/${string}/challenge/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Challenge' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  readonly challengeId: string
  constructor(parameters: ChallengeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
    this.challengeId = parameters.challengeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-scep:${this.region}:${this.account}:connector/${this.connectorId}/challenge/${this.challengeId}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Connector',
  `arn:${string}:pca-connector-scep:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Connector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-scep:${this.region}:${this.account}:connector/${this.connectorId}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}
