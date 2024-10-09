export interface CatalogArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type CatalogArn = `arn:${string}:glue:${string}:${string}:catalog`
export function catalogArn(parameters: CatalogArnParameters): CatalogArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:catalog`
}

export interface DatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  databaseName: string
}
export type DatabaseArn = `arn:${string}:glue:${string}:${string}:database/${string}`
export function databaseArn(parameters: DatabaseArnParameters): DatabaseArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:database/${parameters.databaseName}`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  databaseName: string
  tableName: string
}
export type TableArn = `arn:${string}:glue:${string}:${string}:table/${string}/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:table/${parameters.databaseName}/${parameters.tableName}`
}

export interface TableversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  databaseName: string
  tableName: string
  tableVersionName: string
}
export type TableversionArn = `arn:${string}:glue:${string}:${string}:tableVersion/${string}/${string}/${string}`
export function tableversionArn(parameters: TableversionArnParameters): TableversionArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:tableVersion/${parameters.databaseName}/${parameters.tableName}/${parameters.tableVersionName}`
}

export interface ConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionName: string
}
export type ConnectionArn = `arn:${string}:glue:${string}:${string}:connection/${string}`
export function connectionArn(parameters: ConnectionArnParameters): ConnectionArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:connection/${parameters.connectionName}`
}

export interface UserdefinedfunctionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  databaseName: string
  userDefinedFunctionName: string
}
export type UserdefinedfunctionArn = `arn:${string}:glue:${string}:${string}:userDefinedFunction/${string}/${string}`
export function userdefinedfunctionArn(parameters: UserdefinedfunctionArnParameters): UserdefinedfunctionArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:userDefinedFunction/${parameters.databaseName}/${parameters.userDefinedFunctionName}`
}

export interface DevendpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  devEndpointName: string
}
export type DevendpointArn = `arn:${string}:glue:${string}:${string}:devEndpoint/${string}`
export function devendpointArn(parameters: DevendpointArnParameters): DevendpointArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:devEndpoint/${parameters.devEndpointName}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobName: string
}
export type JobArn = `arn:${string}:glue:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:job/${parameters.jobName}`
}

export interface TriggerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  triggerName: string
}
export type TriggerArn = `arn:${string}:glue:${string}:${string}:trigger/${string}`
export function triggerArn(parameters: TriggerArnParameters): TriggerArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:trigger/${parameters.triggerName}`
}

export interface CrawlerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  crawlerName: string
}
export type CrawlerArn = `arn:${string}:glue:${string}:${string}:crawler/${string}`
export function crawlerArn(parameters: CrawlerArnParameters): CrawlerArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:crawler/${parameters.crawlerName}`
}

export interface WorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowName: string
}
export type WorkflowArn = `arn:${string}:glue:${string}:${string}:workflow/${string}`
export function workflowArn(parameters: WorkflowArnParameters): WorkflowArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:workflow/${parameters.workflowName}`
}

export interface BlueprintArnParameters {
  partition?: string | undefined
  region: string
  account: string
  blueprintName: string
}
export type BlueprintArn = `arn:${string}:glue:${string}:${string}:blueprint/${string}`
export function blueprintArn(parameters: BlueprintArnParameters): BlueprintArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:blueprint/${parameters.blueprintName}`
}

export interface MlTransformArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transformId: string
}
export type MlTransformArn = `arn:${string}:glue:${string}:${string}:mlTransform/${string}`
export function mlTransformArn(parameters: MlTransformArnParameters): MlTransformArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:mlTransform/${parameters.transformId}`
}

export interface RegistryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  registryName: string
}
export type RegistryArn = `arn:${string}:glue:${string}:${string}:registry/${string}`
export function registryArn(parameters: RegistryArnParameters): RegistryArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:registry/${parameters.registryName}`
}

export interface SchemaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  schemaName: string
}
export type SchemaArn = `arn:${string}:glue:${string}:${string}:schema/${string}`
export function schemaArn(parameters: SchemaArnParameters): SchemaArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:schema/${parameters.schemaName}`
}

export interface SessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sessionId: string
}
export type SessionArn = `arn:${string}:glue:${string}:${string}:session/${string}`
export function sessionArn(parameters: SessionArnParameters): SessionArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:session/${parameters.sessionId}`
}

export interface UsageProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  usageProfileId: string
}
export type UsageProfileArn = `arn:${string}:glue:${string}:${string}:usageProfile/${string}`
export function usageProfileArn(parameters: UsageProfileArnParameters): UsageProfileArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:usageProfile/${parameters.usageProfileId}`
}

export interface DataQualityRulesetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  rulesetName: string
}
export type DataQualityRulesetArn = `arn:${string}:glue:${string}:${string}:dataQualityRuleset/${string}`
export function dataQualityRulesetArn(parameters: DataQualityRulesetArnParameters): DataQualityRulesetArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:dataQualityRuleset/${parameters.rulesetName}`
}

export interface CustomEntityTypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  customEntityTypeId: string
}
export type CustomEntityTypeArn = `arn:${string}:glue:${string}:${string}:customEntityType/${string}`
export function customEntityTypeArn(parameters: CustomEntityTypeArnParameters): CustomEntityTypeArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:customEntityType/${parameters.customEntityTypeId}`
}

export interface CompletionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  completionId: string
}
export type CompletionArn = `arn:${string}:glue:${string}:${string}:completion/${string}`
export function completionArn(parameters: CompletionArnParameters): CompletionArn {
  return `arn:${parameters.partition ?? ''}:glue:${parameters.region}:${parameters.account}:completion/${parameters.completionId}`
}