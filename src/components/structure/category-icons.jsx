import { PropTypes } from 'prop-types'

import IconAccountsAndPayments from '../../assets/icons/cat_accounts-and-payments.svg?react'
import IconClothes from '../../assets/icons/cat_clothes.svg?react'
import IconFood from '../../assets/icons/cat_food.svg?react'
import IconFun from '../../assets/icons/cat_fun.svg?react'
import IconHealthAndHygiene from '../../assets/icons/cat_health-and-hygiene.svg?react'
import IconHome from '../../assets/icons/cat_home.svg?react'
import IconShopping from '../../assets/icons/cat_shopping.svg?react'
import IconTransport from '../../assets/icons/cat_transport.svg?react'

const CATEGORY_ICONS = {
  'accounts-and-payments': IconAccountsAndPayments,
  'clothes': IconClothes,
  'food': IconFood,
  'fun': IconFun,
  'health-and-hygiene': IconHealthAndHygiene,
  'home': IconHome,
  'shopping': IconShopping,
  'transport': IconTransport,
}

export default function CategoryIcons({ id }) {
  const IconComponent = CATEGORY_ICONS[id]

  return (
    <>
      {IconComponent && <IconComponent />}
    </>
  )
}

CategoryIcons.propTypes = {
  id: PropTypes.string
}
