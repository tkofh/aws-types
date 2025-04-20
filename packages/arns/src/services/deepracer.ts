import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CarArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class CarArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'car',
  `arn:${string}:deepracer:${string}:${string}:car/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'car' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CarArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:car/${this.idResource}` as const
  }
}
export type { CarArn }
export function carArn<Partition extends ArnPartition = 'aws'>(
  parameters: CarArnParameters<Partition>,
) {
  return new CarArn<Partition>(parameters)
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
  'evaluation_job',
  `arn:${string}:deepracer:${string}:${string}:evaluation_job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'evaluation_job' as const
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
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:evaluation_job/${this.idResource}` as const
  }
}
export type { JobEvaluationArn }
export function jobEvaluationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobEvaluationArnParameters<Partition>,
) {
  return new JobEvaluationArn<Partition>(parameters)
}

export interface LeaderboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idResource: string
}
class LeaderboardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'leaderboard',
  `arn:${string}:deepracer:${string}::leaderboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'leaderboard' as const
  readonly partition: string
  readonly region: string
  readonly idResource: string
  constructor(parameters: LeaderboardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}::leaderboard/${this.idResource}` as const
  }
}
export type { LeaderboardArn }
export function leaderboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: LeaderboardArnParameters<Partition>,
) {
  return new LeaderboardArn<Partition>(parameters)
}

export interface JobEvaluationLeaderboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobEvaluationLeaderboardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'leaderboard_evaluation_job',
  `arn:${string}:deepracer:${string}:${string}:leaderboard_evaluation_job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'leaderboard_evaluation_job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobEvaluationLeaderboardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:leaderboard_evaluation_job/${this.idResource}` as const
  }
}
export type { JobEvaluationLeaderboardArn }
export function jobEvaluationLeaderboardArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobEvaluationLeaderboardArnParameters<Partition>) {
  return new JobEvaluationLeaderboardArn<Partition>(parameters)
}

export interface ModelLearningReinforcementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ModelLearningReinforcementArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reinforcement_learning_model',
  `arn:${string}:deepracer:${string}:${string}:model/reinforcement_learning/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reinforcement_learning_model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ModelLearningReinforcementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:model/reinforcement_learning/${this.idResource}` as const
  }
}
export type { ModelLearningReinforcementArn }
export function modelLearningReinforcementArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ModelLearningReinforcementArnParameters<Partition>) {
  return new ModelLearningReinforcementArn<Partition>(parameters)
}

export interface TrackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idResource: string
}
class TrackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'track',
  `arn:${string}:deepracer:${string}::track/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'track' as const
  readonly partition: string
  readonly region: string
  readonly idResource: string
  constructor(parameters: TrackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}::track/${this.idResource}` as const
  }
}
export type { TrackArn }
export function trackArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrackArnParameters<Partition>,
) {
  return new TrackArn<Partition>(parameters)
}

export interface JobTrainingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobTrainingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'training_job',
  `arn:${string}:deepracer:${string}:${string}:training_job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'training_job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobTrainingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepracer:${this.region}:${this.account}:training_job/${this.idResource}` as const
  }
}
export type { JobTrainingArn }
export function jobTrainingArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobTrainingArnParameters<Partition>,
) {
  return new JobTrainingArn<Partition>(parameters)
}
