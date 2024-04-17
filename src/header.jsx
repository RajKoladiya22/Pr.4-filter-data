import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Head({ categories, data, filterData }) {

    const handleRefresh = () => {
        window.location.reload(); 
      };

    const FilterData = (cate) => {

        const GetData = data.filter((val) => {
            if (val.category === cate) {
                return val
            }
        })



        filterData(GetData);
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href='#' onClick={() => { handleRefresh() }}>All Food</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            categories.map((val) => {
                                return (
                                    <Nav.Link onClick={() => { FilterData(val.categoryname) }}>{val.categoryname}</Nav.Link>
                                )
                            })
                        }
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Head;