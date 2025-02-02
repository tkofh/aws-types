export interface ChatbotConfigurationArnParameters {
  partition?: string | undefined
  account: string
  configurationType: string
  chatbotConfigurationName: string
}
export type ChatbotConfigurationArn = `arn:${string}:chatbot::${string}:chat-configuration/${string}/${string}`
export function chatbotConfigurationArn(parameters: ChatbotConfigurationArnParameters): ChatbotConfigurationArn {
  return `arn:${parameters.partition ?? 'aws'}:chatbot::${parameters.account}:chat-configuration/${parameters.configurationType}/${parameters.chatbotConfigurationName}`
}