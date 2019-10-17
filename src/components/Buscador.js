import React,{Component} from 'react';
import {API,URL} from './Constants';
import axios from 'axios';

import Noticias from './Noticias';
class Buscador extends Component{ 
    
    state={
        noticias:[]
    }
/*LLAMADO A LA API*/ 
    llamarAPI = (pais=`ar`,categoria=`general`)=>{
        console.log(pais,categoria)
        axios.get(URL+`country=${pais}`+`&category=${categoria}`+`&pageSize=21`+API)
        .then(res=>{
            console.log(res)
           this.setState({
               noticias:res.data.articles
           })
        })
    }

    componentDidMount(){
        this.llamarAPI();
    }
/*REFS Y FORMCONTROL*/
    paisRef=React.createRef();
    categoriaRef=React.createRef();
    busqueda = (e) =>{
        e.preventDefault();
        const busqueda = {
            pais:this.paisRef.current.value,
            categoria:this.categoriaRef.current.value
        }
        const pais = busqueda.pais;
        const categoria= busqueda.categoria;
        console.log(pais,categoria)

        
      this.llamarAPI(pais,categoria);
    }
  
    render(){
        return(
            <div className="container">
                <form className="form-group col-md-2 m-auto" onSubmit={this.busqueda}>
                <select className="custom-select" ref={this.paisRef}>
                <option>Elije un pais</option>
                <option value="ar">Argentina</option>
                <option value="br">Brazil</option>
                </select>
                <select className="custom-select" ref={this.categoriaRef}>
                <option>Elije una categoria</option>
                <option value="general">General</option>
                <option value="sports">Deportes</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="science">Ciencia</option>
                <option value="technology">Tecnologia</option>
                </select>
                <button type="submit" className="btn btn-secondary disabled m-auto">Enviar</button>    
           </form>
           
            <div>
             <Noticias
             noticias={this.state.noticias}/>
             </div>
             
             </div>
        )
    }
}

export default Buscador;