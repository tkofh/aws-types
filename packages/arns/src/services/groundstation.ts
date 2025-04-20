import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeConfig: string
  readonly idConfig: string
}
class ConfigArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Config',
  `arn:${string}:groundstation:${string}:${string}:config/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeConfig: string
  readonly idConfig: string
  constructor(parameters: ConfigArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeConfig = parameters.typeConfig
    this.idConfig = parameters.idConfig
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:config/${this.typeConfig}/${this.idConfig}` as const
  }
}
export type { ConfigArn }
export function configArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigArnParameters<Partition>,
) {
  return new ConfigArn<Partition>(parameters)
}

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idContact: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Contact',
  `arn:${string}:groundstation:${string}:${string}:contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Contact' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idContact: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idContact = parameters.idContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:contact/${this.idContact}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface GroupEndpointDataflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupEndpointFlowData: string
}
class GroupEndpointDataflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DataflowEndpointGroup',
  `arn:${string}:groundstation:${string}:${string}:dataflow-endpoint-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DataflowEndpointGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupEndpointFlowData: string
  constructor(parameters: GroupEndpointDataflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupEndpointFlowData = parameters.idGroupEndpointFlowData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:dataflow-endpoint-group/${this.idGroupEndpointFlowData}` as const
  }
}
export type { GroupEndpointDataflowArn }
export function groupEndpointDataflowArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupEndpointDataflowArnParameters<Partition>) {
  return new GroupEndpointDataflowArn<Partition>(parameters)
}

export interface ItemEphemerisArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEphemeris: string
}
class ItemEphemerisArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EphemerisItem',
  `arn:${string}:groundstation:${string}:${string}:ephemeris/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EphemerisItem' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEphemeris: string
  constructor(parameters: ItemEphemerisArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEphemeris = parameters.idEphemeris
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:ephemeris/${this.idEphemeris}` as const
  }
}
export type { ItemEphemerisArn }
export function itemEphemerisArn<Partition extends ArnPartition = 'aws'>(
  parameters: ItemEphemerisArnParameters<Partition>,
) {
  return new ItemEphemerisArn<Partition>(parameters)
}

export interface ResourceStationGroundArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStationGround: string
}
class ResourceStationGroundArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GroundStationResource',
  `arn:${string}:groundstation:${string}:${string}:groundstation:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GroundStationResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStationGround: string
  constructor(parameters: ResourceStationGroundArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStationGround = parameters.idStationGround
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:groundstation:${this.idStationGround}` as const
  }
}
export type { ResourceStationGroundArn }
export function resourceStationGroundArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceStationGroundArnParameters<Partition>) {
  return new ResourceStationGroundArn<Partition>(parameters)
}

export interface ProfileMissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileMission: string
}
class ProfileMissionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MissionProfile',
  `arn:${string}:groundstation:${string}:${string}:mission-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MissionProfile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileMission: string
  constructor(parameters: ProfileMissionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfileMission = parameters.idProfileMission
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:mission-profile/${this.idProfileMission}` as const
  }
}
export type { ProfileMissionArn }
export function profileMissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileMissionArnParameters<Partition>,
) {
  return new ProfileMissionArn<Partition>(parameters)
}

export interface SatelliteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSatellite: string
}
class SatelliteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Satellite',
  `arn:${string}:groundstation:${string}:${string}:satellite/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Satellite' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSatellite: string
  constructor(parameters: SatelliteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSatellite = parameters.idSatellite
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:satellite/${this.idSatellite}` as const
  }
}
export type { SatelliteArn }
export function satelliteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SatelliteArnParameters<Partition>,
) {
  return new SatelliteArn<Partition>(parameters)
}

export interface AgentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgent: string
}
class AgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Agent',
  `arn:${string}:groundstation:${string}:${string}:agent/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Agent' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgent: string
  constructor(parameters: AgentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAgent = parameters.idAgent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:groundstation:${this.region}:${this.account}:agent/${this.idAgent}` as const
  }
}
export type { AgentArn }
export function agentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgentArnParameters<Partition>,
) {
  return new AgentArn<Partition>(parameters)
}
