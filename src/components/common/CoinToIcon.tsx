import { FC, FunctionComponent, SVGProps } from 'react'
import { ReactComponent as SolanaIcon } from 'assets/icons/Solana.svg'
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg'
import { ReactComponent as BnBIcon } from 'assets/icons/BnB.svg'
import { ExchangeCoinType } from 'types/exchange/exchange.type'

const IconObject: Record<ExchangeCoinType, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  Ethereum: EthereumIcon,
  Solana: SolanaIcon,
  BnB: BnBIcon,
}

interface CoinToIconProps {
  coinName: ExchangeCoinType
}

const CoinToIcon: FC<CoinToIconProps> = ({ coinName }) => {
  const IconComponent = IconObject[coinName]
  if (!IconComponent) {
    return <></>
  } else {
    return <IconComponent />
  }
}

export default CoinToIcon
