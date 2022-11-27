import React from "react";
import{Switch, Route} from "react-router-dom"

import Entregas from "./pages/Entregas";
import EntregasForm from "./pages/Entregas/Form";
import EntregasDetail from "./pages/Entregas/Detail";

const Routes: React.FC = () =>{
    return(
        <Switch>
        <Route path="/delivery" exact component={Entregas}/>
        <Route path="/delivery_cadastro" exact component={EntregasForm}/>
        <Route path="/delivery_cadastro/:id" exact component={EntregasForm}/>
        <Route path="/delivery/:id" exact component={EntregasDetail}/>
        </Switch>
    )
}

export default Routes;