import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';




const CustomerList = ({handleDetail}) => {
    const {customerList} = useSelector(state=>state.customer)

    return(
        
        <div>
            <h3>CustomerList</h3>
             <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th> Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>View</th>
        </tr>
      </thead>

      <tbody>
        {customerList.map((item, i)=>(
        <tr key={item._id}>
          <td>{item?.name}</td>
          <td>{item?.email}</td>
          <td>{item?.phone}</td>
          <td> <Button onClick={() => handleDetail(i)} variant="secondary">DETAIL</Button></td>
       
        
        </tr>
        ))}
      </tbody>
    </Table>
        </div>

    )
}

export default CustomerList;