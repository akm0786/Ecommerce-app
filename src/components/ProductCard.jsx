import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {

    const navigate = useNavigate()


    return (
        <div
            className="product-card"
            onClick = {()=> navigate(`/product/${product.id}`)}
        >
            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />

            <h3 className="product-title">{product.title}</h3>

            {/* <p className="product-brand">{product.brand}</p> */}

            <p className="product-price">${product.price}</p>

            <p className="product-rating">⭐ {product.rating}</p>
        </div>
    )
}

export default ProductCard