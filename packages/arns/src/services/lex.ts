import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
}
class BotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bot',
  `arn:${string}:lex:${string}:${string}:bot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  constructor(parameters: BotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBot = parameters.nameBot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot:${this.nameBot}` as const
  }
}
export type { BotArn }
export function botArn<Partition extends ArnPartition = 'aws'>(
  parameters: BotArnParameters<Partition>,
) {
  return new BotArn<Partition>(parameters)
}

export interface VersionBotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  readonly versionBot: string
}
class VersionBotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bot version',
  `arn:${string}:lex:${string}:${string}:bot:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bot version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  readonly versionBot: string
  constructor(parameters: VersionBotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBot = parameters.nameBot
    this.versionBot = parameters.versionBot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot:${this.nameBot}:${this.versionBot}` as const
  }
}
export type { VersionBotArn }
export function versionBotArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionBotArnParameters<Partition>,
) {
  return new VersionBotArn<Partition>(parameters)
}

export interface AliasBotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  readonly aliasBot: string
}
class AliasBotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bot alias',
  `arn:${string}:lex:${string}:${string}:bot:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bot alias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  readonly aliasBot: string
  constructor(parameters: AliasBotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBot = parameters.nameBot
    this.aliasBot = parameters.aliasBot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot:${this.nameBot}:${this.aliasBot}` as const
  }
}
export type { AliasBotArn }
export function aliasBotArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasBotArnParameters<Partition>,
) {
  return new AliasBotArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  readonly aliasBot: string
  readonly nameChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:lex:${string}:${string}:bot-channel:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBot: string
  readonly aliasBot: string
  readonly nameChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBot = parameters.nameBot
    this.aliasBot = parameters.aliasBot
    this.nameChannel = parameters.nameChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot-channel:${this.nameBot}:${this.aliasBot}:${this.nameChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface VersionIntentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIntent: string
  readonly versionIntent: string
}
class VersionIntentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'intent version',
  `arn:${string}:lex:${string}:${string}:intent:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'intent version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIntent: string
  readonly versionIntent: string
  constructor(parameters: VersionIntentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameIntent = parameters.nameIntent
    this.versionIntent = parameters.versionIntent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:intent:${this.nameIntent}:${this.versionIntent}` as const
  }
}
export type { VersionIntentArn }
export function versionIntentArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionIntentArnParameters<Partition>,
) {
  return new VersionIntentArn<Partition>(parameters)
}

export interface VersionTypeSlotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSlot: string
  readonly versionSlot: string
}
class VersionTypeSlotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'slottype version',
  `arn:${string}:lex:${string}:${string}:slottype:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'slottype version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSlot: string
  readonly versionSlot: string
  constructor(parameters: VersionTypeSlotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSlot = parameters.nameSlot
    this.versionSlot = parameters.versionSlot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:slottype:${this.nameSlot}:${this.versionSlot}` as const
  }
}
export type { VersionTypeSlotArn }
export function versionTypeSlotArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionTypeSlotArnParameters<Partition>,
) {
  return new VersionTypeSlotArn<Partition>(parameters)
}

export interface SetTestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetTest: string
}
class SetTestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'test set',
  `arn:${string}:lex:${string}:${string}:test-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'test set' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetTest: string
  constructor(parameters: SetTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetTest = parameters.idSetTest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:test-set/${this.idSetTest}` as const
  }
}
export type { SetTestArn }
export function setTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetTestArnParameters<Partition>,
) {
  return new SetTestArn<Partition>(parameters)
}
