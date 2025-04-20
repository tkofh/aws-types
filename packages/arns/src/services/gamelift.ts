import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idAlias: string
}
class AliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'alias',
  `arn:${string}:gamelift:${string}::alias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'alias' as const
  readonly partition: string
  readonly region: string
  readonly idAlias: string
  constructor(parameters: AliasArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAlias = parameters.idAlias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}::alias/${this.idAlias}` as const
  }
}
export type { AliasArn }
export function aliasArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasArnParameters<Partition>,
) {
  return new AliasArn<Partition>(parameters)
}

export interface BuildArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBuild: string
}
class BuildArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'build',
  `arn:${string}:gamelift:${string}:${string}:build/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'build' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBuild: string
  constructor(parameters: BuildArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBuild = parameters.idBuild
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:build/${this.idBuild}` as const
  }
}
export type { BuildArn }
export function buildArn<Partition extends ArnPartition = 'aws'>(
  parameters: BuildArnParameters<Partition>,
) {
  return new BuildArn<Partition>(parameters)
}

export interface DefinitionGroupContainerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class DefinitionGroupContainerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'containerGroupDefinition',
  `arn:${string}:gamelift:${string}:${string}:containergroupdefinition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'containerGroupDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: DefinitionGroupContainerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:containergroupdefinition/${this.name}` as const
  }
}
export type { DefinitionGroupContainerArn }
export function definitionGroupContainerArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionGroupContainerArnParameters<Partition>) {
  return new DefinitionGroupContainerArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:gamelift:${string}:${string}:fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFleet = parameters.idFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:fleet/${this.idFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface GroupServerGameArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupServerGame: string
}
class GroupServerGameArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'gameServerGroup',
  `arn:${string}:gamelift:${string}:${string}:gameservergroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gameServerGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupServerGame: string
  constructor(parameters: GroupServerGameArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupServerGame = parameters.nameGroupServerGame
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:gameservergroup/${this.nameGroupServerGame}` as const
  }
}
export type { GroupServerGameArn }
export function groupServerGameArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupServerGameArnParameters<Partition>,
) {
  return new GroupServerGameArn<Partition>(parameters)
}

export interface QueueSessionGameArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueueSessionGame: string
}
class QueueSessionGameArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'gameSessionQueue',
  `arn:${string}:gamelift:${string}:${string}:gamesessionqueue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gameSessionQueue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueueSessionGame: string
  constructor(parameters: QueueSessionGameArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameQueueSessionGame = parameters.nameQueueSessionGame
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:gamesessionqueue/${this.nameQueueSessionGame}` as const
  }
}
export type { QueueSessionGameArn }
export function queueSessionGameArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueSessionGameArnParameters<Partition>,
) {
  return new QueueSessionGameArn<Partition>(parameters)
}

export interface LocationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLocation: string
}
class LocationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'location',
  `arn:${string}:gamelift:${string}:${string}:location/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'location' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLocation: string
  constructor(parameters: LocationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idLocation = parameters.idLocation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:location/${this.idLocation}` as const
  }
}
export type { LocationArn }
export function locationArn<Partition extends ArnPartition = 'aws'>(
  parameters: LocationArnParameters<Partition>,
) {
  return new LocationArn<Partition>(parameters)
}

export interface ConfigurationMatchmakingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationMakingMatch: string
}
class ConfigurationMatchmakingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'matchmakingConfiguration',
  `arn:${string}:gamelift:${string}:${string}:matchmakingconfiguration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'matchmakingConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationMakingMatch: string
  constructor(parameters: ConfigurationMatchmakingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationMakingMatch = parameters.nameConfigurationMakingMatch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:matchmakingconfiguration/${this.nameConfigurationMakingMatch}` as const
  }
}
export type { ConfigurationMatchmakingArn }
export function configurationMatchmakingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationMatchmakingArnParameters<Partition>) {
  return new ConfigurationMatchmakingArn<Partition>(parameters)
}

export interface SetRuleMatchmakingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetRuleMakingMatch: string
}
class SetRuleMatchmakingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'matchmakingRuleSet',
  `arn:${string}:gamelift:${string}:${string}:matchmakingruleset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'matchmakingRuleSet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetRuleMakingMatch: string
  constructor(parameters: SetRuleMatchmakingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetRuleMakingMatch = parameters.nameSetRuleMakingMatch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:matchmakingruleset/${this.nameSetRuleMakingMatch}` as const
  }
}
export type { SetRuleMatchmakingArn }
export function setRuleMatchmakingArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetRuleMatchmakingArnParameters<Partition>,
) {
  return new SetRuleMatchmakingArn<Partition>(parameters)
}

export interface ScriptArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idScript: string
}
class ScriptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'script',
  `arn:${string}:gamelift:${string}:${string}:script/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'script' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idScript: string
  constructor(parameters: ScriptArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idScript = parameters.idScript
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:gamelift:${this.region}:${this.account}:script/${this.idScript}` as const
  }
}
export type { ScriptArn }
export function scriptArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScriptArnParameters<Partition>,
) {
  return new ScriptArn<Partition>(parameters)
}
