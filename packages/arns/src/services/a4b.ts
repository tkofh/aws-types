import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:a4b:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:profile/${this.idResource}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface RoomArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RoomArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'room',
  `arn:${string}:a4b:${string}:${string}:room/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'room' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RoomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:room/${this.idResource}` as const
  }
}
export type { RoomArn }
export function roomArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoomArnParameters<Partition>,
) {
  return new RoomArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:a4b:${string}:${string}:device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:device/${this.idResource}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface GroupSkillArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GroupSkillArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'skillgroup',
  `arn:${string}:a4b:${string}:${string}:skill-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'skillgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupSkillArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:skill-group/${this.idResource}` as const
  }
}
export type { GroupSkillArn }
export function groupSkillArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSkillArnParameters<Partition>,
) {
  return new GroupSkillArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:a4b:${string}:${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:user/${this.idResource}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface BookAddressArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class BookAddressArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'addressbook',
  `arn:${string}:a4b:${string}:${string}:address-book/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addressbook' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: BookAddressArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:address-book/${this.idResource}` as const
  }
}
export type { BookAddressArn }
export function bookAddressArn<Partition extends ArnPartition = 'aws'>(
  parameters: BookAddressArnParameters<Partition>,
) {
  return new BookAddressArn<Partition>(parameters)
}

export interface ProviderConferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProviderConferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'conferenceprovider',
  `arn:${string}:a4b:${string}:${string}:conference-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'conferenceprovider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProviderConferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:conference-provider/${this.idResource}` as const
  }
}
export type { ProviderConferenceArn }
export function providerConferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderConferenceArnParameters<Partition>,
) {
  return new ProviderConferenceArn<Partition>(parameters)
}

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'contact',
  `arn:${string}:a4b:${string}:${string}:contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:contact/${this.idResource}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface ScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schedule',
  `arn:${string}:a4b:${string}:${string}:schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ScheduleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:schedule/${this.idResource}` as const
  }
}
export type { ScheduleArn }
export function scheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleArnParameters<Partition>,
) {
  return new ScheduleArn<Partition>(parameters)
}

export interface ProfileNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProfileNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'networkprofile',
  `arn:${string}:a4b:${string}:${string}:network-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'networkprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProfileNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:network-profile/${this.idResource}` as const
  }
}
export type { ProfileNetworkArn }
export function profileNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileNetworkArnParameters<Partition>,
) {
  return new ProfileNetworkArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:a4b:${string}:${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:gateway/${this.idResource}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface GroupGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GroupGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'gatewaygroup',
  `arn:${string}:a4b:${string}:${string}:gateway-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gatewaygroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupGatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:gateway-group/${this.idResource}` as const
  }
}
export type { GroupGatewayArn }
export function groupGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupGatewayArnParameters<Partition>,
) {
  return new GroupGatewayArn<Partition>(parameters)
}
