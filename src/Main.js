import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getCustomerData } from './features/customer/customerActions';
import CustomerList from './components/CustomerList';
import DetailView from './components/DetailPage';


const Main = () => {
    const [showDetail,setShowDetail] = useState(false);
    const [detailItem,setDetailItem] = useState();
    const dispatch  = useDispatch()

    useEffect(() => {
    
        
        dispatch(getCustomerData())
        
    },[])

    const handleDetail = (i) => {
        setShowDetail(true)
        setDetailItem(i)
    }


    return(
        <div>
            {!showDetail ?
            <CustomerList handleDetail={handleDetail}/>
            :
            <DetailView detailItem={detailItem} handleDetail={() => setShowDetail(false)}/>
}
        </div>
    )
}

export default Main;