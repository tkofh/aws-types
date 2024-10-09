export interface SigningProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  profileName: string
}
export type SigningProfileArn = `arn:${string}:signer:${string}:${string}:/signing-profiles/${string}`
export function signingProfileArn(parameters: SigningProfileArnParameters): SigningProfileArn {
  return `arn:${parameters.partition ?? ''}:signer:${parameters.region}:${parameters.account}:/signing-profiles/${parameters.profileName}`
}

export interface SigningJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type SigningJobArn = `arn:${string}:signer:${string}:${string}:/signing-jobs/${string}`
export function signingJobArn(parameters: SigningJobArnParameters): SigningJobArn {
  return `arn:${parameters.partition ?? ''}:signer:${parameters.region}:${parameters.account}:/signing-jobs/${parameters.jobId}`
}