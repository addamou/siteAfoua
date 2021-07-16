import { Grid, Container } from '@material-ui/core'
import './style.css'
import { FaFacebook, FaTwitter, FaEnvelope, FaGooglePlay } from 'react-icons/fa';



const index = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid item xs={12} sm={12}>
                    <ul className="socials">
                        <li>
                            <a href="cliniqueafou@gmail.com" className="liens">
                                <FaEnvelope />
                            </a>
                        </li>
                        <li>
                            <a href="http://facebook.com/afoua" className="liens">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/afoua" className="liens">
                                <FaTwitter />
                            </a>
                        </li>

                        <li>
                            <a href="http://google.fr/" className="liens">
                                <FaGooglePlay />
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Container>
            <div item xs={12} style={{ textAlign: "center", backgroundColor: '#2A43FC' }}>
                <h5>COPYRIGHT © 2021| AFOUA</h5>
                <p>Tous Droit Reserves</p>
            </div>
        </footer>
    )
}

export default index
