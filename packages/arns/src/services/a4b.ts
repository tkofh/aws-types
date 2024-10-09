export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProfileArn = `arn:${string}:a4b:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:profile/${parameters.resourceId}`
}

export interface RoomArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RoomArn = `arn:${string}:a4b:${string}:${string}:room/${string}`
export function roomArn(parameters: RoomArnParameters): RoomArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:room/${parameters.resourceId}`
}

export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DeviceArn = `arn:${string}:a4b:${string}:${string}:device/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:device/${parameters.resourceId}`
}

export interface SkillgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SkillgroupArn = `arn:${string}:a4b:${string}:${string}:skill-group/${string}`
export function skillgroupArn(parameters: SkillgroupArnParameters): SkillgroupArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:skill-group/${parameters.resourceId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type UserArn = `arn:${string}:a4b:${string}:${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:user/${parameters.resourceId}`
}

export interface AddressbookArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AddressbookArn = `arn:${string}:a4b:${string}:${string}:address-book/${string}`
export function addressbookArn(parameters: AddressbookArnParameters): AddressbookArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:address-book/${parameters.resourceId}`
}

export interface ConferenceproviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ConferenceproviderArn = `arn:${string}:a4b:${string}:${string}:conference-provider/${string}`
export function conferenceproviderArn(parameters: ConferenceproviderArnParameters): ConferenceproviderArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:conference-provider/${parameters.resourceId}`
}

export interface ContactArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ContactArn = `arn:${string}:a4b:${string}:${string}:contact/${string}`
export function contactArn(parameters: ContactArnParameters): ContactArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:contact/${parameters.resourceId}`
}

export interface ScheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ScheduleArn = `arn:${string}:a4b:${string}:${string}:schedule/${string}`
export function scheduleArn(parameters: ScheduleArnParameters): ScheduleArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:schedule/${parameters.resourceId}`
}

export interface NetworkprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type NetworkprofileArn = `arn:${string}:a4b:${string}:${string}:network-profile/${string}`
export function networkprofileArn(parameters: NetworkprofileArnParameters): NetworkprofileArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:network-profile/${parameters.resourceId}`
}

export interface GatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type GatewayArn = `arn:${string}:a4b:${string}:${string}:gateway/${string}`
export function gatewayArn(parameters: GatewayArnParameters): GatewayArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:gateway/${parameters.resourceId}`
}

export interface GatewaygroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type GatewaygroupArn = `arn:${string}:a4b:${string}:${string}:gateway-group/${string}`
export function gatewaygroupArn(parameters: GatewaygroupArnParameters): GatewaygroupArn {
  return `arn:${parameters.partition ?? ''}:a4b:${parameters.region}:${parameters.account}:gateway-group/${parameters.resourceId}`
}