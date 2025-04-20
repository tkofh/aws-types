import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ActivityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameActivity: string
}
class ActivityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'activity',
  `arn:${string}:states:${string}:${string}:activity:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'activity' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameActivity: string
  constructor(parameters: ActivityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameActivity = parameters.nameActivity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:activity:${this.nameActivity}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly idExecution: string
}
class ExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'execution',
  `arn:${string}:states:${string}:${string}:execution:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'execution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly idExecution: string
  constructor(parameters: ExecutionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.idExecution = parameters.idExecution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:execution:${this.nameMachineState}:${this.idExecution}` as const
  }
}
export type { ExecutionArn }
export function executionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionArnParameters<Partition>,
) {
  return new ExecutionArn<Partition>(parameters)
}

export interface ExpressArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly idExecution: string
  readonly idExpress: string
}
class ExpressArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'express',
  `arn:${string}:states:${string}:${string}:express:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'express' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly idExecution: string
  readonly idExpress: string
  constructor(parameters: ExpressArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.idExecution = parameters.idExecution
    this.idExpress = parameters.idExpress
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:express:${this.nameMachineState}:${this.idExecution}:${this.idExpress}` as const
  }
}
export type { ExpressArn }
export function expressArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExpressArnParameters<Partition>,
) {
  return new ExpressArn<Partition>(parameters)
}

export interface MachineStateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
}
class MachineStateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'statemachine',
  `arn:${string}:states:${string}:${string}:stateMachine:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'statemachine' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  constructor(parameters: MachineStateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.nameMachineState}` as const
  }
}
export type { MachineStateArn }
export function machineStateArn<Partition extends ArnPartition = 'aws'>(
  parameters: MachineStateArnParameters<Partition>,
) {
  return new MachineStateArn<Partition>(parameters)
}

export interface VersionMachineStateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly idVersionMachineState: string
}
class VersionMachineStateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'statemachineversion',
  `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'statemachineversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly idVersionMachineState: string
  constructor(parameters: VersionMachineStateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.idVersionMachineState = parameters.idVersionMachineState
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.nameMachineState}:${this.idVersionMachineState}` as const
  }
}
export type { VersionMachineStateArn }
export function versionMachineStateArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionMachineStateArnParameters<Partition>,
) {
  return new VersionMachineStateArn<Partition>(parameters)
}

export interface AliasMachineStateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly nameAliasMachineState: string
}
class AliasMachineStateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'statemachinealias',
  `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'statemachinealias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly nameAliasMachineState: string
  constructor(parameters: AliasMachineStateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.nameAliasMachineState = parameters.nameAliasMachineState
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.nameMachineState}:${this.nameAliasMachineState}` as const
  }
}
export type { AliasMachineStateArn }
export function aliasMachineStateArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasMachineStateArnParameters<Partition>,
) {
  return new AliasMachineStateArn<Partition>(parameters)
}

export interface RunMapArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly labelRunMap: string
  readonly idRunMap: string
}
class RunMapArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'maprun',
  `arn:${string}:states:${string}:${string}:mapRun:${string}/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'maprun' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly labelRunMap: string
  readonly idRunMap: string
  constructor(parameters: RunMapArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.labelRunMap = parameters.labelRunMap
    this.idRunMap = parameters.idRunMap
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:mapRun:${this.nameMachineState}/${this.labelRunMap}:${this.idRunMap}` as const
  }
}
export type { RunMapArn }
export function runMapArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunMapArnParameters<Partition>,
) {
  return new RunMapArn<Partition>(parameters)
}

export interface ExecutionLabelledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly labelRunMap: string
  readonly idExecution: string
}
class ExecutionLabelledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'labelled execution',
  `arn:${string}:states:${string}:${string}:execution:${string}/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'labelled execution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly labelRunMap: string
  readonly idExecution: string
  constructor(parameters: ExecutionLabelledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.labelRunMap = parameters.labelRunMap
    this.idExecution = parameters.idExecution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:execution:${this.nameMachineState}/${this.labelRunMap}:${this.idExecution}` as const
  }
}
export type { ExecutionLabelledArn }
export function executionLabelledArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionLabelledArnParameters<Partition>,
) {
  return new ExecutionLabelledArn<Partition>(parameters)
}

export interface ExpressLabelledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly labelRunMap: string
  readonly idExecution: string
  readonly idExpress: string
}
class ExpressLabelledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'labelled express',
  `arn:${string}:states:${string}:${string}:express:${string}/${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'labelled express' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMachineState: string
  readonly labelRunMap: string
  readonly idExecution: string
  readonly idExpress: string
  constructor(parameters: ExpressLabelledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMachineState = parameters.nameMachineState
    this.labelRunMap = parameters.labelRunMap
    this.idExecution = parameters.idExecution
    this.idExpress = parameters.idExpress
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:express:${this.nameMachineState}/${this.labelRunMap}:${this.idExecution}:${this.idExpress}` as const
  }
}
export type { ExpressLabelledArn }
export function expressLabelledArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExpressLabelledArnParameters<Partition>,
) {
  return new ExpressLabelledArn<Partition>(parameters)
}
