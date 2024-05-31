import { useContext } from '@builder.io/qwik'
import { createContextId } from '@builder.io/qwik'
import { type TProduct } from './productCardTypes'

const ProductCardContext = createContextId<TProduct>('product.product-context')

export function useProductCardContext() {
	const context = useContext(ProductCardContext)
	return context
}

export default ProductCardContext
