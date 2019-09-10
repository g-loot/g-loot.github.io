/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const HomeSplash = require(process.cwd() +
  '/core/components/HomeSplash/HomeSplash.js');

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{ textAlign: 'center' }}
    //   >
    //     <h2>Feature Callout</h2>
    //     <MarkdownBlock>These are features of this project</MarkdownBlock>
    //   </div>
    // );

    const StartSdk = () => (
      <Block background="light">
        {[
          {
            content: `User is suggested to play on G-Loot via a call-to-action.
            <br/>This will start our webapp inside the game.`,
            image: `${baseUrl}img/start-sdk.png`,
            imageAlign: 'right',
            title: 'Start G-Loot SDK',
          },
        ]}
      </Block>
    );

    const PlayMatch = () => (
      <Block>
        {[
          {
            content: `Our webapp suggests to play a game for money.
            <br/>This will create a **match** on our server, allowing players to compete against each others`,
            image: `${baseUrl}img/play-match.png`,
            imageAlign: 'left',
            title: 'Play match for money',
          },
        ]}
      </Block>
    );

    const StartMatch = () => (
      <Block background="dark">
        {[
          {
            content: `A player is instantly invited to play, there is no lobby or queue.
            <br/>At the end of the game, a report will be send to our servers`,
            image: `${baseUrl}img/start-match.png`,
            imageAlign: 'right',
            title: 'Start Match In Game',
          },
        ]}
      </Block>
    );

    const WinnerMatch = () => (
      <Block background="light">
        {[
          {
            content: `At the end of the match, our system will deduce if enough players joined in a given time frame to end the match.
            <br/>Then, it will finalize the scores and stakes.
            <br/>Winner(s) receive money in their wallet.`,
            image: `${baseUrl}img/winner-match.png`,
            imageAlign: 'left',
            title: 'A winner is chosen',
          },
        ]}
      </Block>
    );

    // const Features = () => (
    //   <Block layout="fourColumn">
    //     {[
    //       {
    //         content: 'This is the content of my feature',
    //         image: `${baseUrl}img/undraw_react.svg`,
    //         imageAlign: 'top',
    //         title: 'Feature One',
    //       },
    //       {
    //         content: 'The content of my second feature',
    //         image: `${baseUrl}img/undraw_operating_system.svg`,
    //         imageAlign: 'top',
    //         title: 'Feature Two',
    //       },
    //     ]}
    //   </Block>
    // );

    // const Showcase = () => {
    //   if ((siteConfig.users || []).length === 0) {
    //     return null;
    //   }

    //   const showcase = siteConfig.users
    //     .filter(user => user.pinned)
    //     .map(user => (
    //       <a href={user.infoLink} key={user.infoLink}>
    //         <img src={user.image} alt={user.caption} title={user.caption} />
    //       </a>
    //     ));

    //   const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    //   return (
    //     <div className="productShowcaseSection paddingBottom">
    //       <h2>Who is Using This?</h2>
    //       <p>This project is used by all these people</p>
    //       <div className="logos">{showcase}</div>
    //       <div className="more-users">
    //         <a className="button" href={pageUrl('users.html')}>
    //           More {siteConfig.title} Users
    //         </a>
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <h1>How does it work?</h1>
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          <StartSdk />
          <PlayMatch />
          <StartMatch />
          <WinnerMatch />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
