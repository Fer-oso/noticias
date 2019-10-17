import React ,{Component} from 'react';
import Noticia from './Noticia';
class Noticias extends Component{
    render(){
        return(
             <div className="row mt-3">
               {this.props.noticias.map(noticia=>(
                  <Noticia
                    key = {noticia.url}
                    noticia={noticia}
                  />
               ))}
            </div >
        )

    }
}

export default Noticias;