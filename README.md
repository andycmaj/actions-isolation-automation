## reference

https://docs.github.com/en/rest/reference/actions#create-a-workflow-dispatch-event

## personal access token

calling this api needs a [ personal access token ](https://github.com/settings/tokens) with `repo` scope or a github app with `actions:write` permission

## get your workflow ids

you'll need these to externally trigger a workflow via workflow_dispatch api

```bash
curl \
  -X GET \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token ${PERSONAL_ACCESS_TOKEN}" \
  https://api.github.com/repos/andycmaj/actions-isolation-automation/actions/workflows
```