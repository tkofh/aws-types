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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
}
class WorkspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workspace',
  `arn:${string}:aps:${string}:${string}:workspace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  constructor(parameters: WorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aps:${this.region}:${this.account}:workspace/${this.idWorkspace}` as const
  }
}
export type { WorkspaceArn }
export function workspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceArnParameters<Partition>,
) {
  return new WorkspaceArn<Partition>(parameters)
}

export interface NamespaceGroupsRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly namespace: string
}
class NamespaceGroupsRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rulegroupsnamespace',
  `arn:${string}:aps:${string}:${string}:rulegroupsnamespace/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroupsnamespace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly namespace: string
  constructor(parameters: NamespaceGroupsRuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
    this.namespace = parameters.namespace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aps:${this.region}:${this.account}:rulegroupsnamespace/${this.idWorkspace}/${this.namespace}` as const
  }
}
export type { NamespaceGroupsRuleArn }
export function namespaceGroupsRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceGroupsRuleArnParameters<Partition>,
) {
  return new NamespaceGroupsRuleArn<Partition>(parameters)
}

export interface ScraperArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idScraper: string
}
class ScraperArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'scraper',
  `arn:${string}:aps:${string}:${string}:scraper/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scraper' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idScraper: string
  constructor(parameters: ScraperArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idScraper = parameters.idScraper
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aps:${this.region}:${this.account}:scraper/${this.idScraper}` as const
  }
}
export type { ScraperArn }
export function scraperArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScraperArnParameters<Partition>,
) {
  return new ScraperArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:eks:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:cluster/${this.nameCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}
