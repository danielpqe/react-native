import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';;
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import {connect} from 'react-redux';
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

function mapStateToProps(state) {
    debugger
}

class CategoryList extends Component {
    renderEmpty=()=><Empty text="No hay sugerencias... :("/>
    itemSeparator=()=><Separator/>
    renderItem=({item})=>{
        return(
            <Category {...item}/>
        )
    }
    keyExtractor=item=>item.id.toString();

    render() {
        return (
            <Layout
                title="Categorias"
            >
            <FlatList
                horizontal
                keyExtractor={this.keyExtractor}
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
            />
            </Layout>
        );
    }
}

export default connect(mapStateToProps)(CategoryList);
