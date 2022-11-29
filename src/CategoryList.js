import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {

    // diğer kullanım. constructor zorunlu değil
    state = {
        categories: []
    };

    componentDidMount(){
        this.getCategories();
    };

    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}))
    };

    

    // // set edilmese de props kullanılabiliyor
    // constructor(props) {
    //     // props bir componentten diğer componente data ya da taşıma yöntemi
    //     super(props);
    //     // bir componente özel bir data tutulmak isteniyorsa state. örneğin yalnızca category datası
    //     this.state = {
    //         categories: [
    //             { categoryId: 1, categoryName: "Beverages" },
    //             { categoryId: 2, categoryName: "Condiments" }
    //         ]
            
    //     };
        
    // };

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false} 
                                onClick={()=>this.props.changeCategory(category)} 
                                key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
    }
}
