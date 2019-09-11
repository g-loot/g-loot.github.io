const React = require('react');

// class Button extends React.Component {
//   render() {
//     <div className="pluginWrapper buttonWrapper ">
//       <a
//         className="button buttonDarkBg"
//         href={this.props.href}
//         target={this.props.target}
//       >
//         {this.props.children}
//       </a>
//     </div>;
//   }
// }

const Button = props => (
  <div className="buttonWrapper ">
    <a
      className={`button large ${props.class ? props.class : ''}`}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  </div>
);

module.exports = Button;
