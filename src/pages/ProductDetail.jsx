import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useState, useEffect } from "react";

const ProductDetail = () => {
    const { id } = useParams()
    const { products } = useProductContext()
    const navigate = useNavigate()

    const product = products.find((p) => p.id === Number(id))

    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        if (product) {
            const imgs = product.images?.length
                ? product.images
                : [product.thumbnail]

            setSelectedImage(imgs[0] || null)
        }
    }, [product])
    if (!product) {
        return <h2>Product not found</h2>
    }

    return (
        <div className="product-detail">
            <button onClick={() => navigate(-1)}>← Back</button>

            <div className="detail-container">

                {/* LEFT: Images */}
                <div className="image-section">
                    <img src={selectedImage} className="main-image" />

                </div>

                {/* RIGHT: Info */}
                <div className="info">
                    <h2>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <p>⭐ {product.rating}</p>

                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Category:</strong> {product.category}</p>

                    <hr />

                    <h4>Description</h4>
                    <p>{product.description}</p>
                </div>

            </div>
        </div>
    )

}

export default ProductDetail