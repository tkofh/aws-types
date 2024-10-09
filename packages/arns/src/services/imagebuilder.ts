export interface ComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  componentName: string
  componentVersion: string
  componentBuildVersion: string
}
export type ComponentArn = `arn:${string}:imagebuilder:${string}:${string}:component/${string}/${string}/${string}`
export function componentArn(parameters: ComponentArnParameters): ComponentArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:component/${parameters.componentName}/${parameters.componentVersion}/${parameters.componentBuildVersion}`
}

export interface ComponentVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  componentName: string
  componentVersion: string
}
export type ComponentVersionArn = `arn:${string}:imagebuilder:${string}:${string}:component/${string}/${string}`
export function componentVersionArn(parameters: ComponentVersionArnParameters): ComponentVersionArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:component/${parameters.componentName}/${parameters.componentVersion}`
}

export interface DistributionConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  distributionConfigurationName: string
}
export type DistributionConfigurationArn = `arn:${string}:imagebuilder:${string}:${string}:distribution-configuration/${string}`
export function distributionConfigurationArn(parameters: DistributionConfigurationArnParameters): DistributionConfigurationArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:distribution-configuration/${parameters.distributionConfigurationName}`
}

export interface ImageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageName: string
  imageVersion: string
  imageBuildVersion: string
}
export type ImageArn = `arn:${string}:imagebuilder:${string}:${string}:image/${string}/${string}/${string}`
export function imageArn(parameters: ImageArnParameters): ImageArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:image/${parameters.imageName}/${parameters.imageVersion}/${parameters.imageBuildVersion}`
}

export interface ImageVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageName: string
  imageVersion: string
}
export type ImageVersionArn = `arn:${string}:imagebuilder:${string}:${string}:image/${string}/${string}`
export function imageVersionArn(parameters: ImageVersionArnParameters): ImageVersionArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:image/${parameters.imageName}/${parameters.imageVersion}`
}

export interface ImageRecipeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageRecipeName: string
  imageRecipeVersion: string
}
export type ImageRecipeArn = `arn:${string}:imagebuilder:${string}:${string}:image-recipe/${string}/${string}`
export function imageRecipeArn(parameters: ImageRecipeArnParameters): ImageRecipeArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:image-recipe/${parameters.imageRecipeName}/${parameters.imageRecipeVersion}`
}

export interface ContainerRecipeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  containerRecipeName: string
  containerRecipeVersion: string
}
export type ContainerRecipeArn = `arn:${string}:imagebuilder:${string}:${string}:container-recipe/${string}/${string}`
export function containerRecipeArn(parameters: ContainerRecipeArnParameters): ContainerRecipeArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:container-recipe/${parameters.containerRecipeName}/${parameters.containerRecipeVersion}`
}

export interface ImagePipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imagePipelineName: string
}
export type ImagePipelineArn = `arn:${string}:imagebuilder:${string}:${string}:image-pipeline/${string}`
export function imagePipelineArn(parameters: ImagePipelineArnParameters): ImagePipelineArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:image-pipeline/${parameters.imagePipelineName}`
}

export interface InfrastructureConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type InfrastructureConfigurationArn = `arn:${string}:imagebuilder:${string}:${string}:infrastructure-configuration/${string}`
export function infrastructureConfigurationArn(parameters: InfrastructureConfigurationArnParameters): InfrastructureConfigurationArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:infrastructure-configuration/${parameters.resourceId}`
}

export interface KmsKeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyId: string
}
export type KmsKeyArn = `arn:${string}:kms:${string}:${string}:key/${string}`
export function kmsKeyArn(parameters: KmsKeyArnParameters): KmsKeyArn {
  return `arn:${parameters.partition ?? ''}:kms:${parameters.region}:${parameters.account}:key/${parameters.keyId}`
}

export interface LifecycleExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  lifecycleExecutionId: string
}
export type LifecycleExecutionArn = `arn:${string}:imagebuilder:${string}:${string}:lifecycle-execution/${string}`
export function lifecycleExecutionArn(parameters: LifecycleExecutionArnParameters): LifecycleExecutionArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:lifecycle-execution/${parameters.lifecycleExecutionId}`
}

export interface LifecyclePolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  lifecyclePolicyName: string
}
export type LifecyclePolicyArn = `arn:${string}:imagebuilder:${string}:${string}:lifecycle-policy/${string}`
export function lifecyclePolicyArn(parameters: LifecyclePolicyArnParameters): LifecyclePolicyArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:lifecycle-policy/${parameters.lifecyclePolicyName}`
}

export interface WorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowType: string
  workflowName: string
  workflowVersion: string
  workflowBuildVersion: string
}
export type WorkflowArn = `arn:${string}:imagebuilder:${string}:${string}:workflow/${string}/${string}/${string}/${string}`
export function workflowArn(parameters: WorkflowArnParameters): WorkflowArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:workflow/${parameters.workflowType}/${parameters.workflowName}/${parameters.workflowVersion}/${parameters.workflowBuildVersion}`
}

export interface WorkflowVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowType: string
  workflowName: string
  workflowVersion: string
}
export type WorkflowVersionArn = `arn:${string}:imagebuilder:${string}:${string}:workflow/${string}/${string}/${string}`
export function workflowVersionArn(parameters: WorkflowVersionArnParameters): WorkflowVersionArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:workflow/${parameters.workflowType}/${parameters.workflowName}/${parameters.workflowVersion}`
}

export interface WorkflowExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowExecutionId: string
}
export type WorkflowExecutionArn = `arn:${string}:imagebuilder:${string}:${string}:workflow-execution/${string}`
export function workflowExecutionArn(parameters: WorkflowExecutionArnParameters): WorkflowExecutionArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:workflow-execution/${parameters.workflowExecutionId}`
}

export interface WorkflowStepExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowStepExecutionId: string
}
export type WorkflowStepExecutionArn = `arn:${string}:imagebuilder:${string}:${string}:workflow-step-execution/${string}`
export function workflowStepExecutionArn(parameters: WorkflowStepExecutionArnParameters): WorkflowStepExecutionArn {
  return `arn:${parameters.partition ?? ''}:imagebuilder:${parameters.region}:${parameters.account}:workflow-step-execution/${parameters.workflowStepExecutionId}`
}