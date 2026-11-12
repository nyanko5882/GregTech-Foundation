const compressed = [
    "stone", "cobblestone", "netherrack", "end_stone"
];

StartupEvents.registry("block", event => {
    for (const array of compressed) {
        for (let i = 0; i < 8; i++) {
            event.create(`gtf:compressed_${array}_${i + 1}`).textureAll(`kubejs:block/${array}`).color(0xeeeeee - (0x111111 * i));
        };
    };
});
