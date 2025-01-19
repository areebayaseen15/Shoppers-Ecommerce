import Container from '../component/Container';
import CartContainer from '../component/CartContainer';

const CartPage = () => {
 
  return (
    <div>
      <Container className="py-5">
        <CartContainer />
      </Container>
    </div>
  );
};

export default CartPage;
