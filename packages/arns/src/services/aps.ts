import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
}
class WorkspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workspace',
  `arn:${string}:aps:${string}:${string}:workspace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  constructor(parameters: WorkspaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aps:${this.region}:${this.account}:workspace/${this.workspaceId}` as const
  }
}
export type { WorkspaceArn }
export function workspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceArnParameters<Partition>,
) {
  return new WorkspaceArn<Partition>(parameters)
}

export interface RuleGroupsNamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly namespace: string
}
class RuleGroupsNamespaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rulegroupsnamespace',
  `arn:${string}:aps:${string}:${string}:rulegroupsnamespace/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroupsnamespace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly namespace: string
  constructor(parameters: RuleGroupsNamespaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
    this.namespace = parameters.namespace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aps:${this.region}:${this.account}:rulegroupsnamespace/${this.workspaceId}/${this.namespace}` as const
  }
}
export type { RuleGroupsNamespaceArn }
export function ruleGroupsNamespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleGroupsNamespaceArnParameters<Partition>,
) {
  return new RuleGroupsNamespaceArn<Partition>(parameters)
}

export interface ScraperArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scraperId: string
}
class ScraperArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'scraper',
  `arn:${string}:aps:${string}:${string}:scraper/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scraper' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scraperId: string
  constructor(parameters: ScraperArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scraperId = parameters.scraperId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aps:${this.region}:${this.account}:scraper/${this.scraperId}` as const
  }
}
export type { ScraperArn }
export function scraperArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScraperArnParameters<Partition>,
) {
  return new ScraperArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:eks:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:cluster/${this.clusterName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}
