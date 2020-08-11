import * as React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { ILanguages } from '../utils/interfaces';

const PercetageBar: React.FC<IPercetageBar> = props => {

    return (
        <>
            <div
                className="progress my-3 "
                style={{ height: "30px" }}>
                <OverlayTrigger
                    placement="left"
                    overlay={
                        <Tooltip id={`tooltip-${props.language.id}`}>
                            <div>{props.language.percentage}%</div>
                        </Tooltip>
                    }>
                    <div className="progress-bar shadow text-monospace progress-bars-hover"
                        role="progressbar"
                        style={{
                            backgroundColor: `${props.language.color}`,
                            width: `${props.language.percentage}%`,
                            opacity: "0.8"
                        }}>{props.language.language_name}</div>
                </OverlayTrigger>
            </div>
        </>
    )
}

export interface IPercetageBar {
    language: ILanguages;

}
export default PercetageBar;