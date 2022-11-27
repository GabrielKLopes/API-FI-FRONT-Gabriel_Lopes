import React, {useEffect, useState} from "react";
import { Badge, Table, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom"
import api from "../../service/api";
import './index.css';

interface IEntrega{
    id: number;
    nomeJogo: String;
    dataCompra: String;
    entregue: boolean;
    created_at:Date;
    updated_at:Date;
}
 
const Entregas: React.FC = ()=>{

    const [entregas, setEntregas] = useState <IEntrega[]>([])
    const history = useHistory()

    useEffect(() =>{
        loadEntregas()
    }, [])

    async function loadEntregas(){
        const response = await api.get('/UsersGL')
        console.log(response)
        setEntregas(response.data)
    }

    function newEntrega (){
        history.push('/delivery_cadastro')

    }

    function editEntrega(id: number){
        history.push(`/delivery_cadastro/${id}`)
    }

    function viewEntrega(id: number){
        history.push(`/delivery/${id}`)
    }

    async function finalizarEntrega(id: number) {
        await api.patch(`/UserGL/${id}`)
        loadEntregas();
    }

    async function deletarEntrega(id: number) {
        await api.delete(`/UserGL/${id}`)
        loadEntregas();
    }



    return <div className="container">
        <br/>
        <div className="task-header">
            <h1>Página de entrega</h1>
            <Button variant="dark" size="lg" onClick={newEntrega}>Novo pedido</Button>
        </div>
        <br/>

        <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Jogo</th>
          <th>Data da Compra</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      
            {
                entregas.map(entrega => (
                    <tr key={entrega.id}>
                        <td>{entrega.id}</td>
                        <td>{entrega.nomeJogo}</td>
                        <td>{entrega.dataCompra}</td>
                        <td><Badge bg={entrega.entregue ? "success" : "warning"}>
                            {entrega.entregue ? "Entregue" : "Pendente"}</Badge>
                        </td>
                        <td><Button size="sm" disabled={entrega.entregue} onClick={() => editEntrega(entrega.id)}>Editar</Button>{' '}
                            <Button size="sm" disabled={entrega.entregue} variant="success" onClick={() => finalizarEntrega(entrega.id)}>Finalizar</Button>{' '}
                            <Button size="sm" variant="info" onClick={() => viewEntrega(entrega.id)}>Visualizar</Button>{' '}
                            <Button size="sm" variant="danger" onClick={() => deletarEntrega(entrega.id)}>Deletar</Button>{' '}
                        </td>
                    </tr>

                ))
            }
      </tbody>
    </Table>
    </div>
    
}

export default Entregas;


