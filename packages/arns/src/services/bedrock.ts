import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface FoundationModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
}
class FoundationModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'foundation-model', `arn:${string}:bedrock:${string}::foundation-model/${string}`> {
  readonly [ArnResourceTypeBrand] = 'foundation-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
  constructor(parameters: FoundationModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}::foundation-model/${this.resourceId}` as const
  }
}
export type { FoundationModelArn }
export function foundationModelArn<Partition extends ArnPartition = 'aws'>(parameters: FoundationModelArnParameters<Partition>) {
  return new FoundationModelArn<Partition>(parameters)
}

export interface InferenceProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class InferenceProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'inference-profile', `arn:${string}:bedrock:${string}:${string}:inference-profile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'inference-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: InferenceProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:inference-profile/${this.resourceId}` as const
  }
}
export type { InferenceProfileArn }
export function inferenceProfileArn<Partition extends ArnPartition = 'aws'>(parameters: InferenceProfileArnParameters<Partition>) {
  return new InferenceProfileArn<Partition>(parameters)
}

export interface CustomModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CustomModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'custom-model', `arn:${string}:bedrock:${string}:${string}:custom-model/${string}`> {
  readonly [ArnResourceTypeBrand] = 'custom-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CustomModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:custom-model/${this.resourceId}` as const
  }
}
export type { CustomModelArn }
export function customModelArn<Partition extends ArnPartition = 'aws'>(parameters: CustomModelArnParameters<Partition>) {
  return new CustomModelArn<Partition>(parameters)
}

export interface ProvisionedModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProvisionedModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'provisioned-model', `arn:${string}:bedrock:${string}:${string}:provisioned-model/${string}`> {
  readonly [ArnResourceTypeBrand] = 'provisioned-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProvisionedModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:provisioned-model/${this.resourceId}` as const
  }
}
export type { ProvisionedModelArn }
export function provisionedModelArn<Partition extends ArnPartition = 'aws'>(parameters: ProvisionedModelArnParameters<Partition>) {
  return new ProvisionedModelArn<Partition>(parameters)
}

export interface ModelCustomizationJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ModelCustomizationJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model-customization-job', `arn:${string}:bedrock:${string}:${string}:model-customization-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model-customization-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ModelCustomizationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-customization-job/${this.resourceId}` as const
  }
}
export type { ModelCustomizationJobArn }
export function modelCustomizationJobArn<Partition extends ArnPartition = 'aws'>(parameters: ModelCustomizationJobArnParameters<Partition>) {
  return new ModelCustomizationJobArn<Partition>(parameters)
}

export interface AgentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agentId: string
}
class AgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'agent', `arn:${string}:bedrock:${string}:${string}:agent/${string}`> {
  readonly [ArnResourceTypeBrand] = 'agent' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agentId: string
  constructor(parameters: AgentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.agentId = parameters.agentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:agent/${this.agentId}` as const
  }
}
export type { AgentArn }
export function agentArn<Partition extends ArnPartition = 'aws'>(parameters: AgentArnParameters<Partition>) {
  return new AgentArn<Partition>(parameters)
}

export interface AgentAliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agentId: string
  readonly agentAliasId: string
}
class AgentAliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'agent-alias', `arn:${string}:bedrock:${string}:${string}:agent-alias/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'agent-alias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agentId: string
  readonly agentAliasId: string
  constructor(parameters: AgentAliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.agentId = parameters.agentId
    this.agentAliasId = parameters.agentAliasId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:agent-alias/${this.agentId}/${this.agentAliasId}` as const
  }
}
export type { AgentAliasArn }
export function agentAliasArn<Partition extends ArnPartition = 'aws'>(parameters: AgentAliasArnParameters<Partition>) {
  return new AgentAliasArn<Partition>(parameters)
}

export interface KnowledgeBaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly knowledgeBaseId: string
}
class KnowledgeBaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'knowledge-base', `arn:${string}:bedrock:${string}:${string}:knowledge-base/${string}`> {
  readonly [ArnResourceTypeBrand] = 'knowledge-base' as const
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
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:knowledge-base/${this.knowledgeBaseId}` as const
  }
}
export type { KnowledgeBaseArn }
export function knowledgeBaseArn<Partition extends ArnPartition = 'aws'>(parameters: KnowledgeBaseArnParameters<Partition>) {
  return new KnowledgeBaseArn<Partition>(parameters)
}

export interface ModelEvaluationJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ModelEvaluationJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model-evaluation-job', `arn:${string}:bedrock:${string}:${string}:model-evaluation-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model-evaluation-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ModelEvaluationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-evaluation-job/${this.resourceId}` as const
  }
}
export type { ModelEvaluationJobArn }
export function modelEvaluationJobArn<Partition extends ArnPartition = 'aws'>(parameters: ModelEvaluationJobArnParameters<Partition>) {
  return new ModelEvaluationJobArn<Partition>(parameters)
}

export interface EvaluationJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EvaluationJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'evaluation-job', `arn:${string}:bedrock:${string}:${string}:evaluation-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'evaluation-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: EvaluationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:evaluation-job/${this.resourceId}` as const
  }
}
export type { EvaluationJobArn }
export function evaluationJobArn<Partition extends ArnPartition = 'aws'>(parameters: EvaluationJobArnParameters<Partition>) {
  return new EvaluationJobArn<Partition>(parameters)
}

export interface ModelInvocationJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobIdentifier: string
}
class ModelInvocationJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model-invocation-job', `arn:${string}:bedrock:${string}:${string}:model-invocation-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model-invocation-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobIdentifier: string
  constructor(parameters: ModelInvocationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobIdentifier = parameters.jobIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-invocation-job/${this.jobIdentifier}` as const
  }
}
export type { ModelInvocationJobArn }
export function modelInvocationJobArn<Partition extends ArnPartition = 'aws'>(parameters: ModelInvocationJobArnParameters<Partition>) {
  return new ModelInvocationJobArn<Partition>(parameters)
}

export interface GuardrailArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly guardrailId: string
}
class GuardrailArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'guardrail', `arn:${string}:bedrock:${string}:${string}:guardrail/${string}`> {
  readonly [ArnResourceTypeBrand] = 'guardrail' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly guardrailId: string
  constructor(parameters: GuardrailArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.guardrailId = parameters.guardrailId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:guardrail/${this.guardrailId}` as const
  }
}
export type { GuardrailArn }
export function guardrailArn<Partition extends ArnPartition = 'aws'>(parameters: GuardrailArnParameters<Partition>) {
  return new GuardrailArn<Partition>(parameters)
}

export interface FlowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
}
class FlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'flow', `arn:${string}:bedrock:${string}:${string}:flow/${string}`> {
  readonly [ArnResourceTypeBrand] = 'flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  constructor(parameters: FlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowId = parameters.flowId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:flow/${this.flowId}` as const
  }
}
export type { FlowArn }
export function flowArn<Partition extends ArnPartition = 'aws'>(parameters: FlowArnParameters<Partition>) {
  return new FlowArn<Partition>(parameters)
}

export interface FlowAliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly flowAliasId: string
}
class FlowAliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'flow-alias', `arn:${string}:bedrock:${string}:${string}:flow/${string}/alias/${string}`> {
  readonly [ArnResourceTypeBrand] = 'flow-alias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowId: string
  readonly flowAliasId: string
  constructor(parameters: FlowAliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowId = parameters.flowId
    this.flowAliasId = parameters.flowAliasId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:flow/${this.flowId}/alias/${this.flowAliasId}` as const
  }
}
export type { FlowAliasArn }
export function flowAliasArn<Partition extends ArnPartition = 'aws'>(parameters: FlowAliasArnParameters<Partition>) {
  return new FlowAliasArn<Partition>(parameters)
}

export interface ModelCopyJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ModelCopyJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model-copy-job', `arn:${string}:bedrock:${string}:${string}:model-copy-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model-copy-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ModelCopyJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-copy-job/${this.resourceId}` as const
  }
}
export type { ModelCopyJobArn }
export function modelCopyJobArn<Partition extends ArnPartition = 'aws'>(parameters: ModelCopyJobArnParameters<Partition>) {
  return new ModelCopyJobArn<Partition>(parameters)
}

export interface PromptArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly promptId: string
}
class PromptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'prompt', `arn:${string}:bedrock:${string}:${string}:prompt/${string}`> {
  readonly [ArnResourceTypeBrand] = 'prompt' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly promptId: string
  constructor(parameters: PromptArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.promptId = parameters.promptId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:prompt/${this.promptId}` as const
  }
}
export type { PromptArn }
export function promptArn<Partition extends ArnPartition = 'aws'>(parameters: PromptArnParameters<Partition>) {
  return new PromptArn<Partition>(parameters)
}

export interface PromptVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly promptId: string
  readonly promptVersion: string
}
class PromptVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'prompt-version', `arn:${string}:bedrock:${string}:${string}:prompt/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'prompt-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly promptId: string
  readonly promptVersion: string
  constructor(parameters: PromptVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.promptId = parameters.promptId
    this.promptVersion = parameters.promptVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:prompt/${this.promptId}:${this.promptVersion}` as const
  }
}
export type { PromptVersionArn }
export function promptVersionArn<Partition extends ArnPartition = 'aws'>(parameters: PromptVersionArnParameters<Partition>) {
  return new PromptVersionArn<Partition>(parameters)
}

export interface ModelImportJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ModelImportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model-import-job', `arn:${string}:bedrock:${string}:${string}:model-import-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model-import-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ModelImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-import-job/${this.resourceId}` as const
  }
}
export type { ModelImportJobArn }
export function modelImportJobArn<Partition extends ArnPartition = 'aws'>(parameters: ModelImportJobArnParameters<Partition>) {
  return new ModelImportJobArn<Partition>(parameters)
}

export interface ImportedModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ImportedModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'imported-model', `arn:${string}:bedrock:${string}:${string}:imported-model/${string}`> {
  readonly [ArnResourceTypeBrand] = 'imported-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ImportedModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:imported-model/${this.resourceId}` as const
  }
}
export type { ImportedModelArn }
export function importedModelArn<Partition extends ArnPartition = 'aws'>(parameters: ImportedModelArnParameters<Partition>) {
  return new ImportedModelArn<Partition>(parameters)
}