class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  // ����� ������������ �������� �������
  getWatt(){
    console.log(" "+this.name + `has a power of ${this.power} Watt`);
  }
  // �����, ������� ���������� ������ ��� ���������� � �������
  plugIn(){
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  // �����, ������� ���������� ������ ��� ���������� �� �������
  unplug(){
     console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}


// ������ 1
class Lamp extends ElectricalAppliance{
  constructor(name, brand, power, bulbType){
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}
  

// ������ 2
class Computer extends ElectricalAppliance{
  constructor(name, brand, power, type, functionality){
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

//������ 3
class Fen extends ElectricalAppliance{
  constructor(name, brand, power, type){
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;   
   }
  // ����� ��������� ������� � �������
  plugIn() {
    console.log(this.name + " is plugged! "+ "Temperature = 0 Grad");
  }
  // ����� ������������ ������ ����������� 0 - 0 ����.� 1- 350 ����., 2- 500 ����.
  setTemp(mode){        
        switch(mode){
        case 0: Temp = 0;  infoTemp(mode, Temp); break            
        case 1: Temp = 350; infoTemp(mode, Temp);  break 
        case 2: Temp = 500;  infoTemp(mode, Temp); break           
    }
    //������� ������ ����������� �� �����
    function infoTemp(mode, Temp){  
    console.log("Set mode " + mode + `. Fen Temperature = ${Temp} Grad`)} 
  }
 
}

// ��������� �����
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// ��������� ����������
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// ��������� ���
const FenSpec = new Fen("Fen BPW-2000", "Spec", 2000, "Professional")

// ��������� ����� �� �������
tableLamp.unplug();

// �������� homePC � �������
homePC.plugIn();

// ������ �������� 
homePC.getWatt();

// ���������
console.log(homePC)

//�������� ���
FenSpec.plugIn();
FenSpec.setTemp(1);

//"Fen BPW-2000 is plugged! Temperature = 0 Grad"
//"Set mode 1. Fen Temperature = 350 Grad"