ServerEvents.recipes(event => {
    event.shaped("toms_storage:ts.inventory_connector", ["cic","i i","cic"], {c: "#forge:chests/wooden", i: "#forge:ingots/iron"});
    event.shaped("toms_storage:ts.storage_terminal", ["cic","i i","cic"], {c: "#forge:chests/wooden", i: "#forge:plates/iron"});
    event.shaped("8x toms_storage:ts.inventory_cable", ["sss","ici","sss"], {s: "#forge:rods/wooden", i: "#forge:ingots/iron", c: "#forge:chests/wooden"});
    event.shaped("toms_storage:ts.inventory_cable_framed", ["s s"," c ","s s"], {s: "#forge:rods/wooden", c: "toms_storage:ts.inventory_cable"});
    event.shaped("toms_storage:ts.crafting_terminal", ["ccc","ptp","ccc"], {c: "minecraft:crafting_table", p: "#forge:plates/red_alloy", t: "toms_storage:ts.storage_terminal"});
})
