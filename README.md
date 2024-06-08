# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Warnings
### Write-only properties
Write-only properties are resource property values that can be written to but can't be read by AWS CloudFormation or CDK Migrate. For more information, see [IaC generator and write-only properties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/generate-IaC-write-only-properties.html).


Write-only properties discovered during migration are organized here by resource ID and categorized by write-only property type. Resolve write-only properties by providing property values in your CDK app. For guidance, see [Resolve write-only properties](https://docs.aws.amazon.com/cdk/v2/guide/migrate.html#migrate-resources-writeonly).
### IAMUser00adithsanjeeve1331gmailcom00ocFFA
- **UNSUPPORTED_PROPERTIES**: 
  - LoginProfile/Password: The user's password.
### IAMUser00nealanvettivelutalentfirstai000cAGB
- **UNSUPPORTED_PROPERTIES**: 
  - LoginProfile/Password: The user's password.
### LambdaFunction00Weather00c2paF
- **UNSUPPORTED_PROPERTIES**: 
  - SnapStart/ApplyOn: Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.Possible values: [PublishedVersions, None]
This property can be replaced with other types
  - Code/S3ObjectVersion: For versioned objects, the version of the deployment package object to use.
This property can be replaced with other exclusive properties
- **MUTUALLY_EXCLUSIVE_PROPERTIES**: 
  - Code/S3Bucket: An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
This property can be replaced with other exclusive properties
  - Code/S3Key: The Amazon S3 key of the deployment package.
This property can be replaced with other exclusive properties
### LambdaFunction00correlationscore00yKwf4
- **UNSUPPORTED_PROPERTIES**: 
  - SnapStart/ApplyOn: Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.Possible values: [PublishedVersions, None]
This property can be replaced with other types
  - Code/S3ObjectVersion: For versioned objects, the version of the deployment package object to use.
This property can be replaced with other exclusive properties
- **MUTUALLY_EXCLUSIVE_PROPERTIES**: 
  - Code/S3Bucket: An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
This property can be replaced with other exclusive properties
  - Code/S3Key: The Amazon S3 key of the deployment package.
This property can be replaced with other exclusive properties
### LambdaFunction00lifesync3900pYd8S
- **UNSUPPORTED_PROPERTIES**: 
  - SnapStart/ApplyOn: Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.Possible values: [PublishedVersions, None]
This property can be replaced with other types
  - Code/S3ObjectVersion: For versioned objects, the version of the deployment package object to use.
This property can be replaced with other exclusive properties
- **MUTUALLY_EXCLUSIVE_PROPERTIES**: 
  - Code/S3Bucket: An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
This property can be replaced with other exclusive properties
  - Code/S3Key: The Amazon S3 key of the deployment package.
This property can be replaced with other exclusive properties
### S3Bucket00wearerunninglate00PLPi0
- **UNSUPPORTED_PROPERTIES**: 
  - AccessControl: This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see [Controlling object ownership](https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
  A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 User Guide*.
  S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the [AWS::S3::OwnershipControls](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.
  The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see [AWS::S3::BucketPolicy](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html). For examples of common policy configurations, including S3 Server Access Logs buckets and more, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide*.Possible values: [AuthenticatedRead, AwsExecRead, BucketOwnerFullControl, BucketOwnerRead, LogDeliveryWrite, Private, PublicRead, PublicReadWrite]
This property can be replaced with other types
