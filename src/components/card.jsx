import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import image from '../images/pizzas/bbq-meat-feast4515.png'


function PoductCard() {
    
    return (
        <Card id="PoductCard">
            <CardHeader>
                
            </CardHeader>
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