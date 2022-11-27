import React, { useState, useEffect } from 'react'
import { Badge, Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import api from '../../../service/api';


interface IEntrega {
    id: number
    nomeJogo: String;
    dataCompra: String;
    entregue: boolean;

}

const Detail: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const [entrega, setEntrega] = useState<IEntrega>()

    useEffect(() => {
        findEntrega()
    }, [id])


    function back() {
        history.goBack()
    }

    async function findEntrega() {
        const response = await api.get<IEntrega>(`/UserGL/${id}`)
        console.log(response)
        setEntrega(response.data)
    }

    return (
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Detalhe da entrega</h1>
                <Button variant="dark" size="lg" onClick={back}>Voltar</Button>
            </div>
            <br />
            <Card>
                <Card.Body>
                    <Card.Title>Identificador: {entrega?.id}</Card.Title>
                    <Card.Subtitle>Jogo: {entrega?.nomeJogo}</Card.Subtitle>
                    <Card.Text>
                            Data da compra: {entrega?.dataCompra}
                            <br/>
                            Situação da entrega:<Badge bg={entrega?.entregue ? "success" : "warning"}>
                            {entrega?.entregue ? "Entregue" : "Pendente"}</Badge>
                            <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Detail;