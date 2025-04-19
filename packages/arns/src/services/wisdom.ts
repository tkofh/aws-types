import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AssistantArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assistantId: string
}
class AssistantArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Assistant', `arn:${string}:wisdom:${string}:${string}:assistant/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Assistant' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assistantId: string
  constructor(parameters: AssistantArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assistantId = parameters.assistantId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:assistant/${this.assistantId}` as const
  }
}
export type { AssistantArn }
export function assistantArn<Partition extends ArnPartition = 'aws'>(parameters: AssistantArnParameters<Partition>) {
  return new AssistantArn<Partition>(parameters)
}

export interface AssistantAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assistantId: string
  readonly assistantAssociationId: string
}
class AssistantAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'AssistantAssociation', `arn:${string}:wisdom:${string}:${string}:association/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'AssistantAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assistantId: string
  readonly assistantAssociationId: string
  constructor(parameters: AssistantAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assistantId = parameters.assistantId
    this.assistantAssociationId = parameters.assistantAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:association/${this.assistantId}/${this.assistantAssociationId}` as const
  }
}
export type { AssistantAssociationArn }
export function assistantAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: AssistantAssociationArnParameters<Partition>) {
  return new AssistantAssociationArn<Partition>(parameters)
}

export interface ContentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly contentId: string
}
class ContentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Content', `arn:${string}:wisdom:${string}:${string}:content/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Content' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly contentId: string
  constructor(parameters: ContentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.knowledgeBaseId = parameters.knowledgeBaseId
    this.contentId = parameters.contentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:content/${this.knowledgeBaseId}/${this.contentId}` as const
  }
}
export type { ContentArn }
export function contentArn<Partition extends ArnPartition = 'aws'>(parameters: ContentArnParameters<Partition>) {
  return new ContentArn<Partition>(parameters)
}

export interface ContentAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly contentId: string
  readonly contentAssociationId: string
}
class ContentAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ContentAssociation', `arn:${string}:wisdom:${string}:${string}:content-association/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ContentAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly contentId: string
  readonly contentAssociationId: string
  constructor(parameters: ContentAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.knowledgeBaseId = parameters.knowledgeBaseId
    this.contentId = parameters.contentId
    this.contentAssociationId = parameters.contentAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:content-association/${this.knowledgeBaseId}/${this.contentId}/${this.contentAssociationId}` as const
  }
}
export type { ContentAssociationArn }
export function contentAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: ContentAssociationArnParameters<Partition>) {
  return new ContentAssociationArn<Partition>(parameters)
}

export interface KnowledgeBaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
}
class KnowledgeBaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'KnowledgeBase', `arn:${string}:wisdom:${string}:${string}:knowledge-base/${string}`> {
  readonly [ArnResourceTypeBrand] = 'KnowledgeBase' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  constructor(parameters: KnowledgeBaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.knowledgeBaseId = parameters.knowledgeBaseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:knowledge-base/${this.knowledgeBaseId}` as const
  }
}
export type { KnowledgeBaseArn }
export function knowledgeBaseArn<Partition extends ArnPartition = 'aws'>(parameters: KnowledgeBaseArnParameters<Partition>) {
  return new KnowledgeBaseArn<Partition>(parameters)
}

export interface MessageTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly messageTemplateId: string
}
class MessageTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'MessageTemplate', `arn:${string}:wisdom:${string}:${string}:message-template/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'MessageTemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly messageTemplateId: string
  constructor(parameters: MessageTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.knowledgeBaseId = parameters.knowledgeBaseId
    this.messageTemplateId = parameters.messageTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:message-template/${this.knowledgeBaseId}/${this.messageTemplateId}` as const
  }
}
export type { MessageTemplateArn }
export function messageTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: MessageTemplateArnParameters<Partition>) {
  return new MessageTemplateArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assistantId: string
  readonly sessionId: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Session', `arn:${string}:wisdom:${string}:${string}:session/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assistantId: string
  readonly sessionId: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assistantId = parameters.assistantId
    this.sessionId = parameters.sessionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:session/${this.assistantId}/${this.sessionId}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(parameters: SessionArnParameters<Partition>) {
  return new SessionArn<Partition>(parameters)
}

export interface QuickResponseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly quickResponseId: string
}
class QuickResponseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'QuickResponse', `arn:${string}:wisdom:${string}:${string}:quick-response/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'QuickResponse' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
  readonly quickResponseId: string
  constructor(parameters: QuickResponseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.knowledgeBaseId = parameters.knowledgeBaseId
    this.quickResponseId = parameters.quickResponseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:quick-response/${this.knowledgeBaseId}/${this.quickResponseId}` as const
  }
}
export type { QuickResponseArn }
export function quickResponseArn<Partition extends ArnPartition = 'aws'>(parameters: QuickResponseArnParameters<Partition>) {
  return new QuickResponseArn<Partition>(parameters)
}