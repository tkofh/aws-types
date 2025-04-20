import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfile: string
}
class ProfileConnectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectorprofile',
  `arn:${string}:appflow:${string}:${string}:connectorprofile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connectorprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfile: string
  constructor(parameters: ProfileConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProfile = parameters.nameProfile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appflow:${this.region}:${this.account}:connectorprofile/${this.nameProfile}` as const
  }
}
export type { ProfileConnectorArn }
export function profileConnectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileConnectorArnParameters<Partition>,
) {
  return new ProfileConnectorArn<Partition>(parameters)
}

export interface FlowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFlow: string
}
class FlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'flow',
  `arn:${string}:appflow:${string}:${string}:flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFlow: string
  constructor(parameters: FlowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFlow = parameters.nameFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appflow:${this.region}:${this.account}:flow/${this.nameFlow}` as const
  }
}
export type { FlowArn }
export function flowArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowArnParameters<Partition>,
) {
  return new FlowArn<Partition>(parameters)
}

export interface ConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly labelConnector: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connector',
  `arn:${string}:appflow:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly labelConnector: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.labelConnector = parameters.labelConnector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appflow:${this.region}:${this.account}:connector/${this.labelConnector}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}
