import { Grid, Container} from '@material-ui/core'
import {Link} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaGooglePlay } from 'react-icons/fa';



const Foot = () => {
    return (
        <footer className="footer">
        <Container>
        <Grid container spacing={3} style={{padding : '20px'}}>
      
            <Grid item xs={12} sm={9} >
                <h3>MENU</h3>
                   <ul className="menus">
                       <li><Link className='footer-link' to='/'>ACCUEIL</Link></li>
                       <li><Link className='footer-link' to='/services'>NOS SERVICES</Link></li>
                       <li><Link className='footer-link' to='/propos'>A PROPOS</Link></li>
                       <li><Link className='footer-link' to='/contact'>CONTACT</Link></li>
                   </ul>     

            </Grid>
            <Grid item xs={12} sm={3}>
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
      </Grid>
        </Container>
        <div item xs={12} style={{textAlign:"center", backgroundColor:'#030f6d'}}>
                <h5>COPYRIGHT © 2021| AFOUA</h5>
                <p>Tous Droit Reserves</p> 
          </div>
        </footer>
    )
    }

export default Foot
