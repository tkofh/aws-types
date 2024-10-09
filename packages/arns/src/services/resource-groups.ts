export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupName: string
}
export type GroupArn = `arn:${string}:resource-groups:${string}:${string}:group/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:resource-groups:${parameters.region}:${parameters.account}:group/${parameters.groupName}`
}

export interface TagSyncTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupName: string
  taskId: string
}
export type TagSyncTaskArn = `arn:${string}:resource-groups:${string}:${string}:group/${string}/tag-sync-task/${string}`
export function tagSyncTaskArn(parameters: TagSyncTaskArnParameters): TagSyncTaskArn {
  return `arn:${parameters.partition ?? ''}:resource-groups:${parameters.region}:${parameters.account}:group/${parameters.groupName}/tag-sync-task/${parameters.taskId}`
}