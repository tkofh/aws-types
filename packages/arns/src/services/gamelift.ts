export interface AliasArnParameters {
  partition?: string | undefined
  region: string
  aliasId: string
}
export type AliasArn = `arn:${string}:gamelift:${string}::alias/${string}`
export function aliasArn(parameters: AliasArnParameters): AliasArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}::alias/${parameters.aliasId}`
}

export interface BuildArnParameters {
  partition?: string | undefined
  region: string
  account: string
  buildId: string
}
export type BuildArn = `arn:${string}:gamelift:${string}:${string}:build/${string}`
export function buildArn(parameters: BuildArnParameters): BuildArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:build/${parameters.buildId}`
}

export interface ContainerGroupDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type ContainerGroupDefinitionArn = `arn:${string}:gamelift:${string}:${string}:containergroupdefinition/${string}`
export function containerGroupDefinitionArn(parameters: ContainerGroupDefinitionArnParameters): ContainerGroupDefinitionArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:containergroupdefinition/${parameters.name}`
}

export interface FleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetId: string
}
export type FleetArn = `arn:${string}:gamelift:${string}:${string}:fleet/${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:fleet/${parameters.fleetId}`
}

export interface GameServerGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gameServerGroupName: string
}
export type GameServerGroupArn = `arn:${string}:gamelift:${string}:${string}:gameservergroup/${string}`
export function gameServerGroupArn(parameters: GameServerGroupArnParameters): GameServerGroupArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:gameservergroup/${parameters.gameServerGroupName}`
}

export interface GameSessionQueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gameSessionQueueName: string
}
export type GameSessionQueueArn = `arn:${string}:gamelift:${string}:${string}:gamesessionqueue/${string}`
export function gameSessionQueueArn(parameters: GameSessionQueueArnParameters): GameSessionQueueArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:gamesessionqueue/${parameters.gameSessionQueueName}`
}

export interface LocationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  locationId: string
}
export type LocationArn = `arn:${string}:gamelift:${string}:${string}:location/${string}`
export function locationArn(parameters: LocationArnParameters): LocationArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:location/${parameters.locationId}`
}

export interface MatchmakingConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  matchmakingConfigurationName: string
}
export type MatchmakingConfigurationArn = `arn:${string}:gamelift:${string}:${string}:matchmakingconfiguration/${string}`
export function matchmakingConfigurationArn(parameters: MatchmakingConfigurationArnParameters): MatchmakingConfigurationArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:matchmakingconfiguration/${parameters.matchmakingConfigurationName}`
}

export interface MatchmakingRuleSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  matchmakingRuleSetName: string
}
export type MatchmakingRuleSetArn = `arn:${string}:gamelift:${string}:${string}:matchmakingruleset/${string}`
export function matchmakingRuleSetArn(parameters: MatchmakingRuleSetArnParameters): MatchmakingRuleSetArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:matchmakingruleset/${parameters.matchmakingRuleSetName}`
}

export interface ScriptArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scriptId: string
}
export type ScriptArn = `arn:${string}:gamelift:${string}:${string}:script/${string}`
export function scriptArn(parameters: ScriptArnParameters): ScriptArn {
  return `arn:${parameters.partition ?? ''}:gamelift:${parameters.region}:${parameters.account}:script/${parameters.scriptId}`
}