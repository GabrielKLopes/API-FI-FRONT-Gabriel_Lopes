import React, { ChangeEvent, useEffect, useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import api from "../../../service/api";
import './index.css';

interface IEntrega {
    nomeJogo: String;
    dataCompra: String;
}



const Entregas: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<{ id: string }>()

    const [model, setModel] = useState<IEntrega>({
        nomeJogo: '',
        dataCompra: ''
    })

    useEffect(() =>{
        if(id != undefined){
            findEntrega(id)
        }
    }, [id])

    function updatedModel (e: ChangeEvent<HTMLInputElement>){

        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        if(id !== undefined){
            const response = await api.put(`UserGL/${id}`, model)
            
        }else{
            const response = await api.post('/UserGL', model)

        }
        back();
        
    }

    async function findEntrega(id: string) {
        const response = await api.get(`UserGL/${id}`)
        setModel({
            nomeJogo: response.data.nomeJogo,
            dataCompra: response.data.dataCompra,
        })
    }


    function back (){
        history.goBack()

    }

    return <div className="container">
        <br/>
        <div className="task-header">
            <h3>Nova entrega</h3>
            <Button variant="dark" size="lg" onClick={back}>Voltar</Button>
        </div>
        <br />
        <div className="container">
            <Form className="d-grid gap-3" onSubmit={onSubmit}>
                <Form.Group className="w-50">
                    <Form.Label>Nome do Jogo</Form.Label>
                    <Form.Control type="text" 
                    name="nomeJogo" 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>

                <Form.Group  className="w-50">
                    <Form.Label>Data da Compra</Form.Label>
                    <Form.Control type="date" 
                    name="dataCompra"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>
                <Button variant="dark" type="submit" className="w-25">
                    Confirmar
                </Button>
            </Form>
        </div>

    </div>

}

export default Entregas;



