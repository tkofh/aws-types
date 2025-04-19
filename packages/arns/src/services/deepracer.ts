import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CarArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CarArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'car',
  `arn:${string}:deepracer:${string}:${string}:car/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'car' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CarArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:car/${this.resourceId}` as const
  }
}
export type { CarArn }
export function carArn<Partition extends ArnPartition = 'aws'>(
  parameters: CarArnParameters<Partition>,
) {
  return new CarArn<Partition>(parameters)
}

export interface EvaluationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EvaluationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'evaluation_job',
  `arn:${string}:deepracer:${string}:${string}:evaluation_job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'evaluation_job' as const
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
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:evaluation_job/${this.resourceId}` as const
  }
}
export type { EvaluationJobArn }
export function evaluationJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: EvaluationJobArnParameters<Partition>,
) {
  return new EvaluationJobArn<Partition>(parameters)
}

export interface LeaderboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
}
class LeaderboardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'leaderboard',
  `arn:${string}:deepracer:${string}::leaderboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'leaderboard' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
  constructor(parameters: LeaderboardArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}::leaderboard/${this.resourceId}` as const
  }
}
export type { LeaderboardArn }
export function leaderboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: LeaderboardArnParameters<Partition>,
) {
  return new LeaderboardArn<Partition>(parameters)
}

export interface LeaderboardEvaluationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class LeaderboardEvaluationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'leaderboard_evaluation_job',
  `arn:${string}:deepracer:${string}:${string}:leaderboard_evaluation_job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'leaderboard_evaluation_job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: LeaderboardEvaluationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:leaderboard_evaluation_job/${this.resourceId}` as const
  }
}
export type { LeaderboardEvaluationJobArn }
export function leaderboardEvaluationJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LeaderboardEvaluationJobArnParameters<Partition>) {
  return new LeaderboardEvaluationJobArn<Partition>(parameters)
}

export interface ReinforcementLearningModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ReinforcementLearningModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reinforcement_learning_model',
  `arn:${string}:deepracer:${string}:${string}:model/reinforcement_learning/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reinforcement_learning_model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ReinforcementLearningModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:model/reinforcement_learning/${this.resourceId}` as const
  }
}
export type { ReinforcementLearningModelArn }
export function reinforcementLearningModelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ReinforcementLearningModelArnParameters<Partition>) {
  return new ReinforcementLearningModelArn<Partition>(parameters)
}

export interface TrackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
}
class TrackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'track',
  `arn:${string}:deepracer:${string}::track/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'track' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
  constructor(parameters: TrackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}::track/${this.resourceId}` as const
  }
}
export type { TrackArn }
export function trackArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrackArnParameters<Partition>,
) {
  return new TrackArn<Partition>(parameters)
}

export interface TrainingJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TrainingJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'training_job',
  `arn:${string}:deepracer:${string}:${string}:training_job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'training_job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TrainingJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:training_job/${this.resourceId}` as const
  }
}
export type { TrainingJobArn }
export function trainingJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrainingJobArnParameters<Partition>,
) {
  return new TrainingJobArn<Partition>(parameters)
}
