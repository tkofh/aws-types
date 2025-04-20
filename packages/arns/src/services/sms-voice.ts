import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetConfiguration: string
}
class SetConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConfigurationSet',
  `arn:${string}:sms-voice:${string}:${string}:configuration-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConfigurationSet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetConfiguration: string
  constructor(parameters: SetConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetConfiguration = parameters.nameSetConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:configuration-set/${this.nameSetConfiguration}` as const
  }
}
export type { SetConfigurationArn }
export function setConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetConfigurationArnParameters<Partition>,
) {
  return new SetConfigurationArn<Partition>(parameters)
}

export interface ListOutOptArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameListOutOpt: string
}
class ListOutOptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'OptOutList',
  `arn:${string}:sms-voice:${string}:${string}:opt-out-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OptOutList' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameListOutOpt: string
  constructor(parameters: ListOutOptArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameListOutOpt = parameters.nameListOutOpt
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:opt-out-list/${this.nameListOutOpt}` as const
  }
}
export type { ListOutOptArn }
export function listOutOptArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListOutOptArnParameters<Partition>,
) {
  return new ListOutOptArn<Partition>(parameters)
}

export interface NumberPhoneArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNumberPhone: string
}
class NumberPhoneArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'PhoneNumber',
  `arn:${string}:sms-voice:${string}:${string}:phone-number/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'PhoneNumber' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNumberPhone: string
  constructor(parameters: NumberPhoneArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNumberPhone = parameters.idNumberPhone
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:phone-number/${this.idNumberPhone}` as const
  }
}
export type { NumberPhoneArn }
export function numberPhoneArn<Partition extends ArnPartition = 'aws'>(
  parameters: NumberPhoneArnParameters<Partition>,
) {
  return new NumberPhoneArn<Partition>(parameters)
}

export interface PoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPool: string
}
class PoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Pool',
  `arn:${string}:sms-voice:${string}:${string}:pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Pool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPool: string
  constructor(parameters: PoolArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPool = parameters.idPool
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:pool/${this.idPool}` as const
  }
}
export type { PoolArn }
export function poolArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolArnParameters<Partition>,
) {
  return new PoolArn<Partition>(parameters)
}

export interface ConfigurationProtectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationProtect: string
}
class ConfigurationProtectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ProtectConfiguration',
  `arn:${string}:sms-voice:${string}:${string}:protect-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ProtectConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationProtect: string
  constructor(parameters: ConfigurationProtectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationProtect = parameters.idConfigurationProtect
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:protect-configuration/${this.idConfigurationProtect}` as const
  }
}
export type { ConfigurationProtectArn }
export function configurationProtectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationProtectArnParameters<Partition>,
) {
  return new ConfigurationProtectArn<Partition>(parameters)
}

export interface IdSenderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSender: string
  readonly codeCountryIso: string
}
class IdSenderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'SenderId',
  `arn:${string}:sms-voice:${string}:${string}:sender-id/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SenderId' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSender: string
  readonly codeCountryIso: string
  constructor(parameters: IdSenderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSender = parameters.idSender
    this.codeCountryIso = parameters.codeCountryIso
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:sender-id/${this.idSender}/${this.codeCountryIso}` as const
  }
}
export type { IdSenderArn }
export function idSenderArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdSenderArnParameters<Partition>,
) {
  return new IdSenderArn<Partition>(parameters)
}

export interface RegistrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRegistration: string
}
class RegistrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Registration',
  `arn:${string}:sms-voice:${string}:${string}:registration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Registration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRegistration: string
  constructor(parameters: RegistrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRegistration = parameters.idRegistration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:registration/${this.idRegistration}` as const
  }
}
export type { RegistrationArn }
export function registrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegistrationArnParameters<Partition>,
) {
  return new RegistrationArn<Partition>(parameters)
}

export interface AttachmentRegistrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAttachmentRegistration: string
}
class AttachmentRegistrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RegistrationAttachment',
  `arn:${string}:sms-voice:${string}:${string}:registration-attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RegistrationAttachment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAttachmentRegistration: string
  constructor(parameters: AttachmentRegistrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAttachmentRegistration = parameters.idAttachmentRegistration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:registration-attachment/${this.idAttachmentRegistration}` as const
  }
}
export type { AttachmentRegistrationArn }
export function attachmentRegistrationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AttachmentRegistrationArnParameters<Partition>) {
  return new AttachmentRegistrationArn<Partition>(parameters)
}

export interface NumberDestinationVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNumberDestinationVerified: string
}
class NumberDestinationVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VerifiedDestinationNumber',
  `arn:${string}:sms-voice:${string}:${string}:verified-destination-number/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VerifiedDestinationNumber' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNumberDestinationVerified: string
  constructor(parameters: NumberDestinationVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNumberDestinationVerified = parameters.idNumberDestinationVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sms-voice:${this.region}:${this.account}:verified-destination-number/${this.idNumberDestinationVerified}` as const
  }
}
export type { NumberDestinationVerifiedArn }
export function numberDestinationVerifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: NumberDestinationVerifiedArnParameters<Partition>) {
  return new NumberDestinationVerifiedArn<Partition>(parameters)
}
