import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:a4b:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:profile/${this.resourceId}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface RoomArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RoomArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'room',
  `arn:${string}:a4b:${string}:${string}:room/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'room' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RoomArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:room/${this.resourceId}` as const
  }
}
export type { RoomArn }
export function roomArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoomArnParameters<Partition>,
) {
  return new RoomArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:a4b:${string}:${string}:device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:device/${this.resourceId}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface SkillgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SkillgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'skillgroup',
  `arn:${string}:a4b:${string}:${string}:skill-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'skillgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SkillgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:skill-group/${this.resourceId}` as const
  }
}
export type { SkillgroupArn }
export function skillgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SkillgroupArnParameters<Partition>,
) {
  return new SkillgroupArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:a4b:${string}:${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:user/${this.resourceId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface AddressbookArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AddressbookArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'addressbook',
  `arn:${string}:a4b:${string}:${string}:address-book/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addressbook' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AddressbookArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:address-book/${this.resourceId}` as const
  }
}
export type { AddressbookArn }
export function addressbookArn<Partition extends ArnPartition = 'aws'>(
  parameters: AddressbookArnParameters<Partition>,
) {
  return new AddressbookArn<Partition>(parameters)
}

export interface ConferenceproviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ConferenceproviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'conferenceprovider',
  `arn:${string}:a4b:${string}:${string}:conference-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'conferenceprovider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ConferenceproviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:conference-provider/${this.resourceId}` as const
  }
}
export type { ConferenceproviderArn }
export function conferenceproviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConferenceproviderArnParameters<Partition>,
) {
  return new ConferenceproviderArn<Partition>(parameters)
}

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'contact',
  `arn:${string}:a4b:${string}:${string}:contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:contact/${this.resourceId}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface ScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schedule',
  `arn:${string}:a4b:${string}:${string}:schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:schedule/${this.resourceId}` as const
  }
}
export type { ScheduleArn }
export function scheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleArnParameters<Partition>,
) {
  return new ScheduleArn<Partition>(parameters)
}

export interface NetworkprofileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class NetworkprofileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'networkprofile',
  `arn:${string}:a4b:${string}:${string}:network-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'networkprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: NetworkprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:network-profile/${this.resourceId}` as const
  }
}
export type { NetworkprofileArn }
export function networkprofileArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkprofileArnParameters<Partition>,
) {
  return new NetworkprofileArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:a4b:${string}:${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:gateway/${this.resourceId}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface GatewaygroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class GatewaygroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'gatewaygroup',
  `arn:${string}:a4b:${string}:${string}:gateway-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gatewaygroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GatewaygroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:a4b:${this.region}:${this.account}:gateway-group/${this.resourceId}` as const
  }
}
export type { GatewaygroupArn }
export function gatewaygroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewaygroupArnParameters<Partition>,
) {
  return new GatewaygroupArn<Partition>(parameters)
}
