export interface AccountArnParameters {
  partition?: string | undefined
  account: string
}
export type AccountArn = `arn:${string}:account::${string}:account`
export function accountArn(parameters: AccountArnParameters): AccountArn {
  return `arn:${parameters.partition ?? ''}:account::${parameters.account}:account`
}

export interface AccountInOrganizationArnParameters {
  partition?: string | undefined
  managementAccountId: string
  organizationId: string
  memberAccountId: string
}
export type AccountInOrganizationArn = `arn:${string}:account::${string}:account/o-${string}/${string}`
export function accountInOrganizationArn(parameters: AccountInOrganizationArnParameters): AccountInOrganizationArn {
  return `arn:${parameters.partition ?? ''}:account::${parameters.managementAccountId}:account/o-${parameters.organizationId}/${parameters.memberAccountId}`
}