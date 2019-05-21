import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import Checkbox from "../Checkbox/Checkbox";
import DetailsItem from "../DetailsItem.js/DetailsItem";

class CharacterListItem extends Component{
    constructor(){
        super();
        this.state = {isSelected: false}
    };

    handleClick = (e) => {
        this.setState({isSelected: true});
    };

    render() {
        const {character} = this.props;
        return (
            <tr>
            <td key={character.id} className={"characters-td"}>
                        <div className="Item-left">
                            <div className="">
                                <img
                                    width={100}
                                    src={`${character.image.path}/standard_fantastic.${character.image.extension}`}
                                    alt={character.name}
                                />
                            </div>
                            <div className="Item-title">
                                <button className={"button-link"} onClick={this.handleClick.bind(this)} > {character.name}
                                </button>
                            </div>
                            <div className={'checkbox-list'}>
                                <Checkbox message={ 'Is In Comics'} value={character.isInComics} />
                                <Checkbox message={ 'Is In Stories'} value={character.isInStories} />
                                <Checkbox message={ 'Is In Events'} value={character.isInEvents} />
                                <Checkbox message={ 'Is In Series'} value={character.isInSeries} />
                            </div>
                        </div>
            </td>
            <td>
                <fragment className={"Item-detail"}>
                    {this.state.isSelected && <DetailsItem character={character}></DetailsItem>}
                </fragment>
            </td>
            </tr>
        );
    };
};

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterListItem;
