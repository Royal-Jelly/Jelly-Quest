events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_helmet',
        'botania:manasteel_helmet',
        'botania:manaweave_helmet',
        'botania:terrasteel_helmet',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'minecraft:chainmail_helmet',
        'minecraft:diamond_helmet',
        'minecraft:golden_helmet',
        'minecraft:iron_helmet',
        'minecraft:leather_helmet',
        'minecraft:netherite_helmet',
        'bloodmagic:livinghelmet',
        'alexsmobs:sombrero',
        'alexsmobs:frontier_cap',
        'alexsmobs:moose_headgear'
    ];
    event.get('forge:armor').add(items);
    event.get('forge:armor/helm').add(items);
});
