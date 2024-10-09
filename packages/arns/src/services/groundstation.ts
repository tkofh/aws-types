export interface ConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configType: string
  configId: string
}
export type ConfigArn = `arn:${string}:groundstation:${string}:${string}:config/${string}/${string}`
export function configArn(parameters: ConfigArnParameters): ConfigArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:config/${parameters.configType}/${parameters.configId}`
}

export interface ContactArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contactId: string
}
export type ContactArn = `arn:${string}:groundstation:${string}:${string}:contact/${string}`
export function contactArn(parameters: ContactArnParameters): ContactArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:contact/${parameters.contactId}`
}

export interface DataflowEndpointGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataflowEndpointGroupId: string
}
export type DataflowEndpointGroupArn = `arn:${string}:groundstation:${string}:${string}:dataflow-endpoint-group/${string}`
export function dataflowEndpointGroupArn(parameters: DataflowEndpointGroupArnParameters): DataflowEndpointGroupArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:dataflow-endpoint-group/${parameters.dataflowEndpointGroupId}`
}

export interface EphemerisItemArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ephemerisId: string
}
export type EphemerisItemArn = `arn:${string}:groundstation:${string}:${string}:ephemeris/${string}`
export function ephemerisItemArn(parameters: EphemerisItemArnParameters): EphemerisItemArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:ephemeris/${parameters.ephemerisId}`
}

export interface GroundStationResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groundStationId: string
}
export type GroundStationResourceArn = `arn:${string}:groundstation:${string}:${string}:groundstation:${string}`
export function groundStationResourceArn(parameters: GroundStationResourceArnParameters): GroundStationResourceArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:groundstation:${parameters.groundStationId}`
}

export interface MissionProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  missionProfileId: string
}
export type MissionProfileArn = `arn:${string}:groundstation:${string}:${string}:mission-profile/${string}`
export function missionProfileArn(parameters: MissionProfileArnParameters): MissionProfileArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:mission-profile/${parameters.missionProfileId}`
}

export interface SatelliteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  satelliteId: string
}
export type SatelliteArn = `arn:${string}:groundstation:${string}:${string}:satellite/${string}`
export function satelliteArn(parameters: SatelliteArnParameters): SatelliteArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:satellite/${parameters.satelliteId}`
}

export interface AgentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  agentId: string
}
export type AgentArn = `arn:${string}:groundstation:${string}:${string}:agent/${string}`
export function agentArn(parameters: AgentArnParameters): AgentArn {
  return `arn:${parameters.partition ?? ''}:groundstation:${parameters.region}:${parameters.account}:agent/${parameters.agentId}`
}