events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_boots',
        'botania:manasteel_boots',
        'botania:manaweave_boots',
        'botania:terrasteel_boots',
        'immersiveengineering:armor_faraday_feet',
        'immersiveengineering:armor_steel_feet',
        'minecraft:chainmail_boots',
        'minecraft:diamond_boots',
        'minecraft:golden_boots',
        'minecraft:iron_boots',
        'minecraft:leather_boots',
        'minecraft:netherite_boots',
        'bloodmagic:livingboots',
        'alexsmobs:roadrunner_boots'
    ];
    event.get('forge:armor').add(items);
    event.get('forge:armor/boots').add(items);
});
