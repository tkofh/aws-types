import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CatalogArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class CatalogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'catalog',
  `arn:${string}:glue:${string}:${string}:catalog`
> {
  readonly [ArnResourceTypeBrand] = 'catalog' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: CatalogArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:catalog` as const
  }
}
export type { CatalogArn }
export function catalogArn<Partition extends ArnPartition = 'aws'>(
  parameters: CatalogArnParameters<Partition>,
) {
  return new CatalogArn<Partition>(parameters)
}

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'database',
  `arn:${string}:glue:${string}:${string}:database/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatabase = parameters.nameDatabase
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:database/${this.nameDatabase}` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseArnParameters<Partition>,
) {
  return new DatabaseArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameTable: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:glue:${string}:${string}:table/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameTable: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatabase = parameters.nameDatabase
    this.nameTable = parameters.nameTable
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:table/${this.nameDatabase}/${this.nameTable}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

export interface VersionTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameTable: string
  readonly nameVersionTable: string
}
class VersionTableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'tableversion',
  `arn:${string}:glue:${string}:${string}:tableVersion/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tableversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameTable: string
  readonly nameVersionTable: string
  constructor(parameters: VersionTableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatabase = parameters.nameDatabase
    this.nameTable = parameters.nameTable
    this.nameVersionTable = parameters.nameVersionTable
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:tableVersion/${this.nameDatabase}/${this.nameTable}/${this.nameVersionTable}` as const
  }
}
export type { VersionTableArn }
export function versionTableArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionTableArnParameters<Partition>,
) {
  return new VersionTableArn<Partition>(parameters)
}

export interface ConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnection: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connection',
  `arn:${string}:glue:${string}:${string}:connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnection: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConnection = parameters.nameConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:connection/${this.nameConnection}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface FunctionDefinedUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameFunctionDefinedUser: string
}
class FunctionDefinedUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'userdefinedfunction',
  `arn:${string}:glue:${string}:${string}:userDefinedFunction/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userdefinedfunction' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameFunctionDefinedUser: string
  constructor(parameters: FunctionDefinedUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatabase = parameters.nameDatabase
    this.nameFunctionDefinedUser = parameters.nameFunctionDefinedUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:userDefinedFunction/${this.nameDatabase}/${this.nameFunctionDefinedUser}` as const
  }
}
export type { FunctionDefinedUserArn }
export function functionDefinedUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionDefinedUserArnParameters<Partition>,
) {
  return new FunctionDefinedUserArn<Partition>(parameters)
}

export interface EndpointDevArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpointDev: string
}
class EndpointDevArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'devendpoint',
  `arn:${string}:glue:${string}:${string}:devEndpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'devendpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpointDev: string
  constructor(parameters: EndpointDevArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEndpointDev = parameters.nameEndpointDev
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:devEndpoint/${this.nameEndpointDev}` as const
  }
}
export type { EndpointDevArn }
export function endpointDevArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointDevArnParameters<Partition>,
) {
  return new EndpointDevArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:glue:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJob = parameters.nameJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:job/${this.nameJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface TriggerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTrigger: string
}
class TriggerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'trigger',
  `arn:${string}:glue:${string}:${string}:trigger/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trigger' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTrigger: string
  constructor(parameters: TriggerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTrigger = parameters.nameTrigger
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:trigger/${this.nameTrigger}` as const
  }
}
export type { TriggerArn }
export function triggerArn<Partition extends ArnPartition = 'aws'>(
  parameters: TriggerArnParameters<Partition>,
) {
  return new TriggerArn<Partition>(parameters)
}

export interface CrawlerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCrawler: string
}
class CrawlerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'crawler',
  `arn:${string}:glue:${string}:${string}:crawler/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'crawler' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCrawler: string
  constructor(parameters: CrawlerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCrawler = parameters.nameCrawler
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:crawler/${this.nameCrawler}` as const
  }
}
export type { CrawlerArn }
export function crawlerArn<Partition extends ArnPartition = 'aws'>(
  parameters: CrawlerArnParameters<Partition>,
) {
  return new CrawlerArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkflow: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workflow',
  `arn:${string}:glue:${string}:${string}:workflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkflow: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameWorkflow = parameters.nameWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:workflow/${this.nameWorkflow}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowArnParameters<Partition>,
) {
  return new WorkflowArn<Partition>(parameters)
}

export interface BlueprintArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBlueprint: string
}
class BlueprintArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'blueprint',
  `arn:${string}:glue:${string}:${string}:blueprint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'blueprint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBlueprint: string
  constructor(parameters: BlueprintArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBlueprint = parameters.nameBlueprint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:blueprint/${this.nameBlueprint}` as const
  }
}
export type { BlueprintArn }
export function blueprintArn<Partition extends ArnPartition = 'aws'>(
  parameters: BlueprintArnParameters<Partition>,
) {
  return new BlueprintArn<Partition>(parameters)
}

export interface TransformMlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTransform: string
}
class TransformMlArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mlTransform',
  `arn:${string}:glue:${string}:${string}:mlTransform/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mlTransform' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTransform: string
  constructor(parameters: TransformMlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTransform = parameters.idTransform
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:mlTransform/${this.idTransform}` as const
  }
}
export type { TransformMlArn }
export function transformMlArn<Partition extends ArnPartition = 'aws'>(
  parameters: TransformMlArnParameters<Partition>,
) {
  return new TransformMlArn<Partition>(parameters)
}

export interface RegistryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRegistry: string
}
class RegistryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'registry',
  `arn:${string}:glue:${string}:${string}:registry/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'registry' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRegistry: string
  constructor(parameters: RegistryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRegistry = parameters.nameRegistry
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:registry/${this.nameRegistry}` as const
  }
}
export type { RegistryArn }
export function registryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegistryArnParameters<Partition>,
) {
  return new RegistryArn<Partition>(parameters)
}

export interface SchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
}
class SchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schema',
  `arn:${string}:glue:${string}:${string}:schema/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schema' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
  constructor(parameters: SchemaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSchema = parameters.nameSchema
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:schema/${this.nameSchema}` as const
  }
}
export type { SchemaArn }
export function schemaArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaArnParameters<Partition>,
) {
  return new SchemaArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSession: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'session',
  `arn:${string}:glue:${string}:${string}:session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSession: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSession = parameters.idSession
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:session/${this.idSession}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionArnParameters<Partition>,
) {
  return new SessionArn<Partition>(parameters)
}

export interface ProfileUsageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileUsage: string
}
class ProfileUsageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'usageProfile',
  `arn:${string}:glue:${string}:${string}:usageProfile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'usageProfile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileUsage: string
  constructor(parameters: ProfileUsageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfileUsage = parameters.idProfileUsage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:usageProfile/${this.idProfileUsage}` as const
  }
}
export type { ProfileUsageArn }
export function profileUsageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileUsageArnParameters<Partition>,
) {
  return new ProfileUsageArn<Partition>(parameters)
}

export interface SetRuleQualityDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetRule: string
}
class SetRuleQualityDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dataQualityRuleset',
  `arn:${string}:glue:${string}:${string}:dataQualityRuleset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataQualityRuleset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetRule: string
  constructor(parameters: SetRuleQualityDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetRule = parameters.nameSetRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:dataQualityRuleset/${this.nameSetRule}` as const
  }
}
export type { SetRuleQualityDataArn }
export function setRuleQualityDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetRuleQualityDataArnParameters<Partition>,
) {
  return new SetRuleQualityDataArn<Partition>(parameters)
}

export interface TypeEntityCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTypeEntityCustom: string
}
class TypeEntityCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customEntityType',
  `arn:${string}:glue:${string}:${string}:customEntityType/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customEntityType' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTypeEntityCustom: string
  constructor(parameters: TypeEntityCustomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTypeEntityCustom = parameters.idTypeEntityCustom
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:customEntityType/${this.idTypeEntityCustom}` as const
  }
}
export type { TypeEntityCustomArn }
export function typeEntityCustomArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeEntityCustomArnParameters<Partition>,
) {
  return new TypeEntityCustomArn<Partition>(parameters)
}

export interface CompletionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCompletion: string
}
class CompletionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'completion',
  `arn:${string}:glue:${string}:${string}:completion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'completion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCompletion: string
  constructor(parameters: CompletionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCompletion = parameters.idCompletion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glue:${this.region}:${this.account}:completion/${this.idCompletion}` as const
  }
}
export type { CompletionArn }
export function completionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompletionArnParameters<Partition>,
) {
  return new CompletionArn<Partition>(parameters)
}
