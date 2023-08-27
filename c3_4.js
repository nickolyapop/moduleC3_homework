function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// �����, ������� ���������� ������ ��� ���������� � �������
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// �����, ������� ���������� ������ ��� ���������� �� �������
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};
// ����� ������������ �������� �������
ElectricalAppliance.prototype.getWatt = function(){    
    console.log(" "+this.name + `has a power of ${this.power} Watt`);
};

// ������ 1
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

// ������ 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}
Computer.prototype = new ElectricalAppliance();

//������ 3
function Fen(name, brand, power, type){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.isPlugged = false;      
    
   //������� ������ ����������� �� ����� 
    const Temp = {
         0: '0 Grad',
         1: '350 Grad',
         2: '500 Grad',
    }
    this.setTemp = function(mode){     
    console.log("Set mode " + mode + ". Fen Temperature = " + Temp[mode]);         
    }
}
Fen.prototype = new ElectricalAppliance();

// ��������� �����
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// ��������� ����������
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// ��������� ���
const FenSpec = new Fen("Fen BPW-2000", "Spec", 2000, "Professional");

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

