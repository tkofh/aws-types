import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:forecast:${string}:${string}:dataset/${string}`
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
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:dataset/${this.idResource}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface GroupSetDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GroupSetDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetGroup',
  `arn:${string}:forecast:${string}:${string}:dataset-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupSetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:dataset-group/${this.idResource}` as const
  }
}
export type { GroupSetDataArn }
export function groupSetDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSetDataArnParameters<Partition>,
) {
  return new GroupSetDataArn<Partition>(parameters)
}

export interface JobImportSetDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobImportSetDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetImportJob',
  `arn:${string}:forecast:${string}:${string}:dataset-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetImportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobImportSetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:dataset-import-job/${this.idResource}` as const
  }
}
export type { JobImportSetDataArn }
export function jobImportSetDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportSetDataArnParameters<Partition>,
) {
  return new JobImportSetDataArn<Partition>(parameters)
}

export interface AlgorithmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idResource: string
}
class AlgorithmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'algorithm',
  `arn:${string}:forecast:::algorithm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'algorithm' as const
  readonly partition: string
  readonly idResource: string
  constructor(parameters: AlgorithmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:::algorithm/${this.idResource}` as const
  }
}
export type { AlgorithmArn }
export function algorithmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlgorithmArnParameters<Partition>,
) {
  return new AlgorithmArn<Partition>(parameters)
}

export interface PredictorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class PredictorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'predictor',
  `arn:${string}:forecast:${string}:${string}:predictor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'predictor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PredictorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:predictor/${this.idResource}` as const
  }
}
export type { PredictorArn }
export function predictorArn<Partition extends ArnPartition = 'aws'>(
  parameters: PredictorArnParameters<Partition>,
) {
  return new PredictorArn<Partition>(parameters)
}

export interface JobExportBacktestPredictorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobExportBacktestPredictorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'predictorBacktestExportJob',
  `arn:${string}:forecast:${string}:${string}:predictor-backtest-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'predictorBacktestExportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobExportBacktestPredictorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:predictor-backtest-export-job/${this.idResource}` as const
  }
}
export type { JobExportBacktestPredictorArn }
export function jobExportBacktestPredictorArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobExportBacktestPredictorArnParameters<Partition>) {
  return new JobExportBacktestPredictorArn<Partition>(parameters)
}

export interface ForecastArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ForecastArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'forecast',
  `arn:${string}:forecast:${string}:${string}:forecast/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'forecast' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ForecastArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:forecast/${this.idResource}` as const
  }
}
export type { ForecastArn }
export function forecastArn<Partition extends ArnPartition = 'aws'>(
  parameters: ForecastArnParameters<Partition>,
) {
  return new ForecastArn<Partition>(parameters)
}

export interface ExportForecastArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ExportForecastArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'forecastExport',
  `arn:${string}:forecast:${string}:${string}:forecast-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'forecastExport' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ExportForecastArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:forecast-export-job/${this.idResource}` as const
  }
}
export type { ExportForecastArn }
export function exportForecastArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportForecastArnParameters<Partition>,
) {
  return new ExportForecastArn<Partition>(parameters)
}

export interface ExplainabilityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ExplainabilityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'explainability',
  `arn:${string}:forecast:${string}:${string}:explainability/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'explainability' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ExplainabilityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:explainability/${this.idResource}` as const
  }
}
export type { ExplainabilityArn }
export function explainabilityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExplainabilityArnParameters<Partition>,
) {
  return new ExplainabilityArn<Partition>(parameters)
}

export interface ExportExplainabilityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ExportExplainabilityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'explainabilityExport',
  `arn:${string}:forecast:${string}:${string}:explainability-export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'explainabilityExport' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ExportExplainabilityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:explainability-export/${this.idResource}` as const
  }
}
export type { ExportExplainabilityArn }
export function exportExplainabilityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportExplainabilityArnParameters<Partition>,
) {
  return new ExportExplainabilityArn<Partition>(parameters)
}

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'monitor',
  `arn:${string}:forecast:${string}:${string}:monitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: MonitorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:monitor/${this.idResource}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorArnParameters<Partition>,
) {
  return new MonitorArn<Partition>(parameters)
}

export interface AnalysisIfWhatArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AnalysisIfWhatArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'whatIfAnalysis',
  `arn:${string}:forecast:${string}:${string}:what-if-analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'whatIfAnalysis' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AnalysisIfWhatArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:what-if-analysis/${this.idResource}` as const
  }
}
export type { AnalysisIfWhatArn }
export function analysisIfWhatArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnalysisIfWhatArnParameters<Partition>,
) {
  return new AnalysisIfWhatArn<Partition>(parameters)
}

export interface ForecastIfWhatArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ForecastIfWhatArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'whatIfForecast',
  `arn:${string}:forecast:${string}:${string}:what-if-forecast/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'whatIfForecast' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ForecastIfWhatArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:what-if-forecast/${this.idResource}` as const
  }
}
export type { ForecastIfWhatArn }
export function forecastIfWhatArn<Partition extends ArnPartition = 'aws'>(
  parameters: ForecastIfWhatArnParameters<Partition>,
) {
  return new ForecastIfWhatArn<Partition>(parameters)
}

export interface ExportForecastIfWhatArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ExportForecastIfWhatArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'whatIfForecastExport',
  `arn:${string}:forecast:${string}:${string}:what-if-forecast-export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'whatIfForecastExport' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ExportForecastIfWhatArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:what-if-forecast-export/${this.idResource}` as const
  }
}
export type { ExportForecastIfWhatArn }
export function exportForecastIfWhatArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportForecastIfWhatArnParameters<Partition>,
) {
  return new ExportForecastIfWhatArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:forecast:${string}:${string}:forecast-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:forecast-endpoint/${this.idResource}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}
