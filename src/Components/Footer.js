import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        let year = new Date().getFullYear()
        return (
            <div className="footer-container">
                <div className="footer-logo-container">
                    <div style={{padding: '0 15px 25px 0'}}>< img style={{width: '150px'}}src = {require(`../assets/nyccaf-logo.png`)} alt="NYC CAF"/></div>
                    <div style={{padding: '0 15px 25px 0'}}>< img style={{width: '80px'}}src = {require(`../assets/epa-logo.png`)} alt="EPA"/></div>
                    <div>< img style={{width: '50px'}}src = {require(`../assets/nysif.png`)} alt="NYSIF"/></div>
                    <div>< img style={{width: '150px'}}src = {require(`../assets/kingstone.png`)} alt="Kingstone"/></div>
                </div>
                < div className = "footer-text-container" >
                    < div style={{paddingBottom: '5px'}}> T 917 727 0662 | F 347 244 7216 | info@famuratbuilders.com< /div>
                    < div style={{paddingBottom: '5px'}}>Famurat Builders holds a contractor 's license from the NYC Department of Consumers Affairs and is fully insured for both liability and workers compensation.</div>
                    <div>© {year} Famurat Builders</div>
                </div>
            </div>
        );
    }
}

export default Footer;