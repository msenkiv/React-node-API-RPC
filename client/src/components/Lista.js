import React, {useEffect, useState} from 'react';
import {Card, Accordion, AccordionSection, Input} from 'react-rainbow-components';
import { DateTimePicker, Picklist, PicklistOption } from 'react-rainbow-components';
import axios from 'axios';
import moment from 'moment'
import DatePicker from 'react-datepicker';


const Lista = (props) => {

    /*------------HOOKS AREA----------------*/
    const [prog, setProg] = useState([]);
    const [value, setValue] = useState(new Date());
    const [show, setShow] = useState(0);
    useEffect(() => {
        let date = moment(value).format('YYYY-MM-DD');
        let time = moment(value).format('HH:mm');
        console.log(date)
        let url = `http://localhost:5000/rpc/list?date=${date}&time=${time}`;
        console.log(url)
        axios.get(url).then(
            res=>{
                let data = res.data;
                data.map((item,index)=>(
                    listNow(item)
                ))
                setProg(res.data)
            }
        )

       
    }, []);



    /*-------------------------------------*/


    const listNow = (item) =>{
        let init = item.start;
        let end = item.end;
        let atual = moment(value);       
        let res = atual.isBetween(init, end);
        if(res){
            setShow(item)
        }

    };
    const refreshData = (value) =>{
        setValue( value )
        let date = moment(value).format('YYYY-MM-DD');
        let time = moment(value).format('HH:mm');
        let url = `http://localhost:5000/rpc/list?date=${date}&time=${time}`;
        let data = axios.get(url).then(res=> {
            let data = res.data;
            data.forEach(item => {
                let atual = moment(value);
                let res = atual.isBetween(moment(item.start), moment(item.end));
                if(res){
                    setShow(item)
                }
                
            });
            setProg(res.data)
        }
            
          
            );

        return data;

    };

    const renderShow = () =>{
        return(
            <div style={{height:'30vh', marginBottom:'100px'}}>
                <h5>Passando Agora: {show.title}</h5>
                <img width={352} height={198} src={show.mainImg}/>
                <p>{show.description}</p>
               
            </div>)
    };

    return (
        <div style={{paddingLeft:'15%', paddingRight:'15%'}}>
        <div className="rainbow-m-around_xx-large">
            <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"style={{height:'35vh', width:'30%'}}>
                <DateTimePicker
                    id="datetimepicker-1"
                    label="Data e hora"
                    value={value}
                    onChange={value => refreshData(value) }
                    formatStyle="large"
                />

                   {renderShow()}
            </div>
            <div style={{paddingTop:'10%'}}>
            {
                prog.map((item, index)=>(
                    <Card>
                        <Accordion id="accordion-1">
                            <AccordionSection label={moment(item.start).format('HH:mm')+' '+item.title}>
                                <div style={{display:'flex'}}>
                                    <img width={352} height={198} src={item.mainImg}/>
                                    <div style={{padding:'5%'}}>
                                        <p>{item.description}</p>

                                    </div>
                                </div>

                            </AccordionSection>
                        </Accordion>
                    </Card>
                ))
            }
            </div>
        </div>
        </div>
    );
};

export default Lista;