import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleetDevice: string
  readonly nameDevice: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:sagemaker:${string}:${string}:device-fleet/${string}/device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleetDevice: string
  readonly nameDevice: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFleetDevice = parameters.nameFleetDevice
    this.nameDevice = parameters.nameDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:device-fleet/${this.nameFleetDevice}/device/${this.nameDevice}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface FleetDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleetDevice: string
}
class FleetDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'device-fleet',
  `arn:${string}:sagemaker:${string}:${string}:device-fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device-fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleetDevice: string
  constructor(parameters: FleetDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFleetDevice = parameters.nameFleetDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:device-fleet/${this.nameFleetDevice}` as const
  }
}
export type { FleetDeviceArn }
export function fleetDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetDeviceArnParameters<Partition>,
) {
  return new FleetDeviceArn<Partition>(parameters)
}

export interface JobPackagingEdgeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobPackagingEdge: string
}
class JobPackagingEdgeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'edge-packaging-job',
  `arn:${string}:sagemaker:${string}:${string}:edge-packaging-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'edge-packaging-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobPackagingEdge: string
  constructor(parameters: JobPackagingEdgeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobPackagingEdge = parameters.nameJobPackagingEdge
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:edge-packaging-job/${this.nameJobPackagingEdge}` as const
  }
}
export type { JobPackagingEdgeArn }
export function jobPackagingEdgeArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobPackagingEdgeArnParameters<Partition>,
) {
  return new JobPackagingEdgeArn<Partition>(parameters)
}

export interface PlanDeploymentEdgeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePlanDeploymentEdge: string
}
class PlanDeploymentEdgeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'edge-deployment-plan',
  `arn:${string}:sagemaker:${string}:${string}:edge-deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'edge-deployment-plan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePlanDeploymentEdge: string
  constructor(parameters: PlanDeploymentEdgeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePlanDeploymentEdge = parameters.namePlanDeploymentEdge
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:edge-deployment/${this.namePlanDeploymentEdge}` as const
  }
}
export type { PlanDeploymentEdgeArn }
export function planDeploymentEdgeArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanDeploymentEdgeArnParameters<Partition>,
) {
  return new PlanDeploymentEdgeArn<Partition>(parameters)
}

export interface LoopHumanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLoopHuman: string
}
class LoopHumanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'human-loop',
  `arn:${string}:sagemaker:${string}:${string}:human-loop/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'human-loop' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLoopHuman: string
  constructor(parameters: LoopHumanArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLoopHuman = parameters.nameLoopHuman
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:human-loop/${this.nameLoopHuman}` as const
  }
}
export type { LoopHumanArn }
export function loopHumanArn<Partition extends ArnPartition = 'aws'>(
  parameters: LoopHumanArnParameters<Partition>,
) {
  return new LoopHumanArn<Partition>(parameters)
}

export interface DefinitionFlowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionFlow: string
}
class DefinitionFlowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'flow-definition',
  `arn:${string}:sagemaker:${string}:${string}:flow-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flow-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionFlow: string
  constructor(parameters: DefinitionFlowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionFlow = parameters.nameDefinitionFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:flow-definition/${this.nameDefinitionFlow}` as const
  }
}
export type { DefinitionFlowArn }
export function definitionFlowArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionFlowArnParameters<Partition>,
) {
  return new DefinitionFlowArn<Partition>(parameters)
}

export interface UiTaskHumanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameUiTaskHuman: string
}
class UiTaskHumanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'human-task-ui',
  `arn:${string}:sagemaker:${string}:${string}:human-task-ui/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'human-task-ui' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameUiTaskHuman: string
  constructor(parameters: UiTaskHumanArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameUiTaskHuman = parameters.nameUiTaskHuman
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:human-task-ui/${this.nameUiTaskHuman}` as const
  }
}
export type { UiTaskHumanArn }
export function uiTaskHumanArn<Partition extends ArnPartition = 'aws'>(
  parameters: UiTaskHumanArnParameters<Partition>,
) {
  return new UiTaskHumanArn<Partition>(parameters)
}

export interface HubArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameHub: string
}
class HubArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hub',
  `arn:${string}:sagemaker:${string}:${string}:hub/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hub' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameHub: string
  constructor(parameters: HubArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameHub = parameters.nameHub
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:hub/${this.nameHub}` as const
  }
}
export type { HubArn }
export function hubArn<Partition extends ArnPartition = 'aws'>(
  parameters: HubArnParameters<Partition>,
) {
  return new HubArn<Partition>(parameters)
}

export interface ContentHubArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameHub: string
  readonly typeContentHub: string
  readonly nameContentHub: string
}
class ContentHubArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hub-content',
  `arn:${string}:sagemaker:${string}:${string}:hub-content/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hub-content' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameHub: string
  readonly typeContentHub: string
  readonly nameContentHub: string
  constructor(parameters: ContentHubArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameHub = parameters.nameHub
    this.typeContentHub = parameters.typeContentHub
    this.nameContentHub = parameters.nameContentHub
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:hub-content/${this.nameHub}/${this.typeContentHub}/${this.nameContentHub}` as const
  }
}
export type { ContentHubArn }
export function contentHubArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContentHubArnParameters<Partition>,
) {
  return new ContentHubArn<Partition>(parameters)
}

export interface JobRecommendationsInferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobRecommendationsInference: string
}
class JobRecommendationsInferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-recommendations-job',
  `arn:${string}:sagemaker:${string}:${string}:inference-recommendations-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-recommendations-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobRecommendationsInference: string
  constructor(parameters: JobRecommendationsInferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobRecommendationsInference =
      parameters.nameJobRecommendationsInference
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:inference-recommendations-job/${this.nameJobRecommendationsInference}` as const
  }
}
export type { JobRecommendationsInferenceArn }
export function jobRecommendationsInferenceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobRecommendationsInferenceArnParameters<Partition>) {
  return new JobRecommendationsInferenceArn<Partition>(parameters)
}

export interface ExperimentInferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameExperimentInference: string
}
class ExperimentInferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-experiment',
  `arn:${string}:sagemaker:${string}:${string}:inference-experiment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-experiment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameExperimentInference: string
  constructor(parameters: ExperimentInferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameExperimentInference = parameters.nameExperimentInference
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:inference-experiment/${this.nameExperimentInference}` as const
  }
}
export type { ExperimentInferenceArn }
export function experimentInferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperimentInferenceArnParameters<Partition>,
) {
  return new ExperimentInferenceArn<Partition>(parameters)
}

export interface JobLabelingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobLabeling: string
}
class JobLabelingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'labeling-job',
  `arn:${string}:sagemaker:${string}:${string}:labeling-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'labeling-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobLabeling: string
  constructor(parameters: JobLabelingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobLabeling = parameters.nameJobLabeling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:labeling-job/${this.nameJobLabeling}` as const
  }
}
export type { JobLabelingArn }
export function jobLabelingArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobLabelingArnParameters<Partition>,
) {
  return new JobLabelingArn<Partition>(parameters)
}

export interface TeamWorkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTeamWork: string
}
class TeamWorkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workteam',
  `arn:${string}:sagemaker:${string}:${string}:workteam/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workteam' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTeamWork: string
  constructor(parameters: TeamWorkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTeamWork = parameters.nameTeamWork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:workteam/${this.nameTeamWork}` as const
  }
}
export type { TeamWorkArn }
export function teamWorkArn<Partition extends ArnPartition = 'aws'>(
  parameters: TeamWorkArnParameters<Partition>,
) {
  return new TeamWorkArn<Partition>(parameters)
}

export interface WorkforceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkforce: string
}
class WorkforceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workforce',
  `arn:${string}:sagemaker:${string}:${string}:workforce/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workforce' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkforce: string
  constructor(parameters: WorkforceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameWorkforce = parameters.nameWorkforce
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:workforce/${this.nameWorkforce}` as const
  }
}
export type { WorkforceArn }
export function workforceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkforceArnParameters<Partition>,
) {
  return new WorkforceArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:sagemaker:${string}:${string}:domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:domain/${this.idDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface ProfileUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly nameProfileUser: string
}
class ProfileUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'user-profile',
  `arn:${string}:sagemaker:${string}:${string}:user-profile/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly nameProfileUser: string
  constructor(parameters: ProfileUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.nameProfileUser = parameters.nameProfileUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:user-profile/${this.idDomain}/${this.nameProfileUser}` as const
  }
}
export type { ProfileUserArn }
export function profileUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileUserArnParameters<Partition>,
) {
  return new ProfileUserArn<Partition>(parameters)
}

export interface SpaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly nameSpace: string
}
class SpaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'space',
  `arn:${string}:sagemaker:${string}:${string}:space/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'space' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly nameSpace: string
  constructor(parameters: SpaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.nameSpace = parameters.nameSpace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:space/${this.idDomain}/${this.nameSpace}` as const
  }
}
export type { SpaceArn }
export function spaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpaceArnParameters<Partition>,
) {
  return new SpaceArn<Partition>(parameters)
}

export interface AppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly nameProfileUser: string
  readonly typeApp: string
  readonly nameApp: string
}
class AppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'app',
  `arn:${string}:sagemaker:${string}:${string}:app/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly nameProfileUser: string
  readonly typeApp: string
  readonly nameApp: string
  constructor(parameters: AppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.nameProfileUser = parameters.nameProfileUser
    this.typeApp = parameters.typeApp
    this.nameApp = parameters.nameApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:app/${this.idDomain}/${this.nameProfileUser}/${this.typeApp}/${this.nameApp}` as const
  }
}
export type { AppArn }
export function appArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppArnParameters<Partition>,
) {
  return new AppArn<Partition>(parameters)
}

export interface ConfigImageAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigImageApp: string
}
class ConfigImageAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-image-config',
  `arn:${string}:sagemaker:${string}:${string}:app-image-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-image-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigImageApp: string
  constructor(parameters: ConfigImageAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigImageApp = parameters.nameConfigImageApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:app-image-config/${this.nameConfigImageApp}` as const
  }
}
export type { ConfigImageAppArn }
export function configImageAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigImageAppArnParameters<Partition>,
) {
  return new ConfigImageAppArn<Partition>(parameters)
}

export interface ConfigLifecycleStudioArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigLifecycleStudio: string
}
class ConfigLifecycleStudioArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'studio-lifecycle-config',
  `arn:${string}:sagemaker:${string}:${string}:studio-lifecycle-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio-lifecycle-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigLifecycleStudio: string
  constructor(parameters: ConfigLifecycleStudioArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigLifecycleStudio = parameters.nameConfigLifecycleStudio
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:studio-lifecycle-config/${this.nameConfigLifecycleStudio}` as const
  }
}
export type { ConfigLifecycleStudioArn }
export function configLifecycleStudioArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigLifecycleStudioArnParameters<Partition>) {
  return new ConfigLifecycleStudioArn<Partition>(parameters)
}

export interface InstanceNotebookArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceNotebook: string
}
class InstanceNotebookArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notebook-instance',
  `arn:${string}:sagemaker:${string}:${string}:notebook-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'notebook-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceNotebook: string
  constructor(parameters: InstanceNotebookArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstanceNotebook = parameters.nameInstanceNotebook
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:notebook-instance/${this.nameInstanceNotebook}` as const
  }
}
export type { InstanceNotebookArn }
export function instanceNotebookArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceNotebookArnParameters<Partition>,
) {
  return new InstanceNotebookArn<Partition>(parameters)
}

export interface ConfigLifecycleInstanceNotebookArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigLifecycleInstanceNotebook: string
}
class ConfigLifecycleInstanceNotebookArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notebook-instance-lifecycle-config',
  `arn:${string}:sagemaker:${string}:${string}:notebook-instance-lifecycle-config/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'notebook-instance-lifecycle-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigLifecycleInstanceNotebook: string
  constructor(
    parameters: ConfigLifecycleInstanceNotebookArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigLifecycleInstanceNotebook =
      parameters.nameConfigLifecycleInstanceNotebook
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:notebook-instance-lifecycle-config/${this.nameConfigLifecycleInstanceNotebook}` as const
  }
}
export type { ConfigLifecycleInstanceNotebookArn }
export function configLifecycleInstanceNotebookArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigLifecycleInstanceNotebookArnParameters<Partition>) {
  return new ConfigLifecycleInstanceNotebookArn<Partition>(parameters)
}

export interface RepositoryCodeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRepositoryCode: string
}
class RepositoryCodeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'code-repository',
  `arn:${string}:sagemaker:${string}:${string}:code-repository/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'code-repository' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRepositoryCode: string
  constructor(parameters: RepositoryCodeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRepositoryCode = parameters.nameRepositoryCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:code-repository/${this.nameRepositoryCode}` as const
  }
}
export type { RepositoryCodeArn }
export function repositoryCodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryCodeArnParameters<Partition>,
) {
  return new RepositoryCodeArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:sagemaker:${string}:${string}:image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameImage = parameters.nameImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:image/${this.nameImage}` as const
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
  readonly version: string
}
class VersionImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'image-version',
  `arn:${string}:sagemaker:${string}:${string}:image-version/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  readonly version: string
  constructor(parameters: VersionImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameImage = parameters.nameImage
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:image-version/${this.nameImage}/${this.version}` as const
  }
}
export type { VersionImageArn }
export function versionImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionImageArnParameters<Partition>,
) {
  return new VersionImageArn<Partition>(parameters)
}

export interface AlgorithmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAlgorithm: string
}
class AlgorithmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'algorithm',
  `arn:${string}:sagemaker:${string}:${string}:algorithm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'algorithm' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAlgorithm: string
  constructor(parameters: AlgorithmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAlgorithm = parameters.nameAlgorithm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:algorithm/${this.nameAlgorithm}` as const
  }
}
export type { AlgorithmArn }
export function algorithmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlgorithmArnParameters<Partition>,
) {
  return new AlgorithmArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:sagemaker:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCluster = parameters.idCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:cluster/${this.idCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface JobTrainingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobTraining: string
}
class JobTrainingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'training-job',
  `arn:${string}:sagemaker:${string}:${string}:training-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'training-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobTraining: string
  constructor(parameters: JobTrainingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobTraining = parameters.nameJobTraining
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:training-job/${this.nameJobTraining}` as const
  }
}
export type { JobTrainingArn }
export function jobTrainingArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobTrainingArnParameters<Partition>,
) {
  return new JobTrainingArn<Partition>(parameters)
}

export interface JobProcessingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobProcessing: string
}
class JobProcessingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'processing-job',
  `arn:${string}:sagemaker:${string}:${string}:processing-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'processing-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobProcessing: string
  constructor(parameters: JobProcessingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobProcessing = parameters.nameJobProcessing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:processing-job/${this.nameJobProcessing}` as const
  }
}
export type { JobProcessingArn }
export function jobProcessingArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobProcessingArnParameters<Partition>,
) {
  return new JobProcessingArn<Partition>(parameters)
}

export interface JobTuningParameterHyperArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobTuningParameterHyper: string
}
class JobTuningParameterHyperArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hyper-parameter-tuning-job',
  `arn:${string}:sagemaker:${string}:${string}:hyper-parameter-tuning-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hyper-parameter-tuning-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobTuningParameterHyper: string
  constructor(parameters: JobTuningParameterHyperArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobTuningParameterHyper = parameters.nameJobTuningParameterHyper
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:hyper-parameter-tuning-job/${this.nameJobTuningParameterHyper}` as const
  }
}
export type { JobTuningParameterHyperArn }
export function jobTuningParameterHyperArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobTuningParameterHyperArnParameters<Partition>) {
  return new JobTuningParameterHyperArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:sagemaker:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:project/${this.nameProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface PackageModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackageModel: string
}
class PackageModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-package',
  `arn:${string}:sagemaker:${string}:${string}:model-package/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-package' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackageModel: string
  constructor(parameters: PackageModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePackageModel = parameters.namePackageModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-package/${this.namePackageModel}` as const
  }
}
export type { PackageModelArn }
export function packageModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageModelArnParameters<Partition>,
) {
  return new PackageModelArn<Partition>(parameters)
}

export interface GroupPackageModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupPackageModel: string
}
class GroupPackageModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-package-group',
  `arn:${string}:sagemaker:${string}:${string}:model-package-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-package-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupPackageModel: string
  constructor(parameters: GroupPackageModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupPackageModel = parameters.nameGroupPackageModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-package-group/${this.nameGroupPackageModel}` as const
  }
}
export type { GroupPackageModelArn }
export function groupPackageModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupPackageModelArnParameters<Partition>,
) {
  return new GroupPackageModelArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:sagemaker:${string}:${string}:model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameModel = parameters.nameModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model/${this.nameModel}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface ConfigEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigEndpoint: string
}
class ConfigEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'endpoint-config',
  `arn:${string}:sagemaker:${string}:${string}:endpoint-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigEndpoint: string
  constructor(parameters: ConfigEndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigEndpoint = parameters.nameConfigEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:endpoint-config/${this.nameConfigEndpoint}` as const
  }
}
export type { ConfigEndpointArn }
export function configEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigEndpointArnParameters<Partition>,
) {
  return new ConfigEndpointArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpoint: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:sagemaker:${string}:${string}:endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpoint: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEndpoint = parameters.nameEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:endpoint/${this.nameEndpoint}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface ComponentInferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponentInference: string
}
class ComponentInferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-component',
  `arn:${string}:sagemaker:${string}:${string}:inference-component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponentInference: string
  constructor(parameters: ComponentInferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameComponentInference = parameters.nameComponentInference
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:inference-component/${this.nameComponentInference}` as const
  }
}
export type { ComponentInferenceArn }
export function componentInferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentInferenceArnParameters<Partition>,
) {
  return new ComponentInferenceArn<Partition>(parameters)
}

export interface JobTransformArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobTransform: string
}
class JobTransformArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transform-job',
  `arn:${string}:sagemaker:${string}:${string}:transform-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transform-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobTransform: string
  constructor(parameters: JobTransformArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobTransform = parameters.nameJobTransform
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:transform-job/${this.nameJobTransform}` as const
  }
}
export type { JobTransformArn }
export function jobTransformArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobTransformArnParameters<Partition>,
) {
  return new JobTransformArn<Partition>(parameters)
}

export interface JobCompilationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobCompilation: string
}
class JobCompilationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'compilation-job',
  `arn:${string}:sagemaker:${string}:${string}:compilation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'compilation-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobCompilation: string
  constructor(parameters: JobCompilationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobCompilation = parameters.nameJobCompilation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:compilation-job/${this.nameJobCompilation}` as const
  }
}
export type { JobCompilationArn }
export function jobCompilationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobCompilationArnParameters<Partition>,
) {
  return new JobCompilationArn<Partition>(parameters)
}

export interface JobOptimizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobOptimization: string
}
class JobOptimizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'optimization-job',
  `arn:${string}:sagemaker:${string}:${string}:optimization-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'optimization-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobOptimization: string
  constructor(parameters: JobOptimizationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobOptimization = parameters.nameJobOptimization
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:optimization-job/${this.nameJobOptimization}` as const
  }
}
export type { JobOptimizationArn }
export function jobOptimizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobOptimizationArnParameters<Partition>,
) {
  return new JobOptimizationArn<Partition>(parameters)
}

export interface JobAutomlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobJobMlAuto: string
}
class JobAutomlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'automl-job',
  `arn:${string}:sagemaker:${string}:${string}:automl-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automl-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJobJobMlAuto: string
  constructor(parameters: JobAutomlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJobJobMlAuto = parameters.nameJobJobMlAuto
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:automl-job/${this.nameJobJobMlAuto}` as const
  }
}
export type { JobAutomlArn }
export function jobAutomlArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobAutomlArnParameters<Partition>,
) {
  return new JobAutomlArn<Partition>(parameters)
}

export interface ScheduleMonitoringArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameScheduleMonitoring: string
}
class ScheduleMonitoringArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'monitoring-schedule',
  `arn:${string}:sagemaker:${string}:${string}:monitoring-schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitoring-schedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameScheduleMonitoring: string
  constructor(parameters: ScheduleMonitoringArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameScheduleMonitoring = parameters.nameScheduleMonitoring
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:monitoring-schedule/${this.nameScheduleMonitoring}` as const
  }
}
export type { ScheduleMonitoringArn }
export function scheduleMonitoringArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleMonitoringArnParameters<Partition>,
) {
  return new ScheduleMonitoringArn<Partition>(parameters)
}

export interface AlertScheduleMonitoringArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameScheduleMonitoring: string
  readonly nameAlertScheduleMonitoring: string
}
class AlertScheduleMonitoringArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'monitoring-schedule-alert',
  `arn:${string}:sagemaker:${string}:${string}:monitoring-schedule/${string}/alert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitoring-schedule-alert' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameScheduleMonitoring: string
  readonly nameAlertScheduleMonitoring: string
  constructor(parameters: AlertScheduleMonitoringArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameScheduleMonitoring = parameters.nameScheduleMonitoring
    this.nameAlertScheduleMonitoring = parameters.nameAlertScheduleMonitoring
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:monitoring-schedule/${this.nameScheduleMonitoring}/alert/${this.nameAlertScheduleMonitoring}` as const
  }
}
export type { AlertScheduleMonitoringArn }
export function alertScheduleMonitoringArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AlertScheduleMonitoringArnParameters<Partition>) {
  return new AlertScheduleMonitoringArn<Partition>(parameters)
}

export interface DefinitionJobQualityDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobQualityData: string
}
class DefinitionJobQualityDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'data-quality-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:data-quality-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-quality-job-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobQualityData: string
  constructor(parameters: DefinitionJobQualityDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionJobQualityData = parameters.nameDefinitionJobQualityData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:data-quality-job-definition/${this.nameDefinitionJobQualityData}` as const
  }
}
export type { DefinitionJobQualityDataArn }
export function definitionJobQualityDataArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionJobQualityDataArnParameters<Partition>) {
  return new DefinitionJobQualityDataArn<Partition>(parameters)
}

export interface DefinitionJobQualityModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobQualityModel: string
}
class DefinitionJobQualityModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-quality-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:model-quality-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-quality-job-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobQualityModel: string
  constructor(parameters: DefinitionJobQualityModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionJobQualityModel =
      parameters.nameDefinitionJobQualityModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-quality-job-definition/${this.nameDefinitionJobQualityModel}` as const
  }
}
export type { DefinitionJobQualityModelArn }
export function definitionJobQualityModelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionJobQualityModelArnParameters<Partition>) {
  return new DefinitionJobQualityModelArn<Partition>(parameters)
}

export interface DefinitionJobBiasModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobBiasModel: string
}
class DefinitionJobBiasModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-bias-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:model-bias-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-bias-job-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobBiasModel: string
  constructor(parameters: DefinitionJobBiasModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionJobBiasModel = parameters.nameDefinitionJobBiasModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-bias-job-definition/${this.nameDefinitionJobBiasModel}` as const
  }
}
export type { DefinitionJobBiasModelArn }
export function definitionJobBiasModelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionJobBiasModelArnParameters<Partition>) {
  return new DefinitionJobBiasModelArn<Partition>(parameters)
}

export interface DefinitionJobExplainabilityModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobExplainabilityModel: string
}
class DefinitionJobExplainabilityModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-explainability-job-definition',
  `arn:${string}:sagemaker:${string}:${string}:model-explainability-job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'model-explainability-job-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJobExplainabilityModel: string
  constructor(
    parameters: DefinitionJobExplainabilityModelArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionJobExplainabilityModel =
      parameters.nameDefinitionJobExplainabilityModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-explainability-job-definition/${this.nameDefinitionJobExplainabilityModel}` as const
  }
}
export type { DefinitionJobExplainabilityModelArn }
export function definitionJobExplainabilityModelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionJobExplainabilityModelArnParameters<Partition>) {
  return new DefinitionJobExplainabilityModelArn<Partition>(parameters)
}

export interface ExperimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameExperiment: string
}
class ExperimentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'experiment',
  `arn:${string}:sagemaker:${string}:${string}:experiment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experiment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameExperiment: string
  constructor(parameters: ExperimentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameExperiment = parameters.nameExperiment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:experiment/${this.nameExperiment}` as const
  }
}
export type { ExperimentArn }
export function experimentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperimentArnParameters<Partition>,
) {
  return new ExperimentArn<Partition>(parameters)
}

export interface TrialExperimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTrial: string
}
class TrialExperimentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'experiment-trial',
  `arn:${string}:sagemaker:${string}:${string}:experiment-trial/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experiment-trial' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTrial: string
  constructor(parameters: TrialExperimentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTrial = parameters.nameTrial
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:experiment-trial/${this.nameTrial}` as const
  }
}
export type { TrialExperimentArn }
export function trialExperimentArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrialExperimentArnParameters<Partition>,
) {
  return new TrialExperimentArn<Partition>(parameters)
}

export interface ComponentTrialExperimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponentTrial: string
}
class ComponentTrialExperimentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'experiment-trial-component',
  `arn:${string}:sagemaker:${string}:${string}:experiment-trial-component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experiment-trial-component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponentTrial: string
  constructor(parameters: ComponentTrialExperimentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameComponentTrial = parameters.nameComponentTrial
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:experiment-trial-component/${this.nameComponentTrial}` as const
  }
}
export type { ComponentTrialExperimentArn }
export function componentTrialExperimentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ComponentTrialExperimentArnParameters<Partition>) {
  return new ComponentTrialExperimentArn<Partition>(parameters)
}

export interface GroupFeatureArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupFeature: string
}
class GroupFeatureArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'feature-group',
  `arn:${string}:sagemaker:${string}:${string}:feature-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'feature-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupFeature: string
  constructor(parameters: GroupFeatureArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupFeature = parameters.nameGroupFeature
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:feature-group/${this.nameGroupFeature}` as const
  }
}
export type { GroupFeatureArn }
export function groupFeatureArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupFeatureArnParameters<Partition>,
) {
  return new GroupFeatureArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:sagemaker:${string}:${string}:pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:pipeline/${this.namePipeline}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface ExecutionPipelineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  readonly stringRandom: string
}
class ExecutionPipelineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pipeline-execution',
  `arn:${string}:sagemaker:${string}:${string}:pipeline/${string}/execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline-execution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  readonly stringRandom: string
  constructor(parameters: ExecutionPipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
    this.stringRandom = parameters.stringRandom
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:pipeline/${this.namePipeline}/execution/${this.stringRandom}` as const
  }
}
export type { ExecutionPipelineArn }
export function executionPipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionPipelineArnParameters<Partition>,
) {
  return new ExecutionPipelineArn<Partition>(parameters)
}

export interface ArtifactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly sourceArtifactOfHash: string
}
class ArtifactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'artifact',
  `arn:${string}:sagemaker:${string}:${string}:artifact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'artifact' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly sourceArtifactOfHash: string
  constructor(parameters: ArtifactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceArtifactOfHash = parameters.sourceArtifactOfHash
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:artifact/${this.sourceArtifactOfHash}` as const
  }
}
export type { ArtifactArn }
export function artifactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArtifactArnParameters<Partition>,
) {
  return new ArtifactArn<Partition>(parameters)
}

export interface ContextArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContext: string
}
class ContextArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'context',
  `arn:${string}:sagemaker:${string}:${string}:context/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'context' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContext: string
  constructor(parameters: ContextArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameContext = parameters.nameContext
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:context/${this.nameContext}` as const
  }
}
export type { ContextArn }
export function contextArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContextArnParameters<Partition>,
) {
  return new ContextArn<Partition>(parameters)
}

export interface ActionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAction: string
}
class ActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'action',
  `arn:${string}:sagemaker:${string}:${string}:action/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'action' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAction: string
  constructor(parameters: ActionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAction = parameters.nameAction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:action/${this.nameAction}` as const
  }
}
export type { ActionArn }
export function actionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionArnParameters<Partition>,
) {
  return new ActionArn<Partition>(parameters)
}

export interface GroupLineageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLineage: string
}
class GroupLineageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'lineage-group',
  `arn:${string}:sagemaker:${string}:${string}:lineage-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lineage-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLineage: string
  constructor(parameters: GroupLineageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupLineage = parameters.nameGroupLineage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:lineage-group/${this.nameGroupLineage}` as const
  }
}
export type { GroupLineageArn }
export function groupLineageArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupLineageArnParameters<Partition>,
) {
  return new GroupLineageArn<Partition>(parameters)
}

export interface CardModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCardModel: string
}
class CardModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model-card',
  `arn:${string}:sagemaker:${string}:${string}:model-card/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-card' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCardModel: string
  constructor(parameters: CardModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCardModel = parameters.nameCardModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-card/${this.nameCardModel}` as const
  }
}
export type { CardModelArn }
export function cardModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: CardModelArnParameters<Partition>,
) {
  return new CardModelArn<Partition>(parameters)
}

export interface JobExportCardModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCardModel: string
  readonly nameJobExport: string
}
class JobExportCardModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-card-export-job',
  `arn:${string}:sagemaker:${string}:${string}:model-card/${string}/export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-card-export-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCardModel: string
  readonly nameJobExport: string
  constructor(parameters: JobExportCardModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCardModel = parameters.nameCardModel
    this.nameJobExport = parameters.nameJobExport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:model-card/${this.nameCardModel}/export-job/${this.nameJobExport}` as const
  }
}
export type { JobExportCardModelArn }
export function jobExportCardModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobExportCardModelArnParameters<Partition>,
) {
  return new JobExportCardModelArn<Partition>(parameters)
}

export interface ModelSharedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModelShared: string
}
class ModelSharedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'shared-model',
  `arn:${string}:sagemaker:${string}:${string}:shared-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'shared-model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModelShared: string
  constructor(parameters: ModelSharedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idModelShared = parameters.idModelShared
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:shared-model/${this.idModelShared}` as const
  }
}
export type { ModelSharedArn }
export function modelSharedArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelSharedArnParameters<Partition>,
) {
  return new ModelSharedArn<Partition>(parameters)
}

export interface EventModelSharedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEvent: string
}
class EventModelSharedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'shared-model-event',
  `arn:${string}:sagemaker:${string}:${string}:shared-model-event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'shared-model-event' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEvent: string
  constructor(parameters: EventModelSharedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEvent = parameters.idEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:shared-model-event/${this.idEvent}` as const
  }
}
export type { EventModelSharedArn }
export function eventModelSharedArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventModelSharedArnParameters<Partition>,
) {
  return new EventModelSharedArn<Partition>(parameters)
}

export interface CatalogSagemakerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCatalogResource: string
}
class CatalogSagemakerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sagemaker-catalog',
  `arn:${string}:sagemaker:${string}:${string}:sagemaker-catalog/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sagemaker-catalog' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCatalogResource: string
  constructor(parameters: CatalogSagemakerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCatalogResource = parameters.nameCatalogResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:sagemaker-catalog/${this.nameCatalogResource}` as const
  }
}
export type { CatalogSagemakerArn }
export function catalogSagemakerArn<Partition extends ArnPartition = 'aws'>(
  parameters: CatalogSagemakerArnParameters<Partition>,
) {
  return new CatalogSagemakerArn<Partition>(parameters)
}

export interface ServerTrackingMlflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameServerTrackingFlowMl: string
}
class ServerTrackingMlflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mlflow-tracking-server',
  `arn:${string}:sagemaker:${string}:${string}:mlflow-tracking-server/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mlflow-tracking-server' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameServerTrackingFlowMl: string
  constructor(parameters: ServerTrackingMlflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameServerTrackingFlowMl = parameters.nameServerTrackingFlowMl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:mlflow-tracking-server/${this.nameServerTrackingFlowMl}` as const
  }
}
export type { ServerTrackingMlflowArn }
export function serverTrackingMlflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerTrackingMlflowArnParameters<Partition>,
) {
  return new ServerTrackingMlflowArn<Partition>(parameters)
}
