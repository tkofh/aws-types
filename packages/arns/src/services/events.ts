import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EventSourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly eventSourceName: string
}
class EventSourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-source',
  `arn:${string}:events:${string}::event-source/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-source' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly eventSourceName: string
  constructor(parameters: EventSourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.eventSourceName = parameters.eventSourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}::event-source/${this.eventSourceName}` as const
  }
}
export type { EventSourceArn }
export function eventSourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventSourceArnParameters<Partition>,
) {
  return new EventSourceArn<Partition>(parameters)
}

export interface EventBusArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBusName: string
}
class EventBusArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'event-bus',
  `arn:${string}:events:${string}:${string}:event-bus/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-bus' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBusName: string
  constructor(parameters: EventBusArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventBusName = parameters.eventBusName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:event-bus/${this.eventBusName}` as const
  }
}
export type { EventBusArn }
export function eventBusArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventBusArnParameters<Partition>,
) {
  return new EventBusArn<Partition>(parameters)
}

export interface RuleOnDefaultEventBusArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleName: string
}
class RuleOnDefaultEventBusArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rule-on-default-event-bus',
  `arn:${string}:events:${string}:${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule-on-default-event-bus' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleName: string
  constructor(parameters: RuleOnDefaultEventBusArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ruleName = parameters.ruleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:rule/${this.ruleName}` as const
  }
}
export type { RuleOnDefaultEventBusArn }
export function ruleOnDefaultEventBusArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RuleOnDefaultEventBusArnParameters<Partition>) {
  return new RuleOnDefaultEventBusArn<Partition>(parameters)
}

export interface RuleOnCustomEventBusArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBusName: string
  readonly ruleName: string
}
class RuleOnCustomEventBusArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rule-on-custom-event-bus',
  `arn:${string}:events:${string}:${string}:rule/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule-on-custom-event-bus' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBusName: string
  readonly ruleName: string
  constructor(parameters: RuleOnCustomEventBusArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventBusName = parameters.eventBusName
    this.ruleName = parameters.ruleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:rule/${this.eventBusName}/${this.ruleName}` as const
  }
}
export type { RuleOnCustomEventBusArn }
export function ruleOnCustomEventBusArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleOnCustomEventBusArnParameters<Partition>,
) {
  return new RuleOnCustomEventBusArn<Partition>(parameters)
}

export interface ArchiveArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly archiveName: string
}
class ArchiveArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'archive',
  `arn:${string}:events:${string}:${string}:archive/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'archive' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly archiveName: string
  constructor(parameters: ArchiveArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.archiveName = parameters.archiveName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:archive/${this.archiveName}` as const
  }
}
export type { ArchiveArn }
export function archiveArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArchiveArnParameters<Partition>,
) {
  return new ArchiveArn<Partition>(parameters)
}

export interface ReplayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replayName: string
}
class ReplayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'replay',
  `arn:${string}:events:${string}:${string}:replay/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replay' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replayName: string
  constructor(parameters: ReplayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.replayName = parameters.replayName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:replay/${this.replayName}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionName: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connection',
  `arn:${string}:events:${string}:${string}:connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionName: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionName = parameters.connectionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:connection/${this.connectionName}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface ApiDestinationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly apiDestinationName: string
}
class ApiDestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'api-destination',
  `arn:${string}:events:${string}:${string}:api-destination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'api-destination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly apiDestinationName: string
  constructor(parameters: ApiDestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.apiDestinationName = parameters.apiDestinationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:api-destination/${this.apiDestinationName}` as const
  }
}
export type { ApiDestinationArn }
export function apiDestinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiDestinationArnParameters<Partition>,
) {
  return new ApiDestinationArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointName: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:events:${string}:${string}:endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointName: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.endpointName = parameters.endpointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:endpoint/${this.endpointName}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface CreateSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class CreateSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'create-snapshot',
  `arn:${string}:events:${string}:${string}:target/create-snapshot`
> {
  readonly [ArnResourceTypeBrand] = 'create-snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: CreateSnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/create-snapshot` as const
  }
}
export type { CreateSnapshotArn }
export function createSnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: CreateSnapshotArnParameters<Partition>,
) {
  return new CreateSnapshotArn<Partition>(parameters)
}

export interface RebootInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class RebootInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reboot-instance',
  `arn:${string}:events:${string}:${string}:target/reboot-instance`
> {
  readonly [ArnResourceTypeBrand] = 'reboot-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: RebootInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/reboot-instance` as const
  }
}
export type { RebootInstanceArn }
export function rebootInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: RebootInstanceArnParameters<Partition>,
) {
  return new RebootInstanceArn<Partition>(parameters)
}

export interface StopInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class StopInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'stop-instance',
  `arn:${string}:events:${string}:${string}:target/stop-instance`
> {
  readonly [ArnResourceTypeBrand] = 'stop-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: StopInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/stop-instance` as const
  }
}
export type { StopInstanceArn }
export function stopInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: StopInstanceArnParameters<Partition>,
) {
  return new StopInstanceArn<Partition>(parameters)
}

export interface TerminateInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class TerminateInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'terminate-instance',
  `arn:${string}:events:${string}:${string}:target/terminate-instance`
> {
  readonly [ArnResourceTypeBrand] = 'terminate-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: TerminateInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:events:${this.region}:${this.account}:target/terminate-instance` as const
  }
}
export type { TerminateInstanceArn }
export function terminateInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: TerminateInstanceArnParameters<Partition>,
) {
  return new TerminateInstanceArn<Partition>(parameters)
}
