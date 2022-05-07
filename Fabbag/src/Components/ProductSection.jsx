import styled from "styled-components";

const SectionWrapper = styled.div`
  th {
    text-align: left;
    text-transform: uppercase;
  }
  th,
  td {
    padding: 3px;
  }
  .product {
    display: flex;
    img {
      width: 80px;
      margin-right: 5px;
    }
  }
  .product-name {
    text-align: left;
  }
  .product-qty {
    /* display: block; */
    input {
      height: 20px;
      padding: 5px;
      width: 50px;
      text-align: center;

      &:focus {
        border: 1px solid orange;
        outline: none;
      }
    }
  }
  .product-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

   
  }
  .remove-btn2 {
    display: none;
  }
  .btn{
    border: none;
  }
  .orange{
    color: #e5b95f;
  }
  @media (max-width: 767.98px) {
    .remove-btn2 {
      display: block;
    }
    .remove-btn {
      display: none;
    }
    .product-details{
      display: block;
    }
  }
`;

function ProductSection({ products,updateCart }) {

 

  const handleChange = () => {};
  const handleKeyPress = (e) => {
    // console.log(e.key);

    if(e.key === 'Enter') {
      console.log("true");
      updateCart();
    }
  }
  return (
    <SectionWrapper>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th className="remove-btn">Price</th>
            <th className="remove-btn"></th>
          </tr>
          {products.map((product) => (
            <tr>
              <td className="product">
                <div>
                  <img src={product.image} alt="" />
                </div>
                <div className="product-details">
                  <p>{product.title}</p>
                  <p className="remove-btn2">Rs {product.price}</p>
                  <button className="remove-btn2 btn orange">Remove</button>
                </div>
              </td>

              <td className="product-qty">
                <input type="number" name="qty" id="" onChange={handleChange} onKeyDown={handleKeyPress} />
              </td>
              <td className="remove-btn">Rs {product.price}</td>
              <td className="remove-btn">
                <button className="btn">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionWrapper>
  );
}

export default ProductSection;
