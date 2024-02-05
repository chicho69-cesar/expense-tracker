import styles from './categories-select.module.css'

import { useRef, useState } from 'react'

import Down from '../../assets/icons/down.svg?react'
import { CATEGORIES } from '../../constants/categories.js'
import { useUI } from '../../hooks'
import CategoryIcons from '../structure/category-icons'

export default function CategoriesSelect() {
  const [showSelect, setShowSelect] = useState(false)
  const categories = useRef(CATEGORIES)

  const { category, setCategory } = useUI()

  const handleClick = (event) => {
    setCategory(event.target.dataset.value)
  }

  return (
    <article
      onClick={() => setShowSelect(!showSelect)}
      className='relative cursor-pointer w-full'
    >
      <article className='w-full bg-gray-200 dark:bg-gray-950 dark:text-white px-4 py-2 flex justify-between items-center gap-4 text-xl uppercase rounded-md cursor-pointer'>
        {category} <Down />
      </article>

      {showSelect && (
        <section className={`${styles.options} bg-[#e8eff1] absolute top-14 left-0 w-full rounded-lg max-h-64 shadow-lg overflow-y-auto`}>
          {categories.current.map((cat) => (
            <article
              key={cat.id}
              data-value={cat.id}
              onClick={handleClick}
              className='p-5 flex justify-start text-lg items-center gap-x-4 *:size-10'
            >
              <CategoryIcons id={cat.id} />
              {cat.text}
            </article>
          ))}
        </section>
      )}
    </article>
  )
}
