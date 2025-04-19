import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly aliasId: string
}
class AliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'alias', `arn:${string}:gamelift:${string}::alias/${string}`> {
  readonly [ArnResourceTypeBrand] = 'alias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly aliasId: string
  constructor(parameters: AliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.aliasId = parameters.aliasId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}::alias/${this.aliasId}` as const
  }
}
export type { AliasArn }
export function aliasArn<Partition extends ArnPartition = 'aws'>(parameters: AliasArnParameters<Partition>) {
  return new AliasArn<Partition>(parameters)
}

export interface BuildArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly buildId: string
}
class BuildArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'build', `arn:${string}:gamelift:${string}:${string}:build/${string}`> {
  readonly [ArnResourceTypeBrand] = 'build' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly buildId: string
  constructor(parameters: BuildArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.buildId = parameters.buildId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:build/${this.buildId}` as const
  }
}
export type { BuildArn }
export function buildArn<Partition extends ArnPartition = 'aws'>(parameters: BuildArnParameters<Partition>) {
  return new BuildArn<Partition>(parameters)
}

export interface ContainerGroupDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class ContainerGroupDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'containerGroupDefinition', `arn:${string}:gamelift:${string}:${string}:containergroupdefinition/${string}`> {
  readonly [ArnResourceTypeBrand] = 'containerGroupDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: ContainerGroupDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:containergroupdefinition/${this.name}` as const
  }
}
export type { ContainerGroupDefinitionArn }
export function containerGroupDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: ContainerGroupDefinitionArnParameters<Partition>) {
  return new ContainerGroupDefinitionArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetId: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'fleet', `arn:${string}:gamelift:${string}:${string}:fleet/${string}`> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetId: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetId = parameters.fleetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:fleet/${this.fleetId}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(parameters: FleetArnParameters<Partition>) {
  return new FleetArn<Partition>(parameters)
}

export interface GameServerGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gameServerGroupName: string
}
class GameServerGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'gameServerGroup', `arn:${string}:gamelift:${string}:${string}:gameservergroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'gameServerGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gameServerGroupName: string
  constructor(parameters: GameServerGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gameServerGroupName = parameters.gameServerGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:gameservergroup/${this.gameServerGroupName}` as const
  }
}
export type { GameServerGroupArn }
export function gameServerGroupArn<Partition extends ArnPartition = 'aws'>(parameters: GameServerGroupArnParameters<Partition>) {
  return new GameServerGroupArn<Partition>(parameters)
}

export interface GameSessionQueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gameSessionQueueName: string
}
class GameSessionQueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'gameSessionQueue', `arn:${string}:gamelift:${string}:${string}:gamesessionqueue/${string}`> {
  readonly [ArnResourceTypeBrand] = 'gameSessionQueue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gameSessionQueueName: string
  constructor(parameters: GameSessionQueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gameSessionQueueName = parameters.gameSessionQueueName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:gamesessionqueue/${this.gameSessionQueueName}` as const
  }
}
export type { GameSessionQueueArn }
export function gameSessionQueueArn<Partition extends ArnPartition = 'aws'>(parameters: GameSessionQueueArnParameters<Partition>) {
  return new GameSessionQueueArn<Partition>(parameters)
}

export interface LocationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly locationId: string
}
class LocationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'location', `arn:${string}:gamelift:${string}:${string}:location/${string}`> {
  readonly [ArnResourceTypeBrand] = 'location' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly locationId: string
  constructor(parameters: LocationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.locationId = parameters.locationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:location/${this.locationId}` as const
  }
}
export type { LocationArn }
export function locationArn<Partition extends ArnPartition = 'aws'>(parameters: LocationArnParameters<Partition>) {
  return new LocationArn<Partition>(parameters)
}

export interface MatchmakingConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly matchmakingConfigurationName: string
}
class MatchmakingConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'matchmakingConfiguration', `arn:${string}:gamelift:${string}:${string}:matchmakingconfiguration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'matchmakingConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly matchmakingConfigurationName: string
  constructor(parameters: MatchmakingConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.matchmakingConfigurationName = parameters.matchmakingConfigurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:matchmakingconfiguration/${this.matchmakingConfigurationName}` as const
  }
}
export type { MatchmakingConfigurationArn }
export function matchmakingConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: MatchmakingConfigurationArnParameters<Partition>) {
  return new MatchmakingConfigurationArn<Partition>(parameters)
}

export interface MatchmakingRuleSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly matchmakingRuleSetName: string
}
class MatchmakingRuleSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'matchmakingRuleSet', `arn:${string}:gamelift:${string}:${string}:matchmakingruleset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'matchmakingRuleSet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly matchmakingRuleSetName: string
  constructor(parameters: MatchmakingRuleSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.matchmakingRuleSetName = parameters.matchmakingRuleSetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:matchmakingruleset/${this.matchmakingRuleSetName}` as const
  }
}
export type { MatchmakingRuleSetArn }
export function matchmakingRuleSetArn<Partition extends ArnPartition = 'aws'>(parameters: MatchmakingRuleSetArnParameters<Partition>) {
  return new MatchmakingRuleSetArn<Partition>(parameters)
}

export interface ScriptArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scriptId: string
}
class ScriptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'script', `arn:${string}:gamelift:${string}:${string}:script/${string}`> {
  readonly [ArnResourceTypeBrand] = 'script' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scriptId: string
  constructor(parameters: ScriptArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scriptId = parameters.scriptId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:script/${this.scriptId}` as const
  }
}
export type { ScriptArn }
export function scriptArn<Partition extends ArnPartition = 'aws'>(parameters: ScriptArnParameters<Partition>) {
  return new ScriptArn<Partition>(parameters)
}