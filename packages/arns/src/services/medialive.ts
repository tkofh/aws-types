export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelId: string
}
export type ChannelArn = `arn:${string}:medialive:${string}:${string}:channel:${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:channel:${parameters.channelId}`
}

export interface InputArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inputId: string
}
export type InputArn = `arn:${string}:medialive:${string}:${string}:input:${string}`
export function inputArn(parameters: InputArnParameters): InputArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:input:${parameters.inputId}`
}

export interface InputDeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceId: string
}
export type InputDeviceArn = `arn:${string}:medialive:${string}:${string}:inputDevice:${string}`
export function inputDeviceArn(parameters: InputDeviceArnParameters): InputDeviceArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:inputDevice:${parameters.deviceId}`
}

export interface InputSecurityGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inputSecurityGroupId: string
}
export type InputSecurityGroupArn = `arn:${string}:medialive:${string}:${string}:inputSecurityGroup:${string}`
export function inputSecurityGroupArn(parameters: InputSecurityGroupArnParameters): InputSecurityGroupArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:inputSecurityGroup:${parameters.inputSecurityGroupId}`
}

export interface MultiplexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  multiplexId: string
}
export type MultiplexArn = `arn:${string}:medialive:${string}:${string}:multiplex:${string}`
export function multiplexArn(parameters: MultiplexArnParameters): MultiplexArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:multiplex:${parameters.multiplexId}`
}

export interface ReservationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reservationId: string
}
export type ReservationArn = `arn:${string}:medialive:${string}:${string}:reservation:${string}`
export function reservationArn(parameters: ReservationArnParameters): ReservationArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:reservation:${parameters.reservationId}`
}

export interface OfferingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  offeringId: string
}
export type OfferingArn = `arn:${string}:medialive:${string}:${string}:offering:${string}`
export function offeringArn(parameters: OfferingArnParameters): OfferingArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:offering:${parameters.offeringId}`
}

export interface SignalMapArnParameters {
  partition?: string | undefined
  region: string
  account: string
  signalMapId: string
}
export type SignalMapArn = `arn:${string}:medialive:${string}:${string}:signal-map:${string}`
export function signalMapArn(parameters: SignalMapArnParameters): SignalMapArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:signal-map:${parameters.signalMapId}`
}

export interface CloudwatchAlarmTemplateGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cloudWatchAlarmTemplateGroupId: string
}
export type CloudwatchAlarmTemplateGroupArn = `arn:${string}:medialive:${string}:${string}:cloudwatch-alarm-template-group:${string}`
export function cloudwatchAlarmTemplateGroupArn(parameters: CloudwatchAlarmTemplateGroupArnParameters): CloudwatchAlarmTemplateGroupArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:cloudwatch-alarm-template-group:${parameters.cloudWatchAlarmTemplateGroupId}`
}

export interface CloudwatchAlarmTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cloudWatchAlarmTemplateId: string
}
export type CloudwatchAlarmTemplateArn = `arn:${string}:medialive:${string}:${string}:cloudwatch-alarm-template:${string}`
export function cloudwatchAlarmTemplateArn(parameters: CloudwatchAlarmTemplateArnParameters): CloudwatchAlarmTemplateArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:cloudwatch-alarm-template:${parameters.cloudWatchAlarmTemplateId}`
}

export interface EventbridgeRuleTemplateGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventBridgeRuleTemplateGroupId: string
}
export type EventbridgeRuleTemplateGroupArn = `arn:${string}:medialive:${string}:${string}:eventbridge-rule-template-group:${string}`
export function eventbridgeRuleTemplateGroupArn(parameters: EventbridgeRuleTemplateGroupArnParameters): EventbridgeRuleTemplateGroupArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:eventbridge-rule-template-group:${parameters.eventBridgeRuleTemplateGroupId}`
}

export interface EventbridgeRuleTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventBridgeRuleTemplateId: string
}
export type EventbridgeRuleTemplateArn = `arn:${string}:medialive:${string}:${string}:eventbridge-rule-template:${string}`
export function eventbridgeRuleTemplateArn(parameters: EventbridgeRuleTemplateArnParameters): EventbridgeRuleTemplateArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:eventbridge-rule-template:${parameters.eventBridgeRuleTemplateId}`
}

export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterId: string
}
export type ClusterArn = `arn:${string}:medialive:${string}:${string}:cluster:${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:cluster:${parameters.clusterId}`
}

export interface NodeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterId: string
  nodeId: string
}
export type NodeArn = `arn:${string}:medialive:${string}:${string}:node:${string}/${string}`
export function nodeArn(parameters: NodeArnParameters): NodeArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:node:${parameters.clusterId}/${parameters.nodeId}`
}

export interface NetworkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkId: string
}
export type NetworkArn = `arn:${string}:medialive:${string}:${string}:network:${string}`
export function networkArn(parameters: NetworkArnParameters): NetworkArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:network:${parameters.networkId}`
}

export interface ChannelPlacementGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterId: string
  channelPlacementGroupId: string
}
export type ChannelPlacementGroupArn = `arn:${string}:medialive:${string}:${string}:channelPlacementGroup:${string}/${string}`
export function channelPlacementGroupArn(parameters: ChannelPlacementGroupArnParameters): ChannelPlacementGroupArn {
  return `arn:${parameters.partition ?? ''}:medialive:${parameters.region}:${parameters.account}:channelPlacementGroup:${parameters.clusterId}/${parameters.channelPlacementGroupId}`
}