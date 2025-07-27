import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isBestsale && <span className ='lmj-best-sale'>🔥</span>}
						{plant.name}
						<CareScale careType={'light'} scaleType={plant.light} />
						<CareScale careType={'water'} scaleType={plant.water} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList