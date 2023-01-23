import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';


const DetailView = ({handleDetail, detailItem = 0}) => {
    const [month, setMonth] = useState('jan')
    const {customerList} = useSelector(state=>state.customer)

    const calRewrads = (cash = 0) => {
        if(cash > 100) {
            return (Math.round(cash - 100)*2) + (1 * 50);
          }else if (cash > 50) {
            return Math.round(cash - 50)*1
          }
          return 0
    }

    const totalRewards = () => {
        const data = customerList[detailItem]['purchases'][month]||[];
        return data.reduce((accum, item) => {
            const rewards = calRewrads(item.cost);
            return accum+rewards;
        }, 0)
    }
    return(
        <div>
            <Button className='btn-primary bckButton' onClick={handleDetail}>Back</Button>
            <h3>DetailView</h3>
            <Nav variant="tabs" defaultActiveKey="jan">
      <Nav.Item>
      <Nav.Link onClick={() => setMonth("jan")} eventKey="jan">January</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setMonth("feb")} eventKey="feb">February</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link onClick={() => setMonth("mar")} eventKey="mar">March</Nav.Link>
      </Nav.Item>
    </Nav>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th> Item</th>
          <th>Cost</th>
          <th>Reward Points</th>
        </tr>
      </thead>

      <tbody>
        {(customerList[detailItem]['purchases'][month]||[]).map((item, i)=>(
        <tr key={item.id}>
          <td>{item?.name}</td>
          <td>{item?.cost}</td>
          <td>{calRewrads(item?.cost)}</td>
       
        
        </tr>
        ))}
      </tbody>
    </Table>
    <Table>
    <tbody>
    <tr >
          <td></td>
          <td>Total Rewards</td>
          <td>{totalRewards()}</td>
          </tr>
        </tbody>
    </Table>
        </div>
    )
}

export default DetailView;