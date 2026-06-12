const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="product-image"
            />

            <h3 className="product-title">{product.title}</h3>

            <p className="product-brand">{product.brand}</p>

            <p className="product-price">${product.price}</p>

            <p className="product-rating">⭐ {product.rating}</p>
        </div>
    )
}

export default ProductCard