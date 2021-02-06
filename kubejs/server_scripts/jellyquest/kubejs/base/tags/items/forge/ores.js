events.listen('item.tags', function (event) {
    event.get('forge:ores')
         .add('minecraft:ancient_debris')

    event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');
});
