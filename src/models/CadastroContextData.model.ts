import { Cadastro } from "./Cadastro.model";

export interface CadastroContextData {
  step: number;
  values: Cadastro;
  updateValues(values: object): Promise<void>;
  changeStep(step: number): Promise<void>;
}
