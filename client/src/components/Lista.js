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

    useEffect(() => {
        let date = moment(value).format('YYYY-MM-DD');
        let time = moment(value).format('HH:mm');
        let url = `http://localhost:5000/rpc/list?date=${date}&time=${time}`;
        axios.get(url).then(
            res=> setProg(res.data)
        )

    }, []);



    /*-------------------------------------*/
    const isNow = () =>{

    };
    const refreshData = () =>{
        let date = moment(value).format('YYYY-MM-DD');
        let time = moment(value).format('HH:mm');
        let url = `http://localhost:5000/rpc/list?date=${date}&time=${time}`;
        axios.get(url).then(res=> setProg(res.data));

    };

    return (
        <div className="rainbow-m-around_xx-large" style={{width: '70%'}}>
            <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"style={{height:'35vh', width:'30%'}}>
                <DateTimePicker
                    id="datetimepicker-1"
                    label="Data e hora"
                    value={value}
                    onChange={value => setValue( value )}
                    formatStyle="large"
                    okLabel={refreshData()}
                />

                <div>
                    <h3>Passando Agora:</h3>
                    <h4>{isNow()}</h4>
                </div>
            </div>

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
    );
};

export default Lista;