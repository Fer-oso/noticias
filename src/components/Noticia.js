import React,{Component} from 'react';
class Noticia extends Component{
    render(){
        const {description,title,url,urlToImage} = this.props.noticia
        return(
           <div className="card container col-md-4 mt-2" >
                <img src={urlToImage} className="card-img-top" alt={title}/>
                <div className="card-body m-auto">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary" target="_blank">Ver nota completa</a>

                </div>
           </div>
        )
    }
}

export default Noticia;