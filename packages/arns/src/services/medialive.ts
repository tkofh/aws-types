import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelId: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:medialive:${string}:${string}:channel:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelId: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelId = parameters.channelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:channel:${this.channelId}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface InputArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inputId: string
}
class InputArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'input',
  `arn:${string}:medialive:${string}:${string}:input:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inputId: string
  constructor(parameters: InputArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inputId = parameters.inputId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:input:${this.inputId}` as const
  }
}
export type { InputArn }
export function inputArn<Partition extends ArnPartition = 'aws'>(
  parameters: InputArnParameters<Partition>,
) {
  return new InputArn<Partition>(parameters)
}

export interface InputDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceId: string
}
class InputDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'input-device',
  `arn:${string}:medialive:${string}:${string}:inputDevice:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input-device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceId: string
  constructor(parameters: InputDeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceId = parameters.deviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:inputDevice:${this.deviceId}` as const
  }
}
export type { InputDeviceArn }
export function inputDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InputDeviceArnParameters<Partition>,
) {
  return new InputDeviceArn<Partition>(parameters)
}

export interface InputSecurityGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inputSecurityGroupId: string
}
class InputSecurityGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'input-security-group',
  `arn:${string}:medialive:${string}:${string}:inputSecurityGroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input-security-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inputSecurityGroupId: string
  constructor(parameters: InputSecurityGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inputSecurityGroupId = parameters.inputSecurityGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:inputSecurityGroup:${this.inputSecurityGroupId}` as const
  }
}
export type { InputSecurityGroupArn }
export function inputSecurityGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: InputSecurityGroupArnParameters<Partition>,
) {
  return new InputSecurityGroupArn<Partition>(parameters)
}

export interface MultiplexArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly multiplexId: string
}
class MultiplexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'multiplex',
  `arn:${string}:medialive:${string}:${string}:multiplex:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'multiplex' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly multiplexId: string
  constructor(parameters: MultiplexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.multiplexId = parameters.multiplexId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:multiplex:${this.multiplexId}` as const
  }
}
export type { MultiplexArn }
export function multiplexArn<Partition extends ArnPartition = 'aws'>(
  parameters: MultiplexArnParameters<Partition>,
) {
  return new MultiplexArn<Partition>(parameters)
}

export interface ReservationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservationId: string
}
class ReservationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reservation',
  `arn:${string}:medialive:${string}:${string}:reservation:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reservation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservationId: string
  constructor(parameters: ReservationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reservationId = parameters.reservationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:reservation:${this.reservationId}` as const
  }
}
export type { ReservationArn }
export function reservationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservationArnParameters<Partition>,
) {
  return new ReservationArn<Partition>(parameters)
}

export interface OfferingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly offeringId: string
}
class OfferingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'offering',
  `arn:${string}:medialive:${string}:${string}:offering:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'offering' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly offeringId: string
  constructor(parameters: OfferingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.offeringId = parameters.offeringId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:offering:${this.offeringId}` as const
  }
}
export type { OfferingArn }
export function offeringArn<Partition extends ArnPartition = 'aws'>(
  parameters: OfferingArnParameters<Partition>,
) {
  return new OfferingArn<Partition>(parameters)
}

export interface SignalMapArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly signalMapId: string
}
class SignalMapArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'signal-map',
  `arn:${string}:medialive:${string}:${string}:signal-map:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signal-map' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly signalMapId: string
  constructor(parameters: SignalMapArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.signalMapId = parameters.signalMapId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:signal-map:${this.signalMapId}` as const
  }
}
export type { SignalMapArn }
export function signalMapArn<Partition extends ArnPartition = 'aws'>(
  parameters: SignalMapArnParameters<Partition>,
) {
  return new SignalMapArn<Partition>(parameters)
}

export interface CloudwatchAlarmTemplateGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudWatchAlarmTemplateGroupId: string
}
class CloudwatchAlarmTemplateGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cloudwatch-alarm-template-group',
  `arn:${string}:medialive:${string}:${string}:cloudwatch-alarm-template-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cloudwatch-alarm-template-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudWatchAlarmTemplateGroupId: string
  constructor(
    parameters: CloudwatchAlarmTemplateGroupArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cloudWatchAlarmTemplateGroupId =
      parameters.cloudWatchAlarmTemplateGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:cloudwatch-alarm-template-group:${this.cloudWatchAlarmTemplateGroupId}` as const
  }
}
export type { CloudwatchAlarmTemplateGroupArn }
export function cloudwatchAlarmTemplateGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CloudwatchAlarmTemplateGroupArnParameters<Partition>) {
  return new CloudwatchAlarmTemplateGroupArn<Partition>(parameters)
}

export interface CloudwatchAlarmTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudWatchAlarmTemplateId: string
}
class CloudwatchAlarmTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cloudwatch-alarm-template',
  `arn:${string}:medialive:${string}:${string}:cloudwatch-alarm-template:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cloudwatch-alarm-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudWatchAlarmTemplateId: string
  constructor(parameters: CloudwatchAlarmTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cloudWatchAlarmTemplateId = parameters.cloudWatchAlarmTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:cloudwatch-alarm-template:${this.cloudWatchAlarmTemplateId}` as const
  }
}
export type { CloudwatchAlarmTemplateArn }
export function cloudwatchAlarmTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CloudwatchAlarmTemplateArnParameters<Partition>) {
  return new CloudwatchAlarmTemplateArn<Partition>(parameters)
}

export interface EventbridgeRuleTemplateGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBridgeRuleTemplateGroupId: string
}
class EventbridgeRuleTemplateGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventbridge-rule-template-group',
  `arn:${string}:medialive:${string}:${string}:eventbridge-rule-template-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventbridge-rule-template-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBridgeRuleTemplateGroupId: string
  constructor(
    parameters: EventbridgeRuleTemplateGroupArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventBridgeRuleTemplateGroupId =
      parameters.eventBridgeRuleTemplateGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:eventbridge-rule-template-group:${this.eventBridgeRuleTemplateGroupId}` as const
  }
}
export type { EventbridgeRuleTemplateGroupArn }
export function eventbridgeRuleTemplateGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EventbridgeRuleTemplateGroupArnParameters<Partition>) {
  return new EventbridgeRuleTemplateGroupArn<Partition>(parameters)
}

export interface EventbridgeRuleTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBridgeRuleTemplateId: string
}
class EventbridgeRuleTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventbridge-rule-template',
  `arn:${string}:medialive:${string}:${string}:eventbridge-rule-template:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventbridge-rule-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventBridgeRuleTemplateId: string
  constructor(parameters: EventbridgeRuleTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventBridgeRuleTemplateId = parameters.eventBridgeRuleTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:eventbridge-rule-template:${this.eventBridgeRuleTemplateId}` as const
  }
}
export type { EventbridgeRuleTemplateArn }
export function eventbridgeRuleTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EventbridgeRuleTemplateArnParameters<Partition>) {
  return new EventbridgeRuleTemplateArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:medialive:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterId = parameters.clusterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:cluster:${this.clusterId}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface NodeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  readonly nodeId: string
}
class NodeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'node',
  `arn:${string}:medialive:${string}:${string}:node:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'node' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  readonly nodeId: string
  constructor(parameters: NodeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterId = parameters.clusterId
    this.nodeId = parameters.nodeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:node:${this.clusterId}/${this.nodeId}` as const
  }
}
export type { NodeArn }
export function nodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodeArnParameters<Partition>,
) {
  return new NodeArn<Partition>(parameters)
}

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkId: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:medialive:${string}:${string}:network:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkId: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkId = parameters.networkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:network:${this.networkId}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

export interface ChannelPlacementGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  readonly channelPlacementGroupId: string
}
class ChannelPlacementGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'channel-placement-group',
  `arn:${string}:medialive:${string}:${string}:channelPlacementGroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel-placement-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  readonly channelPlacementGroupId: string
  constructor(parameters: ChannelPlacementGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterId = parameters.clusterId
    this.channelPlacementGroupId = parameters.channelPlacementGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:channelPlacementGroup:${this.clusterId}/${this.channelPlacementGroupId}` as const
  }
}
export type { ChannelPlacementGroupArn }
export function channelPlacementGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ChannelPlacementGroupArnParameters<Partition>) {
  return new ChannelPlacementGroupArn<Partition>(parameters)
}
