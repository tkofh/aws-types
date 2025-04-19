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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
}
class ConversationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'conversation',
  `arn:${string}:iq:${string}::conversation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'conversation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  constructor(parameters: ConversationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.conversationId = parameters.conversationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::conversation/${this.conversationId}` as const
  }
}
export type { ConversationArn }
export function conversationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConversationArnParameters<Partition>,
) {
  return new ConversationArn<Partition>(parameters)
}

export interface BuyerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly buyerId: string
}
class BuyerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'buyer',
  `arn:${string}:iq:${string}::buyer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'buyer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly buyerId: string
  constructor(parameters: BuyerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.buyerId = parameters.buyerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::buyer/${this.buyerId}` as const
  }
}
export type { BuyerArn }
export function buyerArn<Partition extends ArnPartition = 'aws'>(
  parameters: BuyerArnParameters<Partition>,
) {
  return new BuyerArn<Partition>(parameters)
}

export interface ExpertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly expertId: string
}
class ExpertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'expert',
  `arn:${string}:iq:${string}::expert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'expert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly expertId: string
  constructor(parameters: ExpertArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.expertId = parameters.expertId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::expert/${this.expertId}` as const
  }
}
export type { ExpertArn }
export function expertArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExpertArnParameters<Partition>,
) {
  return new ExpertArn<Partition>(parameters)
}

export interface CallArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly callId: string
}
class CallArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'call',
  `arn:${string}:iq:${string}::call/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'call' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly callId: string
  constructor(parameters: CallArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.callId = parameters.callId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::call/${this.callId}` as const
  }
}
export type { CallArn }
export function callArn<Partition extends ArnPartition = 'aws'>(
  parameters: CallArnParameters<Partition>,
) {
  return new CallArn<Partition>(parameters)
}

export interface TokenArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly tokenId: string
}
class TokenArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'token',
  `arn:${string}:iq:${string}::token/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'token' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly tokenId: string
  constructor(parameters: TokenArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.tokenId = parameters.tokenId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::token/${this.tokenId}` as const
  }
}
export type { TokenArn }
export function tokenArn<Partition extends ArnPartition = 'aws'>(
  parameters: TokenArnParameters<Partition>,
) {
  return new TokenArn<Partition>(parameters)
}

export interface ProposalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  readonly proposalId: string
}
class ProposalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'proposal',
  `arn:${string}:iq:${string}::proposal/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proposal' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  readonly proposalId: string
  constructor(parameters: ProposalArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.conversationId = parameters.conversationId
    this.proposalId = parameters.proposalId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::proposal/${this.conversationId}/${this.proposalId}` as const
  }
}
export type { ProposalArn }
export function proposalArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProposalArnParameters<Partition>,
) {
  return new ProposalArn<Partition>(parameters)
}

export interface PaymentRequestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  readonly proposalId: string
  readonly paymentRequestId: string
}
class PaymentRequestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'paymentRequest',
  `arn:${string}:iq:${string}::paymentRequest/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'paymentRequest' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  readonly proposalId: string
  readonly paymentRequestId: string
  constructor(parameters: PaymentRequestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.conversationId = parameters.conversationId
    this.proposalId = parameters.proposalId
    this.paymentRequestId = parameters.paymentRequestId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::paymentRequest/${this.conversationId}/${this.proposalId}/${this.paymentRequestId}` as const
  }
}
export type { PaymentRequestArn }
export function paymentRequestArn<Partition extends ArnPartition = 'aws'>(
  parameters: PaymentRequestArnParameters<Partition>,
) {
  return new PaymentRequestArn<Partition>(parameters)
}

export interface PaymentScheduleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  readonly proposalId: string
  readonly versionId: string
}
class PaymentScheduleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'paymentSchedule',
  `arn:${string}:iq:${string}::paymentSchedule/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'paymentSchedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly conversationId: string
  readonly proposalId: string
  readonly versionId: string
  constructor(parameters: PaymentScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.conversationId = parameters.conversationId
    this.proposalId = parameters.proposalId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::paymentSchedule/${this.conversationId}/${this.proposalId}/${this.versionId}` as const
  }
}
export type { PaymentScheduleArn }
export function paymentScheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: PaymentScheduleArnParameters<Partition>,
) {
  return new PaymentScheduleArn<Partition>(parameters)
}

export interface SellerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly sellerAwsAccountId: string
}
class SellerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'seller',
  `arn:${string}:iq:${string}::seller/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'seller' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly sellerAwsAccountId: string
  constructor(parameters: SellerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.sellerAwsAccountId = parameters.sellerAwsAccountId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::seller/${this.sellerAwsAccountId}` as const
  }
}
export type { SellerArn }
export function sellerArn<Partition extends ArnPartition = 'aws'>(
  parameters: SellerArnParameters<Partition>,
) {
  return new SellerArn<Partition>(parameters)
}

export interface CompanyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly companyId: string
}
class CompanyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'company',
  `arn:${string}:iq:${string}::company/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'company' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly companyId: string
  constructor(parameters: CompanyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.companyId = parameters.companyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::company/${this.companyId}` as const
  }
}
export type { CompanyArn }
export function companyArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompanyArnParameters<Partition>,
) {
  return new CompanyArn<Partition>(parameters)
}

export interface RequestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly requestId: string
}
class RequestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'request',
  `arn:${string}:iq:${string}::request/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'request' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly requestId: string
  constructor(parameters: RequestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.requestId = parameters.requestId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::request/${this.requestId}` as const
  }
}
export type { RequestArn }
export function requestArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestArnParameters<Partition>,
) {
  return new RequestArn<Partition>(parameters)
}

export interface ListingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly listingId: string
}
class ListingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'listing',
  `arn:${string}:iq:${string}::listing/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listing' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly listingId: string
  constructor(parameters: ListingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.listingId = parameters.listingId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::listing/${this.listingId}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly attachmentId: string
}
class AttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attachment',
  `arn:${string}:iq:${string}::attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attachment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly attachmentId: string
  constructor(parameters: AttachmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.attachmentId = parameters.attachmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq:${this.region}::attachment/${this.attachmentId}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly permissionRequestId: string
}
class PermissionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'permission',
  `arn:${string}:iq-permission:${string}::permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'permission' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly permissionRequestId: string
  constructor(parameters: PermissionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.permissionRequestId = parameters.permissionRequestId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq-permission:${this.region}::permission/${this.permissionRequestId}` as const
  }
}
export type { PermissionArn }
export function permissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PermissionArnParameters<Partition>,
) {
  return new PermissionArn<Partition>(parameters)
}
