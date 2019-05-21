import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../CharacterListItem/Item.css';

class DetailsItem extends Component {
    render() {
        const {character} = this.props;
        return (
                <div className={""}>
                    <div className="Item-right">
                        <img width={100}
                            src={`${character.image.path}/standard_fantastic.${character.image.extension}`}
                            alt={character.name}
                        />
                    </div>
                    <div className="Item-title">
                        {character.name}
                    </div>
                    <div className="Item-description">
                        {character.biography || "Biography Not Found"}
                    </div>
                    <div className={"Item-url"}>
                        Urls:
                        {
                            character.urls.map(url =>
                                <div>
                                    <a href={url.url}>{url.url}</a>
                                </div>
                            )
                        }
                    </div>
                </div>
        );
    }
}

DetailsItem.propTypes = {
    character: PropTypes.object.isRequired
};

export default DetailsItem;
