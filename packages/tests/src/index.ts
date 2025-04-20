import { s3 } from '@aws-types/arn'

console.log(
  s3.accessGrantArn({
    region: 'us-east-1',
    account: '123456789012',
    token: 'hello',
  }).account,
)
