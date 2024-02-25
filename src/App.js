import logo from './logo.svg';
import './App.css';
import SignUp from './signUp';
import SignIn from './signIn';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './products';
import Part from './partProduct';
import Cart from './cart';


function App() {
  return (

    
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<SignUp/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/products/:id" element={<Part/>}/>
<Route path="/cart" element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
    {/* <SignUp/> */}

    {/* <SignIn/> */}
    
    
    </>
  );
}

export default App;
