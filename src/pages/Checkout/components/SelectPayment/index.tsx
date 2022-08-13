import { CurrencyDollar } from 'phosphor-react';

export function SelectPayment() {
  return (
    <div>
      <div>
        <CurrencyDollar weight="fill" />
        <div>
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>

      <div>cards q sao radio buttons</div>
    </div>
  );
}
