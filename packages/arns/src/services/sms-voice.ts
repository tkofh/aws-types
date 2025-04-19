import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ConfigurationSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationSetName: string
}
class ConfigurationSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ConfigurationSet', `arn:${string}:sms-voice:${string}:${string}:configuration-set/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ConfigurationSet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationSetName: string
  constructor(parameters: ConfigurationSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configurationSetName = parameters.configurationSetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:configuration-set/${this.configurationSetName}` as const
  }
}
export type { ConfigurationSetArn }
export function configurationSetArn<Partition extends ArnPartition = 'aws'>(parameters: ConfigurationSetArnParameters<Partition>) {
  return new ConfigurationSetArn<Partition>(parameters)
}

export interface OptOutListArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly optOutListName: string
}
class OptOutListArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'OptOutList', `arn:${string}:sms-voice:${string}:${string}:opt-out-list/${string}`> {
  readonly [ArnResourceTypeBrand] = 'OptOutList' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly optOutListName: string
  constructor(parameters: OptOutListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.optOutListName = parameters.optOutListName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:opt-out-list/${this.optOutListName}` as const
  }
}
export type { OptOutListArn }
export function optOutListArn<Partition extends ArnPartition = 'aws'>(parameters: OptOutListArnParameters<Partition>) {
  return new OptOutListArn<Partition>(parameters)
}

export interface PhoneNumberArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly phoneNumberId: string
}
class PhoneNumberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'PhoneNumber', `arn:${string}:sms-voice:${string}:${string}:phone-number/${string}`> {
  readonly [ArnResourceTypeBrand] = 'PhoneNumber' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly phoneNumberId: string
  constructor(parameters: PhoneNumberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.phoneNumberId = parameters.phoneNumberId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:phone-number/${this.phoneNumberId}` as const
  }
}
export type { PhoneNumberArn }
export function phoneNumberArn<Partition extends ArnPartition = 'aws'>(parameters: PhoneNumberArnParameters<Partition>) {
  return new PhoneNumberArn<Partition>(parameters)
}

export interface PoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
}
class PoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Pool', `arn:${string}:sms-voice:${string}:${string}:pool/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Pool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
  constructor(parameters: PoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.poolId = parameters.poolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:pool/${this.poolId}` as const
  }
}
export type { PoolArn }
export function poolArn<Partition extends ArnPartition = 'aws'>(parameters: PoolArnParameters<Partition>) {
  return new PoolArn<Partition>(parameters)
}

export interface ProtectConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly protectConfigurationId: string
}
class ProtectConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ProtectConfiguration', `arn:${string}:sms-voice:${string}:${string}:protect-configuration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ProtectConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly protectConfigurationId: string
  constructor(parameters: ProtectConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.protectConfigurationId = parameters.protectConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:protect-configuration/${this.protectConfigurationId}` as const
  }
}
export type { ProtectConfigurationArn }
export function protectConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: ProtectConfigurationArnParameters<Partition>) {
  return new ProtectConfigurationArn<Partition>(parameters)
}

export interface SenderIdArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly senderId: string
  readonly isoCountryCode: string
}
class SenderIdArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'SenderId', `arn:${string}:sms-voice:${string}:${string}:sender-id/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'SenderId' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly senderId: string
  readonly isoCountryCode: string
  constructor(parameters: SenderIdArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.senderId = parameters.senderId
    this.isoCountryCode = parameters.isoCountryCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:sender-id/${this.senderId}/${this.isoCountryCode}` as const
  }
}
export type { SenderIdArn }
export function senderIdArn<Partition extends ArnPartition = 'aws'>(parameters: SenderIdArnParameters<Partition>) {
  return new SenderIdArn<Partition>(parameters)
}

export interface RegistrationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registrationId: string
}
class RegistrationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Registration', `arn:${string}:sms-voice:${string}:${string}:registration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Registration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registrationId: string
  constructor(parameters: RegistrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.registrationId = parameters.registrationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:registration/${this.registrationId}` as const
  }
}
export type { RegistrationArn }
export function registrationArn<Partition extends ArnPartition = 'aws'>(parameters: RegistrationArnParameters<Partition>) {
  return new RegistrationArn<Partition>(parameters)
}

export interface RegistrationAttachmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registrationAttachmentId: string
}
class RegistrationAttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'RegistrationAttachment', `arn:${string}:sms-voice:${string}:${string}:registration-attachment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'RegistrationAttachment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registrationAttachmentId: string
  constructor(parameters: RegistrationAttachmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.registrationAttachmentId = parameters.registrationAttachmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:registration-attachment/${this.registrationAttachmentId}` as const
  }
}
export type { RegistrationAttachmentArn }
export function registrationAttachmentArn<Partition extends ArnPartition = 'aws'>(parameters: RegistrationAttachmentArnParameters<Partition>) {
  return new RegistrationAttachmentArn<Partition>(parameters)
}

export interface VerifiedDestinationNumberArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedDestinationNumberId: string
}
class VerifiedDestinationNumberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'VerifiedDestinationNumber', `arn:${string}:sms-voice:${string}:${string}:verified-destination-number/${string}`> {
  readonly [ArnResourceTypeBrand] = 'VerifiedDestinationNumber' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedDestinationNumberId: string
  constructor(parameters: VerifiedDestinationNumberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedDestinationNumberId = parameters.verifiedDestinationNumberId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:verified-destination-number/${this.verifiedDestinationNumberId}` as const
  }
}
export type { VerifiedDestinationNumberArn }
export function verifiedDestinationNumberArn<Partition extends ArnPartition = 'aws'>(parameters: VerifiedDestinationNumberArnParameters<Partition>) {
  return new VerifiedDestinationNumberArn<Partition>(parameters)
}