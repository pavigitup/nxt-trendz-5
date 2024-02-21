import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  console.log(productDetails)

  const {id, brand, imageUrl, price, rating, title} = productDetails

  return (
    <li key={id}>
      <img
        src={imageUrl}
        alt={`similar product ${id}`}
        className="product-img"
      />
      <div>
        <h1>{title}</h1>
        <p>By {brand}</p>
        <p>Rs {price}/- </p>
        <button type="button">{rating}</button>
      </div>
    </li>
  )
}

export default SimilarProductItem
