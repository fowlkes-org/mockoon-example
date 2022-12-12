# Mockoon API Server Example
Mockoon allows for fast API mocking, allowing teams to develop front end components quickly, and provide realistic scenarios that support UI testing.

A major issue with UI tests is brittleness - Mockoon can provide a stable mocking solution that allows for source controlled updates, sequential based scenarios, and fast edge case mock creation.

This example shows a simplified client making http calls to various mocked calls to the mockoon server running as part of the CI process.

## Possible Processes with Mockoon

1. UI developers are able to mock out API to develop components without explicit backend dependency
2. Webapps and mobile clients can implement mockoon for UI tests, to stabilize environment concerns, rapidly iterate on feature toggled experiments, and ensure the UI flow works, over having to test with the entire dependency of all microservices and infrastructure in a shared environment.
3. Creates high fidelity feedback at a PR possible, without having to deal with complex test data management for live data environment configurations.



## CICD with Ephemeral GHA Runners
1. install cert-manager
```
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.8.2/cert-manager.yaml
```
2. deploy and configure ARC
```
helm repo add actions-runner-controller https://actions-runner-controller.github.io/actions-runner-controller

helm upgrade --install --namespace actions-runner-system --create-namespace --set=authSecret.create=true --set=authSecret.github_token="<token>" --wait actions-runner-controller actions-runner-controller/actions-runner-controller
```
3. create GHA self hosted runners
```
cd k8s
kubectl apply -f runnerdeployment.yaml
```

### GHA Runers Notes
https://github.com/actions-runner-controller/actions-runner-controller/blob/master/docs/detailed-docs.md#organization-runners
https://github.com/actions-runner-controller/actions-runner-controller/blob/master/docs/detailed-docs.md#deploying-using-pat-authentication