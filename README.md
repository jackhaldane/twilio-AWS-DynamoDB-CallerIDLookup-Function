# twilio-AWS-DynamoDB-CallerIDLookup-Function
Twilio function that makes a HTTPS request to a AWS Lambda function to lookup a incoming Twilio phone number against a DynamoDB table.

# Prerequisites
Requries that got (>11.8.2) is added as a dependency

# Usage
accepts a `<$FromCall>` variable which is passed to the AWS API gateway URL then to a Lambda function.

Function returns false if the number isn't in the database or if the key isAllowed is false and returns true if the object exists and the key isAllowed is true.
