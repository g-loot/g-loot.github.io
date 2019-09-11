const React = require('react');
const Button = require('../Button/Button');

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <section className="homeContainer">
        <div className="homeSplashFade">
          <div>
            <h1>G-Loot</h1>
            <p>
              We turn your game in to esports!
              <br />
              Easy, quick and powerful.
            </p>
            <Button class={'buttonDarkBg'} href={docUrl('about.html')}>
              Get started
            </Button>
          </div>
          {/* <div> */}
          {/* <img src={`${baseUrl}img/undraw_ninja_e52b.svg`} alt="Gaming" /> */}
          {/* </div> */}
        </div>
      </section>
    );
  }
}

module.exports = HomeSplash;
