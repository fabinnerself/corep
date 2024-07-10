import React from 'react';
import { Messager,   DataGrid, GridColumn, Form, Dialog, TextBox, NumberBox, Label, LinkButton, ButtonGroup } from 'rc-easyui';
 
class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageSize: 10,
      data: this.getData(),
      pagePosition: "bottom",
      filterable: false,
      pageOptions: {
        layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'sep', 'manual', 'info']
      } ,
      selectionMode: 'single',
      editingRow: null,
      model: {},
      rules: {
        'id': 'required',
        'name': ['required', 'length[3,100]'],
        'description': ['required', 'length[3,100]']
      },
      errors: {},
      title: '',
      closed: true      
    };

    // Referencias a los campos de búsqueda
    this.idFilterRef = React.createRef();
    this.nameFilterRef = React.createRef();
    this.descriptionFilterRef = React.createRef();
    this.priceFilterRef = React.createRef();
  }
  
  /*
  getData(total) {
    let data = [];
    for (let i = 1; i <= total; i++) {
      let amount = Math.floor(Math.random() * 1000);
      let price = Math.floor(Math.random() * 1000);
      data.push({
        inv: "Inv No " + i,
        name: "Name " + i,
        amount: amount,
        price: price,
        cost: amount * price,
        note: "Note " + i
      });
    }
    return data;
  }
  */
  getData() {
    return [
      
        {
           "id":"2",
           "name":"Xiomi a 10",
           "description":"celu descrip",
           "price":"13.010000"
        },
        {
           "id":"3",
           "name":"Product 03",
           "description":"description for Product 3",
           "price":"39.990000"
        },
        {
           "id":"4",
           "name":"Product 4",
           "description":"Description for Product 4",
           "price":"49.990000"
        },
        {
           "id":"5",
           "name":"Product 5",
           "description":"Description for Product 5",
           "price":"59.990000"
        },
        {
           "id":"6",
           "name":"Product 6",
           "description":"Description for Product 6",
           "price":"69.990000"
        },
        {
           "id":"7",
           "name":"Product 7",
           "description":"Description for Product 7",
           "price":"79.990000"
        },
        {
           "id":"8",
           "name":"Product 8",
           "description":"Description for Product 8",
           "price":"89.990000"
        },
        {
           "id":"9",
           "name":"Product 9",
           "description":"Description for Product 9",
           "price":"99.990000"
        },
        {
           "id":"10",
           "name":"Product 10",
           "description":"Description for Product 10",
           "price":"109.990000"
        },
        {
           "id":"12",
           "name":"aa",
           "description":"desc",
           "price":"1.000000"
        },
        {
          "id":"2",
          "name":"Xiomi a 10",
          "description":"celu descrip",
          "price":"13.010000"
       },
       {
          "id":"3",
          "name":"Product 03",
          "description":"description for Product 3",
          "price":"39.990000"
       },
       {
          "id":"4",
          "name":"Product 4",
          "description":"Description for Product 4",
          "price":"49.990000"
       },
       {
          "id":"5",
          "name":"Product 5",
          "description":"Description for Product 5",
          "price":"59.990000"
       },
       {
          "id":"6",
          "name":"Product 6",
          "description":"Description for Product 6",
          "price":"69.990000"
       },
       {
          "id":"7",
          "name":"Product 7",
          "description":"Description for Product 7",
          "price":"79.990000"
       },
       {
          "id":"8",
          "name":"Product 8",
          "description":"Description for Product 8",
          "price":"89.990000"
       },
       {
          "id":"9",
          "name":"Product 9",
          "description":"Description for Product 9",
          "price":"99.990000"
       },
       {
          "id":"10",
          "name":"Product 10",
          "description":"Description for Product 10",
          "price":"109.990000"
       },
       {
          "id":"12",
          "name":"aa",
          "description":"desc",
          "price":"1.000000"
       },
       {
        "id":"2",
        "name":"Xiomi a 10",
        "description":"celu descrip",
        "price":"13.010000"
     },
     {
        "id":"3",
        "name":"Product 03",
        "description":"description for Product 3",
        "price":"39.990000"
     },
     {
        "id":"4",
        "name":"Product 4",
        "description":"Description for Product 4",
        "price":"49.990000"
     },
     {
        "id":"5",
        "name":"Product 5",
        "description":"Description for Product 5",
        "price":"59.990000"
     },
     {
        "id":"6",
        "name":"Product 6",
        "description":"Description for Product 6",
        "price":"69.990000"
     },
     {
        "id":"7",
        "name":"Product 7",
        "description":"Description for Product 7",
        "price":"79.990000"
     },
     {
        "id":"8",
        "name":"Product 8",
        "description":"Description for Product 8",
        "price":"89.990000"
     },
     {
        "id":"9",
        "name":"Product 9",
        "description":"Description for Product 9",
        "price":"99.990000"
     },
     {
        "id":"10",
        "name":"Product 10",
        "description":"Description for Product 10",
        "price":"109.990000"
     },
     {
        "id":"12",
        "name":"aa",
        "description":"desc",
        "price":"1.000000"
     }
         
    ]
  } 
  style1(){
    return {margin:'0 2px'}
  }
  style2(){
    return {margin:'0 2px',width:'80px'}
  }
  getError(name) {
    const { errors } = this.state;
    if (!errors){
      return null;
    }
    return errors[name] && errors[name].length
      ? errors[name][0]
      : null;
  }  

  fnNuevo(row){
    this.setState({
      editingRow: row,
      model: Object.assign({}, row),          
      title: 'Adicionar producto',
      closed: false
    });
    //$('#f-full').form('clear');
  }
  editRow(row) {
    this.setState({
      editingRow: row,
      model: Object.assign({}, row),
      title: 'Editar producto',
      closed: false
    });
  }  
  saveRow() {
    this.form.validate(() => {
      if (this.form.valid()) {
        let row = Object.assign({}, this.state.editingRow, this.state.model);
        let data = this.state.data.slice();
        let index = data.indexOf(this.state.editingRow);
        data.splice(index, 1, row);
        this.setState({
          data: data,
          closed: true
        })
      }
    })
  }
 

  confirm(row) {
    this.messager.confirm({
      title: "Confirmación",
      msg: "Confirmar la eliminacion de este registro?",
      result: r => {
        if (r) {          
          this.setState({
            data: this.state.data.filter(r => r !== row)
          })          
        }
      }
    });
  }  
  renderDialog() {
    const row = this.state.model;
    const { title, closed, rules } = this.state;
    return (
      <Dialog modal title={title} closed={closed} onClose={() => this.setState({ closed: true })}>
        <div className="f-full" style={{ padding: '5px 30px' }}>
          <Form className="f-full"
            ref={ref => this.form = ref}
            model={row}
            rules={rules}
            onValidate={(errors) => this.setState({ errors: errors })}
          >
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="itemid">ID producto:</Label>
              <NumberBox inputId="id" name="id" value={row.id} style={{ width: 110 }}></NumberBox>
              <div className="error">{this.getError('id')}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="name">Nombre:</Label>
              <TextBox inputId="name" name="name" value={row.name} style={{ width: 320 }}></TextBox>
              <div className="error">{this.getError('name')}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="description">Descripción:</Label>
              <TextBox inputId="description" name="description" value={row.description} precision={1} style={{ width: 320 }}></TextBox>
              <div className="error">{this.getError('description')}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="price">Precio:</Label>
              <NumberBox inputId="price" name="price" value={row.price} style={{ width: 220 }}></NumberBox>
            </div>
          </Form>
        </div>
        <div className="dialog-button">
          <LinkButton style={{ width: 80 }} onClick={() => this.saveRow()} iconCls="icon-ok">Grabar</LinkButton>
          <LinkButton style={{ width: 80 }} onClick={() => this.setState({ closed: true })} iconCls="icon-cancel" >Cerrar</LinkButton>
        </div>
      </Dialog>
    )
  } 
  fn_limpia = () => {
    if (this.idFilterRef.current) this.idFilterRef.current.value = '';
    if (this.nameFilterRef.current) this.nameFilterRef.current.value = '';
    if (this.descriptionFilterRef.current) this.descriptionFilterRef.current.value = '';
    if (this.priceFilterRef.current) this.priceFilterRef.current.value = '';
    
    // Reestablecer el estado del componente para eliminar los filtros
    this.setState({
      data: this.getData() // O actualiza con la llamada a la API si es necesario
    });
  }
  toggleFilterable = () => {
    this.setState(prevState => ({
      filterable: !prevState.filterable
    }));
  }  



  render() {
    return (
      <div style={{   padding: '1px 1px 1px 20px'  }}>
        <h2 style={{ marginBottom: 10   }}>CRUD Operaciones Productos</h2>
        
        <div style={{marginBottom:'20px'}}>
          <LinkButton iconCls="icon-add" style={this.style1()} onClick={() => this.fnNuevo('')} >Nuevo</LinkButton>
          <LinkButton  onClick={this.toggleFilterable} iconCls="icon-search" style={this.style1()}   >Buscar</LinkButton>
          <LinkButton  onClick={this.fn_limpia} iconCls="icon-undo" style={this.style1()}   >Limpiar</LinkButton>
          
        </div>        
        <div style={{marginBottom:'80px'}}>
        
        <DataGrid
           style={{height:450,width:800}}  
           pagination        
           filterable
           columnResizing
          {...this.state}  
          data={this.state.data}        
        >
          
          <GridColumn field="rn" align="center" width="30px" title="Nro."  sortable
            cellCss="datagrid-td-rownumber"
            render={({rowIndex}) => (
              <span>{rowIndex+1}</span>
            )}  />
        <GridColumn field="id" title="Prod Id" sortable width="40px"
              filterable   />
            <GridColumn field="name" title="Nombre Prod" sortable
              filterable   />
            <GridColumn field="description" title="Descripcion" sortable
              filterable   />
            <GridColumn field="price" title="Precio" align="right" sortable width="100px"  formatter={formatPrice}
              filterable   />         
          <GridColumn field="act" title="Operaciones" align="center" width={100}
            render={({ row }) => (
              <div>
                <ButtonGroup>
                  <LinkButton iconCls="icon-edit" onClick={() => this.editRow(row)}></LinkButton>                  
                  <LinkButton iconCls="icon-elim"  onClick={this.confirm.bind(this,row)} ></LinkButton>                  
                </ButtonGroup>
                <Messager ref={ref => this.messager = ref}></Messager>
              </div>
            )}
          />          
        </DataGrid>
        {this.renderDialog()}
        </div>
      </div>
    );
  }
}
 
const formatPrice = (value) => {
  // Comprobar si el valor es numérico
  if (typeof value === 'number') {
    // Formatear el número con separadores de miles y dos decimales
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  // Si el valor no es numérico, devolver el valor original
  return value;
};

export default App;
﻿