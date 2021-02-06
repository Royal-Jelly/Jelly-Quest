events.listen('block.tags', function (event) {
    event.get('forge:ores')
         .add('minecraft:ancient_debris');

    event.get('forge:ores/nether/iron')
         .add('emendatusenigmatica:iron_netherrack_ore');

    event.get('forge:ores/nether/gold')
         .add('emendatusenigmatica:gold_netherrack_ore')
         .add('minecraft:nether_gold_ore');

    event.get('forge:ores/nether/diamond')
         .add('emendatusenigmatica:diamond_netherrack_ore');

    event.get('forge:ores/nether/emerald')
         .add('emendatusenigmatica:emerald_netherrack_ore');

    event.get('forge:ores/nether/lapis')
         .add('emendatusenigmatica:lapis_netherrack_ore');

    event.get('forge:ores/nether/redstone')
         .add('emendatusenigmatica:redstone_netherrack_ore');

    event.get('forge:ores/nether/silver')
         .add('emendatusenigmatica:silver_netherrack_ore');

    event.get('minecraft:piglin_loved')
         .add('#forge:ores/nether')

    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');
});
