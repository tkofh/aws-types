import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeApplication: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeApplication: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeApplication = parameters.typeApplication
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-sap:${this.region}:${this.account}:${this.typeApplication}/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeApplication: string
  readonly idApplication: string
  readonly idComponent: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'component',
  `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}/COMPONENT/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeApplication: string
  readonly idApplication: string
  readonly idComponent: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeApplication = parameters.typeApplication
    this.idApplication = parameters.idApplication
    this.idComponent = parameters.idComponent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-sap:${this.region}:${this.account}:${this.typeApplication}/${this.idApplication}/COMPONENT/${this.idComponent}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentArnParameters<Partition>,
) {
  return new ComponentArn<Partition>(parameters)
}

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeApplication: string
  readonly idApplication: string
  readonly idDatabase: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'database',
  `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}/DB/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeApplication: string
  readonly idApplication: string
  readonly idDatabase: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeApplication = parameters.typeApplication
    this.idApplication = parameters.idApplication
    this.idDatabase = parameters.idDatabase
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-sap:${this.region}:${this.account}:${this.typeApplication}/${this.idApplication}/DB/${this.idDatabase}` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseArnParameters<Partition>,
) {
  return new DatabaseArn<Partition>(parameters)
}
