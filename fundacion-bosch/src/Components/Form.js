import React, { Component } from "react";
import './Style/Form.css';



class Form extends Component {
    state = {
        errors: {
            nombre: "Campo obligatorio"
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("prevenido!", this.state)
    }

  render() {
      const {errors} = this.state
    return (
     <form onSubmit={this.handleSubmit}>
         <h1 className="titleForm">Nuevo Proyecto</h1>

         <p>Nombre Proyecto:</p>
         <input type="text" className="field" name="projectName" onChange={this.handleChange} /><br />
        {errors.projectName && <p>{errors.projectName}</p>}
         <p>Fecha:</p>
         <input type="text" className="field" name="date" onChange={this.handleChange} /> <br />

         <p>Comité:</p>
         <input type="text" className="field" name="committee" onChange={this.handleChange} /> <br />

         <p>Tipo de Proyecto:</p>
         <input type="text" className="field" name="projectType" onChange={this.handleChange} /> <br />

         <p>Beneficiados:</p>
         <input type="text" className="field" name="benefited" onChange={this.handleChange} /><br />

         <p>Contenido:</p>
         <input type="text" className="field" name="content" onChange={this.handleChange} /> <br />

         <p>Imagen:</p>
         <input type="text" className="field" name="image" onChange={this.handleChange} /><br />

         <p>Tags:</p>
         <input type="text" className="field" name="tags" onChange={this.handleChange} /> <br />

         <p className="center-content">
             <input type="submit" className="butn btn-send" value="Enviar Datos" />
         </p>
     </form>
    );
  }
}


export default Form;
