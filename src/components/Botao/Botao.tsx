import "./Botao.sass";

interface Props {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Botao({ children, type = "button", onClick }: Props) {
  return (
    <>
      <button onClick={onClick} type={type} className="input__submit">
        {children}
      </button>
    </>
  );
}
