// pages/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.column}>
            <p style={styles.description}>
              Your one-stop solution for all travel needs.
            </p>
          </div>
          <div style={styles.column}>
            <h3>Quick Links</h3>
            <ul style={styles.list}>
              <li>
                <Link href="/about-us" legacyBehavior>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/destinations" legacyBehavior>
                  <a>Destinations</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" legacyBehavior>
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/blog" legacyBehavior>
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3>Contact Us</h3>
            <p>Email: info@travelagency.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Travel Street, Adventure City</p>
          </div>
          <div style={styles.column}>
            <h3>Follow Us</h3>
            <ul style={styles.socialList}>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.bottomRow}>
          <p>© 2024 Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#add8e6',
    padding: '40px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    minWidth: '250px',
    marginBottom: '20px',
  },
  description: {
    color: '#666',
    fontSize: '14px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  socialList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  bottomRow: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Footer;
