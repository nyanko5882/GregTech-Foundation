ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    //resin separation
    greg.extractor("gtf:extractor/raw_rubber_from_resin")
    .itemInputs("gtceu:sticky_resin")
    .itemOutputs("3x gtceu:raw_rubber_dust")
    .EUt(2)
    .duration(100);
    greg.centrifuge("gtf:centrifuge/sticky_resin_separation")
    .itemInputs("gtceu:sticky_resin")
    .itemOutputs("3x gtceu:raw_rubber_dust")
    .chancedOutput("gtceu:plant_ball", 1500, 0)
    .outputFluids("gtceu:glue 100")
    .EUt(5)
    .duration(240)

    //fireclay
    event.remove({"id": "gtceu:compressor/compressed_fireclay"});
    greg.compressor("gtf:compressor/compressed_fireclay")
    .itemInputs("gtceu:fireclay_dust")
    .itemOutputs("gtceu:compressed_fireclay")
    .EUt(4)
    .duration(60);
});
