import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AppsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class AppsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apps',
  `arn:${string}:amplify:${string}:${string}:apps/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apps' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: AppsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.appId}` as const
  }
}
export type { AppsArn }
export function appsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppsArnParameters<Partition>,
) {
  return new AppsArn<Partition>(parameters)
}

export interface BranchesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly branchName: string
}
class BranchesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'branches',
  `arn:${string}:amplify:${string}:${string}:apps/${string}/branches/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'branches' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly branchName: string
  constructor(parameters: BranchesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.branchName = parameters.branchName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.appId}/branches/${this.branchName}` as const
  }
}
export type { BranchesArn }
export function branchesArn<Partition extends ArnPartition = 'aws'>(
  parameters: BranchesArnParameters<Partition>,
) {
  return new BranchesArn<Partition>(parameters)
}

export interface JobsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly branchName: string
  readonly jobId: string
}
class JobsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'jobs',
  `arn:${string}:amplify:${string}:${string}:apps/${string}/branches/${string}/jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobs' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly branchName: string
  readonly jobId: string
  constructor(parameters: JobsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.branchName = parameters.branchName
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.appId}/branches/${this.branchName}/jobs/${this.jobId}` as const
  }
}
export type { JobsArn }
export function jobsArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobsArnParameters<Partition>,
) {
  return new JobsArn<Partition>(parameters)
}

export interface DomainsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly domainName: string
}
class DomainsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domains',
  `arn:${string}:amplify:${string}:${string}:apps/${string}/domains/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domains' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly domainName: string
  constructor(parameters: DomainsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.appId}/domains/${this.domainName}` as const
  }
}
export type { DomainsArn }
export function domainsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainsArnParameters<Partition>,
) {
  return new DomainsArn<Partition>(parameters)
}

export interface WebhooksArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly webhookId: string
}
class WebhooksArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webhooks',
  `arn:${string}:amplify:${string}:${string}:webhooks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webhooks' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly webhookId: string
  constructor(parameters: WebhooksArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.webhookId = parameters.webhookId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:webhooks/${this.webhookId}` as const
  }
}
export type { WebhooksArn }
export function webhooksArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebhooksArnParameters<Partition>,
) {
  return new WebhooksArn<Partition>(parameters)
}
