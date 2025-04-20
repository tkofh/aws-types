import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AssistantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssistant: string
}
class AssistantArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Assistant',
  `arn:${string}:wisdom:${string}:${string}:assistant/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Assistant' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssistant: string
  constructor(parameters: AssistantArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssistant = parameters.idAssistant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:assistant/${this.idAssistant}` as const
  }
}
export type { AssistantArn }
export function assistantArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssistantArnParameters<Partition>,
) {
  return new AssistantArn<Partition>(parameters)
}

export interface AssociationAssistantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssistant: string
  readonly idAssociationAssistant: string
}
class AssociationAssistantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AssistantAssociation',
  `arn:${string}:wisdom:${string}:${string}:association/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AssistantAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssistant: string
  readonly idAssociationAssistant: string
  constructor(parameters: AssociationAssistantArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssistant = parameters.idAssistant
    this.idAssociationAssistant = parameters.idAssociationAssistant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:association/${this.idAssistant}/${this.idAssociationAssistant}` as const
  }
}
export type { AssociationAssistantArn }
export function associationAssistantArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationAssistantArnParameters<Partition>,
) {
  return new AssociationAssistantArn<Partition>(parameters)
}

export interface ContentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idContent: string
}
class ContentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Content',
  `arn:${string}:wisdom:${string}:${string}:content/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Content' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idContent: string
  constructor(parameters: ContentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBaseKnowledge = parameters.idBaseKnowledge
    this.idContent = parameters.idContent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:content/${this.idBaseKnowledge}/${this.idContent}` as const
  }
}
export type { ContentArn }
export function contentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContentArnParameters<Partition>,
) {
  return new ContentArn<Partition>(parameters)
}

export interface AssociationContentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idContent: string
  readonly idAssociationContent: string
}
class AssociationContentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ContentAssociation',
  `arn:${string}:wisdom:${string}:${string}:content-association/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ContentAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idContent: string
  readonly idAssociationContent: string
  constructor(parameters: AssociationContentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBaseKnowledge = parameters.idBaseKnowledge
    this.idContent = parameters.idContent
    this.idAssociationContent = parameters.idAssociationContent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:content-association/${this.idBaseKnowledge}/${this.idContent}/${this.idAssociationContent}` as const
  }
}
export type { AssociationContentArn }
export function associationContentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationContentArnParameters<Partition>,
) {
  return new AssociationContentArn<Partition>(parameters)
}

export interface BaseKnowledgeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
}
class BaseKnowledgeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'KnowledgeBase',
  `arn:${string}:wisdom:${string}:${string}:knowledge-base/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'KnowledgeBase' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  constructor(parameters: BaseKnowledgeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBaseKnowledge = parameters.idBaseKnowledge
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:knowledge-base/${this.idBaseKnowledge}` as const
  }
}
export type { BaseKnowledgeArn }
export function baseKnowledgeArn<Partition extends ArnPartition = 'aws'>(
  parameters: BaseKnowledgeArnParameters<Partition>,
) {
  return new BaseKnowledgeArn<Partition>(parameters)
}

export interface TemplateMessageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idTemplateMessage: string
}
class TemplateMessageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MessageTemplate',
  `arn:${string}:wisdom:${string}:${string}:message-template/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MessageTemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idTemplateMessage: string
  constructor(parameters: TemplateMessageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBaseKnowledge = parameters.idBaseKnowledge
    this.idTemplateMessage = parameters.idTemplateMessage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:message-template/${this.idBaseKnowledge}/${this.idTemplateMessage}` as const
  }
}
export type { TemplateMessageArn }
export function templateMessageArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateMessageArnParameters<Partition>,
) {
  return new TemplateMessageArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssistant: string
  readonly idSession: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Session',
  `arn:${string}:wisdom:${string}:${string}:session/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssistant: string
  readonly idSession: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssistant = parameters.idAssistant
    this.idSession = parameters.idSession
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:session/${this.idAssistant}/${this.idSession}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionArnParameters<Partition>,
) {
  return new SessionArn<Partition>(parameters)
}

export interface ResponseQuickArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idResponseQuick: string
}
class ResponseQuickArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'QuickResponse',
  `arn:${string}:wisdom:${string}:${string}:quick-response/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'QuickResponse' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaseKnowledge: string
  readonly idResponseQuick: string
  constructor(parameters: ResponseQuickArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBaseKnowledge = parameters.idBaseKnowledge
    this.idResponseQuick = parameters.idResponseQuick
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wisdom:${this.region}:${this.account}:quick-response/${this.idBaseKnowledge}/${this.idResponseQuick}` as const
  }
}
export type { ResponseQuickArn }
export function responseQuickArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponseQuickArnParameters<Partition>,
) {
  return new ResponseQuickArn<Partition>(parameters)
}
