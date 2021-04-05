# aws-serverless-nodejs-datadog-otel
Creating a serverless application using datadog and open telemetr


```
aws ssm put-parameter \
    --name "/service/demo-lambda-datadog/datadog/apikey" \
    --description "Datadog application for DataDog" \
    --type "String" \
    --value "DATADOG-API-KEY"
```