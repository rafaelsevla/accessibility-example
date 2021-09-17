import { Col, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardProduct from './card-product'

import products from './products';
import './App.css';

function App() {

  return (
    <>
      <ToastContainer />
      <div className="product-list">
        <Row>
          {products.map(product => (
            <Col md={6}>
              <CardProduct
                product={product}
                addProductToCart={() => {}}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default App;
