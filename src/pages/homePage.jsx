import CardComp from '../components/card';
import logo from '../images/pizzas/logo.png'


function HomePage() {
    return (
        <section id='HomePage'>
        <div className="ADBanner">
            <img src={logo} alt="" />
            <h1>PIZZA-PLY</h1>
        </div>
        <nav>
            <a href="">For You</a>
            <a href="">Hot Order</a>
        </nav>
        <div className="grid">
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
        
        </div>
        </section>
    );
}

export default HomePage;