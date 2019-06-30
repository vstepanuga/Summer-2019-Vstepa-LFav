import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we've also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
           <Container>
               <Row>
                    <Col lg="4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis elementum luctus. Integer maximus dolor eu urna varius, in eleifend nisl porttitor. Aliquam id auctor lacus. Nunc nec magna nulla. Ut quis sem ut mauris porttitor vulputate facilisis non justo. Ut bibendum ipsum at mauris ornare congue. Aenean consectetur, diam at dignissim vehicula, tortor ligula posuere felis, egestas pharetra ex dui quis nunc. Nulla pellentesque est sit amet posuere cursus. Phasellus eu accumsan augue, nec tristique metus. Morbi suscipit consectetur egestas. Duis ut dolor facilisis, ultricies neque at, aliquet turpis. Donec luctus, augue in feugiat porttitor, sapien nisi feugiat leo, a accumsan massa lorem id lacus. Maecenas congue libero nisl, nec sagittis velit dictum in. In dapibus leo et nibh pharetra condimentum. Cras vulputate ante et iaculis iaculis. 
                        </Col>
                    <Col lg="4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis elementum luctus. Integer maximus dolor eu urna varius, in eleifend nisl porttitor. Aliquam id auctor lacus. Nunc nec magna nulla. Ut quis sem ut mauris porttitor vulputate facilisis non justo. Ut bibendum ipsum at mauris ornare congue. Aenean consectetur, diam at dignissim vehicula, tortor ligula posuere felis, egestas pharetra ex dui quis nunc. Nulla pellentesque est sit amet posuere cursus. Phasellus eu accumsan augue, nec tristique metus. Morbi suscipit consectetur egestas. Duis ut dolor facilisis, ultricies neque at, aliquet turpis. Donec luctus, augue in feugiat porttitor, sapien nisi feugiat leo, a accumsan massa lorem id lacus. Maecenas congue libero nisl, nec sagittis velit dictum in. In dapibus leo et nibh pharetra condimentum. Cras vulputate ante et iaculis iaculis. 
                    </Col>
                    <Col lg="4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis elementum luctus. Integer maximus dolor eu urna varius, in eleifend nisl porttitor. Aliquam id auctor lacus. Nunc nec magna nulla. Ut quis sem ut mauris porttitor vulputate facilisis non justo. Ut bibendum ipsum at mauris ornare congue. Aenean consectetur, diam at dignissim vehicula, tortor ligula posuere felis, egestas pharetra ex dui quis nunc. Nulla pellentesque est sit amet posuere cursus. Phasellus eu accumsan augue, nec tristique metus. Morbi suscipit consectetur egestas. Duis ut dolor facilisis, ultricies neque at, aliquet turpis. Donec luctus, augue in feugiat porttitor, sapien nisi feugiat leo, a accumsan massa lorem id lacus. Maecenas congue libero nisl, nec sagittis velit dictum in. In dapibus leo et nibh pharetra condimentum. Cras vulputate ante et iaculis iaculis. 
                    </Col>
                </Row> 
            </Container>          
      </div>
    );
  }
}
