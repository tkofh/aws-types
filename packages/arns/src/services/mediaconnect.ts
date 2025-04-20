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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly nameEntitlement: string
}
class EntitlementArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Entitlement',
  `arn:${string}:mediaconnect:${string}:${string}:entitlement:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Entitlement' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly nameEntitlement: string
  constructor(parameters: EntitlementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFlow = parameters.idFlow
    this.nameEntitlement = parameters.nameEntitlement
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:entitlement:${this.idFlow}:${this.nameEntitlement}` as const
  }
}
export type { EntitlementArn }
export function entitlementArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntitlementArnParameters<Partition>,
) {
  return new EntitlementArn<Partition>(parameters)
}

export interface FlowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly nameFlow: string
}
class FlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Flow',
  `arn:${string}:mediaconnect:${string}:${string}:flow:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Flow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly nameFlow: string
  constructor(parameters: FlowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFlow = parameters.idFlow
    this.nameFlow = parameters.nameFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:flow:${this.idFlow}:${this.nameFlow}` as const
  }
}
export type { FlowArn }
export function flowArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowArnParameters<Partition>,
) {
  return new FlowArn<Partition>(parameters)
}

export interface OutputArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutput: string
  readonly nameOutput: string
}
class OutputArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Output',
  `arn:${string}:mediaconnect:${string}:${string}:output:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Output' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutput: string
  readonly nameOutput: string
  constructor(parameters: OutputArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOutput = parameters.idOutput
    this.nameOutput = parameters.nameOutput
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:output:${this.idOutput}:${this.nameOutput}` as const
  }
}
export type { OutputArn }
export function outputArn<Partition extends ArnPartition = 'aws'>(
  parameters: OutputArnParameters<Partition>,
) {
  return new OutputArn<Partition>(parameters)
}

export interface SourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSource: string
  readonly nameSource: string
}
class SourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Source',
  `arn:${string}:mediaconnect:${string}:${string}:source:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Source' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSource: string
  readonly nameSource: string
  constructor(parameters: SourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSource = parameters.idSource
    this.nameSource = parameters.nameSource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:source:${this.idSource}:${this.nameSource}` as const
  }
}
export type { SourceArn }
export function sourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceArnParameters<Partition>,
) {
  return new SourceArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly nameGateway: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Gateway',
  `arn:${string}:mediaconnect:${string}:${string}:gateway:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly nameGateway: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
    this.nameGateway = parameters.nameGateway
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:gateway:${this.idGateway}:${this.nameGateway}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface BridgeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly nameFlow: string
}
class BridgeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Bridge',
  `arn:${string}:mediaconnect:${string}:${string}:bridge:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Bridge' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly nameFlow: string
  constructor(parameters: BridgeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFlow = parameters.idFlow
    this.nameFlow = parameters.nameFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:bridge:${this.idFlow}:${this.nameFlow}` as const
  }
}
export type { BridgeArn }
export function bridgeArn<Partition extends ArnPartition = 'aws'>(
  parameters: BridgeArnParameters<Partition>,
) {
  return new BridgeArn<Partition>(parameters)
}

export interface InstanceGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly nameGateway: string
  readonly idInstance: string
}
class InstanceGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GatewayInstance',
  `arn:${string}:mediaconnect:${string}:${string}:gateway:${string}:${string}:instance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GatewayInstance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly nameGateway: string
  readonly idInstance: string
  constructor(parameters: InstanceGatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
    this.nameGateway = parameters.nameGateway
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconnect:${this.region}:${this.account}:gateway:${this.idGateway}:${this.nameGateway}:instance:${this.idInstance}` as const
  }
}
export type { InstanceGatewayArn }
export function instanceGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceGatewayArnParameters<Partition>,
) {
  return new InstanceGatewayArn<Partition>(parameters)
}
