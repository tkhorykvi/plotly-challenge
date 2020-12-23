function readFile() {
    d3.json("static/js/samples.json").then((data) => {
        var names = data.names;
        var metadata = data.metadata;
        var samples = data.samples;
        console.log(names)
        }
    )};

readFile();

function getPlot(id) {
    d3.json("data/samples.json").then((data)=> {
        console.log(data)
        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)
        var samples = data.samples.filter(s => s.id.toString() === id)[0];
        console.log(samples);
        var samplevalues = samples.sample_values.slice(0, 10).reverse();
        var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
        var OTU_id = OTU_top.map(d => "OTU " + d)
        var labels = samples.otu_labels.slice(0, 10);
        var trace = {
            x: samplevalues,
            y: OTU_id,
            text: labels,
            marker: {
              color: 'rgb(142,124,195)'},
            type:"bar",
            orientation: "h",
        };

        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };