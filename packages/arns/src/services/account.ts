import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'account',
  `arn:${string}:account::${string}:account`
> {
  readonly [ArnResourceTypeBrand] = 'account' as const
  readonly partition: Partition
  readonly account: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface AccountInOrganizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly managementAccountId: string
  readonly organizationId: string
  readonly memberAccountId: string
}
class AccountInOrganizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accountInOrganization',
  `arn:${string}:account::${string}:account/o-${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accountInOrganization' as const
  readonly partition: Partition
  readonly managementAccountId: string
  readonly organizationId: string
  readonly memberAccountId: string
  constructor(parameters: AccountInOrganizationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.managementAccountId = parameters.managementAccountId
    this.organizationId = parameters.organizationId
    this.memberAccountId = parameters.memberAccountId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:account::${this.managementAccountId}:account/o-${this.organizationId}/${this.memberAccountId}` as const
  }
}
export type { AccountInOrganizationArn }
export function accountInOrganizationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AccountInOrganizationArnParameters<Partition>) {
  return new AccountInOrganizationArn<Partition>(parameters)
}
