export interface AssistantArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assistantId: string
}
export type AssistantArn = `arn:${string}:wisdom:${string}:${string}:assistant/${string}`
export function assistantArn(parameters: AssistantArnParameters): AssistantArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:assistant/${parameters.assistantId}`
}

export interface AssistantAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assistantId: string
  assistantAssociationId: string
}
export type AssistantAssociationArn = `arn:${string}:wisdom:${string}:${string}:association/${string}/${string}`
export function assistantAssociationArn(parameters: AssistantAssociationArnParameters): AssistantAssociationArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:association/${parameters.assistantId}/${parameters.assistantAssociationId}`
}

export interface ContentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  knowledgeBaseId: string
  contentId: string
}
export type ContentArn = `arn:${string}:wisdom:${string}:${string}:content/${string}/${string}`
export function contentArn(parameters: ContentArnParameters): ContentArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:content/${parameters.knowledgeBaseId}/${parameters.contentId}`
}

export interface ContentAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  knowledgeBaseId: string
  contentId: string
  contentAssociationId: string
}
export type ContentAssociationArn = `arn:${string}:wisdom:${string}:${string}:content-association/${string}/${string}/${string}`
export function contentAssociationArn(parameters: ContentAssociationArnParameters): ContentAssociationArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:content-association/${parameters.knowledgeBaseId}/${parameters.contentId}/${parameters.contentAssociationId}`
}

export interface KnowledgeBaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  knowledgeBaseId: string
}
export type KnowledgeBaseArn = `arn:${string}:wisdom:${string}:${string}:knowledge-base/${string}`
export function knowledgeBaseArn(parameters: KnowledgeBaseArnParameters): KnowledgeBaseArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:knowledge-base/${parameters.knowledgeBaseId}`
}

export interface MessageTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  knowledgeBaseId: string
  messageTemplateId: string
}
export type MessageTemplateArn = `arn:${string}:wisdom:${string}:${string}:message-template/${string}/${string}`
export function messageTemplateArn(parameters: MessageTemplateArnParameters): MessageTemplateArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:message-template/${parameters.knowledgeBaseId}/${parameters.messageTemplateId}`
}

export interface SessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assistantId: string
  sessionId: string
}
export type SessionArn = `arn:${string}:wisdom:${string}:${string}:session/${string}/${string}`
export function sessionArn(parameters: SessionArnParameters): SessionArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:session/${parameters.assistantId}/${parameters.sessionId}`
}

export interface QuickResponseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  knowledgeBaseId: string
  quickResponseId: string
}
export type QuickResponseArn = `arn:${string}:wisdom:${string}:${string}:quick-response/${string}/${string}`
export function quickResponseArn(parameters: QuickResponseArnParameters): QuickResponseArn {
  return `arn:${parameters.partition ?? ''}:wisdom:${parameters.region}:${parameters.account}:quick-response/${parameters.knowledgeBaseId}/${parameters.quickResponseId}`
}