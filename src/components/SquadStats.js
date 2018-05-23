import React from "react";
import {connect} from "react-redux";

class SquadStats extends React.Component {

    strength() {
        // let strength = 0;

        return this.props.heroes.reduce((sum, hero)  => (sum + hero.strength), 0);
    }

    intelligence() {
        return this.props.heroes.reduce((sum, hero) => (sum + hero.intelligence), 0);
    }

    speed() {
        return this.props.heroes.reduce((sum, hero) => (sum + hero.speed), 0);
    }
    render() {
        return (
            <div>
                <h4>Squad Stats</h4>
                <ul className="lust-group">
                    <li className="list-group-item">
                        <b>Overall Strength: </b>{this.strength()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence: </b>{this.intelligence()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed: </b>{this.speed()}
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({heroes}) => (
    {heroes}
)

export default connect(mapStateToProps)(SquadStats);