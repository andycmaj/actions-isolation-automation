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

{
  "total_count": 1,
  "workflows": [
    {
      "id": 2631041,
      "node_id": "MDg6V29ya2Zsb3cyNjMxMDQx",
      "name": "send-trigger",
      "path": ".github/workflows/depoy.yml",
      "state": "active",
      "created_at": "2020-09-18T10:57:03.000-07:00",
      "updated_at": "2020-09-18T10:57:03.000-07:00",
      "url": "https://api.github.com/repos/andycmaj/actions-isolation-automation/actions/workflows/2631041",
      "html_url": "https://github.com/andycmaj/actions-isolation-automation/blob/dev/.github/workflows/depoy.yml",
      "badge_url": "https://github.com/andycmaj/actions-isolation-automation/workflows/send-trigger/badge.svg"
    }
  ]
}
```

## trigger the workflow from another repo

outer "ref" is the ref on the automation branch to run the workflow from

inner "inputs.ref" is the ref on THIS repo to check out 

```bash
  curl \
    -X POST \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token ${{ secrets.DISPATCH_TOKEN }}" \
    https://api.github.com/repos/andycmaj/actions-isolation-automation/actions/workflows/$WORKFLOW_ID/dispatches \
    -d '{"ref":"dev","inputs":{"ref":"${GITHUB_REF}"}}'
```