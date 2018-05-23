import React from "react";
import {connect} from "react-redux";
import {addCharacterById} from "../actions/index";

class CharacterList extends React.Component {
    render() {
        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">{this.props.characters.map(
                    (element) =>
                        <li key={element.id} className="list-group-item">
                            <div className="list-item">{element.name}</div>
                            <div className="list-item right-button" onClick={() => this.props.addCharacterById(element.id)}>+</div>
                        </li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToPros = ({characters}) => ({characters});

export default connect(mapStateToPros, {addCharacterById})(CharacterList);