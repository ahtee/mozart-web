import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      infos: [
        {
          picLink: "#",
          pic: "http://www.classicgaming.cc/classics/pac-man/images/icons/3d-pixel-ghost-orange-128x128.png",
          picPos: "left",
          alt: "Illustration 1",
          heading: "Media heading",
          body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          picLink: "#",
          pic: "http://www.classicgaming.cc/classics/pac-man/images/icons/3d-pixel-ghost-orange-128x128.png",
          picPos: "right",
          alt: "Illustration 2",
          heading: "Media heading 2",
          body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
      ]
    };
  }

  render() {
    const i = this.state.infos;
    const MozartInfo = i.map( info =>  
      <Media className="mt-4">
        <Media left href={info.picLink}>
          <Media object src={info.pic} alt={info.alt} />
        </Media>
        <Media body>
          <Media heading>
            {info.heading}
          </Media>
          {info.body}
        </Media>
      </Media>
      );

    return (
      <div className="Info mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              { MozartInfo }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Info;
