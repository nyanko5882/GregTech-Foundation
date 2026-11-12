ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    greg.alloy_smelter("gtf:flint_mesh")
    .itemInputs("4x #forge:dusts/flint", "exdeorum:string_mesh")
    .itemOutputs("exdeorum:flint_mesh")
    .EUt(4)
    .duration(160);
});
