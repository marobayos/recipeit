import {Card, OverlayTrigger, Tooltip} from 'react-bootstrap'
import React from "react";
import { BiTimeFive } from 'react-icons/bi';
import { FiChevronsDown, FiChevronDown, FiChevronUp, FiChevronsUp, FiMinus } from 'react-icons/fi';
import './recipe.css'

class RecipePreview extends React.Component {

    renderTooltip = () => {
        let level = ""
        switch (this.props.recipe.level) {
            case 1:
                level = "Muy fácil"
                break;
            case 2:
                level = "Fácil"
                break;
            case 3:
                level = "Medio"
                break;
            case 4:
                level = "Difícil"
                break;
            case 5:
                level = "Muy difícil"
                break;
            default:
                level = "Sin datos"
                break;
        }

        return (<Tooltip id="button-tooltip">
                Nivel: {level}
            </Tooltip>)
    };

    getLevel = () => {
        let icon = ""
        switch (this.props.recipe.level) {
            case 1:
                icon = <FiChevronsDown className="float-right" color="green"/>
                break;
            case 2:
                icon = <FiChevronDown className="float-right" color="green"/>
                break;
            case 3:
                icon  = <FiMinus className="float-right" color="orange"/>
                break;
            case 4:
                icon = <FiChevronUp className="float-right" color="red"/>
                break;
            case 5:
                icon = <FiChevronsUp className="float-right" color="red"/>
                break;
            default:
                icon = <FiMinus className="float-right" color="gray"/>
                break;
        }
        return icon
    };

    render () {
        return (
            <Card className="recipe-preview">
                {/*<Card.Img variant="top" src={this.props.img}/>*/}
                <Card.Body>
                    <Card.Title>{this.props.recipe.title}</Card.Title>
                    <Card.Text>
                        {this.props.recipe.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <BiTimeFive/> {this.props.recipe.time}
                    {this.getLevel()}
                </Card.Footer>
            </Card>
        )
    };
}

export default RecipePreview;
