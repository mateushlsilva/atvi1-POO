import { Component } from "react";
import CSS from 'csstype'
import editar from '../../Icons/editar.png'
import excluir from '../../Icons/excluir.png'
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

type props = {
    tema: string
}
const backgroundColor: CSS.Properties = {
    backgroundColor: '#0077ff',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const fontStyle: CSS.Properties = {
    fontSize:'xx-large',
    fontFamily: 'fantasy',
}
const ImagemStyle: CSS.Properties = {
    padding: '5px',
    maxHeight: '30px',
    maxWidth: '30px'

}

type table = {
    id: string,
    nome: string,
    preco: number
    result: any[]
}

export default class Servicos extends Component<{}, table> {
    
    constructor(props: any){
        super(props)
        this.state = {
            id: '',
            nome: '',
            preco: 0,
            result: []
        }
        this.onClickEdit = this.onClickEdit.bind(this)
        this.onClickDelete = this.onClickDelete.bind(this)
    }
    componentDidMount(): void {
        axios.get('http://localhost:3001/servico').then(res => {
            let dados = res.data
            this.setState({
                result: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
    }

    onClickEdit(event:any) {
        let id = event.target.id
    }
    onClickDelete(event:any) {
        let id = event.target.id
        console.log(id);
        
        Swal.fire({
            title: 'Deletar Serviço',
            text: "Você deseja deleter o serviço?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim'
          }).then(async (result) => {
            if (result.isConfirmed) {
                let deleteUserProd = await this.deleteUserServico(id)
                let deleted = await this.deleteServico(id)
                if(deleted || deleteUserProd){
                    Swal.fire(
                        'Deletado!',
                        'O serviço foi deletado.',
                        'success'
                        )
                }else{
                    Swal.fire(
                        'Error!',
                        'O ocorreu um erro!',
                        'error'
                        )  
                }
                setTimeout(function() {
                    window.location.reload();
                  }, 1000);
            }
          })
    }

    public async deleteServico(id:number): Promise<boolean>  {
        let retorno = false
        await axios.delete('http://localhost:3001/servico/deletar/' + id).then(response => {
            retorno = !response.data.erro
        })       
        return retorno
    }

    public async deleteUserServico(id:number): Promise<boolean>  {
        let retorno = false
        await axios.delete('http://localhost:3001/usuarioServico/deletar/' + id).then(response => {
            retorno = !response.data.erro
        }).catch(er => {
            console.log('jghghg');
            
        })       
        return retorno
    }


    render() {
        return (
            <div>
            <>
                <nav className="">
                <div  style={backgroundColor}  className="nav-wrapper">
                    <a className="brand-logo center" style={fontStyle}>WB</a>
                    <a style={botaoStyle} href="/Home">Home</a>
                    <a style={botaoStyle} href="/clientes">Cliente</a>
                    <a style={botaoStyle} href="/produtos">Produto</a>
                    <a style={botaoStyle} href="/pedidos">Pedidos</a>
                    <a style={botaoStyle} href="/servicos">Serviços</a>
                    <a style={botaoStyle} href="/Listagens">Listagens</a>
                </div>
                </nav>
            </>
            <br/>
            <div className='container'>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Nome Serviço</th>
                        <th>Preço</th>
                        <th>Editar</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.result.map(item =>{
                        return(
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>R$ {item.preco}</td>
                                <td>
                                    <Link to={"/atualizaServico/" + item.id}>
                                        <img src={editar}  style={ImagemStyle}  />
                                    </Link>
                                    <img src={excluir} style={ImagemStyle} onClick={this.onClickDelete} id={item.id}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
      </table>

            </div>
        </div>
        )
    }
}