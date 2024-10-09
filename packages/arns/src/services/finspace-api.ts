export interface CredentialArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type CredentialArn = `arn:${string}:finspace-api:${string}:${string}:/credentials/programmatic`
export function credentialArn(parameters: CredentialArnParameters): CredentialArn {
  return `arn:${parameters.partition ?? ''}:finspace-api:${parameters.region}:${parameters.account}:/credentials/programmatic`
}