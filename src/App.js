import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//our-domain.com/welcome=>Welcome component
//our-domain.com/products=>Products Component
//our-domain.com/product-detail/<anyvalue>=> ProductDetail Component

/*
 ***UPGRADE FROM react-router v5 to rect-router v6*****
 *<Switch> replaced by <Routes>
 *<Route path ='/welcome' element={<Welcome/>}/>
 *no more exact needed
 * NavLink no need activea class
 * <NavLink className={(navData)=>{navData.isActive? classes.active: '' }}to='/welcome'}
 * Navigate instead of redirect
 * replace prop in NAVIGATE
 * NESTED ROUTES= WRAP your route with ROUTES even if it is single..
 * <Route path = "/welcome/*>"
 * nested loop ma <Route path = 'new-user' elmenht={<P>Welcomr,newUser}
 *you can write nested routes as: <Route><Route/></Route>
 * to let no where it shouls be inserted use <Outlet/>
 * Imperative NAVIGATION
 * NO MORE useHistory
 * useNavigate('/welcome', {replace: true})
 *navigate(-1)=back to previous page
 1= forward
 * no more Prompt
 */
