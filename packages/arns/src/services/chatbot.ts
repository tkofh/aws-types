import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ChatbotConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly configurationType: string
  readonly chatbotConfigurationName: string
}
class ChatbotConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ChatbotConfiguration', `arn:${string}:chatbot::${string}:chat-configuration/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ChatbotConfiguration' as const
  readonly partition: Partition
  readonly account: string
  readonly configurationType: string
  readonly chatbotConfigurationName: string
  constructor(parameters: ChatbotConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.configurationType = parameters.configurationType
    this.chatbotConfigurationName = parameters.chatbotConfigurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chatbot::${this.account}:chat-configuration/${this.configurationType}/${this.chatbotConfigurationName}` as const
  }
}
export type { ChatbotConfigurationArn }
export function chatbotConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: ChatbotConfigurationArnParameters<Partition>) {
  return new ChatbotConfigurationArn<Partition>(parameters)
}