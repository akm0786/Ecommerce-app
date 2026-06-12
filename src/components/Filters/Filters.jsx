import CategoryFilter from "./CategoryFilter"
import PriceFilter from "./PriceFilter"
import BrandFilter from "./BrandFilter"


const Filters = () => {


    return (
        <div>
            <h3>Filters</h3>

            <CategoryFilter/>
            <PriceFilter/>
            <BrandFilter/>
        </div>
    )
}

export default Filters