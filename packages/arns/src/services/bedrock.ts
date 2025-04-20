import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ModelFoundationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idResource: string
}
class ModelFoundationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'foundation-model',
  `arn:${string}:bedrock:${string}::foundation-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'foundation-model' as const
  readonly partition: string
  readonly region: string
  readonly idResource: string
  constructor(parameters: ModelFoundationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}::foundation-model/${this.idResource}` as const
  }
}
export type { ModelFoundationArn }
export function modelFoundationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelFoundationArnParameters<Partition>,
) {
  return new ModelFoundationArn<Partition>(parameters)
}

export interface ProfileInferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProfileInferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-profile',
  `arn:${string}:bedrock:${string}:${string}:inference-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProfileInferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:inference-profile/${this.idResource}` as const
  }
}
export type { ProfileInferenceArn }
export function profileInferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileInferenceArnParameters<Partition>,
) {
  return new ProfileInferenceArn<Partition>(parameters)
}

export interface ModelCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ModelCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custom-model',
  `arn:${string}:bedrock:${string}:${string}:custom-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'custom-model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ModelCustomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:custom-model/${this.idResource}` as const
  }
}
export type { ModelCustomArn }
export function modelCustomArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelCustomArnParameters<Partition>,
) {
  return new ModelCustomArn<Partition>(parameters)
}

export interface ModelProvisionedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ModelProvisionedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'provisioned-model',
  `arn:${string}:bedrock:${string}:${string}:provisioned-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'provisioned-model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ModelProvisionedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:provisioned-model/${this.idResource}` as const
  }
}
export type { ModelProvisionedArn }
export function modelProvisionedArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelProvisionedArnParameters<Partition>,
) {
  return new ModelProvisionedArn<Partition>(parameters)
}

export interface JobCustomizationModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobCustomizationModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-customization-job',
  `arn:${string}:bedrock:${string}:${string}:model-customization-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-customization-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobCustomizationModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-customization-job/${this.idResource}` as const
  }
}
export type { JobCustomizationModelArn }
export function jobCustomizationModelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobCustomizationModelArnParameters<Partition>) {
  return new JobCustomizationModelArn<Partition>(parameters)
}

export interface AgentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgent: string
}
class AgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agent',
  `arn:${string}:bedrock:${string}:${string}:agent/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agent' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgent: string
  constructor(parameters: AgentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAgent = parameters.idAgent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:agent/${this.idAgent}` as const
  }
}
export type { AgentArn }
export function agentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgentArnParameters<Partition>,
) {
  return new AgentArn<Partition>(parameters)
}

export interface AliasAgentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgent: string
  readonly idAliasAgent: string
}
class AliasAgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agent-alias',
  `arn:${string}:bedrock:${string}:${string}:agent-alias/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agent-alias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgent: string
  readonly idAliasAgent: string
  constructor(parameters: AliasAgentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAgent = parameters.idAgent
    this.idAliasAgent = parameters.idAliasAgent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:agent-alias/${this.idAgent}/${this.idAliasAgent}` as const
  }
}
export type { AliasAgentArn }
export function aliasAgentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasAgentArnParameters<Partition>,
) {
  return new AliasAgentArn<Partition>(parameters)
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
  'knowledge-base',
  `arn:${string}:bedrock:${string}:${string}:knowledge-base/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'knowledge-base' as const
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
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:knowledge-base/${this.idBaseKnowledge}` as const
  }
}
export type { BaseKnowledgeArn }
export function baseKnowledgeArn<Partition extends ArnPartition = 'aws'>(
  parameters: BaseKnowledgeArnParameters<Partition>,
) {
  return new BaseKnowledgeArn<Partition>(parameters)
}

export interface JobEvaluationModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobEvaluationModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-evaluation-job',
  `arn:${string}:bedrock:${string}:${string}:model-evaluation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-evaluation-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobEvaluationModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-evaluation-job/${this.idResource}` as const
  }
}
export type { JobEvaluationModelArn }
export function jobEvaluationModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobEvaluationModelArnParameters<Partition>,
) {
  return new JobEvaluationModelArn<Partition>(parameters)
}

export interface JobEvaluationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobEvaluationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'evaluation-job',
  `arn:${string}:bedrock:${string}:${string}:evaluation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'evaluation-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobEvaluationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:evaluation-job/${this.idResource}` as const
  }
}
export type { JobEvaluationArn }
export function jobEvaluationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobEvaluationArnParameters<Partition>,
) {
  return new JobEvaluationArn<Partition>(parameters)
}

export interface JobInvocationModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierJob: string
}
class JobInvocationModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-invocation-job',
  `arn:${string}:bedrock:${string}:${string}:model-invocation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-invocation-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierJob: string
  constructor(parameters: JobInvocationModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierJob = parameters.identifierJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-invocation-job/${this.identifierJob}` as const
  }
}
export type { JobInvocationModelArn }
export function jobInvocationModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobInvocationModelArnParameters<Partition>,
) {
  return new JobInvocationModelArn<Partition>(parameters)
}

export interface GuardrailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGuardrail: string
}
class GuardrailArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'guardrail',
  `arn:${string}:bedrock:${string}:${string}:guardrail/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'guardrail' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGuardrail: string
  constructor(parameters: GuardrailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGuardrail = parameters.idGuardrail
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:guardrail/${this.idGuardrail}` as const
  }
}
export type { GuardrailArn }
export function guardrailArn<Partition extends ArnPartition = 'aws'>(
  parameters: GuardrailArnParameters<Partition>,
) {
  return new GuardrailArn<Partition>(parameters)
}

export interface FlowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
}
class FlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'flow',
  `arn:${string}:bedrock:${string}:${string}:flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  constructor(parameters: FlowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFlow = parameters.idFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:flow/${this.idFlow}` as const
  }
}
export type { FlowArn }
export function flowArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowArnParameters<Partition>,
) {
  return new FlowArn<Partition>(parameters)
}

export interface AliasFlowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly idAliasFlow: string
}
class AliasFlowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'flow-alias',
  `arn:${string}:bedrock:${string}:${string}:flow/${string}/alias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flow-alias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFlow: string
  readonly idAliasFlow: string
  constructor(parameters: AliasFlowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFlow = parameters.idFlow
    this.idAliasFlow = parameters.idAliasFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:flow/${this.idFlow}/alias/${this.idAliasFlow}` as const
  }
}
export type { AliasFlowArn }
export function aliasFlowArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasFlowArnParameters<Partition>,
) {
  return new AliasFlowArn<Partition>(parameters)
}

export interface JobCopyModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobCopyModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-copy-job',
  `arn:${string}:bedrock:${string}:${string}:model-copy-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-copy-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobCopyModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-copy-job/${this.idResource}` as const
  }
}
export type { JobCopyModelArn }
export function jobCopyModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobCopyModelArnParameters<Partition>,
) {
  return new JobCopyModelArn<Partition>(parameters)
}

export interface PromptArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPrompt: string
}
class PromptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'prompt',
  `arn:${string}:bedrock:${string}:${string}:prompt/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prompt' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPrompt: string
  constructor(parameters: PromptArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPrompt = parameters.idPrompt
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:prompt/${this.idPrompt}` as const
  }
}
export type { PromptArn }
export function promptArn<Partition extends ArnPartition = 'aws'>(
  parameters: PromptArnParameters<Partition>,
) {
  return new PromptArn<Partition>(parameters)
}

export interface VersionPromptArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPrompt: string
  readonly versionPrompt: string
}
class VersionPromptArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'prompt-version',
  `arn:${string}:bedrock:${string}:${string}:prompt/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prompt-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPrompt: string
  readonly versionPrompt: string
  constructor(parameters: VersionPromptArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPrompt = parameters.idPrompt
    this.versionPrompt = parameters.versionPrompt
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:prompt/${this.idPrompt}:${this.versionPrompt}` as const
  }
}
export type { VersionPromptArn }
export function versionPromptArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionPromptArnParameters<Partition>,
) {
  return new VersionPromptArn<Partition>(parameters)
}

export interface JobImportModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobImportModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-import-job',
  `arn:${string}:bedrock:${string}:${string}:model-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-import-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobImportModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:model-import-job/${this.idResource}` as const
  }
}
export type { JobImportModelArn }
export function jobImportModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportModelArnParameters<Partition>,
) {
  return new JobImportModelArn<Partition>(parameters)
}

export interface ModelImportedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ModelImportedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imported-model',
  `arn:${string}:bedrock:${string}:${string}:imported-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imported-model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ModelImportedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bedrock:${this.region}:${this.account}:imported-model/${this.idResource}` as const
  }
}
export type { ModelImportedArn }
export function modelImportedArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelImportedArnParameters<Partition>,
) {
  return new ModelImportedArn<Partition>(parameters)
}
