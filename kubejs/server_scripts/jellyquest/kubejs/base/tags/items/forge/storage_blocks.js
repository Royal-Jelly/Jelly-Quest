events.listen('item.tags', function (event) {
    var storageBlocks = 'forge:storage_blocks';
    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');
    event
        .get(storageBlocks)
        .add('minecraft:glowstone')
        .add('immersiveengineering:storage_aluminum')
        .add('immersiveengineering:storage_lead')
        .add('immersiveengineering:storage_silver')
        .add('immersiveengineering:storage_nickel')
        .add('immersiveengineering:storage_uranium')
        .add('immersiveengineering:storage_constantan')
        .add('immersiveengineering:storage_electrum')
        .add('immersiveengineering:coke')
});
