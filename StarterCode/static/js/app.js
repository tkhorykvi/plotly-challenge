function readFile() {
    var cell_data = d3.select ("#selDataset")
    d3.json("static/js/samples.json").then((data) => {
        var names = data.names;
        var metadata = data.metadata;
        var samples = data.samples;
        console.log(names)
        names.forEach(d => {
            cell_data.append("option").text(d).property("value")
        })
        optionChanged(data.names[0])
        barPlot(data.names[0])
        bubblePlot(data.names[0])
        })
    };

readFile();

function optionChanged(userid) {
        d3.json("static/js/samples.json").then((data)=> {
            console.log(data)
            var demographic_info = data.metadata.filter(md => md.id == userid);
            // console.log(samples);

            // Fetching 1st element
            var first_demo = demographic_info[0]
            var sample_demo = d3.select ("#sample-metadata")
console.log(demographic_info)
console.log(first_demo)

// Clearing the list
sample_demo.html("")
            // Appending demographic info box
            Object.entries(first_demo).forEach(([key, value]) => {
                sample_demo.append("p").text(`${key}:${value}`)
            })
            })
        }

        function barPlot(id) {
                d3.json("static/js/samples.json").then((data)=> {
                    console.log(data)
                    var filtered_samples = data.samples.filter(s => s.id == id);
                    var first_sample = filtered_samples[0]
                    console.log(first_sample);
                    var samplevalues = first_sample.sample_values.slice(0, 10).reverse();
                    var OTU_top = (first_sample.otu_ids.slice(0, 10)).reverse();
                    var OTU_id = OTU_top.map(d => "OTU " + d)
                    var labels = first_sample.otu_labels.slice(0, 10);
                    var trace = [{
                        x: samplevalues,
                        y: OTU_id,
                        text: labels,
                        // marker: {
                        //   color: 'rgb(142,124,195)'},
                        type:"bar",
                        orientation: "h",
                    }];
            
                    var layout = {
                        title: "Top 10 OTU",
                        // yaxis:{
                        //     tickmode:"linear",
                        // },
                        // margin: {
                        //     l: 100,
                        //     r: 100,
                        //     t: 100,
                        //     b: 30
                        // }
                    };

                    Plotly.newPlot("bar",trace, layout)
                })}

                function bubblePlot(id) {
                    d3.json("static/js/samples.json").then((data)=> {
                        console.log(data)
                        var filtered_samples = data.samples.filter(s => s.id == id);
                        var first_sample = filtered_samples[0]
                        console.log(first_sample);
                        var samplevalues = first_sample.sample_values;
                        var OTU_top = first_sample.otu_ids;
                        // var OTU_id = OTU_top.map(d => "OTU " + d)
                        var labels = first_sample.otu_labels;
                        var trace = [{
                            x: OTU_top,
                            y: samplevalues,
                            text: labels,
                            mode: "markers",
                            marker: {
                              color: OTU_top,
                              size: samplevalues,
                            }
                        }];
                
                        var layout = {
                            title: "Top 10 OTU",
                            // yaxis:{
                            //     tickmode:"linear",
                            // },
                            // margin: {
                            //     l: 100,
                            //     r: 100,
                            //     t: 100,
                            //     b: 30
                            // }
                        };
    
                        Plotly.newPlot("bubble",trace, layout)
                    })}
    


// function getPlot(id) {
//     d3.json("data/samples.json").then((data)=> {
//         console.log(data)
//         var wfreq = data.metadata.map(d => d.wfreq)
//         console.log(`Washing Freq: ${wfreq}`)
//         var samples = data.samples.filter(s => s.id.toString() === id)[0];
//         console.log(samples);
//         var samplevalues = samples.sample_values.slice(0, 10).reverse();
//         var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
//         var OTU_id = OTU_top.map(d => "OTU " + d)
//         var labels = samples.otu_labels.slice(0, 10);
//         var trace = {
//             x: samplevalues,
//             y: OTU_id,
//             text: labels,
//             marker: {
//               color: 'rgb(142,124,195)'},
//             type:"bar",
//             orientation: "h",
//         };

//         var layout = {
//             title: "Top 10 OTU",
//             yaxis:{
//                 tickmode:"linear",
//             },
//             margin: {
//                 l: 100,
//                 r: 100,
//                 t: 100,
//                 b: 30
//             }
//         };