import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceFleetName: string
  readonly deviceName: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:sagemaker:${string}:${string}:device-fleet/${string}/device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceFleetName: string
  readonly deviceName: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceFleetName = parameters.deviceFleetName
    this.deviceName = parameters.deviceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:device-fleet/${this.deviceFleetName}/device/${this.deviceName}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface DeviceFleetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceFleetName: string
}
class DeviceFleetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'device-fleet',
  `arn:${string}:sagemaker:${string}:${string}:device-fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device-fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceFleetName: string
  constructor(parameters: DeviceFleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceFleetName = parameters.deviceFleetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:device-fleet/${this.deviceFleetName}` as const
  }
}
export type { DeviceFleetArn }
export function deviceFleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceFleetArnParameters<Partition>,
) {
  return new DeviceFleetArn<Partition>(parameters)
}

export interface EdgePackagingJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly edgePackagingJobName: string
}
class EdgePackagingJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'edge-packaging-job',
  `arn:${string}:sagemaker:${string}:${string}:edge-packaging-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'edge-packaging-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly edgePackagingJobName: string
  constructor(parameters: EdgePackagingJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.edgePackagingJobName = parameters.edgePackagingJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:edge-packaging-job/${this.edgePackagingJobName}` as const
  }
}
export type { EdgePackagingJobArn }
export function edgePackagingJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: EdgePackagingJobArnParameters<Partition>,
) {
  return new EdgePackagingJobArn<Partition>(parameters)
}

export interface EdgeDeploymentPlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly edgeDeploymentPlanName: string
}
class EdgeDeploymentPlanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'edge-deployment-plan',
  `arn:${string}:sagemaker:${string}:${string}:edge-deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'edge-deployment-plan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly edgeDeploymentPlanName: string
  constructor(parameters: EdgeDeploymentPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.edgeDeploymentPlanName = parameters.edgeDeploymentPlanName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:edge-deployment/${this.edgeDeploymentPlanName}` as const
  }
}
export type { EdgeDeploymentPlanArn }
export function edgeDeploymentPlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: EdgeDeploymentPlanArnParameters<Partition>,
) {
  return new EdgeDeploymentPlanArn<Partition>(parameters)
}

export interface HumanLoopArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly humanLoopName: string
}
class HumanLoopArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'human-loop',
  `arn:${string}:sagemaker:${string}:${string}:human-loop/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'human-loop' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly humanLoopName: string
  constructor(parameters: HumanLoopArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.humanLoopName = parameters.humanLoopName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:human-loop/${this.humanLoopName}` as const
  }
}
export type { HumanLoopArn }
export function humanLoopArn<Partition extends ArnPartition = 'aws'>(
  parameters: HumanLoopArnParameters<Partition>,
) {
  return new HumanLoopArn<Partition>(parameters)
}

export interface FlowDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowDefinitionName: string
}
class FlowDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'flow-definition',
  `arn:${string}:sagemaker:${string}:${string}:flow-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flow-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flowDefinitionName: string
  constructor(parameters: FlowDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flowDefinitionName = parameters.flowDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:flow-definition/${this.flowDefinitionName}` as const
  }
}
export type { FlowDefinitionArn }
export function flowDefinitionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowDefinitionArnParameters<Partition>,
) {
  return new FlowDefinitionArn<Partition>(parameters)
}

export interface HumanTaskUiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly humanTaskUiName: string
}
class HumanTaskUiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'human-task-ui',
  `arn:${string}:sagemaker:${string}:${string}:human-task-ui/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'human-task-ui' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly humanTaskUiName: string
  constructor(parameters: HumanTaskUiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.humanTaskUiName = parameters.humanTaskUiName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:human-task-ui/${this.humanTaskUiName}` as const
  }
}
export type { HumanTaskUiArn }
export function humanTaskUiArn<Partition extends ArnPartition = 'aws'>(
  parameters: HumanTaskUiArnParameters<Partition>,
) {
  return new HumanTaskUiArn<Partition>(parameters)
}

export interface HubArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hubName: string
}
class HubArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hub',
  `arn:${string}:sagemaker:${string}:${string}:hub/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hub' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hubName: string
  constructor(parameters: HubArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hubName = parameters.hubName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:hub/${this.hubName}` as const
  }
}
export type { HubArn }
export function hubArn<Partition extends ArnPartition = 'aws'>(
  parameters: HubArnParameters<Partition>,
) {
  return new HubArn<Partition>(parameters)
}

export interface HubContentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hubName: string
  readonly hubContentType: string
  readonly hubContentName: string
}
class HubContentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hub-content',
  `arn:${string}:sagemaker:${string}:${string}:hub-content/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hub-content' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hubName: string
  readonly hubContentType: string
  readonly hubContentName: string
  constructor(parameters: HubContentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hubName = parameters.hubName
    this.hubContentType = parameters.hubContentType
    this.hubContentName = parameters.hubContentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:hub-content/${this.hubName}/${this.hubContentType}/${this.hubContentName}` as const
  }
}
export type { HubContentArn }
export function hubContentArn<Partition extends ArnPartition = 'aws'>(
  parameters: HubContentArnParameters<Partition>,
) {
  return new HubContentArn<Partition>(parameters)
}

export interface InferenceRecommendationsJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceRecommendationsJobName: string
}
class InferenceRecommendationsJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-recommendations-job',
  `arn:${string}:sagemaker:${string}:${string}:inference-recommendations-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-recommendations-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceRecommendationsJobName: string
  constructor(parameters: InferenceRecommendationsJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inferenceRecommendationsJobName =
      parameters.inferenceRecommendationsJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:inference-recommendations-job/${this.inferenceRecommendationsJobName}` as const
  }
}
export type { InferenceRecommendationsJobArn }
export function inferenceRecommendationsJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InferenceRecommendationsJobArnParameters<Partition>) {
  return new InferenceRecommendationsJobArn<Partition>(parameters)
}

export interface InferenceExperimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceExperimentName: string
}
class InferenceExperimentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-experiment',
  `arn:${string}:sagemaker:${string}:${string}:inference-experiment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-experiment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceExperimentName: string
  constructor(parameters: InferenceExperimentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inferenceExperimentName = parameters.inferenceExperimentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:inference-experiment/${this.inferenceExperimentName}` as const
  }
}
export type { InferenceExperimentArn }
export function inferenceExperimentArn<Partition extends ArnPartition = 'aws'>(
  parameters: InferenceExperimentArnParameters<Partition>,
) {
  return new InferenceExperimentArn<Partition>(parameters)
}

export interface LabelingJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly labelingJobName: string
}
class LabelingJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'labeling-job',
  `arn:${string}:sagemaker:${string}:${string}:labeling-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'labeling-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly labelingJobName: string
  constructor(parameters: LabelingJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.labelingJobName = parameters.labelingJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:labeling-job/${this.labelingJobName}` as const
  }
}
export type { LabelingJobArn }
export function labelingJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: LabelingJobArnParameters<Partition>,
) {
  return new LabelingJobArn<Partition>(parameters)
}

export interface WorkTeamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workTeamName: string
}
class WorkTeamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workteam',
  `arn:${string}:sagemaker:${string}:${string}:workteam/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workteam' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workTeamName: string
  constructor(parameters: WorkTeamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workTeamName = parameters.workTeamName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:workteam/${this.workTeamName}` as const
  }
}
export type { WorkTeamArn }
export function workTeamArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkTeamArnParameters<Partition>,
) {
  return new WorkTeamArn<Partition>(parameters)
}

export interface WorkforceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workforceName: string
}
class WorkforceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workforce',
  `arn:${string}:sagemaker:${string}:${string}:workforce/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workforce' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workforceName: string
  constructor(parameters: WorkforceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workforceName = parameters.workforceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:workforce/${this.workforceName}` as const
  }
}
export type { WorkforceArn }
export function workforceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkforceArnParameters<Partition>,
) {
  return new WorkforceArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:sagemaker:${string}:${string}:domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:domain/${this.domainId}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface UserProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly userProfileName: string
}
class UserProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'user-profile',
  `arn:${string}:sagemaker:${string}:${string}:user-profile/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly userProfileName: string
  constructor(parameters: UserProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.userProfileName = parameters.userProfileName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:user-profile/${this.domainId}/${this.userProfileName}` as const
  }
}
export type { UserProfileArn }
export function userProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserProfileArnParameters<Partition>,
) {
  return new UserProfileArn<Partition>(parameters)
}

export interface SpaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly spaceName: string
}
class SpaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'space',
  `arn:${string}:sagemaker:${string}:${string}:space/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'space' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly spaceName: string
  constructor(parameters: SpaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.spaceName = parameters.spaceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:space/${this.domainId}/${this.spaceName}` as const
  }
}
export type { SpaceArn }
export function spaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpaceArnParameters<Partition>,
) {
  return new SpaceArn<Partition>(parameters)
}

export interface AppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly userProfileName: string
  readonly appType: string
  readonly appName: string
}
class AppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'app',
  `arn:${string}:sagemaker:${string}:${string}:app/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly userProfileName: string
  readonly appType: string
  readonly appName: string
  constructor(parameters: AppArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.userProfileName = parameters.userProfileName
    this.appType = parameters.appType
    this.appName = parameters.appName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:app/${this.domainId}/${this.userProfileName}/${this.appType}/${this.appName}` as const
  }
}
export type { AppArn }
export function appArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppArnParameters<Partition>,
) {
  return new AppArn<Partition>(parameters)
}

export interface AppImageConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appImageConfigName: string
}
class AppImageConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-image-config',
  `arn:${string}:sagemaker:${string}:${string}:app-image-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-image-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appImageConfigName: string
  constructor(parameters: AppImageConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appImageConfigName = parameters.appImageConfigName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:app-image-config/${this.appImageConfigName}` as const
  }
}
export type { AppImageConfigArn }
export function appImageConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppImageConfigArnParameters<Partition>,
) {
  return new AppImageConfigArn<Partition>(parameters)
}

export interface StudioLifecycleConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioLifecycleConfigName: string
}
class StudioLifecycleConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'studio-lifecycle-config',
  `arn:${string}:sagemaker:${string}:${string}:studio-lifecycle-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio-lifecycle-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioLifecycleConfigName: string
  constructor(parameters: StudioLifecycleConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.studioLifecycleConfigName = parameters.studioLifecycleConfigName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:studio-lifecycle-config/${this.studioLifecycleConfigName}` as const
  }
}
export type { StudioLifecycleConfigArn }
export function studioLifecycleConfigArn<
  Partition extends ArnPartition = 'aws',
>(parameters: StudioLifecycleConfigArnParameters<Partition>) {
  return new StudioLifecycleConfigArn<Partition>(parameters)
}

export interface NotebookInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notebookInstanceName: string
}
class NotebookInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notebook-instance',
  `arn:${string}:sagemaker:${string}:${string}:notebook-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'notebook-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notebookInstanceName: string
  constructor(parameters: NotebookInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.notebookInstanceName = parameters.notebookInstanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:notebook-instance/${this.notebookInstanceName}` as const
  }
}
export type { NotebookInstanceArn }
export function notebookInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NotebookInstanceArnParameters<Partition>,
) {
  return new NotebookInstanceArn<Partition>(parameters)
}

export interface NotebookInstanceLifecycleConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notebookInstanceLifecycleConfigName: string
}
class NotebookInstanceLifecycleConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notebook-instance-lifecycle-config',
  `arn:${string}:sagemaker:${string}:${string}:notebook-instance-lifecycle-config/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'notebook-instance-lifecycle-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notebookInstanceLifecycleConfigName: string
  constructor(
    parameters: NotebookInstanceLifecycleConfigArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.notebookInstanceLifecycleConfigName =
      parameters.notebookInstanceLifecycleConfigName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:notebook-instance-lifecycle-config/${this.notebookInstanceLifecycleConfigName}` as const
  }
}
export type { NotebookInstanceLifecycleConfigArn }
export function notebookInstanceLifecycleConfigArn<
  Partition extends ArnPartition = 'aws',
>(parameters: NotebookInstanceLifecycleConfigArnParameters<Partition>) {
  return new NotebookInstanceLifecycleConfigArn<Partition>(parameters)
}

export interface CodeRepositoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly codeRepositoryName: string
}
class CodeRepositoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'code-repository',
  `arn:${string}:sagemaker:${string}:${string}:code-repository/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'code-repository' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly codeRepositoryName: string
  constructor(parameters: CodeRepositoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.codeRepositoryName = parameters.codeRepositoryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:code-repository/${this.codeRepositoryName}` as const
  }
}
export type { CodeRepositoryArn }
export function codeRepositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: CodeRepositoryArnParameters<Partition>,
) {
  return new CodeRepositoryArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:sagemaker:${string}:${string}:image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageName = parameters.imageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:image/${this.imageName}` as const
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
  readonly version: string
}
class ImageVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'image-version',
  `arn:${string}:sagemaker:${string}:${string}:image-version/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  readonly version: string
  constructor(parameters: ImageVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageName = parameters.imageName
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:image-version/${this.imageName}/${this.version}` as const
  }
}
export type { ImageVersionArn }
export function imageVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageVersionArnParameters<Partition>,
) {
  return new ImageVersionArn<Partition>(parameters)
}

export interface AlgorithmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly algorithmName: string
}
class AlgorithmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'algorithm',
  `arn:${string}:sagemaker:${string}:${string}:algorithm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'algorithm' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly algorithmName: string
  constructor(parameters: AlgorithmArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.algorithmName = parameters.algorithmName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:algorithm/${this.algorithmName}` as const
  }
}
export type { AlgorithmArn }
export function algorithmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlgorithmArnParameters<Partition>,
) {
  return new AlgorithmArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:sagemaker:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterId = parameters.clusterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:cluster/${this.clusterId}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface TrainingJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trainingJobName: string
}
class TrainingJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'training-job',
  `arn:${string}:sagemaker:${string}:${string}:training-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'training-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trainingJobName: string
  constructor(parameters: TrainingJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trainingJobName = parameters.trainingJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:training-job/${this.trainingJobName}` as const
  }
}
export type { TrainingJobArn }
export function trainingJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrainingJobArnParameters<Partition>,
) {
  return new TrainingJobArn<Partition>(parameters)
}

export interface ProcessingJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly processingJobName: string
}
class ProcessingJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'processing-job',
  `arn:${string}:sagemaker:${string}:${string}:processing-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'processing-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly processingJobName: string
  constructor(parameters: ProcessingJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.processingJobName = parameters.processingJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:processing-job/${this.processingJobName}` as const
  }
}
export type { ProcessingJobArn }
export function processingJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProcessingJobArnParameters<Partition>,
) {
  return new ProcessingJobArn<Partition>(parameters)
}

export interface HyperParameterTuningJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hyperParameterTuningJobName: string
}
class HyperParameterTuningJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hyper-parameter-tuning-job',
  `arn:${string}:sagemaker:${string}:${string}:hyper-parameter-tuning-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hyper-parameter-tuning-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hyperParameterTuningJobName: string
  constructor(parameters: HyperParameterTuningJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hyperParameterTuningJobName = parameters.hyperParameterTuningJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:hyper-parameter-tuning-job/${this.hyperParameterTuningJobName}` as const
  }
}
export type { HyperParameterTuningJobArn }
export function hyperParameterTuningJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: HyperParameterTuningJobArnParameters<Partition>) {
  return new HyperParameterTuningJobArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:sagemaker:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:project/${this.projectName}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface ModelPackageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelPackageName: string
}
class ModelPackageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-package',
  `arn:${string}:sagemaker:${string}:${string}:model-package/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-package' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelPackageName: string
  constructor(parameters: ModelPackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelPackageName = parameters.modelPackageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-package/${this.modelPackageName}` as const
  }
}
export type { ModelPackageArn }
export function modelPackageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelPackageArnParameters<Partition>,
) {
  return new ModelPackageArn<Partition>(parameters)
}

export interface ModelPackageGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelPackageGroupName: string
}
class ModelPackageGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-package-group',
  `arn:${string}:sagemaker:${string}:${string}:model-package-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-package-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelPackageGroupName: string
  constructor(parameters: ModelPackageGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelPackageGroupName = parameters.modelPackageGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-package-group/${this.modelPackageGroupName}` as const
  }
}
export type { ModelPackageGroupArn }
export function modelPackageGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelPackageGroupArnParameters<Partition>,
) {
  return new ModelPackageGroupArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:sagemaker:${string}:${string}:model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelName = parameters.modelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model/${this.modelName}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface EndpointConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointConfigName: string
}
class EndpointConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'endpoint-config',
  `arn:${string}:sagemaker:${string}:${string}:endpoint-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointConfigName: string
  constructor(parameters: EndpointConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.endpointConfigName = parameters.endpointConfigName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:endpoint-config/${this.endpointConfigName}` as const
  }
}
export type { EndpointConfigArn }
export function endpointConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointConfigArnParameters<Partition>,
) {
  return new EndpointConfigArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointName: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:sagemaker:${string}:${string}:endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointName: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.endpointName = parameters.endpointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:endpoint/${this.endpointName}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface InferenceComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceComponentName: string
}
class InferenceComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-component',
  `arn:${string}:sagemaker:${string}:${string}:inference-component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceComponentName: string
  constructor(parameters: InferenceComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inferenceComponentName = parameters.inferenceComponentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:inference-component/${this.inferenceComponentName}` as const
  }
}
export type { InferenceComponentArn }
export function inferenceComponentArn<Partition extends ArnPartition = 'aws'>(
  parameters: InferenceComponentArnParameters<Partition>,
) {
  return new InferenceComponentArn<Partition>(parameters)
}

export interface TransformJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transformJobName: string
}
class TransformJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transform-job',
  `arn:${string}:sagemaker:${string}:${string}:transform-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transform-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transformJobName: string
  constructor(parameters: TransformJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transformJobName = parameters.transformJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:transform-job/${this.transformJobName}` as const
  }
}
export type { TransformJobArn }
export function transformJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TransformJobArnParameters<Partition>,
) {
  return new TransformJobArn<Partition>(parameters)
}

export interface CompilationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly compilationJobName: string
}
class CompilationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'compilation-job',
  `arn:${string}:sagemaker:${string}:${string}:compilation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'compilation-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly compilationJobName: string
  constructor(parameters: CompilationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.compilationJobName = parameters.compilationJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:compilation-job/${this.compilationJobName}` as const
  }
}
export type { CompilationJobArn }
export function compilationJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompilationJobArnParameters<Partition>,
) {
  return new CompilationJobArn<Partition>(parameters)
}

export interface OptimizationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly optimizationJobName: string
}
class OptimizationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'optimization-job',
  `arn:${string}:sagemaker:${string}:${string}:optimization-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'optimization-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly optimizationJobName: string
  constructor(parameters: OptimizationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.optimizationJobName = parameters.optimizationJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:optimization-job/${this.optimizationJobName}` as const
  }
}
export type { OptimizationJobArn }
export function optimizationJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: OptimizationJobArnParameters<Partition>,
) {
  return new OptimizationJobArn<Partition>(parameters)
}

export interface AutomlJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly autoMlJobJobName: string
}
class AutomlJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'automl-job',
  `arn:${string}:sagemaker:${string}:${string}:automl-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automl-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly autoMlJobJobName: string
  constructor(parameters: AutomlJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.autoMlJobJobName = parameters.autoMlJobJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:automl-job/${this.autoMlJobJobName}` as const
  }
}
export type { AutomlJobArn }
export function automlJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: AutomlJobArnParameters<Partition>,
) {
  return new AutomlJobArn<Partition>(parameters)
}

export interface MonitoringScheduleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitoringScheduleName: string
}
class MonitoringScheduleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'monitoring-schedule',
  `arn:${string}:sagemaker:${string}:${string}:monitoring-schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitoring-schedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitoringScheduleName: string
  constructor(parameters: MonitoringScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.monitoringScheduleName = parameters.monitoringScheduleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:monitoring-schedule/${this.monitoringScheduleName}` as const
  }
}
export type { MonitoringScheduleArn }
export function monitoringScheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitoringScheduleArnParameters<Partition>,
) {
  return new MonitoringScheduleArn<Partition>(parameters)
}

export interface MonitoringScheduleAlertArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitoringScheduleName: string
  readonly monitoringScheduleAlertName: string
}
class MonitoringScheduleAlertArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'monitoring-schedule-alert',
  `arn:${string}:sagemaker:${string}:${string}:monitoring-schedule/${string}/alert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitoring-schedule-alert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitoringScheduleName: string
  readonly monitoringScheduleAlertName: string
  constructor(parameters: MonitoringScheduleAlertArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.monitoringScheduleName = parameters.monitoringScheduleName
    this.monitoringScheduleAlertName = parameters.monitoringScheduleAlertName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:monitoring-schedule/${this.monitoringScheduleName}/alert/${this.monitoringScheduleAlertName}` as const
  }
}
export type { MonitoringScheduleAlertArn }
export function monitoringScheduleAlertArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MonitoringScheduleAlertArnParameters<Partition>) {
  return new MonitoringScheduleAlertArn<Partition>(parameters)
}

export interface DataQualityJobDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataQualityJobDefinitionName: string
}
class DataQualityJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'data-quality-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:data-quality-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-quality-job-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataQualityJobDefinitionName: string
  constructor(parameters: DataQualityJobDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataQualityJobDefinitionName = parameters.dataQualityJobDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:data-quality-job-definition/${this.dataQualityJobDefinitionName}` as const
  }
}
export type { DataQualityJobDefinitionArn }
export function dataQualityJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DataQualityJobDefinitionArnParameters<Partition>) {
  return new DataQualityJobDefinitionArn<Partition>(parameters)
}

export interface ModelQualityJobDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelQualityJobDefinitionName: string
}
class ModelQualityJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-quality-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:model-quality-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-quality-job-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelQualityJobDefinitionName: string
  constructor(parameters: ModelQualityJobDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelQualityJobDefinitionName =
      parameters.modelQualityJobDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-quality-job-definition/${this.modelQualityJobDefinitionName}` as const
  }
}
export type { ModelQualityJobDefinitionArn }
export function modelQualityJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ModelQualityJobDefinitionArnParameters<Partition>) {
  return new ModelQualityJobDefinitionArn<Partition>(parameters)
}

export interface ModelBiasJobDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelBiasJobDefinitionName: string
}
class ModelBiasJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-bias-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:model-bias-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-bias-job-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelBiasJobDefinitionName: string
  constructor(parameters: ModelBiasJobDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelBiasJobDefinitionName = parameters.modelBiasJobDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-bias-job-definition/${this.modelBiasJobDefinitionName}` as const
  }
}
export type { ModelBiasJobDefinitionArn }
export function modelBiasJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ModelBiasJobDefinitionArnParameters<Partition>) {
  return new ModelBiasJobDefinitionArn<Partition>(parameters)
}

export interface ModelExplainabilityJobDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelExplainabilityJobDefinitionName: string
}
class ModelExplainabilityJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-explainability-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:model-explainability-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'model-explainability-job-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelExplainabilityJobDefinitionName: string
  constructor(
    parameters: ModelExplainabilityJobDefinitionArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelExplainabilityJobDefinitionName =
      parameters.modelExplainabilityJobDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-explainability-job-definition/${this.modelExplainabilityJobDefinitionName}` as const
  }
}
export type { ModelExplainabilityJobDefinitionArn }
export function modelExplainabilityJobDefinitionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ModelExplainabilityJobDefinitionArnParameters<Partition>) {
  return new ModelExplainabilityJobDefinitionArn<Partition>(parameters)
}

export interface ExperimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly experimentName: string
}
class ExperimentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'experiment',
  `arn:${string}:sagemaker:${string}:${string}:experiment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experiment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly experimentName: string
  constructor(parameters: ExperimentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.experimentName = parameters.experimentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:experiment/${this.experimentName}` as const
  }
}
export type { ExperimentArn }
export function experimentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperimentArnParameters<Partition>,
) {
  return new ExperimentArn<Partition>(parameters)
}

export interface ExperimentTrialArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trialName: string
}
class ExperimentTrialArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'experiment-trial',
  `arn:${string}:sagemaker:${string}:${string}:experiment-trial/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experiment-trial' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trialName: string
  constructor(parameters: ExperimentTrialArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trialName = parameters.trialName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:experiment-trial/${this.trialName}` as const
  }
}
export type { ExperimentTrialArn }
export function experimentTrialArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperimentTrialArnParameters<Partition>,
) {
  return new ExperimentTrialArn<Partition>(parameters)
}

export interface ExperimentTrialComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trialComponentName: string
}
class ExperimentTrialComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'experiment-trial-component',
  `arn:${string}:sagemaker:${string}:${string}:experiment-trial-component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experiment-trial-component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trialComponentName: string
  constructor(parameters: ExperimentTrialComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trialComponentName = parameters.trialComponentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:experiment-trial-component/${this.trialComponentName}` as const
  }
}
export type { ExperimentTrialComponentArn }
export function experimentTrialComponentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ExperimentTrialComponentArnParameters<Partition>) {
  return new ExperimentTrialComponentArn<Partition>(parameters)
}

export interface FeatureGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly featureGroupName: string
}
class FeatureGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'feature-group',
  `arn:${string}:sagemaker:${string}:${string}:feature-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'feature-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly featureGroupName: string
  constructor(parameters: FeatureGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.featureGroupName = parameters.featureGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:feature-group/${this.featureGroupName}` as const
  }
}
export type { FeatureGroupArn }
export function featureGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: FeatureGroupArnParameters<Partition>,
) {
  return new FeatureGroupArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:sagemaker:${string}:${string}:pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:pipeline/${this.pipelineName}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface PipelineExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  readonly randomString: string
}
class PipelineExecutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pipeline-execution',
  `arn:${string}:sagemaker:${string}:${string}:pipeline/${string}/execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline-execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  readonly randomString: string
  constructor(parameters: PipelineExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
    this.randomString = parameters.randomString
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:pipeline/${this.pipelineName}/execution/${this.randomString}` as const
  }
}
export type { PipelineExecutionArn }
export function pipelineExecutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineExecutionArnParameters<Partition>,
) {
  return new PipelineExecutionArn<Partition>(parameters)
}

export interface ArtifactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hashOfArtifactSource: string
}
class ArtifactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'artifact',
  `arn:${string}:sagemaker:${string}:${string}:artifact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'artifact' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hashOfArtifactSource: string
  constructor(parameters: ArtifactArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hashOfArtifactSource = parameters.hashOfArtifactSource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:artifact/${this.hashOfArtifactSource}` as const
  }
}
export type { ArtifactArn }
export function artifactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArtifactArnParameters<Partition>,
) {
  return new ArtifactArn<Partition>(parameters)
}

export interface ContextArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contextName: string
}
class ContextArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'context',
  `arn:${string}:sagemaker:${string}:${string}:context/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'context' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contextName: string
  constructor(parameters: ContextArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contextName = parameters.contextName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:context/${this.contextName}` as const
  }
}
export type { ContextArn }
export function contextArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContextArnParameters<Partition>,
) {
  return new ContextArn<Partition>(parameters)
}

export interface ActionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly actionName: string
}
class ActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'action',
  `arn:${string}:sagemaker:${string}:${string}:action/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'action' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly actionName: string
  constructor(parameters: ActionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.actionName = parameters.actionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:action/${this.actionName}` as const
  }
}
export type { ActionArn }
export function actionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionArnParameters<Partition>,
) {
  return new ActionArn<Partition>(parameters)
}

export interface LineageGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lineageGroupName: string
}
class LineageGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'lineage-group',
  `arn:${string}:sagemaker:${string}:${string}:lineage-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lineage-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lineageGroupName: string
  constructor(parameters: LineageGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.lineageGroupName = parameters.lineageGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:lineage-group/${this.lineageGroupName}` as const
  }
}
export type { LineageGroupArn }
export function lineageGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: LineageGroupArnParameters<Partition>,
) {
  return new LineageGroupArn<Partition>(parameters)
}

export interface ModelCardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelCardName: string
}
class ModelCardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model-card',
  `arn:${string}:sagemaker:${string}:${string}:model-card/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-card' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelCardName: string
  constructor(parameters: ModelCardArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelCardName = parameters.modelCardName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-card/${this.modelCardName}` as const
  }
}
export type { ModelCardArn }
export function modelCardArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelCardArnParameters<Partition>,
) {
  return new ModelCardArn<Partition>(parameters)
}

export interface ModelCardExportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelCardName: string
  readonly exportJobName: string
}
class ModelCardExportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-card-export-job',
  `arn:${string}:sagemaker:${string}:${string}:model-card/${string}/export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-card-export-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelCardName: string
  readonly exportJobName: string
  constructor(parameters: ModelCardExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelCardName = parameters.modelCardName
    this.exportJobName = parameters.exportJobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-card/${this.modelCardName}/export-job/${this.exportJobName}` as const
  }
}
export type { ModelCardExportJobArn }
export function modelCardExportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelCardExportJobArnParameters<Partition>,
) {
  return new ModelCardExportJobArn<Partition>(parameters)
}

export interface SharedModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sharedModelId: string
}
class SharedModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'shared-model',
  `arn:${string}:sagemaker:${string}:${string}:shared-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'shared-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sharedModelId: string
  constructor(parameters: SharedModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sharedModelId = parameters.sharedModelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:shared-model/${this.sharedModelId}` as const
  }
}
export type { SharedModelArn }
export function sharedModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: SharedModelArnParameters<Partition>,
) {
  return new SharedModelArn<Partition>(parameters)
}

export interface SharedModelEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventId: string
}
class SharedModelEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'shared-model-event',
  `arn:${string}:sagemaker:${string}:${string}:shared-model-event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'shared-model-event' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventId: string
  constructor(parameters: SharedModelEventArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventId = parameters.eventId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:shared-model-event/${this.eventId}` as const
  }
}
export type { SharedModelEventArn }
export function sharedModelEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: SharedModelEventArnParameters<Partition>,
) {
  return new SharedModelEventArn<Partition>(parameters)
}

export interface SagemakerCatalogArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceCatalogName: string
}
class SagemakerCatalogArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sagemaker-catalog',
  `arn:${string}:sagemaker:${string}:${string}:sagemaker-catalog/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sagemaker-catalog' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceCatalogName: string
  constructor(parameters: SagemakerCatalogArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceCatalogName = parameters.resourceCatalogName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:sagemaker-catalog/${this.resourceCatalogName}` as const
  }
}
export type { SagemakerCatalogArn }
export function sagemakerCatalogArn<Partition extends ArnPartition = 'aws'>(
  parameters: SagemakerCatalogArnParameters<Partition>,
) {
  return new SagemakerCatalogArn<Partition>(parameters)
}

export interface MlflowTrackingServerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mlFlowTrackingServerName: string
}
class MlflowTrackingServerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mlflow-tracking-server',
  `arn:${string}:sagemaker:${string}:${string}:mlflow-tracking-server/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mlflow-tracking-server' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mlFlowTrackingServerName: string
  constructor(parameters: MlflowTrackingServerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mlFlowTrackingServerName = parameters.mlFlowTrackingServerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:mlflow-tracking-server/${this.mlFlowTrackingServerName}` as const
  }
}
export type { MlflowTrackingServerArn }
export function mlflowTrackingServerArn<Partition extends ArnPartition = 'aws'>(
  parameters: MlflowTrackingServerArnParameters<Partition>,
) {
  return new MlflowTrackingServerArn<Partition>(parameters)
}
