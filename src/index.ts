// import { v4 as uuid } from "uuid"
import { v4 as uuidv4 } from 'uuid';
import * as readlineSync from 'readline-sync'

function testMe(name: string): void {
    console.log(name)
}
testMe('Grace')
// noImplicitAny
// set to true
// function implicitAny(id:number):number {
//     return id
// }
// noImplicitReturns
// set to true
// function noImplicitReturns(name:string):string{
//     console.log(name)
// }
// noUnusedlocals
// set to true
// function noUnusedlocals(): void {
//     let unused = 5
//     console.log("yolo")
// }
// noUnusedParameters
// set to true
// function noUnusedParameters(id: number):void {
//     console.log("youre a goofy goober")
// }
// strictNullChecks
// set to true
// function strictNullChecks(id: number): void {
//     console.log(id)
// }
// strictNullChecks(null)
// allowUnreachebleCode
// set to false
// function unreachable(id: number): number {
//     while(typeof id === "number"){
//         // break
//     }
//     return id
// }
// noImplicitOverrides
// set to true
// class Father {
//     constructor(public age: number){}
//     playSmash():string{
//         return "Get rekt my son"
//     }
// }
// class Son extends Father {
//     override playSmash():string {
//         return "One day I shall defeat you, father, and regain my honor"
//     }
// }

let myUuid = uuidv4()
console.log(myUuid)

class InventoryItem {
    id: string;
    name: string;
    description: string;
    price: number;
    
  ​
    constructor(name:string, description:string, price:number) {
      this.id = uuidv4();
      this.name = name;
      this.description = description;
      this.price = price;
    }
  }
  ​
  class Weapon extends InventoryItem{
    damage: number;
  ​
    constructor(name:string, description:string, price:number, damage:number){
      super(name, description, price);
      this.damage = damage;
    }
  }
  ​
  class Armor extends InventoryItem{
    defense: number;
  ​
    constructor(name:string, description:string, price:number,defense:number){
      super(name, description, price);
      this.defense = defense
    }
  }
  ​
  class RPGCharacter {
    id: string;
    name: string;
    archtype: string;
    fightingStyle: 'ranged' | 'melee';
    inventory: InventoryItem[];
  ​
    constructor(name:string, archtype:string, fightingStyle: 'ranged' | 'melee'){
      this.id = uuidv4();
      this.name = name;
      this.archtype = archtype;
      this.fightingStyle = fightingStyle;
      this.inventory = [];
    }
  ​
    addToInventory(item: Weapon | Armor):void {
      this.inventory.push(item)
    }
  ​
    removeFromInventory(item: InventoryItem): void {
      this.inventory= this.inventory.filter(invItem => invItem.name != item.name)
    }
  // inventory = [Apple, Apple, Sword, Armor, Apple]
  // removeQuantityFromInventory('Apple', 2)
    removeQuantityFromInventory(item: InventoryItem, quantityToRemove: number): void{
      let count = 0
      this.inventory = this.inventory.filter(invItem =>{
        if (invItem.name == item.name && count < quantityToRemove){
          count++;
          return false
        }
        return true
      })
    }
  ​
    inventoryValue(): number {
      return this.inventory.reduce((acc, item) => acc + item.price, 0);
    }
  ​
    printInventory(): void {
      console.log(this.inventory);
    }
  }
  ​
//   const hero = new RPGCharacter('Zelda', 'Warrior', 'melee')
//   const hero2 = new RPGCharacter('Link', 'Warrior', 'ranged')

//   const sword = new Weapon('Sword', 'A sharp blade.', 50, 10)
//   const bow = new Weapon('Bow', 'A long range weapon', 40, 7)

//   const shield = new Armor('Shield', 'A sturdy shield.', 80, 20);
//   const helmet = new Armor('Helmet', 'Protective headgear.', 50, 15);
//   ​
//   hero.addToInventory(sword)
//   hero.addToInventory(bow)
//   hero.addToInventory(shield)
//   hero.addToInventory(helmet)

//   console.log(hero2)
//   console.log('Initial Inventory:')
//   hero.printInventory()
//   ​
//   console.log(`Total Inventory Value: ${hero.inventoryValue()}`)
//   ​
//   hero.removeFromInventory(sword);
//   ​
//   console.log('Inventory after removing the sword:');
//   hero.printInventory();
//   ​
//   console.log(`Total Inventory Value after removal: ${hero.inventoryValue()}`);
//   ​

//driver code
function getUserInput(prompt: string): string {
    return readlineSync.question(prompt)
}
    
function getUserInputNumber(prompt: string): number {
    return parseFloat(getUserInput(prompt))
}

function mainMenu(){
    const characters: RPGCharacter[]=[]
    const weapons: Weapon[]=[]
    const armor: Armor[]=[]
    

    while (true){
        console.log("\nPress 1 to add character.")
        console.log("Press 2 to add weapon.")
        console.log("Press 3 to add armor.")
        console.log("Press 4 to remove weapon.")
        console.log("Press 5 to remove armor.")
        console.log("Press 6 to exit. ")
        const choice: number = getUserInputNumber("Please enter your choice: ")

        switch(choice){
            case 1: 
            // (name:string, archtype:string, fightingStyle: 'ranged' | 'melee')
            const charName: string = getUserInput("Enter the character name: ")
            const charArchType:string = getUserInput ("Enter character type: ")
            const charFightingStyle: 'ranged' | 'melee' = getUserInput("Enter character fighting style (ranged/melee): ") as 'ranged' | 'melee'
            const newCharacter= new RPGCharacter(charName, charArchType, charFightingStyle)
            characters.push(newCharacter)
            console.log(`\nCharacter: ${charName} added successfully.`)
            break

            case 2: 
            // (name:string, description:string, price:number,damage:number)
            const weaponName: string = getUserInput ("What weapon would you like to add? Sword or Bow? ")
            const weaponDescription: string = getUserInput ("A sharp blade or a long range weapon? ") 
            const weaponPrice: number = getUserInputNumber ("Enter 40 for bow and 80 for sword: ")
            const weaponDamage: number = getUserInputNumber ("Enter 10 for sword and 7 for bow: ")
            const newWeapon= new Weapon(weaponName, weaponDescription, weaponPrice, weaponDamage)
            weapons.push(newWeapon)

            console.log(`\nWeapon: ${weaponName} added successfully.`)
            break

            case 3:
            const armorName: string = getUserInput ("What weapon would you like to add? Sturdy Shield or Protective headgear? ")
            const armorDescription: string = getUserInput ("Super Sturdy Shield or a Mighty Protective Headgear? ") 
            const armorPrice: number = getUserInputNumber ("Enter 80 for Shield or 50 for Helmet: ")
            const armorDefense: number = getUserInputNumber ("Enter 20 for Shield and 15 for Helmet: ")
            const newArmor= new Armor(armorName, armorDescription, armorPrice, armorDefense)
            armor.push(newArmor)

            console.log(`\nArmor: ${armorName} added successfully`)
            break

            case 4:
                // name:string, description:string, price:number,damage:number)
           
            const characterToRemoveWeapon: RPGCharacter | undefined = selectCharacter(characters, "Select a character to remove weapon from:")
                if (characterToRemoveWeapon) {
                    const weaponToRemove: InventoryItem | undefined = selectItem(weapons, "Select a weapon to remove:")
                    if (weaponToRemove) {
                        characterToRemoveWeapon.removeFromInventory(weaponToRemove)
                        console.log(`\nWeapon ${weaponToRemove.name} removed from ${characterToRemoveWeapon.name}'s inventory.`)
                    } else {
                        console.log("Invalid weapon selection.")
                    }
                } else {
                    console.log("Invalid character selection.")
                }
                break

            case 5:
                const characterToRemoveArmor: RPGCharacter | undefined = selectCharacter(characters, "Select a character to remove armor from:")
                if (characterToRemoveArmor) {
                    const armorToRemove: InventoryItem | undefined = selectItem(armor, "Select an armor to remove:")
                    if (armorToRemove) {
                        characterToRemoveArmor.removeFromInventory(armorToRemove)
                        console.log(`\nArmor ${armorToRemove.name} removed from ${characterToRemoveArmor.name}'s inventory.`)
                    } else {
                        console.log("Invalid armor selection.")
                    }
                } else {
                    console.log("Invalid character selection.")
                }
                break  

            case 6:
            console.log("\nThank you for playing, please come again. ")
            process.exit(0)
            

            default: 
            console.log("Invalid choice, please try again")

        }
    }    
}

// Helper function to select a character from the list
function selectCharacter(characters: RPGCharacter[], prompt: string): RPGCharacter | undefined {
    console.log(prompt);
    for (let i = 0; i < characters.length; i++) {
        console.log(`${i + 1}. ${characters[i].name}`)
    }
    const index: number = getUserInputNumber("Enter the number corresponding to the character: ") - 1;
    return characters[index]
}
// Helper function to select an item from the list
function selectItem(items: InventoryItem[], prompt: string): InventoryItem | undefined {
    console.log(prompt);
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}. ${items[i].name}`)
    }
    const index: number = getUserInputNumber("Enter the number corresponding to the item: ") - 1;
    return items[index]
}
function isWeapon(item:InventoryItem):item is Weapon{
    return 'damage' in item
}

mainMenu()
