---
bookTitle: HHDataList <span style="font-weight:normal;font-size:86%;">v0.0.2</span>
hhdatalist: v0.0.2
menuItem: mi-hhdatalist
---

# HHDataList

# Quick Start

<div id="quick-datalist" class="hh-data-list"></div>
<script>
  var quickOptions = new DLTreesOptions002('quick-datalist');
  new HHDataList(quickOptions);
</script>

# User Interface

The HHDataList user interface is divided into four rows, and the Tabs Row is divided into five tabs. Note that the Tabs row appears above the other three rows which remain visible as the user clicks from tab to tab:

<p><img src="rows-and-tabs.png" class="img-fluid d-block" width=600 loading="lazy"></p>

## Rows

## Tabs

# Tools

HHDataList provides a toolbox on the *Tools* tab. Which tools appear in the toolbox is configurable. To see the tools in the toolbox for the HHDataList instance below, click the *Wrench* icon:

<div id="tools-datalist" class="hh-data-list"></div>
<script>
  var toolsOptions = new DLTreesOptions002('tools-datalist');
  toolsOptions.themeDefinition.name = 'firebrick';
  new HHDataList(toolsOptions);
</script>

To use a tool, check the corresponding checkbox (in the toolbox) which places the tool on the workbench in the *Tools* row. Note that the *Paginator* tool is always present on the workbench. There are three types of tools:

1. When pressed, an *action button* performs a task and returns to its original state (e.g. Theme Reporter).
1. When pressed, a *toggle button* changes state. When pressed again, it changes back (e.g. Expand).
1. When pressed, dropdowns enable the user to choose among several options (e.g. Theme).

To learn more about each tool, see the corresponding option:

|Tool|Option|
|-|-|
|Column Width|[colWidths](/en/hhdatalist/v0.0.2/options/colwidths/)|
|Content|[contentMode](/en/hhdatalist/v0.0.2/options/contentmode/)|
|Descriptions|[descriptions](/en/hhdatalist/v0.0.2/options/descriptions/)|
|Expand|[expand](/en/hhdatalist/v0.0.2/options/expand/)|
|Fields Reporter|[reporters](/en/hhdatalist/v0.0.2/options/reporters/)|
|GET Parity|[parity](/en/hhdatalist/v0.0.2/options/parity/)|
|Limit|[queryParams](/en/hhdatalist/v0.0.2/options/queryparams/)|
|Number|[number](/en/hhdatalist/v0.0.2/options/number/)|
|POST Parity|[parity](/en/hhdatalist/v0.0.2/options/parity/)|
|Process|[processMode](/en/hhdatalist/v0.0.2/options/processmode/)|
|Query Reporter|[reporters](/en/hhdatalist/v0.0.2/options/reporters/)|
|Requests Reporter|[reporters](/en/hhdatalist/v0.0.2/options/reporters/)|
|Small|[small](/en/hhdatalist/v0.0.2/options/small/)|
|Theme|[themeDefinition](/en/hhdatalist/v0.0.2/options/themedefinition/)|
|Theme Reporter|[reporters](/en/hhdatalist/v0.0.2/options/reporters/)|
|Themes Reporter|[reporters](/en/hhdatalist/v0.0.2/options/reporters/)|
|Uniformity|[uniformity](/en/hhdatalist/v0.0.2/options/uniformity/)|

