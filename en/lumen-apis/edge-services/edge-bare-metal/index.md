# Edge Bare Metal

# Activity

# Dashboard

# Instances

<div id="instances-dl" class="hh-data-list mt-4"></div>
<script>
  var instancesOptions = new LumenOptions('instances-dl');
  instancesOptions.descriptions.home = 'See <a href="https://developer.lumen.com/apis/edge-bare-metal#api-reference_edge-bare-metal-api_instances_api-instances_get">Instances Documentation</a>.';
  instancesOptions.fieldDefinitions = {};
  instancesOptions.fieldDefinitions.transform = [];
  instancesOptions.fieldDefinitions.transform.push({ label: 'ID', fieldName: 'id' });
  instancesOptions.fieldDefinitions.transform.push({ label: 'Account ID', fieldName: 'accountId' });
  instancesOptions.fieldDefinitions.transform.push({ label: 'Instance Type', fieldName: 'instanceType', transformer: (v) => v.name });
  instancesOptions.fieldDefinitions.transform.push({ label: 'Group', fieldName: 'group', transformer: (v) => v.name });
  instancesOptions.fieldDefinitions.transform.push({
    label: 'Cloud', fieldName: 'cloud',
    transformer: async (v) => {
      let res = await HHDataList.get(`https://api-mock.lumen.com/EdgeServices/v1/Compute/Edge_Orchestrator_API/1.0.0/api/zones/${v.id}`);
      return res.data.zone.domainName;
    }
  });
  instancesOptions.fieldDefinitions.transform.push({ label: 'IP Address', fieldName: 'connectionInfo', transformer: (v) => v[0].ip });
  instancesOptions.fieldDefinitions.transform.push({ label: 'Port Address', fieldName: 'connectionInfo', transformer: (v) => v[0].port });
  instancesOptions.fieldDefinitions.transform.push({ label: 'Name', fieldName: 'name' });
  instancesOptions.fieldDefinitions.transform.push(      {
    label: 'Tags', fieldName: 'tags', transformer: (v) => {
      const a = [];
      for (let i of v) { a.push(i.value); }
      return a;
    }
  });
  instancesOptions.processMode.showTool = true;
  instancesOptions.processMode.value = 'copy';
  instancesOptions.queryParams.fields = null;
  instancesOptions.queryParams.filter = null;
  instancesOptions.queryParams.order = null;
  instancesOptions.queryParams.limit = null;
  instancesOptions.recordIdField = 'id';
  instancesOptions.recordTitle = { fields: ['cloud', 'connectionInfo'], format: (f, r) => r[f[0]].name + ' ' + r[f[1]][0].ip };
  instancesOptions.responseHelper = {
    record: (res) => res.data.instance,
    records: (res) => res.data.instances,
    numPages: (res, limit) => Math.ceil(res.data.meta.total / limit),
    numResponseRecords: (res) => res.data.meta.size,
    numMatchedRecords: (res) => res.data.meta.size,
    numTotalRecords: (res) => res.data.meta.total
  };
  instancesOptions.url = `https://api-mock.lumen.com/EdgeServices/v1/Compute/Edge_Bare_Metal_API/1.0.0/api/instances`;
  new HHDataList(instancesOptions);
</script>

# Logs

# Alerts

# Contacts

# Incidents

# Networks

# History

# Reports
