interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface Proprietario {
  cpfCnpj: string;
  nome: string;
  rg: string;
  cnh: string;
  endereco: Endereco;
}

export interface Veiculo {
  nome: String;
  placa: String;
  cor: String;
  renavan: String;
  marca: String;
  ano: number;
  proprietario: Proprietario;
}
