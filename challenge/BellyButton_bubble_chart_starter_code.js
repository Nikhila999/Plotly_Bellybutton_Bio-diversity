// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
  });
}



// 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
var s_otu_ids = firstSample.otu_ids;
var s_otu_labels = firstSample.otu_labels;
var s_sample_values = firstSample.sample_values;

console.log(firstSample)

// 7. Create the yticks for the bar chart.
// Hint: Get the the top 10 otu_ids and map them in descending order  
//  so the otu_ids with the most bacteria are last. 

// var yticks = s_otu_ids.sort((a,b) => a - b).reverse().slice(0,10).map(s_otu_ids);

// var otu_lables_desc = s_otu_labels.sort((a,b) => a - b).reverse();

// 8. Create the trace for the bar chart. 
var barData = [{
  x: s_sample_values,
  y: s_otu_ids.slice(0,10),
  type: "bar",
  orientation: 'h',
  text: otu_lables_desc
}];

// 9. Create the layout for the bar chart. 
var barLayout = {
 title: "Top 10 Bacteria Cultures Found",
 yaxis: {s_otu_ids}
};


// 10. Use Plotly to plot the data with the layout. 
Plotly.newPlot("bar",barData, barLayout)

// 1. Create the trace for the bubble chart.
var bubbleData = {
  x: s_otu_ids,
  y: s_sample_values,
  text: s_otu_labels,
  mode: 'markers',
  marker: {
    size: s_sample_values,
    color: s_otu_ids
  },
  type: "scatter"
};


// 2. Create the layout for the bubble chart.
var bubbleLayout = {
  title: "Bacteria Cultures Per Sample",
  xaxis: {title: "OTU ID"}
};

// 3. Use Plotly to plot the data with the layout.
Plotly.newPlot("bubble", [bubbleData], bubbleLayout); 
