import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConversationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idConversation: string
}
class ConversationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'conversation',
  `arn:${string}:iq:${string}::conversation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'conversation' as const
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  constructor(parameters: ConversationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idConversation = parameters.idConversation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::conversation/${this.idConversation}` as const
  }
}
export type { ConversationArn }
export function conversationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConversationArnParameters<Partition>,
) {
  return new ConversationArn<Partition>(parameters)
}

export interface BuyerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idBuyer: string
}
class BuyerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'buyer',
  `arn:${string}:iq:${string}::buyer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'buyer' as const
  readonly partition: string
  readonly region: string
  readonly idBuyer: string
  constructor(parameters: BuyerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idBuyer = parameters.idBuyer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::buyer/${this.idBuyer}` as const
  }
}
export type { BuyerArn }
export function buyerArn<Partition extends ArnPartition = 'aws'>(
  parameters: BuyerArnParameters<Partition>,
) {
  return new BuyerArn<Partition>(parameters)
}

export interface ExpertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idExpert: string
}
class ExpertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'expert',
  `arn:${string}:iq:${string}::expert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'expert' as const
  readonly partition: string
  readonly region: string
  readonly idExpert: string
  constructor(parameters: ExpertArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idExpert = parameters.idExpert
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::expert/${this.idExpert}` as const
  }
}
export type { ExpertArn }
export function expertArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExpertArnParameters<Partition>,
) {
  return new ExpertArn<Partition>(parameters)
}

export interface CallArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idCall: string
}
class CallArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'call',
  `arn:${string}:iq:${string}::call/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'call' as const
  readonly partition: string
  readonly region: string
  readonly idCall: string
  constructor(parameters: CallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idCall = parameters.idCall
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::call/${this.idCall}` as const
  }
}
export type { CallArn }
export function callArn<Partition extends ArnPartition = 'aws'>(
  parameters: CallArnParameters<Partition>,
) {
  return new CallArn<Partition>(parameters)
}

export interface TokenArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idToken: string
}
class TokenArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'token',
  `arn:${string}:iq:${string}::token/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'token' as const
  readonly partition: string
  readonly region: string
  readonly idToken: string
  constructor(parameters: TokenArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idToken = parameters.idToken
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::token/${this.idToken}` as const
  }
}
export type { TokenArn }
export function tokenArn<Partition extends ArnPartition = 'aws'>(
  parameters: TokenArnParameters<Partition>,
) {
  return new TokenArn<Partition>(parameters)
}

export interface ProposalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  readonly idProposal: string
}
class ProposalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'proposal',
  `arn:${string}:iq:${string}::proposal/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proposal' as const
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  readonly idProposal: string
  constructor(parameters: ProposalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idConversation = parameters.idConversation
    this.idProposal = parameters.idProposal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::proposal/${this.idConversation}/${this.idProposal}` as const
  }
}
export type { ProposalArn }
export function proposalArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProposalArnParameters<Partition>,
) {
  return new ProposalArn<Partition>(parameters)
}

export interface RequestPaymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  readonly idProposal: string
  readonly idRequestPayment: string
}
class RequestPaymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'paymentRequest',
  `arn:${string}:iq:${string}::paymentRequest/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'paymentRequest' as const
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  readonly idProposal: string
  readonly idRequestPayment: string
  constructor(parameters: RequestPaymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idConversation = parameters.idConversation
    this.idProposal = parameters.idProposal
    this.idRequestPayment = parameters.idRequestPayment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::paymentRequest/${this.idConversation}/${this.idProposal}/${this.idRequestPayment}` as const
  }
}
export type { RequestPaymentArn }
export function requestPaymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestPaymentArnParameters<Partition>,
) {
  return new RequestPaymentArn<Partition>(parameters)
}

export interface SchedulePaymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  readonly idProposal: string
  readonly idVersion: string
}
class SchedulePaymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'paymentSchedule',
  `arn:${string}:iq:${string}::paymentSchedule/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'paymentSchedule' as const
  readonly partition: string
  readonly region: string
  readonly idConversation: string
  readonly idProposal: string
  readonly idVersion: string
  constructor(parameters: SchedulePaymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idConversation = parameters.idConversation
    this.idProposal = parameters.idProposal
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::paymentSchedule/${this.idConversation}/${this.idProposal}/${this.idVersion}` as const
  }
}
export type { SchedulePaymentArn }
export function schedulePaymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchedulePaymentArnParameters<Partition>,
) {
  return new SchedulePaymentArn<Partition>(parameters)
}

export interface SellerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idAccountAwsSeller: string
}
class SellerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'seller',
  `arn:${string}:iq:${string}::seller/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'seller' as const
  readonly partition: string
  readonly region: string
  readonly idAccountAwsSeller: string
  constructor(parameters: SellerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccountAwsSeller = parameters.idAccountAwsSeller
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::seller/${this.idAccountAwsSeller}` as const
  }
}
export type { SellerArn }
export function sellerArn<Partition extends ArnPartition = 'aws'>(
  parameters: SellerArnParameters<Partition>,
) {
  return new SellerArn<Partition>(parameters)
}

export interface CompanyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idCompany: string
}
class CompanyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'company',
  `arn:${string}:iq:${string}::company/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'company' as const
  readonly partition: string
  readonly region: string
  readonly idCompany: string
  constructor(parameters: CompanyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idCompany = parameters.idCompany
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::company/${this.idCompany}` as const
  }
}
export type { CompanyArn }
export function companyArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompanyArnParameters<Partition>,
) {
  return new CompanyArn<Partition>(parameters)
}

export interface RequestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idRequest: string
}
class RequestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'request',
  `arn:${string}:iq:${string}::request/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'request' as const
  readonly partition: string
  readonly region: string
  readonly idRequest: string
  constructor(parameters: RequestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idRequest = parameters.idRequest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::request/${this.idRequest}` as const
  }
}
export type { RequestArn }
export function requestArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestArnParameters<Partition>,
) {
  return new RequestArn<Partition>(parameters)
}

export interface ListingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idListing: string
}
class ListingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'listing',
  `arn:${string}:iq:${string}::listing/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listing' as const
  readonly partition: string
  readonly region: string
  readonly idListing: string
  constructor(parameters: ListingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idListing = parameters.idListing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::listing/${this.idListing}` as const
  }
}
export type { ListingArn }
export function listingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListingArnParameters<Partition>,
) {
  return new ListingArn<Partition>(parameters)
}

export interface AttachmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAttachment: string
}
class AttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attachment',
  `arn:${string}:iq:${string}::attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attachment' as const
  readonly partition: string
  readonly region: string
  readonly idAttachment: string
  constructor(parameters: AttachmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAttachment = parameters.idAttachment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::attachment/${this.idAttachment}` as const
  }
}
export type { AttachmentArn }
export function attachmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttachmentArnParameters<Partition>,
) {
  return new AttachmentArn<Partition>(parameters)
}

export interface PermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idRequestPermission: string
}
class PermissionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'permission',
  `arn:${string}:iq-permission:${string}::permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'permission' as const
  readonly partition: string
  readonly region: string
  readonly idRequestPermission: string
  constructor(parameters: PermissionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idRequestPermission = parameters.idRequestPermission
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq-permission:${this.region}::permission/${this.idRequestPermission}` as const
  }
}
export type { PermissionArn }
export function permissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PermissionArnParameters<Partition>,
) {
  return new PermissionArn<Partition>(parameters)
}
