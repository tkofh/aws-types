import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AppsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class AppsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apps',
  `arn:${string}:amplify:${string}:${string}:apps/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apps' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: AppsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.idApp}` as const
  }
}
export type { AppsArn }
export function appsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppsArnParameters<Partition>,
) {
  return new AppsArn<Partition>(parameters)
}

export interface BranchesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameBranch: string
}
class BranchesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'branches',
  `arn:${string}:amplify:${string}:${string}:apps/${string}/branches/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'branches' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameBranch: string
  constructor(parameters: BranchesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameBranch = parameters.nameBranch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.idApp}/branches/${this.nameBranch}` as const
  }
}
export type { BranchesArn }
export function branchesArn<Partition extends ArnPartition = 'aws'>(
  parameters: BranchesArnParameters<Partition>,
) {
  return new BranchesArn<Partition>(parameters)
}

export interface JobsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameBranch: string
  readonly idJob: string
}
class JobsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'jobs',
  `arn:${string}:amplify:${string}:${string}:apps/${string}/branches/${string}/jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobs' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameBranch: string
  readonly idJob: string
  constructor(parameters: JobsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameBranch = parameters.nameBranch
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.idApp}/branches/${this.nameBranch}/jobs/${this.idJob}` as const
  }
}
export type { JobsArn }
export function jobsArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobsArnParameters<Partition>,
) {
  return new JobsArn<Partition>(parameters)
}

export interface DomainsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameDomain: string
}
class DomainsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domains',
  `arn:${string}:amplify:${string}:${string}:apps/${string}/domains/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domains' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameDomain: string
  constructor(parameters: DomainsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:apps/${this.idApp}/domains/${this.nameDomain}` as const
  }
}
export type { DomainsArn }
export function domainsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainsArnParameters<Partition>,
) {
  return new DomainsArn<Partition>(parameters)
}

export interface WebhooksArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWebhook: string
}
class WebhooksArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webhooks',
  `arn:${string}:amplify:${string}:${string}:webhooks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webhooks' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWebhook: string
  constructor(parameters: WebhooksArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWebhook = parameters.idWebhook
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplify:${this.region}:${this.account}:webhooks/${this.idWebhook}` as const
  }
}
export type { WebhooksArn }
export function webhooksArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebhooksArnParameters<Partition>,
) {
  return new WebhooksArn<Partition>(parameters)
}
