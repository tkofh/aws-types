import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConnectorprofileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileName: string
}
class ConnectorprofileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectorprofile',
  `arn:${string}:appflow:${string}:${string}:connectorprofile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connectorprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileName: string
  constructor(parameters: ConnectorprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.profileName = parameters.profileName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appflow:${this.region}:${this.account}:connectorprofile/${this.profileName}` as const
  }
}
export type { ConnectorprofileArn }
export function connectorprofileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorprofileArnParameters<Partition>,
) {
  return new ConnectorprofileArn<Partition>(parameters)
}

export interface FlowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowName: string
}
class FlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'flow',
  `arn:${string}:appflow:${string}:${string}:flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowName: string
  constructor(parameters: FlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowName = parameters.flowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appflow:${this.region}:${this.account}:flow/${this.flowName}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorLabel: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connector',
  `arn:${string}:appflow:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorLabel: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorLabel = parameters.connectorLabel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appflow:${this.region}:${this.account}:connector/${this.connectorLabel}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}
