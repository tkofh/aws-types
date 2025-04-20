import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'account',
  `arn:${string}:quicksight:${string}:${string}:account/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'account' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:account/${this.idResource}` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:quicksight:${string}:${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:user/${this.idResource}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:quicksight:${string}:${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:group/${this.idResource}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface AnalysisArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AnalysisArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'analysis',
  `arn:${string}:quicksight:${string}:${string}:analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'analysis' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AnalysisArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:analysis/${this.idResource}` as const
  }
}
export type { AnalysisArn }
export function analysisArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnalysisArnParameters<Partition>,
) {
  return new AnalysisArn<Partition>(parameters)
}

export interface DashboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class DashboardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dashboard',
  `arn:${string}:quicksight:${string}:${string}:dashboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dashboard' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: DashboardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dashboard/${this.idResource}` as const
  }
}
export type { DashboardArn }
export function dashboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardArnParameters<Partition>,
) {
  return new DashboardArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'template',
  `arn:${string}:quicksight:${string}:${string}:template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:template/${this.idResource}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface ConnectionVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConnectionVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpcconnection',
  `arn:${string}:quicksight:${string}:${string}:vpcConnection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpcconnection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConnectionVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:vpcConnection/${this.idResource}` as const
  }
}
export type { ConnectionVpcArn }
export function connectionVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionVpcArnParameters<Partition>,
) {
  return new ConnectionVpcArn<Partition>(parameters)
}

export interface JobExportBundleAssetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobExportBundleAssetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assetBundleExportJob',
  `arn:${string}:quicksight:${string}:${string}:asset-bundle-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assetBundleExportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobExportBundleAssetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:asset-bundle-export-job/${this.idResource}` as const
  }
}
export type { JobExportBundleAssetArn }
export function jobExportBundleAssetArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobExportBundleAssetArnParameters<Partition>,
) {
  return new JobExportBundleAssetArn<Partition>(parameters)
}

export interface JobImportBundleAssetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobImportBundleAssetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assetBundleImportJob',
  `arn:${string}:quicksight:${string}:${string}:asset-bundle-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assetBundleImportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobImportBundleAssetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:asset-bundle-import-job/${this.idResource}` as const
  }
}
export type { JobImportBundleAssetArn }
export function jobImportBundleAssetArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportBundleAssetArnParameters<Partition>,
) {
  return new JobImportBundleAssetArn<Partition>(parameters)
}

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datasource',
  `arn:${string}:quicksight:${string}:${string}:datasource/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:datasource/${this.idResource}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:quicksight:${string}:${string}:dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dataset/${this.idResource}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface IngestionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idResource: string
}
class IngestionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ingestion',
  `arn:${string}:quicksight:${string}:${string}:dataset/${string}/ingestion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idResource: string
  constructor(parameters: IngestionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetData = parameters.idSetData
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dataset/${this.idSetData}/ingestion/${this.idResource}` as const
  }
}
export type { IngestionArn }
export function ingestionArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestionArnParameters<Partition>,
) {
  return new IngestionArn<Partition>(parameters)
}

export interface ScheduleRefreshArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idResource: string
}
class ScheduleRefreshArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'refreshschedule',
  `arn:${string}:quicksight:${string}:${string}:dataset/${string}/refresh-schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'refreshschedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idResource: string
  constructor(parameters: ScheduleRefreshArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetData = parameters.idSetData
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dataset/${this.idSetData}/refresh-schedule/${this.idResource}` as const
  }
}
export type { ScheduleRefreshArn }
export function scheduleRefreshArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleRefreshArnParameters<Partition>,
) {
  return new ScheduleRefreshArn<Partition>(parameters)
}

export interface ThemeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ThemeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'theme',
  `arn:${string}:quicksight:${string}:${string}:theme/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'theme' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ThemeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:theme/${this.idResource}` as const
  }
}
export type { ThemeArn }
export function themeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThemeArnParameters<Partition>,
) {
  return new ThemeArn<Partition>(parameters)
}

export interface AssignmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class AssignmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'assignment',
  `arn:${string}:quicksight::${string}:assignment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assignment' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AssignmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight::${this.account}:assignment/${this.idResource}` as const
  }
}
export type { AssignmentArn }
export function assignmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssignmentArnParameters<Partition>,
) {
  return new AssignmentArn<Partition>(parameters)
}

export interface CustomizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class CustomizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customization',
  `arn:${string}:quicksight:${string}:${string}:customization/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customization' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CustomizationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:customization/${this.idResource}` as const
  }
}
export type { CustomizationArn }
export function customizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomizationArnParameters<Partition>,
) {
  return new CustomizationArn<Partition>(parameters)
}

export interface NamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:quicksight:${string}:${string}:namespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:namespace/${this.idResource}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface FolderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class FolderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'folder',
  `arn:${string}:quicksight:${string}:${string}:folder/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'folder' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: FolderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:folder/${this.idResource}` as const
  }
}
export type { FolderArn }
export function folderArn<Partition extends ArnPartition = 'aws'>(
  parameters: FolderArnParameters<Partition>,
) {
  return new FolderArn<Partition>(parameters)
}

export interface TemplateCustomizationEmailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TemplateCustomizationEmailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'emailCustomizationTemplate',
  `arn:${string}:quicksight:${string}:${string}:email-customization-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'emailCustomizationTemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TemplateCustomizationEmailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:email-customization-template/${this.idResource}` as const
  }
}
export type { TemplateCustomizationEmailArn }
export function templateCustomizationEmailArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateCustomizationEmailArnParameters<Partition>) {
  return new TemplateCustomizationEmailArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:quicksight:${string}:${string}:topic/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:topic/${this.idResource}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}

export interface JobSnapshotDashboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDashboard: string
  readonly idResource: string
}
class JobSnapshotDashboardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dashboardSnapshotJob',
  `arn:${string}:quicksight:${string}:${string}:dashboard/${string}/snapshot-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dashboardSnapshotJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDashboard: string
  readonly idResource: string
  constructor(parameters: JobSnapshotDashboardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDashboard = parameters.idDashboard
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dashboard/${this.idDashboard}/snapshot-job/${this.idResource}` as const
  }
}
export type { JobSnapshotDashboardArn }
export function jobSnapshotDashboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobSnapshotDashboardArnParameters<Partition>,
) {
  return new JobSnapshotDashboardArn<Partition>(parameters)
}
