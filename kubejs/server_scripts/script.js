// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

// This script adds items on first time player joins, checking gamestages

// Listen to player login event
/*
events.listen('player.logged_in', function (event) {
  // Check if player doesn't have "starting_items" gamestage yet
  if (!event.hasGameStage('starting_items')) {
    // Add the gamestage
    event.addGameStage('starting_items')
    // Give some items to player
    event.player.give('minecraft:stone_sword')
    event.player.give({ item: 'minecraft:stone_pickaxe', data: 10 })
    event.player.give({ item: 'minecraft:apple', count: 30 })
  }
})
*/
onEvent('recipes', event => {
  // Coins JE Changes
    event.remove({mod: 'coins'})
    event.shapeless(Item.of('coins:coin_copper', 9), ['coins:coin_pile_copper'])
    event.shapeless(Item.of('coins:coin_iron', 9), ['coins:coin_pile_iron'])
    event.shapeless(Item.of('coins:coin_gold', 9), ['coins:coin_pile_gold'])
    event.shapeless(Item.of('coins:coin_platinum', 9), ['coins:coin_pile_platinum'])
    event.shapeless(Item.of('coins:coin_diamond', 9), ['coins:coin_pile_diamond'])

    event.shaped(Item.of('coins:coin_pile_copper', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_copper'
    })
    event.shaped(Item.of('coins:coin_iron', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_pile_copper'
    })
    event.shaped(Item.of('coins:coin_pile_iron', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_iron'
    })
    event.shaped(Item.of('coins:coin_gold', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_pile_iron'
    })
    event.shaped(Item.of('coins:coin_pile_gold', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_gold'
    })
    event.shaped(Item.of('coins:coin_platinum', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_pile_gold'
    })
    event.shaped(Item.of('coins:coin_pile_platinum', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_platinum'
    })
    event.shaped(Item.of('coins:coin_diamond', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_pile_platinum'
    })
    event.shaped(Item.of('coins:coin_pile_diamond', 1), [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'coins:coin_diamond'
    })
  // Create Changes
    event.remove({id: 'minecraft:glowstone'})

  //Enigmatica Ore Changes
    event.remove({input: 'emendatusenigmatica:enigmatic_hammer'})
    event.remove({output: 'emendatusenigmatica:enigmatic_hammer'})

    //event.remove({mod: 'emendatusenigmatica', output: 'emendatusenigmatica:lead_ore'})
    //event.remove({mod: 'emendatusenigmatica', output: '#forge:dusts'})
    //event.remove({mod: 'emendatusenigmatica', input: '#forge:ores'})

    event.remove({input: '#forge:chunks', type: 'minecraft:stonecutting'})


  // Immersive Engineering Changes
    //event.remove({input: 'immersiveengineering:hammer'})
    event.remove({input: 'immersiveengineering:wirecutter'})

  //event.recipes.immersiveengineering.crusher('create:cinder_flour', 'minecraft:netherrack', [chance: 0.1, output: 'minecraft:glowstone_dust'])

})

// Listen to item tag event
onEvent('item.tags', event => {
  //Remove Tags from various ores
  event.remove('forge:ores/gold', 'minecraft:nether_gold_ore')
  event.remove('forge:ores/gold', 'minecraft:gold_ore')

  event.remove('forge:ores/iron', 'emendatusenigmatica:iron_netherrack_ore')
  event.remove('forge:ores/gold', 'emendatusenigmatica:gold_netherrack_ore')
  event.remove('forge:ores/diamond', 'emendatusenigmatica:diamond_netherrack_ore')
  event.remove('forge:ores/emerald', 'emendatusenigmatica:emerald_netherrack_ore')
  event.remove('forge:ores/lapis', 'emendatusenigmatica:lapis_netherrack_ore')
  event.remove('forge:ores/redstone', 'emendatusenigmatica:redstone_netherrack_ore')
  event.remove('forge:ores/silver', 'emendatusenigmatica:silver_netherrack_ore')

  // Add  piglin_loved tag to more nether ores
  event.add('minecraft:piglin_loved', 'minecraft:nether_quartz_ore')

  event.add('minecraft:piglin_loved', 'emendatusenigmatica:gold_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:diamond_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:emerald_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:lapis_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:redstone_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:silver_netherrack_ore')

/*
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:coal_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:iron_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:copper_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:aluminum_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:lead_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:nickel_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:uranium_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:osmium_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:tin_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:zinc_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:certus_quartz_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:charged_certus_quartz_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:fluorite_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:bitumen_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:cinnabar_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:apatite_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:sulfur_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:potassium_nitrate_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:arcane_netherrack_ore')
  event.add('minecraft:piglin_loved', 'emendatusenigmatica:dimensional_netherrack_ore')
*/

  // Add nether_ore Tags to nether ores
  event.add('forge:nether_ores/gold', 'minecraft:nether_gold_ore')

  event.add('forge:nether_ores/iron', 'emendatusenigmatica:iron_netherrack_ore')
  event.add('forge:nether_ores/gold', 'emendatusenigmatica:gold_netherrack_ore')
  event.add('forge:nether_ores/diamond', 'emendatusenigmatica:diamond_netherrack_ore')
  event.add('forge:nether_ores/emerald', 'emendatusenigmatica:emerald_netherrack_ore')
  event.add('forge:nether_ores/lapis', 'emendatusenigmatica:lapis_netherrack_ore')
  event.add('forge:nether_ores/redstone', 'emendatusenigmatica:redstone_netherrack_ore')
  event.add('forge:nether_ores/silver', 'emendatusenigmatica:silver_netherrack_ore')
})

// JEI Hide Things
onEvent('jei.hide.items', event => {
  event.hide('minecraft:gold_ore')

  event.hide('emendatusenigmatica:enigmatic_hammer')

  event.hide('emendatusenigmatica:fluix_dust')
  event.hide('emendatusenigmatica:fluix_gem')
  event.hide('emendatusenigmatica:fluix_block')

})
