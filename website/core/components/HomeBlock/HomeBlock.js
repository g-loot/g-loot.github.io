const React = require('react');
const Button = require('../Button/Button');

class HomeBlock extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const {
      content,
      image,
      imageAlign = 'left',
      title,
      button = null,
    } = this.props;

    return (
      <div className="gridBlock">
        <div
          className={`homeBlock blockElement alignCenter imageAlignSide twoByGridBlock`}
          style={{
            flexDirection: imageAlign === 'left' ? 'row' : 'row-reverse',
          }}
        >
          <div className="blockImage">
            <img src={image} />
          </div>
          <div className="blockContent">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {button && (
              <Button href={docUrl(button.href)}>{button.text}</Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = HomeBlock;
