import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ActivityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly activityName: string
}
class ActivityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'activity',
  `arn:${string}:states:${string}:${string}:activity:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'activity' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly activityName: string
  constructor(parameters: ActivityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.activityName = parameters.activityName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:activity:${this.activityName}` as const
  }
}
export type { ActivityArn }
export function activityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActivityArnParameters<Partition>,
) {
  return new ActivityArn<Partition>(parameters)
}

export interface ExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
}
class ExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'execution',
  `arn:${string}:states:${string}:${string}:execution:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
  constructor(parameters: ExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.executionId = parameters.executionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:execution:${this.stateMachineName}:${this.executionId}` as const
  }
}
export type { ExecutionArn }
export function executionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionArnParameters<Partition>,
) {
  return new ExecutionArn<Partition>(parameters)
}

export interface ExpressArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
  readonly expressId: string
}
class ExpressArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'express',
  `arn:${string}:states:${string}:${string}:express:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'express' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
  readonly expressId: string
  constructor(parameters: ExpressArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.executionId = parameters.executionId
    this.expressId = parameters.expressId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:express:${this.stateMachineName}:${this.executionId}:${this.expressId}` as const
  }
}
export type { ExpressArn }
export function expressArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExpressArnParameters<Partition>,
) {
  return new ExpressArn<Partition>(parameters)
}

export interface StateMachineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
}
class StateMachineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'statemachine',
  `arn:${string}:states:${string}:${string}:stateMachine:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'statemachine' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  constructor(parameters: StateMachineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.stateMachineName}` as const
  }
}
export type { StateMachineArn }
export function stateMachineArn<Partition extends ArnPartition = 'aws'>(
  parameters: StateMachineArnParameters<Partition>,
) {
  return new StateMachineArn<Partition>(parameters)
}

export interface StateMachineVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineVersionId: string
}
class StateMachineVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'statemachineversion',
  `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'statemachineversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineVersionId: string
  constructor(parameters: StateMachineVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.stateMachineVersionId = parameters.stateMachineVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.stateMachineName}:${this.stateMachineVersionId}` as const
  }
}
export type { StateMachineVersionArn }
export function stateMachineVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: StateMachineVersionArnParameters<Partition>,
) {
  return new StateMachineVersionArn<Partition>(parameters)
}

export interface StateMachineAliasArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineAliasName: string
}
class StateMachineAliasArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'statemachinealias',
  `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'statemachinealias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineAliasName: string
  constructor(parameters: StateMachineAliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.stateMachineAliasName = parameters.stateMachineAliasName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.stateMachineName}:${this.stateMachineAliasName}` as const
  }
}
export type { StateMachineAliasArn }
export function stateMachineAliasArn<Partition extends ArnPartition = 'aws'>(
  parameters: StateMachineAliasArnParameters<Partition>,
) {
  return new StateMachineAliasArn<Partition>(parameters)
}

export interface MapRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly mapRunId: string
}
class MapRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'maprun',
  `arn:${string}:states:${string}:${string}:mapRun:${string}/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'maprun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly mapRunId: string
  constructor(parameters: MapRunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.mapRunLabel = parameters.mapRunLabel
    this.mapRunId = parameters.mapRunId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:mapRun:${this.stateMachineName}/${this.mapRunLabel}:${this.mapRunId}` as const
  }
}
export type { MapRunArn }
export function mapRunArn<Partition extends ArnPartition = 'aws'>(
  parameters: MapRunArnParameters<Partition>,
) {
  return new MapRunArn<Partition>(parameters)
}

export interface LabelledExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
}
class LabelledExecutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'labelled execution',
  `arn:${string}:states:${string}:${string}:execution:${string}/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'labelled execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
  constructor(parameters: LabelledExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.mapRunLabel = parameters.mapRunLabel
    this.executionId = parameters.executionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:execution:${this.stateMachineName}/${this.mapRunLabel}:${this.executionId}` as const
  }
}
export type { LabelledExecutionArn }
export function labelledExecutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: LabelledExecutionArnParameters<Partition>,
) {
  return new LabelledExecutionArn<Partition>(parameters)
}

export interface LabelledExpressArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
  readonly expressId: string
}
class LabelledExpressArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'labelled express',
  `arn:${string}:states:${string}:${string}:express:${string}/${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'labelled express' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
  readonly expressId: string
  constructor(parameters: LabelledExpressArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.mapRunLabel = parameters.mapRunLabel
    this.executionId = parameters.executionId
    this.expressId = parameters.expressId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:express:${this.stateMachineName}/${this.mapRunLabel}:${this.executionId}:${this.expressId}` as const
  }
}
export type { LabelledExpressArn }
export function labelledExpressArn<Partition extends ArnPartition = 'aws'>(
  parameters: LabelledExpressArnParameters<Partition>,
) {
  return new LabelledExpressArn<Partition>(parameters)
}
