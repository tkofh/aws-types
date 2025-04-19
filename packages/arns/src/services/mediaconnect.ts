import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EntitlementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly entitlementName: string
}
class EntitlementArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Entitlement',
  `arn:${string}:mediaconnect:${string}:${string}:entitlement:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Entitlement' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly entitlementName: string
  constructor(parameters: EntitlementArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowId = parameters.flowId
    this.entitlementName = parameters.entitlementName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:entitlement:${this.flowId}:${this.entitlementName}` as const
  }
}
export type { EntitlementArn }
export function entitlementArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntitlementArnParameters<Partition>,
) {
  return new EntitlementArn<Partition>(parameters)
}

export interface FlowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly flowName: string
}
class FlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Flow',
  `arn:${string}:mediaconnect:${string}:${string}:flow:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly flowName: string
  constructor(parameters: FlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowId = parameters.flowId
    this.flowName = parameters.flowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:flow:${this.flowId}:${this.flowName}` as const
  }
}
export type { FlowArn }
export function flowArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowArnParameters<Partition>,
) {
  return new FlowArn<Partition>(parameters)
}

export interface OutputArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outputId: string
  readonly outputName: string
}
class OutputArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Output',
  `arn:${string}:mediaconnect:${string}:${string}:output:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Output' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outputId: string
  readonly outputName: string
  constructor(parameters: OutputArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.outputId = parameters.outputId
    this.outputName = parameters.outputName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:output:${this.outputId}:${this.outputName}` as const
  }
}
export type { OutputArn }
export function outputArn<Partition extends ArnPartition = 'aws'>(
  parameters: OutputArnParameters<Partition>,
) {
  return new OutputArn<Partition>(parameters)
}

export interface SourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceId: string
  readonly sourceName: string
}
class SourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Source',
  `arn:${string}:mediaconnect:${string}:${string}:source:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Source' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceId: string
  readonly sourceName: string
  constructor(parameters: SourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceId = parameters.sourceId
    this.sourceName = parameters.sourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:source:${this.sourceId}:${this.sourceName}` as const
  }
}
export type { SourceArn }
export function sourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceArnParameters<Partition>,
) {
  return new SourceArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly gatewayName: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Gateway',
  `arn:${string}:mediaconnect:${string}:${string}:gateway:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly gatewayName: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
    this.gatewayName = parameters.gatewayName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:gateway:${this.gatewayId}:${this.gatewayName}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface BridgeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly flowName: string
}
class BridgeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Bridge',
  `arn:${string}:mediaconnect:${string}:${string}:bridge:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Bridge' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly flowName: string
  constructor(parameters: BridgeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowId = parameters.flowId
    this.flowName = parameters.flowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:bridge:${this.flowId}:${this.flowName}` as const
  }
}
export type { BridgeArn }
export function bridgeArn<Partition extends ArnPartition = 'aws'>(
  parameters: BridgeArnParameters<Partition>,
) {
  return new BridgeArn<Partition>(parameters)
}

export interface GatewayInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly gatewayName: string
  readonly instanceId: string
}
class GatewayInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GatewayInstance',
  `arn:${string}:mediaconnect:${string}:${string}:gateway:${string}:${string}:instance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GatewayInstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly gatewayName: string
  readonly instanceId: string
  constructor(parameters: GatewayInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
    this.gatewayName = parameters.gatewayName
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:gateway:${this.gatewayId}:${this.gatewayName}:instance:${this.instanceId}` as const
  }
}
export type { GatewayInstanceArn }
export function gatewayInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayInstanceArnParameters<Partition>,
) {
  return new GatewayInstanceArn<Partition>(parameters)
}
