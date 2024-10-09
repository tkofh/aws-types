export interface ConfigurationSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configurationSetName: string
}
export type ConfigurationSetArn = `arn:${string}:sms-voice:${string}:${string}:configuration-set/${string}`
export function configurationSetArn(parameters: ConfigurationSetArnParameters): ConfigurationSetArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:configuration-set/${parameters.configurationSetName}`
}

export interface OptOutListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  optOutListName: string
}
export type OptOutListArn = `arn:${string}:sms-voice:${string}:${string}:opt-out-list/${string}`
export function optOutListArn(parameters: OptOutListArnParameters): OptOutListArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:opt-out-list/${parameters.optOutListName}`
}

export interface PhoneNumberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  phoneNumberId: string
}
export type PhoneNumberArn = `arn:${string}:sms-voice:${string}:${string}:phone-number/${string}`
export function phoneNumberArn(parameters: PhoneNumberArnParameters): PhoneNumberArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:phone-number/${parameters.phoneNumberId}`
}

export interface PoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  poolId: string
}
export type PoolArn = `arn:${string}:sms-voice:${string}:${string}:pool/${string}`
export function poolArn(parameters: PoolArnParameters): PoolArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:pool/${parameters.poolId}`
}

export interface ProtectConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  protectConfigurationId: string
}
export type ProtectConfigurationArn = `arn:${string}:sms-voice:${string}:${string}:protect-configuration/${string}`
export function protectConfigurationArn(parameters: ProtectConfigurationArnParameters): ProtectConfigurationArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:protect-configuration/${parameters.protectConfigurationId}`
}

export interface SenderIdArnParameters {
  partition?: string | undefined
  region: string
  account: string
  senderId: string
  isoCountryCode: string
}
export type SenderIdArn = `arn:${string}:sms-voice:${string}:${string}:sender-id/${string}/${string}`
export function senderIdArn(parameters: SenderIdArnParameters): SenderIdArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:sender-id/${parameters.senderId}/${parameters.isoCountryCode}`
}

export interface RegistrationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  registrationId: string
}
export type RegistrationArn = `arn:${string}:sms-voice:${string}:${string}:registration/${string}`
export function registrationArn(parameters: RegistrationArnParameters): RegistrationArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:registration/${parameters.registrationId}`
}

export interface RegistrationAttachmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  registrationAttachmentId: string
}
export type RegistrationAttachmentArn = `arn:${string}:sms-voice:${string}:${string}:registration-attachment/${string}`
export function registrationAttachmentArn(parameters: RegistrationAttachmentArnParameters): RegistrationAttachmentArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:registration-attachment/${parameters.registrationAttachmentId}`
}

export interface VerifiedDestinationNumberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedDestinationNumberId: string
}
export type VerifiedDestinationNumberArn = `arn:${string}:sms-voice:${string}:${string}:verified-destination-number/${string}`
export function verifiedDestinationNumberArn(parameters: VerifiedDestinationNumberArnParameters): VerifiedDestinationNumberArn {
  return `arn:${parameters.partition ?? ''}:sms-voice:${parameters.region}:${parameters.account}:verified-destination-number/${parameters.verifiedDestinationNumberId}`
}