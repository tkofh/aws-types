import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ConfigArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configType: string
  readonly configId: string
}
class ConfigArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Config', `arn:${string}:groundstation:${string}:${string}:config/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configType: string
  readonly configId: string
  constructor(parameters: ConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configType = parameters.configType
    this.configId = parameters.configId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:config/${this.configType}/${this.configId}` as const
  }
}
export type { ConfigArn }
export function configArn<Partition extends ArnPartition = 'aws'>(parameters: ConfigArnParameters<Partition>) {
  return new ConfigArn<Partition>(parameters)
}

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactId: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Contact', `arn:${string}:groundstation:${string}:${string}:contact/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Contact' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactId: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contactId = parameters.contactId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:contact/${this.contactId}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(parameters: ContactArnParameters<Partition>) {
  return new ContactArn<Partition>(parameters)
}

export interface DataflowEndpointGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataflowEndpointGroupId: string
}
class DataflowEndpointGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'DataflowEndpointGroup', `arn:${string}:groundstation:${string}:${string}:dataflow-endpoint-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'DataflowEndpointGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataflowEndpointGroupId: string
  constructor(parameters: DataflowEndpointGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataflowEndpointGroupId = parameters.dataflowEndpointGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:dataflow-endpoint-group/${this.dataflowEndpointGroupId}` as const
  }
}
export type { DataflowEndpointGroupArn }
export function dataflowEndpointGroupArn<Partition extends ArnPartition = 'aws'>(parameters: DataflowEndpointGroupArnParameters<Partition>) {
  return new DataflowEndpointGroupArn<Partition>(parameters)
}

export interface EphemerisItemArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ephemerisId: string
}
class EphemerisItemArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'EphemerisItem', `arn:${string}:groundstation:${string}:${string}:ephemeris/${string}`> {
  readonly [ArnResourceTypeBrand] = 'EphemerisItem' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ephemerisId: string
  constructor(parameters: EphemerisItemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ephemerisId = parameters.ephemerisId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:ephemeris/${this.ephemerisId}` as const
  }
}
export type { EphemerisItemArn }
export function ephemerisItemArn<Partition extends ArnPartition = 'aws'>(parameters: EphemerisItemArnParameters<Partition>) {
  return new EphemerisItemArn<Partition>(parameters)
}

export interface GroundStationResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groundStationId: string
}
class GroundStationResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'GroundStationResource', `arn:${string}:groundstation:${string}:${string}:groundstation:${string}`> {
  readonly [ArnResourceTypeBrand] = 'GroundStationResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groundStationId: string
  constructor(parameters: GroundStationResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groundStationId = parameters.groundStationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:groundstation:${this.groundStationId}` as const
  }
}
export type { GroundStationResourceArn }
export function groundStationResourceArn<Partition extends ArnPartition = 'aws'>(parameters: GroundStationResourceArnParameters<Partition>) {
  return new GroundStationResourceArn<Partition>(parameters)
}

export interface MissionProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly missionProfileId: string
}
class MissionProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'MissionProfile', `arn:${string}:groundstation:${string}:${string}:mission-profile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'MissionProfile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly missionProfileId: string
  constructor(parameters: MissionProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.missionProfileId = parameters.missionProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:mission-profile/${this.missionProfileId}` as const
  }
}
export type { MissionProfileArn }
export function missionProfileArn<Partition extends ArnPartition = 'aws'>(parameters: MissionProfileArnParameters<Partition>) {
  return new MissionProfileArn<Partition>(parameters)
}

export interface SatelliteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly satelliteId: string
}
class SatelliteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Satellite', `arn:${string}:groundstation:${string}:${string}:satellite/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Satellite' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly satelliteId: string
  constructor(parameters: SatelliteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.satelliteId = parameters.satelliteId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:satellite/${this.satelliteId}` as const
  }
}
export type { SatelliteArn }
export function satelliteArn<Partition extends ArnPartition = 'aws'>(parameters: SatelliteArnParameters<Partition>) {
  return new SatelliteArn<Partition>(parameters)
}

export interface AgentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agentId: string
}
class AgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Agent', `arn:${string}:groundstation:${string}:${string}:agent/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Agent' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agentId: string
  constructor(parameters: AgentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.agentId = parameters.agentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:agent/${this.agentId}` as const
  }
}
export type { AgentArn }
export function agentArn<Partition extends ArnPartition = 'aws'>(parameters: AgentArnParameters<Partition>) {
  return new AgentArn<Partition>(parameters)
}