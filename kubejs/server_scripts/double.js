ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    function RegistryCircuitRecipes(output, count, input, eu, duration) {
        //count is String!!

        
    };

    //resin printed circuit board(lv circuit board)
    event.remove({"output": "gtceu:resin_printed_circuit_board"});
    event.shaped("gtceu:resin_printed_circuit_board", ["www","wbw","www"], {w: "gtceu:fine_copper_wire", b: "gtceu:resin_circuit_board"});
    greg.assembler("gtf:assembler/basic_circuit_board")
    .itemInputs("2x gtceu:copper_foil", "gtceu:resin_circuit_board")
    .inputFluids("gtceu:glue 50")
    .itemOutputs("gtceu:resin_printed_circuit_board")
    .EUt(7)
    .duration(200);

    //vacuum tube
    event.remove({"output": "gtceu:vacuum_tube"});
    event.shaped("2x gtceu:vacuum_tube", ["vgv","www","   "], {v: "gtceu:steel_bolt", g: "gtceu:glass_tube", w: "gtceu:copper_single_wire"});
    greg.assembler("gtf:assembler/vacuum_tube_plain")
    .itemInputs("gtceu:glass_tube", "gtceu:steel_bolt", "2x gtceu:copper_single_wire")
    .itemOutputs("4x gtceu:vacuum_tube")
    .circuit(1)
    .EUt(7)
    .duration(120)
    greg.assembler("gtf:assembler/vacuum_tube_red_alloy")
    .itemInputs("gtceu:glass_tube", "gtceu:steel_bolt", "2x gtceu:copper_single_wire")
    .inputFluids("gtceu:red_alloy 18")
    .itemOutputs("6x gtceu:vacuum_tube")
    .EUt(7)
    .duration(40)

    //basic electronic circuit (lv 1st circuit)
    event.remove({"output": "gtceu:basic_electronic_circuit"});
    event.shaped("2x gtceu:basic_electronic_circuit", ["rpr","vbv","ccc"], {r: "gtceu:resistor", p: "gtceu:steel_plate", v: "gtceu:vacuum_tube", b: "gtceu:resin_printed_circuit_board", c: "gtceu:red_alloy_single_cable"});
    greg.circuit_assembler("gtf:circuit_assembler/electronic_circuit_lv")
        .itemInputs("gtceu:resin_printed_circuit_board", "2x #gtceu:resistors", "2x gtceu:red_alloy_single_cable", "2x #gtceu:circuits/ulv")
        .inputFluids("gtceu:tin 144")
        .itemOutputs("4x gtceu:basic_electronic_circuit")
        .EUt(16)
        .duration(200);
    greg.circuit_assembler(`gtf:circuit_assembler/electronic_circuit_lv_soldering_all`)
        .itemInputs("gtceu:resin_printed_circuit_board", "2x #gtceu:resistors", "2x gtceu:red_alloy_single_cable", "2x #gtceu:circuits/ulv")
        .inputFluids("gtceu:soldering_alloy 72")
        .itemOutputs("4x gtceu:basic_electronic_circuit")
        .EUt(16)
        .duration(200);

    //lv motors
    event.remove({"output": "gtceu:lv_electric_motor"});
    event.shaped("2x gtceu:lv_electric_motor", ["cws","wmw","swc"], {c: "gtceu:tin_single_cable", w: "gtceu:copper_single_wire", s: "gtceu:iron_rod", m: "gtceu:magnetic_iron_rod"});
    event.shaped("2x gtceu:lv_electric_motor", ["cws","wmw","swc"], {c: "gtceu:tin_single_cable", w: "gtceu:copper_single_wire", s: "gtceu:steel_rod", m: "gtceu:magnetic_steel_rod"});
    greg.assembler("gtceu:assembler/electronic_motor_lv_iron")
    .itemInputs("2x gtceu:tin_single_cable", "2x gtceu:iron_rod", "gtceu:magnetic_iron_rod", "4x gtceu:copper_single_wire")
    .itemOutputs("3x gtceu:lv_electric_motor")
    .EUt(30)
    .duration(100);
    greg.assembler("gtceu:assembler/electronic_motor_lv_steel")
    .itemInputs("2x gtceu:tin_single_cable", "2x gtceu:steel_rod", "gtceu:magnetic_steel_rod", "4x gtceu:copper_single_wire")
    .itemOutputs("3x gtceu:lv_electric_motor")
    .EUt(30)
    .duration(100);
});
