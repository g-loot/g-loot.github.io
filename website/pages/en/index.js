/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

// const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
// const GridBlock = CompLibrary.GridBlock;

const HomeSplash = require(process.cwd() +
  '/core/components/HomeSplash/HomeSplash.js');
const HomeBlock = require(process.cwd() +
  '/core/components/HomeBlock/HomeBlock.js');

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        // padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <HomeBlock
          siteConfig={siteConfig}
          language={language}
          title={props.title}
          image={props.image}
          imageAlign={props.imageAlign}
          content={props.content}
          button={props.button}
        />
      </Container>
    );

    const Enable = () => (
      <Block
        title={'What we enable'}
        image={`${baseUrl}img/index/phone6.png`}
        imageAlign={'left'}
        content={`
            With the G-Loot SDK you will be able to provide your current
            and future players with a new, unique and highly engaging way of
            competing. All this possible within just a couple of steps! We turn
            your game into a competitive powerhouse where players can compete
            against each other In various contests with actual cash prizes.
        `}
        button={{ href: `about.html`, text: 'Get started' }}
      />
    );

    const Includes = () => (
      <Block
        background="light"
        title={'What we includes'}
        image={`${baseUrl}img/index/phone2-3.png`}
        imageAlign={'right'}
        content={`
      <br />-  Easy on-boarding
      <br />-  No queue time
      <br />-  Effortless Matchmaking 
      <br />-  Quick results
      <br />-  Real Money rewards 
      <br />-  Easy deposits & withdrawals
      <br />-  Analytics`}
        button={{ href: `about.html`, text: 'Get started' }}
      />
    );

    const Monetization = () => (
      <Block
        title={'Monetization'}
        image={`${baseUrl}img/index/phone3-4.png`}
        imageAlign={'left'}
        content={`
      We give you an alternative way to monetize your players, 
      while at the same time providing your players with rewards 
      that means more than just bragging rights.
         `}
        button={{ href: `about.html`, text: 'Get started' }}
      />
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Enable />
          <Includes />
          <Monetization />
        </div>
      </div>
    );
  }
}

module.exports = Index;
