let input = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function result() {
    
    let x = Number(input.value)
    
    // 1 meter = 3.280 feet
    // 1 feet = 0.304 meters    
    
    let meterConversion = (x * 3.280).toFixed(3)
    let feetConversion = (x * 0.304).toFixed(3)
    
    // 1 liter =  0.219 gallons
    // 1 gallons = 4.546 liters
    
    let literConversion = (x * 0.219).toFixed(3)
    let gallonConversion = (x * 4.546).toFixed(3)
    
    // 1 kilogram = 2.204 pounds
    // 1 pound = 0.453 kilograms 
    
    let kilogramConversion = (x * 2.204).toFixed(3)
    let poundConversion = (x * 0.453).toFixed(3)
    
    lengthEl.textContent = x + " Meters = " + meterConversion + " Feet | " + x + " Feet = " + feetConversion + " Meters"
    
    volumeEl.textContent = x + " Liters = " + literConversion + " Gallons | " + x + " Gallons = " + gallonConversion + " Liters"
    
    massEl.textContent = x + " Kilograms = " + kilogramConversion + " Pounds | " + x + " Pounds = " + poundConversion + " Kilograms"
}
