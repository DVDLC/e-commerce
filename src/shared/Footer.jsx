import '../styles/footer.css'

function Footer() {
    return(
        <footer>
            <div className="copyright"> Desing by Acadmelo code by
                <a href="https://github.com/DVDLC"> DavidLC.</a>
            </div>
            <div className="social-networks" >
                <a href="https://www.facebook.com/dolkanl/">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/DLC_97">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/checkpoint/lg/login-submit?_l=es_ES">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer