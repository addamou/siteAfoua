import { Grid, Container} from '@material-ui/core'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaGooglePlay } from 'react-icons/fa';



const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Grid item xs={12} sm={12}>
                <ul className="socials">
                    <li>
                        <a href="http://facebook.com/afoua" className="liens">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li>
                        <a href="http://facebook.com/afoua"  className="liens">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com/afoua"  className="liens">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="http://facebook.com/afoua"  className="liens">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="http://facebook.com/afoua"  className="liens">
                            <FaGooglePlay />
                        </a>
                    </li>
                    <li>
                        <a href="http://youtube.com/afoua"  className="liens">
                            <FaYoutube />
                        </a> 
                    </li>
                </ul>
            </Grid>
        </Container>
        <div item xs={12} style={{textAlign:"center", backgroundColor:'#030f6d'}}>
                <h5>COPYRIGHT © 2021| AFOUA</h5>
                <p>Tous Droit Reserves</p> 
          </div>
        </footer>
    )
    }

export default Footer
