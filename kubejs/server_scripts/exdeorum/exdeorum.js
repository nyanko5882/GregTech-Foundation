ServerEvents.recipes(event => {
    //sieve and so on
    event.shaped('exdeorum:oak_sieve', ["p p","psp","w w"], {p: "minecraft:oak_planks", s: "minecraft:oak_slab", w: "#forge:rods/wooden"});
    event.shaped("exdeorum:oak_barrel", ["p p","p p","psp"], {p: "minecraft:oak_planks", s: "minecraft:oak_slab"});
    event.shaped("exdeorum:oak_compressed_sieve", ["l l","lil","s s"], {l: "minecraft:oak_log", i: "#forge:ingots/iron", s: "#forge:rods/wooden"});
    event.shaped("exdeorum:string_mesh", ["sss","sss","sss"], {s: "minecraft:string"});

    //hammer
    event.shaped("exdeorum:wooden_hammer", [" p "," sp","s  "], {p: "#minecraft:planks", s:"#forge:rods/wooden"});
    event.shaped("exdeorum:stone_hammer", [" c "," sc","s  "], {c: "#minecraft:stone_tool_materials", s: "#forge:rods/wooden"});
    event.shaped("exdeorum:golden_hammer", [" i "," si","s  "], {i: "#forge:ingots/gold", s: "#forge:rods/wooden"});
    event.shaped("exdeorum:iron_hammer", [" i "," si","s  "], {i: "#forge:ingots/iron", s: "#forge:rods/wooden"});
    event.shaped("exdeorum:diamond_hammer", [" g "," sg","s  "], {g: "#forge:gems/diamond", s: "#forge:rods/wooden"});
    event.smithing("exdeorum:netherite_hammer", "minecraft:netherite_upgrade_smithing_template", "exdeorum:diamond_hammer", "minecraft:netherite_ingot");
    //compressed hammer
    const compressedHammer = [
        "wooden", "stone", "golden", "iron", "diamond", "netherite"
    ];
    compressedHammer.forEach(type => {
        event.shapeless(`exdeorum:compressed_${type}_hammer`, [`9x exdeorum:${type}_hammer`]);
    });

    //crook
    event.custom({"type":"exdeorum:crook","block_predicate":{"block_tag":"minecraft:leaves"},"chance":0.01,"result":"exdeorum:silk_worm"});
    event.custom({"type":"exdeorum:crook","block_predicate":{"block":"exdeorum:infested_leaves","state":{"fully_infested":"true"}},"chance":0.02,"result":"exdeorum:silk_worm"});
    event.custom({"type":"exdeorum:crook","block_predicate":{"block":"exdeorum:infested_leaves","state":{"fully_infested":"true"}},"chance":0.4,"result":"minecraft:string"});
    event.custom({"type":"exdeorum:crook","block_predicate":{"block":"exdeorum:infested_leaves","state":{"fully_infested":"true"}},"chance":0.1,"result":"minecraft:string"});
    event.shaped("exdeorum:crook", ["ss "," s "," s "], {s: "#forge:rods/wooden"});

    event.custom({"type":"exdeorum:hammer","ingredient":[{"item":"minecraft:cobblestone"},{"tag":"forge:stone"}],"result":"minecraft:gravel","result_amount":1.0});
    event.custom({"type":"exdeorum:hammer","ingredient":{"item":"minecraft:gravel"},"result":"minecraft:sand","result_amount":1.0});
    event.custom({"type":"exdeorum:hammer","ingredient":{"item":"minecraft:sand"},"result":"exdeorum:dust","result_amount":1.0});

    //barrel
    event.custom({"type":"exdeorum:barrel_mixing","fluid":"minecraft:water","fluid_amount":1000,"ingredient":{"item":"exdeorum:dust"},"result":"minecraft:clay"});

    //crucible
    event.shaped("exdeorum:oak_crucible", ["l l","l l","lsl"], {l: "minecraft:oak_log", s: "minecraft:oak_slab"});
    event.custom({"type":"exdeorum:water_crucible","fluid":{"amount":250,"fluid":"minecraft:water"},"ingredient":{"tag":"minecraft:saplings"}});
    event.custom({"type":"exdeorum:water_crucible","fluid":{"amount":250,"fluid":"minecraft:water"},"ingredient":{"tag":"minecraft:leaves"}});
});
