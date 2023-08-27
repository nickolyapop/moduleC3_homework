class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  // метод определяющий мощность прибора
  getWatt(){
    console.log(" "+this.name + `has a power of ${this.power} Watt`);
  }
  // метод, который определяет прибор как включенный в розетку
  plugIn(){
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  // метод, который определяет прибор как выключеный из розетки
  unplug(){
     console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}


// Прибор 1
class Lamp extends ElectricalAppliance{
  constructor(name, brand, power, bulbType){
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}
  

// Прибор 2
class Computer extends ElectricalAppliance{
  constructor(name, brand, power, type, functionality){
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

//Прибор 3
class Fen extends ElectricalAppliance{
  constructor(name, brand, power, type){
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;   
   }
  // метод включения прибора в розетку
  plugIn() {
    console.log(this.name + " is plugged! "+ "Temperature = 0 Grad");
  }
  // метод переключения режима температуры 0 - 0 град.б 1- 350 град., 2- 500 Град.
  setTemp(mode){        
        switch(mode){
        case 0: Temp = 0;  infoTemp(mode, Temp); break            
        case 1: Temp = 350; infoTemp(mode, Temp);  break 
        case 2: Temp = 500;  infoTemp(mode, Temp); break           
    }
    //функция вывода температуры на экран
    function infoTemp(mode, Temp){  
    console.log("Set mode " + mode + `. Fen Temperature = ${Temp} Grad`)} 
  }
 
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// экзмепляр фен
const FenSpec = new Fen("Fen BPW-2000", "Spec", 2000, "Professional")

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// узнать мощность 
homePC.getWatt();

// результат
console.log(homePC)

//включить фен
FenSpec.plugIn();
FenSpec.setTemp(1);

//"Fen BPW-2000 is plugged! Temperature = 0 Grad"
//"Set mode 1. Fen Temperature = 350 Grad"