import React, {useState,useEffect} from 'react';
import Select from 'react-select'
import { Container,Row,Col,Input,Form,Button } from 'reactstrap';
import { useSelector, useDispatch,connect } from 'react-redux';
import { getCompany,getArea,getVisibleItems } from '../src/services/index';
import ListItem from '../src/components/list-item'
import useGetData from '../src/services/getDataService';

const App = (props) => {
    const dispatch = useDispatch(); 
    const [isActiveSideBar,setIsActiveSidebar] = useState(false);
    const {data} = useGetData();
    const filters = useSelector(content => content.filters);
    const listItem = getVisibleItems(data, filters)
    const company = getCompany(data);
    const area = getArea(listItem);

    const [name,setSearchName] = useState('');
    const [jobTitle,setJobTitle] = useState('');
    const [companySelect,setCompanySelect]=useState()
    const [areaSelect,setAreaSelect]=useState()
    const [page,setPage]=useState(1);
    

	 const handleSearch = () => {
        dispatch({ type: 'SEARCH_BY', search: name })
        dispatch({ type: 'FILTER_COMPANY_NAME', company: companySelect ? companySelect.value : '' })
        handleSearchFilterDelete()
        setIsActiveSidebar(true)
    }

    const handleFilter = () => {
        dispatch({ type: 'SEARCH_BY_JOB', job: jobTitle })
        dispatch({ type: 'FILTER_AREA', area: areaSelect ? areaSelect.value : '' })
    }

    const handleSearchFilterDelete= () => {
        dispatch({ type: 'FILTER_AREA', area: '' }) 
        dispatch({ type: 'SEARCH_BY_JOB', job: '' })

        setAreaSelect('')
        setJobTitle('')
    }
        return (
           <Container fluid={true} className="customContainer">
               <Row>
                   {isActiveSideBar && <Col lg="2" md="3" sm="12" className="filterBox">
					<div className="filtre">
					        <Input placeholder="Job Title" className="customInput" value={jobTitle} onChange={(e)=> setJobTitle(e.target.value)} />
                           <Select options={area}  id="custom-selections" isClearable value={areaSelect} onChange={(e)=>setAreaSelect(e)} />
                           <Button block outline color="secondary" onClick={()=>handleFilter()}>Filter</Button>
					</div>
                    </Col>}
                   <Col xl={isActiveSideBar ? '10' : '12' } md={isActiveSideBar ? '9' : '12' } sm="12">
                       <Form className="searchBox">
                           <Input value={name}  onChange={(e) => setSearchName(e.target.value)} placeholder="Name" className="customInput"/>
                           <Select options={company} isClearable value={companySelect}  onChange={(e) =>setCompanySelect(e)
                           }  id="custom-selections" />
                           <Button  outline color="secondary" onClick={()=>handleSearch()} className="pl-4 pr-4">Search</Button>
                       </Form>
					  {isActiveSideBar && <div className="listBox">
                               {listItem ? listItem.map((item,key)=><ListItem image={item.image} name={item.name} companyName={item.company} job={item.jobdescription} key={key} />):<div>asd</div>}
					   </div>}
                   </Col>
                  
               </Row>
           </Container>

        );
}
export default App
