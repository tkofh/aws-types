import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'account',
  `arn:${string}:account::${string}:account`
> {
  readonly [ArnResourceTypeBrand] = 'account' as const
  readonly partition: string
  readonly account: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:account::${this.account}:account` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface OrganizationInAccountArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idAccountManagement: string
  readonly idOrganization: string
  readonly idAccountMember: string
}
class OrganizationInAccountArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accountInOrganization',
  `arn:${string}:account::${string}:account/o-${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accountInOrganization' as const
  readonly partition: string
  readonly idAccountManagement: string
  readonly idOrganization: string
  readonly idAccountMember: string
  constructor(parameters: OrganizationInAccountArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idAccountManagement = parameters.idAccountManagement
    this.idOrganization = parameters.idOrganization
    this.idAccountMember = parameters.idAccountMember
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:account::${this.idAccountManagement}:account/o-${this.idOrganization}/${this.idAccountMember}` as const
  }
}
export type { OrganizationInAccountArn }
export function organizationInAccountArn<
  Partition extends ArnPartition = 'aws',
>(parameters: OrganizationInAccountArnParameters<Partition>) {
  return new OrganizationInAccountArn<Partition>(parameters)
}
