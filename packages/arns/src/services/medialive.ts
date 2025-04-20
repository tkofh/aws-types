import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:medialive:${string}:${string}:channel:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idChannel = parameters.idChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:channel:${this.idChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface InputArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInput: string
}
class InputArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'input',
  `arn:${string}:medialive:${string}:${string}:input:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInput: string
  constructor(parameters: InputArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInput = parameters.idInput
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:input:${this.idInput}` as const
  }
}
export type { InputArn }
export function inputArn<Partition extends ArnPartition = 'aws'>(
  parameters: InputArnParameters<Partition>,
) {
  return new InputArn<Partition>(parameters)
}

export interface DeviceInputArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDevice: string
}
class DeviceInputArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'input-device',
  `arn:${string}:medialive:${string}:${string}:inputDevice:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input-device' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDevice: string
  constructor(parameters: DeviceInputArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDevice = parameters.idDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:inputDevice:${this.idDevice}` as const
  }
}
export type { DeviceInputArn }
export function deviceInputArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceInputArnParameters<Partition>,
) {
  return new DeviceInputArn<Partition>(parameters)
}

export interface GroupSecurityInputArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupSecurityInput: string
}
class GroupSecurityInputArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'input-security-group',
  `arn:${string}:medialive:${string}:${string}:inputSecurityGroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input-security-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupSecurityInput: string
  constructor(parameters: GroupSecurityInputArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupSecurityInput = parameters.idGroupSecurityInput
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:inputSecurityGroup:${this.idGroupSecurityInput}` as const
  }
}
export type { GroupSecurityInputArn }
export function groupSecurityInputArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSecurityInputArnParameters<Partition>,
) {
  return new GroupSecurityInputArn<Partition>(parameters)
}

export interface MultiplexArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMultiplex: string
}
class MultiplexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'multiplex',
  `arn:${string}:medialive:${string}:${string}:multiplex:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'multiplex' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMultiplex: string
  constructor(parameters: MultiplexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMultiplex = parameters.idMultiplex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:multiplex:${this.idMultiplex}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservation: string
}
class ReservationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reservation',
  `arn:${string}:medialive:${string}:${string}:reservation:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reservation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservation: string
  constructor(parameters: ReservationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReservation = parameters.idReservation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:reservation:${this.idReservation}` as const
  }
}
export type { ReservationArn }
export function reservationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservationArnParameters<Partition>,
) {
  return new ReservationArn<Partition>(parameters)
}

export interface OfferingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOffering: string
}
class OfferingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'offering',
  `arn:${string}:medialive:${string}:${string}:offering:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'offering' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOffering: string
  constructor(parameters: OfferingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOffering = parameters.idOffering
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:offering:${this.idOffering}` as const
  }
}
export type { OfferingArn }
export function offeringArn<Partition extends ArnPartition = 'aws'>(
  parameters: OfferingArnParameters<Partition>,
) {
  return new OfferingArn<Partition>(parameters)
}

export interface MapSignalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMapSignal: string
}
class MapSignalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'signal-map',
  `arn:${string}:medialive:${string}:${string}:signal-map:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signal-map' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMapSignal: string
  constructor(parameters: MapSignalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMapSignal = parameters.idMapSignal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:signal-map:${this.idMapSignal}` as const
  }
}
export type { MapSignalArn }
export function mapSignalArn<Partition extends ArnPartition = 'aws'>(
  parameters: MapSignalArnParameters<Partition>,
) {
  return new MapSignalArn<Partition>(parameters)
}

export interface GroupTemplateAlarmCloudwatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTemplateAlarmCloudwatch: string
}
class GroupTemplateAlarmCloudwatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cloudwatch-alarm-template-group',
  `arn:${string}:medialive:${string}:${string}:cloudwatch-alarm-template-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cloudwatch-alarm-template-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTemplateAlarmCloudwatch: string
  constructor(
    parameters: GroupTemplateAlarmCloudwatchArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupTemplateAlarmCloudwatch =
      parameters.idGroupTemplateAlarmCloudwatch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:cloudwatch-alarm-template-group:${this.idGroupTemplateAlarmCloudwatch}` as const
  }
}
export type { GroupTemplateAlarmCloudwatchArn }
export function groupTemplateAlarmCloudwatchArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupTemplateAlarmCloudwatchArnParameters<Partition>) {
  return new GroupTemplateAlarmCloudwatchArn<Partition>(parameters)
}

export interface TemplateAlarmCloudwatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateAlarmCloudwatch: string
}
class TemplateAlarmCloudwatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cloudwatch-alarm-template',
  `arn:${string}:medialive:${string}:${string}:cloudwatch-alarm-template:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cloudwatch-alarm-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateAlarmCloudwatch: string
  constructor(parameters: TemplateAlarmCloudwatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateAlarmCloudwatch = parameters.idTemplateAlarmCloudwatch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:cloudwatch-alarm-template:${this.idTemplateAlarmCloudwatch}` as const
  }
}
export type { TemplateAlarmCloudwatchArn }
export function templateAlarmCloudwatchArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateAlarmCloudwatchArnParameters<Partition>) {
  return new TemplateAlarmCloudwatchArn<Partition>(parameters)
}

export interface GroupTemplateRuleBridgeEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTemplateRuleBridgeEvent: string
}
class GroupTemplateRuleBridgeEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventbridge-rule-template-group',
  `arn:${string}:medialive:${string}:${string}:eventbridge-rule-template-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventbridge-rule-template-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTemplateRuleBridgeEvent: string
  constructor(
    parameters: GroupTemplateRuleBridgeEventArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupTemplateRuleBridgeEvent =
      parameters.idGroupTemplateRuleBridgeEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:eventbridge-rule-template-group:${this.idGroupTemplateRuleBridgeEvent}` as const
  }
}
export type { GroupTemplateRuleBridgeEventArn }
export function groupTemplateRuleBridgeEventArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupTemplateRuleBridgeEventArnParameters<Partition>) {
  return new GroupTemplateRuleBridgeEventArn<Partition>(parameters)
}

export interface TemplateRuleBridgeEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateRuleBridgeEvent: string
}
class TemplateRuleBridgeEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventbridge-rule-template',
  `arn:${string}:medialive:${string}:${string}:eventbridge-rule-template:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventbridge-rule-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateRuleBridgeEvent: string
  constructor(parameters: TemplateRuleBridgeEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateRuleBridgeEvent = parameters.idTemplateRuleBridgeEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:eventbridge-rule-template:${this.idTemplateRuleBridgeEvent}` as const
  }
}
export type { TemplateRuleBridgeEventArn }
export function templateRuleBridgeEventArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateRuleBridgeEventArnParameters<Partition>) {
  return new TemplateRuleBridgeEventArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:medialive:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCluster = parameters.idCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:cluster:${this.idCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface NodeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  readonly idNode: string
}
class NodeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'node',
  `arn:${string}:medialive:${string}:${string}:node:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'node' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  readonly idNode: string
  constructor(parameters: NodeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCluster = parameters.idCluster
    this.idNode = parameters.idNode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:node:${this.idCluster}/${this.idNode}` as const
  }
}
export type { NodeArn }
export function nodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodeArnParameters<Partition>,
) {
  return new NodeArn<Partition>(parameters)
}

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetwork: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:medialive:${string}:${string}:network:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetwork: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNetwork = parameters.idNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:network:${this.idNetwork}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

export interface GroupPlacementChannelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  readonly idGroupPlacementChannel: string
}
class GroupPlacementChannelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'channel-placement-group',
  `arn:${string}:medialive:${string}:${string}:channelPlacementGroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel-placement-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  readonly idGroupPlacementChannel: string
  constructor(parameters: GroupPlacementChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCluster = parameters.idCluster
    this.idGroupPlacementChannel = parameters.idGroupPlacementChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medialive:${this.region}:${this.account}:channelPlacementGroup:${this.idCluster}/${this.idGroupPlacementChannel}` as const
  }
}
export type { GroupPlacementChannelArn }
export function groupPlacementChannelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupPlacementChannelArnParameters<Partition>) {
  return new GroupPlacementChannelArn<Partition>(parameters)
}
