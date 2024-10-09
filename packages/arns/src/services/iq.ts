export interface ConversationArnParameters {
  partition?: string | undefined
  region: string
  conversationId: string
}
export type ConversationArn = `arn:${string}:iq:${string}::conversation/${string}`
export function conversationArn(parameters: ConversationArnParameters): ConversationArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::conversation/${parameters.conversationId}`
}

export interface BuyerArnParameters {
  partition?: string | undefined
  region: string
  buyerId: string
}
export type BuyerArn = `arn:${string}:iq:${string}::buyer/${string}`
export function buyerArn(parameters: BuyerArnParameters): BuyerArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::buyer/${parameters.buyerId}`
}

export interface ExpertArnParameters {
  partition?: string | undefined
  region: string
  expertId: string
}
export type ExpertArn = `arn:${string}:iq:${string}::expert/${string}`
export function expertArn(parameters: ExpertArnParameters): ExpertArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::expert/${parameters.expertId}`
}

export interface CallArnParameters {
  partition?: string | undefined
  region: string
  callId: string
}
export type CallArn = `arn:${string}:iq:${string}::call/${string}`
export function callArn(parameters: CallArnParameters): CallArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::call/${parameters.callId}`
}

export interface TokenArnParameters {
  partition?: string | undefined
  region: string
  tokenId: string
}
export type TokenArn = `arn:${string}:iq:${string}::token/${string}`
export function tokenArn(parameters: TokenArnParameters): TokenArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::token/${parameters.tokenId}`
}

export interface ProposalArnParameters {
  partition?: string | undefined
  region: string
  conversationId: string
  proposalId: string
}
export type ProposalArn = `arn:${string}:iq:${string}::proposal/${string}/${string}`
export function proposalArn(parameters: ProposalArnParameters): ProposalArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::proposal/${parameters.conversationId}/${parameters.proposalId}`
}

export interface PaymentRequestArnParameters {
  partition?: string | undefined
  region: string
  conversationId: string
  proposalId: string
  paymentRequestId: string
}
export type PaymentRequestArn = `arn:${string}:iq:${string}::paymentRequest/${string}/${string}/${string}`
export function paymentRequestArn(parameters: PaymentRequestArnParameters): PaymentRequestArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::paymentRequest/${parameters.conversationId}/${parameters.proposalId}/${parameters.paymentRequestId}`
}

export interface PaymentScheduleArnParameters {
  partition?: string | undefined
  region: string
  conversationId: string
  proposalId: string
  versionId: string
}
export type PaymentScheduleArn = `arn:${string}:iq:${string}::paymentSchedule/${string}/${string}/${string}`
export function paymentScheduleArn(parameters: PaymentScheduleArnParameters): PaymentScheduleArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::paymentSchedule/${parameters.conversationId}/${parameters.proposalId}/${parameters.versionId}`
}

export interface SellerArnParameters {
  partition?: string | undefined
  region: string
  sellerAwsAccountId: string
}
export type SellerArn = `arn:${string}:iq:${string}::seller/${string}`
export function sellerArn(parameters: SellerArnParameters): SellerArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::seller/${parameters.sellerAwsAccountId}`
}

export interface CompanyArnParameters {
  partition?: string | undefined
  region: string
  companyId: string
}
export type CompanyArn = `arn:${string}:iq:${string}::company/${string}`
export function companyArn(parameters: CompanyArnParameters): CompanyArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::company/${parameters.companyId}`
}

export interface RequestArnParameters {
  partition?: string | undefined
  region: string
  requestId: string
}
export type RequestArn = `arn:${string}:iq:${string}::request/${string}`
export function requestArn(parameters: RequestArnParameters): RequestArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::request/${parameters.requestId}`
}

export interface ListingArnParameters {
  partition?: string | undefined
  region: string
  listingId: string
}
export type ListingArn = `arn:${string}:iq:${string}::listing/${string}`
export function listingArn(parameters: ListingArnParameters): ListingArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::listing/${parameters.listingId}`
}

export interface AttachmentArnParameters {
  partition?: string | undefined
  region: string
  attachmentId: string
}
export type AttachmentArn = `arn:${string}:iq:${string}::attachment/${string}`
export function attachmentArn(parameters: AttachmentArnParameters): AttachmentArn {
  return `arn:${parameters.partition ?? ''}:iq:${parameters.region}::attachment/${parameters.attachmentId}`
}

export interface PermissionArnParameters {
  partition?: string | undefined
  region: string
  permissionRequestId: string
}
export type PermissionArn = `arn:${string}:iq-permission:${string}::permission/${string}`
export function permissionArn(parameters: PermissionArnParameters): PermissionArn {
  return `arn:${parameters.partition ?? ''}:iq-permission:${parameters.region}::permission/${parameters.permissionRequestId}`
}