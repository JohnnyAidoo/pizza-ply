import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import image from '../images/pizzas/bbq-meat-feast4515.png'


function PoductCard() {
    
    const productClicked = () =>{
     localStorage.setItem('image', image)
     localStorage.setItem('name', 'pizza' )
     localStorage.setItem('price', 100)
    }

    return (
        <Card id="PoductCard" onClick={productClicked}>
            <CardMedia>
                <img src={image}/>
            </CardMedia>
            <CardContent>
                <Typography>
                    Pizza
                </Typography>
                <h3>Price</h3>
            </CardContent>
        </Card>
    );
}

export default PoductCard;