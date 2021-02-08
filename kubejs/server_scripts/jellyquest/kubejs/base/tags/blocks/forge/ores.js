events.listen('block.tags', function (event) {
    event.get('forge:ores')
         .add('minecraft:ancient_debris');

    event.get('minecraft:piglin_loved')
         .add('#forge:ores/nether')

    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');
});
