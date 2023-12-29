import { component$, useStore, $ } from '@builder.io/qwik'
import Button from '../__libary/atoms/button/button'
import ProductCard from '../__libary/atoms/productCard/productCard'
import ProductImage from '../__libary/atoms/productCard/productImage'
import ProductInfo from '../__libary/atoms/productCard/productInfo'
import ProductButton from '../__libary/atoms/productCard/productButton'
import ProductRating from '../__libary/atoms/productCard/productRating'
import ProductPrice from '../__libary/atoms/productCard/productPrice'
import ProductCategory from '../__libary/atoms/productCard/productCategory'
import ProductTitle from '../__libary/atoms/productCard/productTitle'
import ProductLabel from '../__libary/atoms/productCard/ProductLabel'

const TestButtonDataMock = {
	label: 'testtesttesttesttesttesttest',
	variant: 'primary',
	size: 'medium',
	class: 'test',
	onClick: $(() => {
		console.log('test')
	}),
}

const IncrementButton = {
	label: 'Increment',
	variant: 'primary',
	size: 'medium',
	class: 'increment',
	number: 12331,
}

const DecremntButton = {
	label: 'decrement',
	variant: 'primary',
	size: 'medium',
	class: 'decrement',
	number: 12331,
}

const ResetButton = {
	label: 'reset',
	variant: 'primary',
	size: 'medium',
	class: 'reset',
	number: 12331,
}

const ProductCardDataMock = {
	id: 123,
	title: 'title--testtesttesttesttesttesttest',
	image: 'https://picsum.photos/seed/picsum/200/300',
	stars: 5,
	size: 'size--medium',
	price: 'price--test',
	label: 'label--test',
	category: 'category--test',
	buttonLabel: 'add to cart',
}

export default component$(() => {
	const store = useStore({ count: 0 })

	const increment = $(() => {
		store.count++
	})
	const decrement = $(() => {
		store.count--
	})
	const reset = $(() => {
		store.count = 0
	})

	const handleProductCardClick = $((label: string) => {
		store.count = 777
		console.log('test click', label)
	})

	return (
		<div>
			<ProductCard
				product={ProductCardDataMock}
				image={<ProductImage />}
				info={
					<ProductInfo>
						{<ProductRating />}
						{<ProductPrice />}
						{<ProductCategory />}
						{<ProductTitle />}
						{<ProductLabel />}
					</ProductInfo>
				}
				action={<ProductButton onClick$={() => handleProductCardClick(ProductCardDataMock.label)} />}
			>
			</ProductCard>
			<Button
				size={TestButtonDataMock.size}
				class={TestButtonDataMock.class}
				label={TestButtonDataMock.label}
				onClick$={TestButtonDataMock.onClick}
				aria-label={TestButtonDataMock.label}
			>
				{TestButtonDataMock.label}
			</Button>
			<div class="count_label">Count-- :</div>
			<div class="count">{store.count}</div>
			<hr />
			<Button
				class={IncrementButton.class}
				onClick$={increment}
				aria-label={IncrementButton.label}
			>
				{IncrementButton.label}
			</Button>
			<Button
				class={DecremntButton.class}
				onClick$={decrement}
				aria-label={DecremntButton.label}
			>
				{DecremntButton.label}
			</Button>
			<Button
				class={ResetButton.class}
				onClick$={reset}
				aria-label={ResetButton.label}
			>
				{ResetButton.label}
			</Button>
		</div>
	)
})
