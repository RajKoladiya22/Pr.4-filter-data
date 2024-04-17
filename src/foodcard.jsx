import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const FoodCard = ({data}) => {

    return (
        <>
            {
                data.map((val) => {
                    return (
                        <Card style={{ width: '18rem' }} className='mt-3'>
                            <Card.Img variant="top" src={val.img} style={{height : "210px", objectFit :"cover"}} />
                            <Card.Body>
                                <Card.Title>{val.name}</Card.Title>
                                <Card.Text>
                                     {val.category}
                                </Card.Text>
                                <Card.Text>
                                    {val.des}
                                </Card.Text>
                                <Button variant="primary">Starting &#x20B9;{val.starting}</Button>
                            </Card.Body>
                        </Card>
                    )
                })

                
            }
        </>
    )
}
export const FilterFoodCard = ({final}) => {

    return (
        <>
            {
                final.map((val) => {
                    return (
                        <Card style={{ width: '18rem' }} className='mt-3' key={val.id}>
                            <Card.Img variant="top" src={val.img} style={{height : "210px", objectFit :"cover"}} />
                            <Card.Body>
                                <Card.Title>{val.name}</Card.Title>
                                <Card.Text>
                                     {val.category}
                                </Card.Text>
                                <Card.Text>
                                    {val.des}
                                </Card.Text>
                                <Button variant="primary">Starting &#x20B9;{val.starting}</Button>
                            </Card.Body>
                        </Card>
                    )
                })

                
            }
        </>
    )
}