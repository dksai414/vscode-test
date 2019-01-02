import { connect } from 'dva';
import ProductList1 from '../../components/ProductList';

const titleName = '测试列表';
const user = { name: 'guanguan', age: 222666 };
const { name, age:age1 } = user;
let todos = [1,'a','b',2];
const attrs = {
  href: 'http://example.org',
  target: '_blank',
};


const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>{titleName+name+age1}</h2>
      <a {...attrs}>Hello</a>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
      <ProductList1 onDelete={handleDelete} products={products} />
      <ProductList1 onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);