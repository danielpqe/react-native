import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
import {Provider} from 'react-redux';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
    state = {
        suggestionList:[],
        categoryList:[]
    };
    async componentDidMount() {
        const movies = await API.getSuggestion(10);
        const categories = await API.getMovies();

        this.setState({
            suggestionList:movies,
            categoryList: categories
        })
    }
    render() {
    return (
        <Provider
            store={store}
        >
            <Home>
              <Header>
              <Player/>
              <Text>Hola</Text>
              </Header>
              <Text>Buscador</Text>
              <Text>Categorías</Text>
              <CategoryList list={this.state.categoryList} />
              <SuggestionList list={this.state.suggestionList} />
            </Home>
        </Provider>
    );
  }
}
