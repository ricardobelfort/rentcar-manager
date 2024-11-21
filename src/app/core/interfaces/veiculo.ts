export interface Veiculo {
  id?: string;
  marca: string;
  modelo: string;
  placa: string;
  valorDiaria: number;
  anoFabricacao: number;
  cor: string;
  quilometragem: number;
  tipoCombustivel: string;
  disponivel: boolean;
  apagado: boolean;
}