const React = require('react');

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper ">
        <a
          className="button buttonDarkBg"
          href={props.href}
          target={props.target}
        >
          {props.children}
        </a>
      </div>
    );

    return (
      <section className="homeContainer">
        <div className="homeSplashFade">
          <div>
            <h1>Transform your mobile games into esport games</h1>
            <p>
              Our SDK is so powerful and easy to integrate to any game 👍.
              <br />
              Blah blah. We are the best.
              <br />
              Check out our documentation.
            </p>
            <Button href={docUrl('about.html')}>Get started</Button>
          </div>
          <div>
            <img src={`${baseUrl}img/undraw_ninja_e52b.svg`} alt="Gaming" />
          </div>
        </div>
      </section>
    );
  }
}

module.exports = HomeSplash;
