export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceFleetName: string
  deviceName: string
}
export type DeviceArn = `arn:${string}:sagemaker:${string}:${string}:device-fleet/${string}/device/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:device-fleet/${parameters.deviceFleetName}/device/${parameters.deviceName}`
}

export interface DeviceFleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceFleetName: string
}
export type DeviceFleetArn = `arn:${string}:sagemaker:${string}:${string}:device-fleet/${string}`
export function deviceFleetArn(parameters: DeviceFleetArnParameters): DeviceFleetArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:device-fleet/${parameters.deviceFleetName}`
}

export interface EdgePackagingJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  edgePackagingJobName: string
}
export type EdgePackagingJobArn = `arn:${string}:sagemaker:${string}:${string}:edge-packaging-job/${string}`
export function edgePackagingJobArn(parameters: EdgePackagingJobArnParameters): EdgePackagingJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:edge-packaging-job/${parameters.edgePackagingJobName}`
}

export interface EdgeDeploymentPlanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  edgeDeploymentPlanName: string
}
export type EdgeDeploymentPlanArn = `arn:${string}:sagemaker:${string}:${string}:edge-deployment/${string}`
export function edgeDeploymentPlanArn(parameters: EdgeDeploymentPlanArnParameters): EdgeDeploymentPlanArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:edge-deployment/${parameters.edgeDeploymentPlanName}`
}

export interface HumanLoopArnParameters {
  partition?: string | undefined
  region: string
  account: string
  humanLoopName: string
}
export type HumanLoopArn = `arn:${string}:sagemaker:${string}:${string}:human-loop/${string}`
export function humanLoopArn(parameters: HumanLoopArnParameters): HumanLoopArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:human-loop/${parameters.humanLoopName}`
}

export interface FlowDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowDefinitionName: string
}
export type FlowDefinitionArn = `arn:${string}:sagemaker:${string}:${string}:flow-definition/${string}`
export function flowDefinitionArn(parameters: FlowDefinitionArnParameters): FlowDefinitionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:flow-definition/${parameters.flowDefinitionName}`
}

export interface HumanTaskUiArnParameters {
  partition?: string | undefined
  region: string
  account: string
  humanTaskUiName: string
}
export type HumanTaskUiArn = `arn:${string}:sagemaker:${string}:${string}:human-task-ui/${string}`
export function humanTaskUiArn(parameters: HumanTaskUiArnParameters): HumanTaskUiArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:human-task-ui/${parameters.humanTaskUiName}`
}

export interface HubArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hubName: string
}
export type HubArn = `arn:${string}:sagemaker:${string}:${string}:hub/${string}`
export function hubArn(parameters: HubArnParameters): HubArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:hub/${parameters.hubName}`
}

export interface HubContentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hubName: string
  hubContentType: string
  hubContentName: string
}
export type HubContentArn = `arn:${string}:sagemaker:${string}:${string}:hub-content/${string}/${string}/${string}`
export function hubContentArn(parameters: HubContentArnParameters): HubContentArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:hub-content/${parameters.hubName}/${parameters.hubContentType}/${parameters.hubContentName}`
}

export interface InferenceRecommendationsJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inferenceRecommendationsJobName: string
}
export type InferenceRecommendationsJobArn = `arn:${string}:sagemaker:${string}:${string}:inference-recommendations-job/${string}`
export function inferenceRecommendationsJobArn(parameters: InferenceRecommendationsJobArnParameters): InferenceRecommendationsJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:inference-recommendations-job/${parameters.inferenceRecommendationsJobName}`
}

export interface InferenceExperimentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inferenceExperimentName: string
}
export type InferenceExperimentArn = `arn:${string}:sagemaker:${string}:${string}:inference-experiment/${string}`
export function inferenceExperimentArn(parameters: InferenceExperimentArnParameters): InferenceExperimentArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:inference-experiment/${parameters.inferenceExperimentName}`
}

export interface LabelingJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  labelingJobName: string
}
export type LabelingJobArn = `arn:${string}:sagemaker:${string}:${string}:labeling-job/${string}`
export function labelingJobArn(parameters: LabelingJobArnParameters): LabelingJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:labeling-job/${parameters.labelingJobName}`
}

export interface WorkteamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workteamName: string
}
export type WorkteamArn = `arn:${string}:sagemaker:${string}:${string}:workteam/${string}`
export function workteamArn(parameters: WorkteamArnParameters): WorkteamArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:workteam/${parameters.workteamName}`
}

export interface WorkforceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workforceName: string
}
export type WorkforceArn = `arn:${string}:sagemaker:${string}:${string}:workforce/${string}`
export function workforceArn(parameters: WorkforceArnParameters): WorkforceArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:workforce/${parameters.workforceName}`
}

export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
}
export type DomainArn = `arn:${string}:sagemaker:${string}:${string}:domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:domain/${parameters.domainId}`
}

export interface UserProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  userProfileName: string
}
export type UserProfileArn = `arn:${string}:sagemaker:${string}:${string}:user-profile/${string}/${string}`
export function userProfileArn(parameters: UserProfileArnParameters): UserProfileArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:user-profile/${parameters.domainId}/${parameters.userProfileName}`
}

export interface SpaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  spaceName: string
}
export type SpaceArn = `arn:${string}:sagemaker:${string}:${string}:space/${string}/${string}`
export function spaceArn(parameters: SpaceArnParameters): SpaceArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:space/${parameters.domainId}/${parameters.spaceName}`
}

export interface AppArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  userProfileName: string
  appType: string
  appName: string
}
export type AppArn = `arn:${string}:sagemaker:${string}:${string}:app/${string}/${string}/${string}/${string}`
export function appArn(parameters: AppArnParameters): AppArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:app/${parameters.domainId}/${parameters.userProfileName}/${parameters.appType}/${parameters.appName}`
}

export interface AppImageConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appImageConfigName: string
}
export type AppImageConfigArn = `arn:${string}:sagemaker:${string}:${string}:app-image-config/${string}`
export function appImageConfigArn(parameters: AppImageConfigArnParameters): AppImageConfigArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:app-image-config/${parameters.appImageConfigName}`
}

export interface StudioLifecycleConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  studioLifecycleConfigName: string
}
export type StudioLifecycleConfigArn = `arn:${string}:sagemaker:${string}:${string}:studio-lifecycle-config/${string}`
export function studioLifecycleConfigArn(parameters: StudioLifecycleConfigArnParameters): StudioLifecycleConfigArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:studio-lifecycle-config/${parameters.studioLifecycleConfigName}`
}

export interface NotebookInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  notebookInstanceName: string
}
export type NotebookInstanceArn = `arn:${string}:sagemaker:${string}:${string}:notebook-instance/${string}`
export function notebookInstanceArn(parameters: NotebookInstanceArnParameters): NotebookInstanceArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:notebook-instance/${parameters.notebookInstanceName}`
}

export interface NotebookInstanceLifecycleConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  notebookInstanceLifecycleConfigName: string
}
export type NotebookInstanceLifecycleConfigArn = `arn:${string}:sagemaker:${string}:${string}:notebook-instance-lifecycle-config/${string}`
export function notebookInstanceLifecycleConfigArn(parameters: NotebookInstanceLifecycleConfigArnParameters): NotebookInstanceLifecycleConfigArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:notebook-instance-lifecycle-config/${parameters.notebookInstanceLifecycleConfigName}`
}

export interface CodeRepositoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  codeRepositoryName: string
}
export type CodeRepositoryArn = `arn:${string}:sagemaker:${string}:${string}:code-repository/${string}`
export function codeRepositoryArn(parameters: CodeRepositoryArnParameters): CodeRepositoryArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:code-repository/${parameters.codeRepositoryName}`
}

export interface ImageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageName: string
}
export type ImageArn = `arn:${string}:sagemaker:${string}:${string}:image/${string}`
export function imageArn(parameters: ImageArnParameters): ImageArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:image/${parameters.imageName}`
}

export interface ImageVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageName: string
  version: string
}
export type ImageVersionArn = `arn:${string}:sagemaker:${string}:${string}:image-version/${string}/${string}`
export function imageVersionArn(parameters: ImageVersionArnParameters): ImageVersionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:image-version/${parameters.imageName}/${parameters.version}`
}

export interface AlgorithmArnParameters {
  partition?: string | undefined
  region: string
  account: string
  algorithmName: string
}
export type AlgorithmArn = `arn:${string}:sagemaker:${string}:${string}:algorithm/${string}`
export function algorithmArn(parameters: AlgorithmArnParameters): AlgorithmArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:algorithm/${parameters.algorithmName}`
}

export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterId: string
}
export type ClusterArn = `arn:${string}:sagemaker:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:cluster/${parameters.clusterId}`
}

export interface TrainingJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trainingJobName: string
}
export type TrainingJobArn = `arn:${string}:sagemaker:${string}:${string}:training-job/${string}`
export function trainingJobArn(parameters: TrainingJobArnParameters): TrainingJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:training-job/${parameters.trainingJobName}`
}

export interface ProcessingJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  processingJobName: string
}
export type ProcessingJobArn = `arn:${string}:sagemaker:${string}:${string}:processing-job/${string}`
export function processingJobArn(parameters: ProcessingJobArnParameters): ProcessingJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:processing-job/${parameters.processingJobName}`
}

export interface HyperParameterTuningJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hyperParameterTuningJobName: string
}
export type HyperParameterTuningJobArn = `arn:${string}:sagemaker:${string}:${string}:hyper-parameter-tuning-job/${string}`
export function hyperParameterTuningJobArn(parameters: HyperParameterTuningJobArnParameters): HyperParameterTuningJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:hyper-parameter-tuning-job/${parameters.hyperParameterTuningJobName}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
}
export type ProjectArn = `arn:${string}:sagemaker:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:project/${parameters.projectName}`
}

export interface ModelPackageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelPackageName: string
}
export type ModelPackageArn = `arn:${string}:sagemaker:${string}:${string}:model-package/${string}`
export function modelPackageArn(parameters: ModelPackageArnParameters): ModelPackageArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-package/${parameters.modelPackageName}`
}

export interface ModelPackageGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelPackageGroupName: string
}
export type ModelPackageGroupArn = `arn:${string}:sagemaker:${string}:${string}:model-package-group/${string}`
export function modelPackageGroupArn(parameters: ModelPackageGroupArnParameters): ModelPackageGroupArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-package-group/${parameters.modelPackageGroupName}`
}

export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelName: string
}
export type ModelArn = `arn:${string}:sagemaker:${string}:${string}:model/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model/${parameters.modelName}`
}

export interface EndpointConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  endpointConfigName: string
}
export type EndpointConfigArn = `arn:${string}:sagemaker:${string}:${string}:endpoint-config/${string}`
export function endpointConfigArn(parameters: EndpointConfigArnParameters): EndpointConfigArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:endpoint-config/${parameters.endpointConfigName}`
}

export interface EndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  endpointName: string
}
export type EndpointArn = `arn:${string}:sagemaker:${string}:${string}:endpoint/${string}`
export function endpointArn(parameters: EndpointArnParameters): EndpointArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:endpoint/${parameters.endpointName}`
}

export interface InferenceComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inferenceComponentName: string
}
export type InferenceComponentArn = `arn:${string}:sagemaker:${string}:${string}:inference-component/${string}`
export function inferenceComponentArn(parameters: InferenceComponentArnParameters): InferenceComponentArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:inference-component/${parameters.inferenceComponentName}`
}

export interface TransformJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transformJobName: string
}
export type TransformJobArn = `arn:${string}:sagemaker:${string}:${string}:transform-job/${string}`
export function transformJobArn(parameters: TransformJobArnParameters): TransformJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:transform-job/${parameters.transformJobName}`
}

export interface CompilationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  compilationJobName: string
}
export type CompilationJobArn = `arn:${string}:sagemaker:${string}:${string}:compilation-job/${string}`
export function compilationJobArn(parameters: CompilationJobArnParameters): CompilationJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:compilation-job/${parameters.compilationJobName}`
}

export interface OptimizationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  optimizationJobName: string
}
export type OptimizationJobArn = `arn:${string}:sagemaker:${string}:${string}:optimization-job/${string}`
export function optimizationJobArn(parameters: OptimizationJobArnParameters): OptimizationJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:optimization-job/${parameters.optimizationJobName}`
}

export interface AutomlJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  autoMlJobJobName: string
}
export type AutomlJobArn = `arn:${string}:sagemaker:${string}:${string}:automl-job/${string}`
export function automlJobArn(parameters: AutomlJobArnParameters): AutomlJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:automl-job/${parameters.autoMlJobJobName}`
}

export interface MonitoringScheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  monitoringScheduleName: string
}
export type MonitoringScheduleArn = `arn:${string}:sagemaker:${string}:${string}:monitoring-schedule/${string}`
export function monitoringScheduleArn(parameters: MonitoringScheduleArnParameters): MonitoringScheduleArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:monitoring-schedule/${parameters.monitoringScheduleName}`
}

export interface MonitoringScheduleAlertArnParameters {
  partition?: string | undefined
  region: string
  account: string
  monitoringScheduleName: string
  monitoringScheduleAlertName: string
}
export type MonitoringScheduleAlertArn = `arn:${string}:sagemaker:${string}:${string}:monitoring-schedule/${string}/alert/${string}`
export function monitoringScheduleAlertArn(parameters: MonitoringScheduleAlertArnParameters): MonitoringScheduleAlertArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:monitoring-schedule/${parameters.monitoringScheduleName}/alert/${parameters.monitoringScheduleAlertName}`
}

export interface DataQualityJobDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataQualityJobDefinitionName: string
}
export type DataQualityJobDefinitionArn = `arn:${string}:sagemaker:${string}:${string}:data-quality-job-definition/${string}`
export function dataQualityJobDefinitionArn(parameters: DataQualityJobDefinitionArnParameters): DataQualityJobDefinitionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:data-quality-job-definition/${parameters.dataQualityJobDefinitionName}`
}

export interface ModelQualityJobDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelQualityJobDefinitionName: string
}
export type ModelQualityJobDefinitionArn = `arn:${string}:sagemaker:${string}:${string}:model-quality-job-definition/${string}`
export function modelQualityJobDefinitionArn(parameters: ModelQualityJobDefinitionArnParameters): ModelQualityJobDefinitionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-quality-job-definition/${parameters.modelQualityJobDefinitionName}`
}

export interface ModelBiasJobDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelBiasJobDefinitionName: string
}
export type ModelBiasJobDefinitionArn = `arn:${string}:sagemaker:${string}:${string}:model-bias-job-definition/${string}`
export function modelBiasJobDefinitionArn(parameters: ModelBiasJobDefinitionArnParameters): ModelBiasJobDefinitionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-bias-job-definition/${parameters.modelBiasJobDefinitionName}`
}

export interface ModelExplainabilityJobDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelExplainabilityJobDefinitionName: string
}
export type ModelExplainabilityJobDefinitionArn = `arn:${string}:sagemaker:${string}:${string}:model-explainability-job-definition/${string}`
export function modelExplainabilityJobDefinitionArn(parameters: ModelExplainabilityJobDefinitionArnParameters): ModelExplainabilityJobDefinitionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-explainability-job-definition/${parameters.modelExplainabilityJobDefinitionName}`
}

export interface ExperimentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  experimentName: string
}
export type ExperimentArn = `arn:${string}:sagemaker:${string}:${string}:experiment/${string}`
export function experimentArn(parameters: ExperimentArnParameters): ExperimentArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:experiment/${parameters.experimentName}`
}

export interface ExperimentTrialArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trialName: string
}
export type ExperimentTrialArn = `arn:${string}:sagemaker:${string}:${string}:experiment-trial/${string}`
export function experimentTrialArn(parameters: ExperimentTrialArnParameters): ExperimentTrialArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:experiment-trial/${parameters.trialName}`
}

export interface ExperimentTrialComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trialComponentName: string
}
export type ExperimentTrialComponentArn = `arn:${string}:sagemaker:${string}:${string}:experiment-trial-component/${string}`
export function experimentTrialComponentArn(parameters: ExperimentTrialComponentArnParameters): ExperimentTrialComponentArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:experiment-trial-component/${parameters.trialComponentName}`
}

export interface FeatureGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  featureGroupName: string
}
export type FeatureGroupArn = `arn:${string}:sagemaker:${string}:${string}:feature-group/${string}`
export function featureGroupArn(parameters: FeatureGroupArnParameters): FeatureGroupArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:feature-group/${parameters.featureGroupName}`
}

export interface PipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
}
export type PipelineArn = `arn:${string}:sagemaker:${string}:${string}:pipeline/${string}`
export function pipelineArn(parameters: PipelineArnParameters): PipelineArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:pipeline/${parameters.pipelineName}`
}

export interface PipelineExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
  randomString: string
}
export type PipelineExecutionArn = `arn:${string}:sagemaker:${string}:${string}:pipeline/${string}/execution/${string}`
export function pipelineExecutionArn(parameters: PipelineExecutionArnParameters): PipelineExecutionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:pipeline/${parameters.pipelineName}/execution/${parameters.randomString}`
}

export interface ArtifactArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hashOfArtifactSource: string
}
export type ArtifactArn = `arn:${string}:sagemaker:${string}:${string}:artifact/${string}`
export function artifactArn(parameters: ArtifactArnParameters): ArtifactArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:artifact/${parameters.hashOfArtifactSource}`
}

export interface ContextArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contextName: string
}
export type ContextArn = `arn:${string}:sagemaker:${string}:${string}:context/${string}`
export function contextArn(parameters: ContextArnParameters): ContextArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:context/${parameters.contextName}`
}

export interface ActionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  actionName: string
}
export type ActionArn = `arn:${string}:sagemaker:${string}:${string}:action/${string}`
export function actionArn(parameters: ActionArnParameters): ActionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:action/${parameters.actionName}`
}

export interface LineageGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  lineageGroupName: string
}
export type LineageGroupArn = `arn:${string}:sagemaker:${string}:${string}:lineage-group/${string}`
export function lineageGroupArn(parameters: LineageGroupArnParameters): LineageGroupArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:lineage-group/${parameters.lineageGroupName}`
}

export interface ModelCardArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelCardName: string
}
export type ModelCardArn = `arn:${string}:sagemaker:${string}:${string}:model-card/${string}`
export function modelCardArn(parameters: ModelCardArnParameters): ModelCardArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-card/${parameters.modelCardName}`
}

export interface ModelCardExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelCardName: string
  exportJobName: string
}
export type ModelCardExportJobArn = `arn:${string}:sagemaker:${string}:${string}:model-card/${string}/export-job/${string}`
export function modelCardExportJobArn(parameters: ModelCardExportJobArnParameters): ModelCardExportJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:model-card/${parameters.modelCardName}/export-job/${parameters.exportJobName}`
}

export interface SharedModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sharedModelId: string
}
export type SharedModelArn = `arn:${string}:sagemaker:${string}:${string}:shared-model/${string}`
export function sharedModelArn(parameters: SharedModelArnParameters): SharedModelArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:shared-model/${parameters.sharedModelId}`
}

export interface SharedModelEventArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventId: string
}
export type SharedModelEventArn = `arn:${string}:sagemaker:${string}:${string}:shared-model-event/${string}`
export function sharedModelEventArn(parameters: SharedModelEventArnParameters): SharedModelEventArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:shared-model-event/${parameters.eventId}`
}

export interface SagemakerCatalogArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceCatalogName: string
}
export type SagemakerCatalogArn = `arn:${string}:sagemaker:${string}:${string}:sagemaker-catalog/${string}`
export function sagemakerCatalogArn(parameters: SagemakerCatalogArnParameters): SagemakerCatalogArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:sagemaker-catalog/${parameters.resourceCatalogName}`
}

export interface MlflowTrackingServerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  mlflowTrackingServerName: string
}
export type MlflowTrackingServerArn = `arn:${string}:sagemaker:${string}:${string}:mlflow-tracking-server/${string}`
export function mlflowTrackingServerArn(parameters: MlflowTrackingServerArnParameters): MlflowTrackingServerArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:mlflow-tracking-server/${parameters.mlflowTrackingServerName}`
}