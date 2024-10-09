export interface AppsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type AppsArn = `arn:${string}:amplify:${string}:${string}:apps/${string}`
export function appsArn(parameters: AppsArnParameters): AppsArn {
  return `arn:${parameters.partition ?? ''}:amplify:${parameters.region}:${parameters.account}:apps/${parameters.appId}`
}

export interface BranchesArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  branchName: string
}
export type BranchesArn = `arn:${string}:amplify:${string}:${string}:apps/${string}/branches/${string}`
export function branchesArn(parameters: BranchesArnParameters): BranchesArn {
  return `arn:${parameters.partition ?? ''}:amplify:${parameters.region}:${parameters.account}:apps/${parameters.appId}/branches/${parameters.branchName}`
}

export interface JobsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  branchName: string
  jobId: string
}
export type JobsArn = `arn:${string}:amplify:${string}:${string}:apps/${string}/branches/${string}/jobs/${string}`
export function jobsArn(parameters: JobsArnParameters): JobsArn {
  return `arn:${parameters.partition ?? ''}:amplify:${parameters.region}:${parameters.account}:apps/${parameters.appId}/branches/${parameters.branchName}/jobs/${parameters.jobId}`
}

export interface DomainsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  domainName: string
}
export type DomainsArn = `arn:${string}:amplify:${string}:${string}:apps/${string}/domains/${string}`
export function domainsArn(parameters: DomainsArnParameters): DomainsArn {
  return `arn:${parameters.partition ?? ''}:amplify:${parameters.region}:${parameters.account}:apps/${parameters.appId}/domains/${parameters.domainName}`
}

export interface WebhooksArnParameters {
  partition?: string | undefined
  region: string
  account: string
  webhookId: string
}
export type WebhooksArn = `arn:${string}:amplify:${string}:${string}:webhooks/${string}`
export function webhooksArn(parameters: WebhooksArnParameters): WebhooksArn {
  return `arn:${parameters.partition ?? ''}:amplify:${parameters.region}:${parameters.account}:webhooks/${parameters.webhookId}`
}