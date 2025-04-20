import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  readonly versionComponent: string
  readonly versionBuildComponent: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'component',
  `arn:${string}:imagebuilder:${string}:${string}:component/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  readonly versionComponent: string
  readonly versionBuildComponent: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameComponent = parameters.nameComponent
    this.versionComponent = parameters.versionComponent
    this.versionBuildComponent = parameters.versionBuildComponent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:component/${this.nameComponent}/${this.versionComponent}/${this.versionBuildComponent}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentArnParameters<Partition>,
) {
  return new ComponentArn<Partition>(parameters)
}

export interface VersionComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  readonly versionComponent: string
}
class VersionComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'componentVersion',
  `arn:${string}:imagebuilder:${string}:${string}:component/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'componentVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  readonly versionComponent: string
  constructor(parameters: VersionComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameComponent = parameters.nameComponent
    this.versionComponent = parameters.versionComponent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:component/${this.nameComponent}/${this.versionComponent}` as const
  }
}
export type { VersionComponentArn }
export function versionComponentArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionComponentArnParameters<Partition>,
) {
  return new VersionComponentArn<Partition>(parameters)
}

export interface ConfigurationDistributionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationDistribution: string
}
class ConfigurationDistributionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'distributionConfiguration',
  `arn:${string}:imagebuilder:${string}:${string}:distribution-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'distributionConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationDistribution: string
  constructor(parameters: ConfigurationDistributionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationDistribution =
      parameters.nameConfigurationDistribution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:distribution-configuration/${this.nameConfigurationDistribution}` as const
  }
}
export type { ConfigurationDistributionArn }
export function configurationDistributionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationDistributionArnParameters<Partition>) {
  return new ConfigurationDistributionArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  readonly versionImage: string
  readonly versionBuildImage: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:imagebuilder:${string}:${string}:image/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  readonly versionImage: string
  readonly versionBuildImage: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameImage = parameters.nameImage
    this.versionImage = parameters.versionImage
    this.versionBuildImage = parameters.versionBuildImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image/${this.nameImage}/${this.versionImage}/${this.versionBuildImage}` as const
  }
}
export type { ImageArn }
export function imageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageArnParameters<Partition>,
) {
  return new ImageArn<Partition>(parameters)
}

export interface VersionImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  readonly versionImage: string
}
class VersionImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imageVersion',
  `arn:${string}:imagebuilder:${string}:${string}:image/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imageVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  readonly versionImage: string
  constructor(parameters: VersionImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameImage = parameters.nameImage
    this.versionImage = parameters.versionImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image/${this.nameImage}/${this.versionImage}` as const
  }
}
export type { VersionImageArn }
export function versionImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionImageArnParameters<Partition>,
) {
  return new VersionImageArn<Partition>(parameters)
}

export interface RecipeImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRecipeImage: string
  readonly versionRecipeImage: string
}
class RecipeImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imageRecipe',
  `arn:${string}:imagebuilder:${string}:${string}:image-recipe/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imageRecipe' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRecipeImage: string
  readonly versionRecipeImage: string
  constructor(parameters: RecipeImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRecipeImage = parameters.nameRecipeImage
    this.versionRecipeImage = parameters.versionRecipeImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image-recipe/${this.nameRecipeImage}/${this.versionRecipeImage}` as const
  }
}
export type { RecipeImageArn }
export function recipeImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecipeImageArnParameters<Partition>,
) {
  return new RecipeImageArn<Partition>(parameters)
}

export interface RecipeContainerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRecipeContainer: string
  readonly versionRecipeContainer: string
}
class RecipeContainerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'containerRecipe',
  `arn:${string}:imagebuilder:${string}:${string}:container-recipe/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'containerRecipe' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRecipeContainer: string
  readonly versionRecipeContainer: string
  constructor(parameters: RecipeContainerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRecipeContainer = parameters.nameRecipeContainer
    this.versionRecipeContainer = parameters.versionRecipeContainer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:container-recipe/${this.nameRecipeContainer}/${this.versionRecipeContainer}` as const
  }
}
export type { RecipeContainerArn }
export function recipeContainerArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecipeContainerArnParameters<Partition>,
) {
  return new RecipeContainerArn<Partition>(parameters)
}

export interface PipelineImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipelineImage: string
}
class PipelineImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imagePipeline',
  `arn:${string}:imagebuilder:${string}:${string}:image-pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imagePipeline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipelineImage: string
  constructor(parameters: PipelineImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipelineImage = parameters.namePipelineImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image-pipeline/${this.namePipelineImage}` as const
  }
}
export type { PipelineImageArn }
export function pipelineImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineImageArnParameters<Partition>,
) {
  return new PipelineImageArn<Partition>(parameters)
}

export interface ConfigurationInfrastructureArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationInfrastructureArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'infrastructureConfiguration',
  `arn:${string}:imagebuilder:${string}:${string}:infrastructure-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'infrastructureConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationInfrastructureArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:infrastructure-configuration/${this.idResource}` as const
  }
}
export type { ConfigurationInfrastructureArn }
export function configurationInfrastructureArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationInfrastructureArnParameters<Partition>) {
  return new ConfigurationInfrastructureArn<Partition>(parameters)
}

export interface KeyKmsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idKey: string
}
class KeyKmsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kmsKey',
  `arn:${string}:kms:${string}:${string}:key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kmsKey' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idKey: string
  constructor(parameters: KeyKmsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idKey = parameters.idKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kms:${this.region}:${this.account}:key/${this.idKey}` as const
  }
}
export type { KeyKmsArn }
export function keyKmsArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyKmsArnParameters<Partition>,
) {
  return new KeyKmsArn<Partition>(parameters)
}

export interface ExecutionLifecycleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionLifecycle: string
}
class ExecutionLifecycleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'lifecycleExecution',
  `arn:${string}:imagebuilder:${string}:${string}:lifecycle-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lifecycleExecution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionLifecycle: string
  constructor(parameters: ExecutionLifecycleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExecutionLifecycle = parameters.idExecutionLifecycle
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:lifecycle-execution/${this.idExecutionLifecycle}` as const
  }
}
export type { ExecutionLifecycleArn }
export function executionLifecycleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionLifecycleArnParameters<Partition>,
) {
  return new ExecutionLifecycleArn<Partition>(parameters)
}

export interface PolicyLifecycleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePolicyLifecycle: string
}
class PolicyLifecycleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'lifecyclePolicy',
  `arn:${string}:imagebuilder:${string}:${string}:lifecycle-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lifecyclePolicy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePolicyLifecycle: string
  constructor(parameters: PolicyLifecycleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePolicyLifecycle = parameters.namePolicyLifecycle
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:lifecycle-policy/${this.namePolicyLifecycle}` as const
  }
}
export type { PolicyLifecycleArn }
export function policyLifecycleArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyLifecycleArnParameters<Partition>,
) {
  return new PolicyLifecycleArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeWorkflow: string
  readonly nameWorkflow: string
  readonly versionWorkflow: string
  readonly versionBuildWorkflow: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workflow',
  `arn:${string}:imagebuilder:${string}:${string}:workflow/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeWorkflow: string
  readonly nameWorkflow: string
  readonly versionWorkflow: string
  readonly versionBuildWorkflow: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeWorkflow = parameters.typeWorkflow
    this.nameWorkflow = parameters.nameWorkflow
    this.versionWorkflow = parameters.versionWorkflow
    this.versionBuildWorkflow = parameters.versionBuildWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow/${this.typeWorkflow}/${this.nameWorkflow}/${this.versionWorkflow}/${this.versionBuildWorkflow}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowArnParameters<Partition>,
) {
  return new WorkflowArn<Partition>(parameters)
}

export interface VersionWorkflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeWorkflow: string
  readonly nameWorkflow: string
  readonly versionWorkflow: string
}
class VersionWorkflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workflowVersion',
  `arn:${string}:imagebuilder:${string}:${string}:workflow/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflowVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeWorkflow: string
  readonly nameWorkflow: string
  readonly versionWorkflow: string
  constructor(parameters: VersionWorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeWorkflow = parameters.typeWorkflow
    this.nameWorkflow = parameters.nameWorkflow
    this.versionWorkflow = parameters.versionWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow/${this.typeWorkflow}/${this.nameWorkflow}/${this.versionWorkflow}` as const
  }
}
export type { VersionWorkflowArn }
export function versionWorkflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionWorkflowArnParameters<Partition>,
) {
  return new VersionWorkflowArn<Partition>(parameters)
}

export interface ExecutionWorkflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionWorkflow: string
}
class ExecutionWorkflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workflowExecution',
  `arn:${string}:imagebuilder:${string}:${string}:workflow-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflowExecution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionWorkflow: string
  constructor(parameters: ExecutionWorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExecutionWorkflow = parameters.idExecutionWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow-execution/${this.idExecutionWorkflow}` as const
  }
}
export type { ExecutionWorkflowArn }
export function executionWorkflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionWorkflowArnParameters<Partition>,
) {
  return new ExecutionWorkflowArn<Partition>(parameters)
}

export interface ExecutionStepWorkflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionStepWorkflow: string
}
class ExecutionStepWorkflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workflowStepExecution',
  `arn:${string}:imagebuilder:${string}:${string}:workflow-step-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflowStepExecution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionStepWorkflow: string
  constructor(parameters: ExecutionStepWorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExecutionStepWorkflow = parameters.idExecutionStepWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow-step-execution/${this.idExecutionStepWorkflow}` as const
  }
}
export type { ExecutionStepWorkflowArn }
export function executionStepWorkflowArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ExecutionStepWorkflowArnParameters<Partition>) {
  return new ExecutionStepWorkflowArn<Partition>(parameters)
}
