function readFile(sample) {
    d3.json("samples.json").then((sample_data) => {
        var metadata = sample_data.metadata;
        var samples = sample_data.samples;
        var results = samples.filter(sampleObj => sampleObj.id == sample);
    })
};