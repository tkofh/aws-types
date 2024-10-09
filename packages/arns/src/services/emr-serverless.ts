export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:emr-serverless:${string}:${string}:/applications/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:emr-serverless:${parameters.region}:${parameters.account}:/applications/${parameters.applicationId}`
}

export interface JobRunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  jobRunId: string
}
export type JobRunArn = `arn:${string}:emr-serverless:${string}:${string}:/applications/${string}/jobruns/${string}`
export function jobRunArn(parameters: JobRunArnParameters): JobRunArn {
  return `arn:${parameters.partition ?? ''}:emr-serverless:${parameters.region}:${parameters.account}:/applications/${parameters.applicationId}/jobruns/${parameters.jobRunId}`
}