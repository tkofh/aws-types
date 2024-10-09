export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identifier: string
}
export type ProfileArn = `arn:${string}:codewhisperer:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:codewhisperer:${parameters.region}:${parameters.account}:profile/${parameters.identifier}`
}