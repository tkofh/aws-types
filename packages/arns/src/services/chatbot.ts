import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigurationChatbotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly typeConfiguration: string
  readonly nameConfigurationBotChat: string
}
class ConfigurationChatbotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ChatbotConfiguration',
  `arn:${string}:chatbot::${string}:chat-configuration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ChatbotConfiguration' as const
  readonly partition: string
  readonly account: string
  readonly typeConfiguration: string
  readonly nameConfigurationBotChat: string
  constructor(parameters: ConfigurationChatbotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.typeConfiguration = parameters.typeConfiguration
    this.nameConfigurationBotChat = parameters.nameConfigurationBotChat
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chatbot::${this.account}:chat-configuration/${this.typeConfiguration}/${this.nameConfigurationBotChat}` as const
  }
}
export type { ConfigurationChatbotArn }
export function configurationChatbotArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationChatbotArnParameters<Partition>,
) {
  return new ConfigurationChatbotArn<Partition>(parameters)
}
