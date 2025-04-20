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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  readonly componentVersion: string
  readonly componentBuildVersion: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'component',
  `arn:${string}:imagebuilder:${string}:${string}:component/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  readonly componentVersion: string
  readonly componentBuildVersion: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.componentName = parameters.componentName
    this.componentVersion = parameters.componentVersion
    this.componentBuildVersion = parameters.componentBuildVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:component/${this.componentName}/${this.componentVersion}/${this.componentBuildVersion}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentArnParameters<Partition>,
) {
  return new ComponentArn<Partition>(parameters)
}

export interface ComponentVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  readonly componentVersion: string
}
class ComponentVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'componentVersion',
  `arn:${string}:imagebuilder:${string}:${string}:component/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'componentVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  readonly componentVersion: string
  constructor(parameters: ComponentVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.componentName = parameters.componentName
    this.componentVersion = parameters.componentVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:component/${this.componentName}/${this.componentVersion}` as const
  }
}
export type { ComponentVersionArn }
export function componentVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentVersionArnParameters<Partition>,
) {
  return new ComponentVersionArn<Partition>(parameters)
}

export interface DistributionConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly distributionConfigurationName: string
}
class DistributionConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'distributionConfiguration',
  `arn:${string}:imagebuilder:${string}:${string}:distribution-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'distributionConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly distributionConfigurationName: string
  constructor(parameters: DistributionConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.distributionConfigurationName =
      parameters.distributionConfigurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:distribution-configuration/${this.distributionConfigurationName}` as const
  }
}
export type { DistributionConfigurationArn }
export function distributionConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DistributionConfigurationArnParameters<Partition>) {
  return new DistributionConfigurationArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  readonly imageVersion: string
  readonly imageBuildVersion: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:imagebuilder:${string}:${string}:image/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  readonly imageVersion: string
  readonly imageBuildVersion: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageName = parameters.imageName
    this.imageVersion = parameters.imageVersion
    this.imageBuildVersion = parameters.imageBuildVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image/${this.imageName}/${this.imageVersion}/${this.imageBuildVersion}` as const
  }
}
export type { ImageArn }
export function imageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageArnParameters<Partition>,
) {
  return new ImageArn<Partition>(parameters)
}

export interface ImageVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  readonly imageVersion: string
}
class ImageVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imageVersion',
  `arn:${string}:imagebuilder:${string}:${string}:image/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imageVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  readonly imageVersion: string
  constructor(parameters: ImageVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageName = parameters.imageName
    this.imageVersion = parameters.imageVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image/${this.imageName}/${this.imageVersion}` as const
  }
}
export type { ImageVersionArn }
export function imageVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageVersionArnParameters<Partition>,
) {
  return new ImageVersionArn<Partition>(parameters)
}

export interface ImageRecipeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageRecipeName: string
  readonly imageRecipeVersion: string
}
class ImageRecipeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imageRecipe',
  `arn:${string}:imagebuilder:${string}:${string}:image-recipe/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imageRecipe' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageRecipeName: string
  readonly imageRecipeVersion: string
  constructor(parameters: ImageRecipeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageRecipeName = parameters.imageRecipeName
    this.imageRecipeVersion = parameters.imageRecipeVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image-recipe/${this.imageRecipeName}/${this.imageRecipeVersion}` as const
  }
}
export type { ImageRecipeArn }
export function imageRecipeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageRecipeArnParameters<Partition>,
) {
  return new ImageRecipeArn<Partition>(parameters)
}

export interface ContainerRecipeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerRecipeName: string
  readonly containerRecipeVersion: string
}
class ContainerRecipeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'containerRecipe',
  `arn:${string}:imagebuilder:${string}:${string}:container-recipe/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'containerRecipe' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerRecipeName: string
  readonly containerRecipeVersion: string
  constructor(parameters: ContainerRecipeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.containerRecipeName = parameters.containerRecipeName
    this.containerRecipeVersion = parameters.containerRecipeVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:container-recipe/${this.containerRecipeName}/${this.containerRecipeVersion}` as const
  }
}
export type { ContainerRecipeArn }
export function containerRecipeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContainerRecipeArnParameters<Partition>,
) {
  return new ContainerRecipeArn<Partition>(parameters)
}

export interface ImagePipelineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imagePipelineName: string
}
class ImagePipelineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'imagePipeline',
  `arn:${string}:imagebuilder:${string}:${string}:image-pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imagePipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imagePipelineName: string
  constructor(parameters: ImagePipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imagePipelineName = parameters.imagePipelineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:image-pipeline/${this.imagePipelineName}` as const
  }
}
export type { ImagePipelineArn }
export function imagePipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImagePipelineArnParameters<Partition>,
) {
  return new ImagePipelineArn<Partition>(parameters)
}

export interface InfrastructureConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class InfrastructureConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'infrastructureConfiguration',
  `arn:${string}:imagebuilder:${string}:${string}:infrastructure-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'infrastructureConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: InfrastructureConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:infrastructure-configuration/${this.resourceId}` as const
  }
}
export type { InfrastructureConfigurationArn }
export function infrastructureConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InfrastructureConfigurationArnParameters<Partition>) {
  return new InfrastructureConfigurationArn<Partition>(parameters)
}

export interface KmsKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyId: string
}
class KmsKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kmsKey',
  `arn:${string}:kms:${string}:${string}:key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kmsKey' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyId: string
  constructor(parameters: KmsKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keyId = parameters.keyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kms:${this.region}:${this.account}:key/${this.keyId}` as const
  }
}
export type { KmsKeyArn }
export function kmsKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: KmsKeyArnParameters<Partition>,
) {
  return new KmsKeyArn<Partition>(parameters)
}

export interface LifecycleExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lifecycleExecutionId: string
}
class LifecycleExecutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'lifecycleExecution',
  `arn:${string}:imagebuilder:${string}:${string}:lifecycle-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lifecycleExecution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lifecycleExecutionId: string
  constructor(parameters: LifecycleExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.lifecycleExecutionId = parameters.lifecycleExecutionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:lifecycle-execution/${this.lifecycleExecutionId}` as const
  }
}
export type { LifecycleExecutionArn }
export function lifecycleExecutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: LifecycleExecutionArnParameters<Partition>,
) {
  return new LifecycleExecutionArn<Partition>(parameters)
}

export interface LifecyclePolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lifecyclePolicyName: string
}
class LifecyclePolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'lifecyclePolicy',
  `arn:${string}:imagebuilder:${string}:${string}:lifecycle-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lifecyclePolicy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lifecyclePolicyName: string
  constructor(parameters: LifecyclePolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.lifecyclePolicyName = parameters.lifecyclePolicyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:lifecycle-policy/${this.lifecyclePolicyName}` as const
  }
}
export type { LifecyclePolicyArn }
export function lifecyclePolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: LifecyclePolicyArnParameters<Partition>,
) {
  return new LifecyclePolicyArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowType: string
  readonly workflowName: string
  readonly workflowVersion: string
  readonly workflowBuildVersion: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workflow',
  `arn:${string}:imagebuilder:${string}:${string}:workflow/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowType: string
  readonly workflowName: string
  readonly workflowVersion: string
  readonly workflowBuildVersion: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowType = parameters.workflowType
    this.workflowName = parameters.workflowName
    this.workflowVersion = parameters.workflowVersion
    this.workflowBuildVersion = parameters.workflowBuildVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow/${this.workflowType}/${this.workflowName}/${this.workflowVersion}/${this.workflowBuildVersion}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowArnParameters<Partition>,
) {
  return new WorkflowArn<Partition>(parameters)
}

export interface WorkflowVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowType: string
  readonly workflowName: string
  readonly workflowVersion: string
}
class WorkflowVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workflowVersion',
  `arn:${string}:imagebuilder:${string}:${string}:workflow/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflowVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowType: string
  readonly workflowName: string
  readonly workflowVersion: string
  constructor(parameters: WorkflowVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowType = parameters.workflowType
    this.workflowName = parameters.workflowName
    this.workflowVersion = parameters.workflowVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow/${this.workflowType}/${this.workflowName}/${this.workflowVersion}` as const
  }
}
export type { WorkflowVersionArn }
export function workflowVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowVersionArnParameters<Partition>,
) {
  return new WorkflowVersionArn<Partition>(parameters)
}

export interface WorkflowExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowExecutionId: string
}
class WorkflowExecutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workflowExecution',
  `arn:${string}:imagebuilder:${string}:${string}:workflow-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflowExecution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowExecutionId: string
  constructor(parameters: WorkflowExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowExecutionId = parameters.workflowExecutionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow-execution/${this.workflowExecutionId}` as const
  }
}
export type { WorkflowExecutionArn }
export function workflowExecutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowExecutionArnParameters<Partition>,
) {
  return new WorkflowExecutionArn<Partition>(parameters)
}

export interface WorkflowStepExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowStepExecutionId: string
}
class WorkflowStepExecutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workflowStepExecution',
  `arn:${string}:imagebuilder:${string}:${string}:workflow-step-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflowStepExecution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowStepExecutionId: string
  constructor(parameters: WorkflowStepExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowStepExecutionId = parameters.workflowStepExecutionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:imagebuilder:${this.region}:${this.account}:workflow-step-execution/${this.workflowStepExecutionId}` as const
  }
}
export type { WorkflowStepExecutionArn }
export function workflowStepExecutionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: WorkflowStepExecutionArnParameters<Partition>) {
  return new WorkflowStepExecutionArn<Partition>(parameters)
}
