import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Cadastro } from "../models/Cadastro.model";
import { CadastroContextData } from "../models/CadastroContextData.model";

const CadastroContext = createContext<CadastroContextData>(
  {} as CadastroContextData
);

export const CadastroProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<Cadastro>({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    cidade: "",
    sexo: "",
    crm: "",
    especialidade: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  async function updateValues(values: object): Promise<void> {
    setValues((currValues) => ({ ...currValues, ...values }));
  }

  async function changeStep(step: number): Promise<void> {
    setStep(step);
  }

  return (
    <CadastroContext.Provider
      value={{ values, updateValues, step, changeStep }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export function useCadastro() {
  const context = useContext(CadastroContext);
  return context;
}
