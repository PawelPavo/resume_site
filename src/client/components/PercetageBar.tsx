import * as React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const PercetageBar: React.FC<IPercetageBar> = () => {

    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            80%
        </Tooltip>
    );
    return (
        <>
            <div
                className="progress my-3 "
                style={{ height: "30px" }}>
                <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip}>
                    <div className="progress-bar shadow text-monospace progress-bars-hover"
                        role="progressbar"
                        style={{
                            backgroundColor: "#00d8fe",
                            width: "80%",
                            opacity: "0.8"
                        }}>ReactJS</div>
                </OverlayTrigger>
            </div>
        </>
    )
}

export interface IPercetageBar {

}
export default PercetageBar;