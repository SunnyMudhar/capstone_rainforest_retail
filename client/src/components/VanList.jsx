import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './styles/VanList.css';


const VanList = ({ vans }) => {
  return (
    <Container>
      <div className="van-list">
        <h2 className="van-list-title">Van List</h2>
        <Row>
          {vans.map((van) => (
            <Col key={van.id} xs={12} sm={6} md={4} className="van-list-col">
              <Card className="van-list-card">
                <Card.Body>
                  <Card.Title className="van-list-card-title">Van ID: {van.id}</Card.Title>
                  <Card.Subtitle className="van-list-card-subtitle text-muted mb-2">
                    Regional Hub: {van.regionalHub.region}
                  </Card.Subtitle>
                  <Card.Subtitle className="van-list-card-subtitle text-muted mb-1">
                    Cluster: {van.clusteredOrder ? van.clusteredOrder.id : 'Not Assigned'}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default VanList;






// import React, { useState, useEffect } from 'react';

// const VanList = ({vans}) => {

//   return (
//     <div className="van-list">
//       <h2>Van List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Van ID</th>
//             <th>Regional Hub</th>
//             <th>Cluster</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vans.map((van) => (
//             <tr key={van.id}>
//               <td>{van.id}</td>
//               <td>{van.regionalHub.region}</td>
//               <td>{van.clusteredOrder ? van.clusteredOrder.id : 'Not Assigned'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VanList;