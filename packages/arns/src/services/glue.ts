import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CatalogArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class CatalogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'catalog', `arn:${string}:glue:${string}:${string}:catalog`> {
  readonly [ArnResourceTypeBrand] = 'catalog' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: CatalogArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:catalog` as const
  }
}
export type { CatalogArn }
export function catalogArn<Partition extends ArnPartition = 'aws'>(parameters: CatalogArnParameters<Partition>) {
  return new CatalogArn<Partition>(parameters)
}

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'database', `arn:${string}:glue:${string}:${string}:database/${string}`> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.databaseName = parameters.databaseName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:database/${this.databaseName}` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(parameters: DatabaseArnParameters<Partition>) {
  return new DatabaseArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly tableName: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'table', `arn:${string}:glue:${string}:${string}:table/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly tableName: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.databaseName = parameters.databaseName
    this.tableName = parameters.tableName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:table/${this.databaseName}/${this.tableName}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(parameters: TableArnParameters<Partition>) {
  return new TableArn<Partition>(parameters)
}

export interface TableversionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly tableName: string
  readonly tableVersionName: string
}
class TableversionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'tableversion', `arn:${string}:glue:${string}:${string}:tableVersion/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'tableversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly tableName: string
  readonly tableVersionName: string
  constructor(parameters: TableversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.databaseName = parameters.databaseName
    this.tableName = parameters.tableName
    this.tableVersionName = parameters.tableVersionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:tableVersion/${this.databaseName}/${this.tableName}/${this.tableVersionName}` as const
  }
}
export type { TableversionArn }
export function tableversionArn<Partition extends ArnPartition = 'aws'>(parameters: TableversionArnParameters<Partition>) {
  return new TableversionArn<Partition>(parameters)
}

export interface ConnectionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionName: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connection', `arn:${string}:glue:${string}:${string}:connection/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionName: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionName = parameters.connectionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:connection/${this.connectionName}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectionArnParameters<Partition>) {
  return new ConnectionArn<Partition>(parameters)
}

export interface UserdefinedfunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly userDefinedFunctionName: string
}
class UserdefinedfunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'userdefinedfunction', `arn:${string}:glue:${string}:${string}:userDefinedFunction/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'userdefinedfunction' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly userDefinedFunctionName: string
  constructor(parameters: UserdefinedfunctionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.databaseName = parameters.databaseName
    this.userDefinedFunctionName = parameters.userDefinedFunctionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:userDefinedFunction/${this.databaseName}/${this.userDefinedFunctionName}` as const
  }
}
export type { UserdefinedfunctionArn }
export function userdefinedfunctionArn<Partition extends ArnPartition = 'aws'>(parameters: UserdefinedfunctionArnParameters<Partition>) {
  return new UserdefinedfunctionArn<Partition>(parameters)
}

export interface DevendpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly devEndpointName: string
}
class DevendpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'devendpoint', `arn:${string}:glue:${string}:${string}:devEndpoint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'devendpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly devEndpointName: string
  constructor(parameters: DevendpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.devEndpointName = parameters.devEndpointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:devEndpoint/${this.devEndpointName}` as const
  }
}
export type { DevendpointArn }
export function devendpointArn<Partition extends ArnPartition = 'aws'>(parameters: DevendpointArnParameters<Partition>) {
  return new DevendpointArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'job', `arn:${string}:glue:${string}:${string}:job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobName = parameters.jobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:job/${this.jobName}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(parameters: JobArnParameters<Partition>) {
  return new JobArn<Partition>(parameters)
}

export interface TriggerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly triggerName: string
}
class TriggerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'trigger', `arn:${string}:glue:${string}:${string}:trigger/${string}`> {
  readonly [ArnResourceTypeBrand] = 'trigger' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly triggerName: string
  constructor(parameters: TriggerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.triggerName = parameters.triggerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:trigger/${this.triggerName}` as const
  }
}
export type { TriggerArn }
export function triggerArn<Partition extends ArnPartition = 'aws'>(parameters: TriggerArnParameters<Partition>) {
  return new TriggerArn<Partition>(parameters)
}

export interface CrawlerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly crawlerName: string
}
class CrawlerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'crawler', `arn:${string}:glue:${string}:${string}:crawler/${string}`> {
  readonly [ArnResourceTypeBrand] = 'crawler' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly crawlerName: string
  constructor(parameters: CrawlerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.crawlerName = parameters.crawlerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:crawler/${this.crawlerName}` as const
  }
}
export type { CrawlerArn }
export function crawlerArn<Partition extends ArnPartition = 'aws'>(parameters: CrawlerArnParameters<Partition>) {
  return new CrawlerArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowName: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workflow', `arn:${string}:glue:${string}:${string}:workflow/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowName: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowName = parameters.workflowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:workflow/${this.workflowName}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(parameters: WorkflowArnParameters<Partition>) {
  return new WorkflowArn<Partition>(parameters)
}

export interface BlueprintArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly blueprintName: string
}
class BlueprintArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'blueprint', `arn:${string}:glue:${string}:${string}:blueprint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'blueprint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly blueprintName: string
  constructor(parameters: BlueprintArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.blueprintName = parameters.blueprintName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:blueprint/${this.blueprintName}` as const
  }
}
export type { BlueprintArn }
export function blueprintArn<Partition extends ArnPartition = 'aws'>(parameters: BlueprintArnParameters<Partition>) {
  return new BlueprintArn<Partition>(parameters)
}

export interface MlTransformArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transformId: string
}
class MlTransformArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'mlTransform', `arn:${string}:glue:${string}:${string}:mlTransform/${string}`> {
  readonly [ArnResourceTypeBrand] = 'mlTransform' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transformId: string
  constructor(parameters: MlTransformArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transformId = parameters.transformId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:mlTransform/${this.transformId}` as const
  }
}
export type { MlTransformArn }
export function mlTransformArn<Partition extends ArnPartition = 'aws'>(parameters: MlTransformArnParameters<Partition>) {
  return new MlTransformArn<Partition>(parameters)
}

export interface RegistryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registryName: string
}
class RegistryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'registry', `arn:${string}:glue:${string}:${string}:registry/${string}`> {
  readonly [ArnResourceTypeBrand] = 'registry' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registryName: string
  constructor(parameters: RegistryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.registryName = parameters.registryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:registry/${this.registryName}` as const
  }
}
export type { RegistryArn }
export function registryArn<Partition extends ArnPartition = 'aws'>(parameters: RegistryArnParameters<Partition>) {
  return new RegistryArn<Partition>(parameters)
}

export interface SchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
}
class SchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'schema', `arn:${string}:glue:${string}:${string}:schema/${string}`> {
  readonly [ArnResourceTypeBrand] = 'schema' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
  constructor(parameters: SchemaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.schemaName = parameters.schemaName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:schema/${this.schemaName}` as const
  }
}
export type { SchemaArn }
export function schemaArn<Partition extends ArnPartition = 'aws'>(parameters: SchemaArnParameters<Partition>) {
  return new SchemaArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sessionId: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'session', `arn:${string}:glue:${string}:${string}:session/${string}`> {
  readonly [ArnResourceTypeBrand] = 'session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sessionId: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sessionId = parameters.sessionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:session/${this.sessionId}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(parameters: SessionArnParameters<Partition>) {
  return new SessionArn<Partition>(parameters)
}

export interface UsageProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly usageProfileId: string
}
class UsageProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'usageProfile', `arn:${string}:glue:${string}:${string}:usageProfile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'usageProfile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly usageProfileId: string
  constructor(parameters: UsageProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.usageProfileId = parameters.usageProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:usageProfile/${this.usageProfileId}` as const
  }
}
export type { UsageProfileArn }
export function usageProfileArn<Partition extends ArnPartition = 'aws'>(parameters: UsageProfileArnParameters<Partition>) {
  return new UsageProfileArn<Partition>(parameters)
}

export interface DataQualityRulesetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly rulesetName: string
}
class DataQualityRulesetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataQualityRuleset', `arn:${string}:glue:${string}:${string}:dataQualityRuleset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataQualityRuleset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly rulesetName: string
  constructor(parameters: DataQualityRulesetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.rulesetName = parameters.rulesetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:dataQualityRuleset/${this.rulesetName}` as const
  }
}
export type { DataQualityRulesetArn }
export function dataQualityRulesetArn<Partition extends ArnPartition = 'aws'>(parameters: DataQualityRulesetArnParameters<Partition>) {
  return new DataQualityRulesetArn<Partition>(parameters)
}

export interface CustomEntityTypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly customEntityTypeId: string
}
class CustomEntityTypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'customEntityType', `arn:${string}:glue:${string}:${string}:customEntityType/${string}`> {
  readonly [ArnResourceTypeBrand] = 'customEntityType' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly customEntityTypeId: string
  constructor(parameters: CustomEntityTypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.customEntityTypeId = parameters.customEntityTypeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:customEntityType/${this.customEntityTypeId}` as const
  }
}
export type { CustomEntityTypeArn }
export function customEntityTypeArn<Partition extends ArnPartition = 'aws'>(parameters: CustomEntityTypeArnParameters<Partition>) {
  return new CustomEntityTypeArn<Partition>(parameters)
}

export interface CompletionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly completionId: string
}
class CompletionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'completion', `arn:${string}:glue:${string}:${string}:completion/${string}`> {
  readonly [ArnResourceTypeBrand] = 'completion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly completionId: string
  constructor(parameters: CompletionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.completionId = parameters.completionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:completion/${this.completionId}` as const
  }
}
export type { CompletionArn }
export function completionArn<Partition extends ArnPartition = 'aws'>(parameters: CompletionArnParameters<Partition>) {
  return new CompletionArn<Partition>(parameters)
}