import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import BookingPage from './components/BookingPage';
import LogoRestaurant from './assets/LogoRestaurant.svg'
import RestaurantFood from './assets/RestauranFood.jpg'
import Bruschetta from './assets/Bruchetta.svg'
import GreekSalad from './assets/GreekSalad.jpg'
import LemonDessert from './assets/LemonDessert.jpg'

const Header = styled.header`
 background-color: #FFFFFF;
 color: #333333;
 padding: 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const Nav = styled.nav`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;

const NavLinks = styled.div`
 display: flex;
 gap: 20px;
`;

const Logo = styled.h1`
 margin-right: auto;
`;

const HeroSection = styled.section`
 background-color: #495E57;
 color: #FFFFFF;
 padding: 40px;
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

const HeroText = styled.div`
 width: 50%;
 text-align: left;
`;

const HeroImage = styled.img`
 width: 10%;
 border-radius: 10px;
`;

const SpecialsSection = styled.section`
 padding: 40px;
 text-align: center;
`;

const SpecialsGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 gap: 20px;
 margin-top: 20px;
`;

const Card = styled.div`
 background-color: #EDEFEE;
 border-radius: 10px;
 padding: 20px;
 text-align: left;
`;

const CardImage = styled.img`
 width: 100%;
 border-radius: 10px;
 margin-bottom: 10px;
`;

const Footer = styled.footer`
 background-color: #333333;
 color: #FFFFFF;
 text-align: center;
 padding: 10px;
 position: fixed;
 bottom: 0;
 width: 100%;
`;

const initialTimes = [
 '17:00',
 '18:00',
 '19:00',
 '20:00',
 '21:00',
 '22:00',
];

const updateTimes = (state, action) => {
 switch (action.type) {
 case 'UPDATE_TIMES':
 return initialTimes;
 default:
 return state;
 }
};

const initializeTimes = () => initialTimes;
export { updateTimes, initializeTimes };

function HomePage() {
 return (
 <>
 <HeroSection>
 <HeroText>
 <h2>Little Lemon</h2>
 <h3>Chicago</h3>
 <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
 <Link to="/booking">
 <button style={{ backgroundColor: '#F4CE14', padding: '10px', borderRadius: '5px', color: '#333333' }}>
 Reserve a Table
 </button>
 </Link>
 </HeroText>
 <HeroImage src={RestaurantFood} alt="Little Lemon Dish" />
 </HeroSection>

 <SpecialsSection>
 <h2>This weeks specials!</h2>
 <SpecialsGrid>
 <Card>
 <CardImage src={GreekSalad} alt="Greek Salad" />
 <h3>Greek Salad $12.99</h3>
 <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
 <a href="#">Order a delivery</a>
 </Card>
 <Card>
 <CardImage src={Bruschetta} alt="Bruschetta" />
 <h3>Bruschetta $5.99</h3>
 <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
 <a href="#">Order a delivery</a>
 </Card>
 <Card>
 <CardImage src={LemonDessert} alt="Lemon Dessert" />
 <h3>Lemon Dessert $5.00</h3>
 <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
 <a href="#">Order a delivery</a>
 </Card>
 </SpecialsGrid>
 </SpecialsSection>
 </>
 );
}

function App() {
 const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

 return (
 <Router>
 <Header>
 <Logo><img src={LogoRestaurant}/></Logo>
 <Nav>
 <NavLinks>
 <Link to="/">Home</Link>
 <Link to="/about">About</Link>
 <Link to="/menu">Menu</Link>
 <Link to="/booking">Reservations</Link>
 <Link to="/order-online">Order Online</Link>
 <Link to="/login">Login</Link>
 </NavLinks>
 </Nav>
 </Header>

 <Routes>
 <Route path="/" element={<HomePage />} />
 <Route
 path="/booking"
 element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
 />
 </Routes>

 <Footer>
 <p>© 2025 Little Lemon</p>
 </Footer>
 </Router>
 );
}

export default App;
