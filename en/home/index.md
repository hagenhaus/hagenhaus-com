---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
hhdatalist: v0.0.2
menuItem: mi-home
---

# Home

<b>HHDataList</b> is a UI component that enables websites to interact with REST APIs. Here is an example:

<div id="famous-trees-datalist" class="hh-data-list"></div>
<script>
  var options = new DLTreesOptions002('famous-trees-datalist');
  options.processMode.showTool = true;
  options.themeDefinition.showTool = true;
  new HHDataList(options);
</script>

An <b>HHDataList</b> instance is highly configurable, so it can serve as an enduser interface or a developer tool. To add instances to your website, see the [HHDataList](/en/hhdatalist/v0.0.2/) docs. Please submit requests, questions, and issues on [Gitter](https://gitter.im/hagenhaus/hhdatalist).
