import sequelize from '../config/database'; // aqui importa o Sequelize que você mostrou
import Info from '../models/infos';

async function seed() {
  try {
    console.log('🔄 Conectando ao banco...');
    await sequelize.authenticate();

    console.log('📦 Criando tabelas (se não existirem)...');
    await sequelize.sync();
    
    console.log('ℹ️ Inserindo infos...');
    await Info.create({
    "CNPJ": "12.345.678/0001-90",
    "Contact": "contato@empresa.com",
    "Logo": "https://meusite.com/logo.png",
    "volkswagen": 0,
    "chevrolet": 0,
    "fiat": 0,
    "ford": 0,
    "toyota": 0,
    "honda": 0,
    "hyundai": 0,
    "renault": 0,
    "peugeot": 0,
    "citroen": 0,
    "nissan": 0,
    "jeep": 0,
    "kia": 0,
    "mitsubishi": 0,
    "mercedes_benz": 0,
    "bmw": 0,
    "audi": 0,
    "volvo": 0,
    "land_rover": 0,
    "jac": 0,
    "jaguar": 0,
    "lexus": 0,
    "chery": 0,
    "byd": 0,
    "outro": 0
    });

    console.log('✅ Seed finalizado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao rodar seed:', error);
  } finally {
    await sequelize.close();
    console.log('🔌 Conexão fechada.');
  }
}

seed();
