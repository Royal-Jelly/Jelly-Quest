// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

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

  // Immersive Engineering Changes
    event.remove({input: 'immersiveengineering:hammer'})
    event.remove({input: 'immersiveengineering:wirecutter'})

  //event.recipes.immersiveengineering.crusher('create:cinder_flour', 'minecraft:netherrack', [chance: 0.1, output: 'minecraft:glowstone_dust'])

})

onEvent('jei.hide.items', event => {
  event.hide('#coins:coin_banner_pattern')
})

onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
