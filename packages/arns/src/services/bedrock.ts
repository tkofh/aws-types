export interface FoundationModelArnParameters {
  partition?: string | undefined
  region: string
  resourceId: string
}
export type FoundationModelArn = `arn:${string}:bedrock:${string}::foundation-model/${string}`
export function foundationModelArn(parameters: FoundationModelArnParameters): FoundationModelArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}::foundation-model/${parameters.resourceId}`
}

export interface InferenceProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type InferenceProfileArn = `arn:${string}:bedrock:${string}:${string}:inference-profile/${string}`
export function inferenceProfileArn(parameters: InferenceProfileArnParameters): InferenceProfileArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:inference-profile/${parameters.resourceId}`
}

export interface CustomModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CustomModelArn = `arn:${string}:bedrock:${string}:${string}:custom-model/${string}`
export function customModelArn(parameters: CustomModelArnParameters): CustomModelArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:custom-model/${parameters.resourceId}`
}

export interface ProvisionedModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProvisionedModelArn = `arn:${string}:bedrock:${string}:${string}:provisioned-model/${string}`
export function provisionedModelArn(parameters: ProvisionedModelArnParameters): ProvisionedModelArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:provisioned-model/${parameters.resourceId}`
}

export interface ModelCustomizationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ModelCustomizationJobArn = `arn:${string}:bedrock:${string}:${string}:model-customization-job/${string}`
export function modelCustomizationJobArn(parameters: ModelCustomizationJobArnParameters): ModelCustomizationJobArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:model-customization-job/${parameters.resourceId}`
}

export interface AgentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  agentId: string
}
export type AgentArn = `arn:${string}:bedrock:${string}:${string}:agent/${string}`
export function agentArn(parameters: AgentArnParameters): AgentArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:agent/${parameters.agentId}`
}

export interface AgentAliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  agentId: string
  agentAliasId: string
}
export type AgentAliasArn = `arn:${string}:bedrock:${string}:${string}:agent-alias/${string}/${string}`
export function agentAliasArn(parameters: AgentAliasArnParameters): AgentAliasArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:agent-alias/${parameters.agentId}/${parameters.agentAliasId}`
}

export interface KnowledgeBaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  knowledgeBaseId: string
}
export type KnowledgeBaseArn = `arn:${string}:bedrock:${string}:${string}:knowledge-base/${string}`
export function knowledgeBaseArn(parameters: KnowledgeBaseArnParameters): KnowledgeBaseArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:knowledge-base/${parameters.knowledgeBaseId}`
}

export interface ModelEvaluationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ModelEvaluationJobArn = `arn:${string}:bedrock:${string}:${string}:model-evaluation-job/${string}`
export function modelEvaluationJobArn(parameters: ModelEvaluationJobArnParameters): ModelEvaluationJobArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:model-evaluation-job/${parameters.resourceId}`
}

export interface EvaluationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EvaluationJobArn = `arn:${string}:bedrock:${string}:${string}:evaluation-job/${string}`
export function evaluationJobArn(parameters: EvaluationJobArnParameters): EvaluationJobArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:evaluation-job/${parameters.resourceId}`
}

export interface ModelInvocationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobIdentifier: string
}
export type ModelInvocationJobArn = `arn:${string}:bedrock:${string}:${string}:model-invocation-job/${string}`
export function modelInvocationJobArn(parameters: ModelInvocationJobArnParameters): ModelInvocationJobArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:model-invocation-job/${parameters.jobIdentifier}`
}

export interface GuardrailArnParameters {
  partition?: string | undefined
  region: string
  account: string
  guardrailId: string
}
export type GuardrailArn = `arn:${string}:bedrock:${string}:${string}:guardrail/${string}`
export function guardrailArn(parameters: GuardrailArnParameters): GuardrailArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:guardrail/${parameters.guardrailId}`
}

export interface FlowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowId: string
}
export type FlowArn = `arn:${string}:bedrock:${string}:${string}:flow/${string}`
export function flowArn(parameters: FlowArnParameters): FlowArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:flow/${parameters.flowId}`
}

export interface FlowAliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowId: string
  flowAliasId: string
}
export type FlowAliasArn = `arn:${string}:bedrock:${string}:${string}:flow/${string}/alias/${string}`
export function flowAliasArn(parameters: FlowAliasArnParameters): FlowAliasArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:flow/${parameters.flowId}/alias/${parameters.flowAliasId}`
}

export interface ModelCopyJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ModelCopyJobArn = `arn:${string}:bedrock:${string}:${string}:model-copy-job/${string}`
export function modelCopyJobArn(parameters: ModelCopyJobArnParameters): ModelCopyJobArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:model-copy-job/${parameters.resourceId}`
}

export interface PromptArnParameters {
  partition?: string | undefined
  region: string
  account: string
  promptId: string
}
export type PromptArn = `arn:${string}:bedrock:${string}:${string}:prompt/${string}`
export function promptArn(parameters: PromptArnParameters): PromptArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:prompt/${parameters.promptId}`
}

export interface PromptVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  promptId: string
  promptVersion: string
}
export type PromptVersionArn = `arn:${string}:bedrock:${string}:${string}:prompt/${string}:${string}`
export function promptVersionArn(parameters: PromptVersionArnParameters): PromptVersionArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:prompt/${parameters.promptId}:${parameters.promptVersion}`
}

export interface ModelImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ModelImportJobArn = `arn:${string}:bedrock:${string}:${string}:model-import-job/${string}`
export function modelImportJobArn(parameters: ModelImportJobArnParameters): ModelImportJobArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:model-import-job/${parameters.resourceId}`
}

export interface ImportedModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ImportedModelArn = `arn:${string}:bedrock:${string}:${string}:imported-model/${string}`
export function importedModelArn(parameters: ImportedModelArnParameters): ImportedModelArn {
  return `arn:${parameters.partition ?? ''}:bedrock:${parameters.region}:${parameters.account}:imported-model/${parameters.resourceId}`
}