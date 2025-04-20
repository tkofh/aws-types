import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SourceEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameSourceEvent: string
}
class SourceEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-source',
  `arn:${string}:events:${string}::event-source/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-source' as const
  readonly partition: string
  readonly region: string
  readonly nameSourceEvent: string
  constructor(parameters: SourceEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameSourceEvent = parameters.nameSourceEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}::event-source/${this.nameSourceEvent}` as const
  }
}
export type { SourceEventArn }
export function sourceEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceEventArnParameters<Partition>,
) {
  return new SourceEventArn<Partition>(parameters)
}

export interface BusEventArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBusEvent: string
}
class BusEventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'event-bus',
  `arn:${string}:events:${string}:${string}:event-bus/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-bus' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBusEvent: string
  constructor(parameters: BusEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBusEvent = parameters.nameBusEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:event-bus/${this.nameBusEvent}` as const
  }
}
export type { BusEventArn }
export function busEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: BusEventArnParameters<Partition>,
) {
  return new BusEventArn<Partition>(parameters)
}

export interface BusEventDefaultOnRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRule: string
}
class BusEventDefaultOnRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rule-on-default-event-bus',
  `arn:${string}:events:${string}:${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule-on-default-event-bus' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRule: string
  constructor(parameters: BusEventDefaultOnRuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRule = parameters.nameRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:rule/${this.nameRule}` as const
  }
}
export type { BusEventDefaultOnRuleArn }
export function busEventDefaultOnRuleArn<
  Partition extends ArnPartition = 'aws',
>(parameters: BusEventDefaultOnRuleArnParameters<Partition>) {
  return new BusEventDefaultOnRuleArn<Partition>(parameters)
}

export interface BusEventCustomOnRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBusEvent: string
  readonly nameRule: string
}
class BusEventCustomOnRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rule-on-custom-event-bus',
  `arn:${string}:events:${string}:${string}:rule/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule-on-custom-event-bus' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBusEvent: string
  readonly nameRule: string
  constructor(parameters: BusEventCustomOnRuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBusEvent = parameters.nameBusEvent
    this.nameRule = parameters.nameRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:rule/${this.nameBusEvent}/${this.nameRule}` as const
  }
}
export type { BusEventCustomOnRuleArn }
export function busEventCustomOnRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: BusEventCustomOnRuleArnParameters<Partition>,
) {
  return new BusEventCustomOnRuleArn<Partition>(parameters)
}

export interface ArchiveArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameArchive: string
}
class ArchiveArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'archive',
  `arn:${string}:events:${string}:${string}:archive/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'archive' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameArchive: string
  constructor(parameters: ArchiveArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameArchive = parameters.nameArchive
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:archive/${this.nameArchive}` as const
  }
}
export type { ArchiveArn }
export function archiveArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArchiveArnParameters<Partition>,
) {
  return new ArchiveArn<Partition>(parameters)
}

export interface ReplayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReplay: string
}
class ReplayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'replay',
  `arn:${string}:events:${string}:${string}:replay/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replay' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReplay: string
  constructor(parameters: ReplayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameReplay = parameters.nameReplay
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:replay/${this.nameReplay}` as const
  }
}
export type { ReplayArn }
export function replayArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReplayArnParameters<Partition>,
) {
  return new ReplayArn<Partition>(parameters)
}

export interface ConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnection: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connection',
  `arn:${string}:events:${string}:${string}:connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnection: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConnection = parameters.nameConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:connection/${this.nameConnection}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface DestinationApiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDestinationApi: string
}
class DestinationApiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'api-destination',
  `arn:${string}:events:${string}:${string}:api-destination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'api-destination' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDestinationApi: string
  constructor(parameters: DestinationApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDestinationApi = parameters.nameDestinationApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:api-destination/${this.nameDestinationApi}` as const
  }
}
export type { DestinationApiArn }
export function destinationApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationApiArnParameters<Partition>,
) {
  return new DestinationApiArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpoint: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:events:${string}:${string}:endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpoint: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEndpoint = parameters.nameEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:endpoint/${this.nameEndpoint}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface SnapshotCreateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class SnapshotCreateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'create-snapshot',
  `arn:${string}:events:${string}:${string}:target/create-snapshot`
> {
  readonly [ArnResourceTypeBrand] = 'create-snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: SnapshotCreateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/create-snapshot` as const
  }
}
export type { SnapshotCreateArn }
export function snapshotCreateArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotCreateArnParameters<Partition>,
) {
  return new SnapshotCreateArn<Partition>(parameters)
}

export interface InstanceRebootArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class InstanceRebootArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reboot-instance',
  `arn:${string}:events:${string}:${string}:target/reboot-instance`
> {
  readonly [ArnResourceTypeBrand] = 'reboot-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: InstanceRebootArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/reboot-instance` as const
  }
}
export type { InstanceRebootArn }
export function instanceRebootArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceRebootArnParameters<Partition>,
) {
  return new InstanceRebootArn<Partition>(parameters)
}

export interface InstanceStopArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class InstanceStopArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'stop-instance',
  `arn:${string}:events:${string}:${string}:target/stop-instance`
> {
  readonly [ArnResourceTypeBrand] = 'stop-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: InstanceStopArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/stop-instance` as const
  }
}
export type { InstanceStopArn }
export function instanceStopArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceStopArnParameters<Partition>,
) {
  return new InstanceStopArn<Partition>(parameters)
}

export interface InstanceTerminateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class InstanceTerminateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'terminate-instance',
  `arn:${string}:events:${string}:${string}:target/terminate-instance`
> {
  readonly [ArnResourceTypeBrand] = 'terminate-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: InstanceTerminateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/terminate-instance` as const
  }
}
export type { InstanceTerminateArn }
export function instanceTerminateArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceTerminateArnParameters<Partition>,
) {
  return new InstanceTerminateArn<Partition>(parameters)
}
