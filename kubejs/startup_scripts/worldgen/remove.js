events.listen('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
          'minecraft:granite',
          'minecraft:diorite',
          'minecraft:andesite',

          "minecraft:iron_ore",
          "minecraft:gold_ore",
          "minecraft:coal_ore",
          "minecraft:diamond_ore",
          "minecraft:nether_gold_ore",
          "minecraft:lapis_ore",
          "minecraft:redstone_ore",
          "minecraft:emerald_ore"
        ];
    });
});
