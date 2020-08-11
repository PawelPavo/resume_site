import * as React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PercetageBar from '../components/PercetageBar';

const Home: React.FC<IHome> = () => {

    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            80%
        </Tooltip>
    );

    const renderTooltipPic = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            110%
        </Tooltip>
    );

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="display-4 ">Home</div>
                </div>
                <div className="row">
                    <div className="col-md-8 my-auto">
                        <div className="row">
                            <div className="col-4">
                                <OverlayTrigger
                                    placement="right"
                                    overlay={renderTooltipPic}>
                                    <img src="https://news-api.s3.us-east-2.amazonaws.com/profile.jpg" alt="My Photo" className="img-thumbnail" />
                                </OverlayTrigger>
                            </div>
                            <div
                                className="col-md-6 my-auto"
                                style={{ textAlign: "justify" }}>
                                Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 border p-5 shadow-sm">
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
                        <div
                            className="progress my-3"
                            style={{ height: "30px" }}>
                            <div className="progress-bar shadow text-monospace progress-bars-hover"
                                role="progressbar"
                                style={{
                                    backgroundColor: "#efdb50",
                                    width: "65%",
                                    opacity: "0.8"
                                }}>JavaScript</div>
                        </div>
                        <div
                            className="progress my-3"
                            style={{ height: "30px" }}>
                            <div className="progress-bar shadow text-monospace progress-bars-hover"
                                role="progressbar"
                                style={{
                                    backgroundColor: "#87c642",
                                    width: "70%",
                                    opacity: "0.8"
                                }}>NodeJS</div>
                        </div>
                        <div
                            className="progress my-3"
                            style={{ height: "30px" }}>
                            <div className="progress-bar shadow text-monospace progress-bars-hover"
                                role="progressbar"
                                style={{
                                    backgroundColor: "#3e863e",
                                    width: "80%",
                                    opacity: "0.8"
                                }}>ExpressJS</div>
                        </div>
                        <div
                            className="progress my-3"
                            style={{ height: "30px" }}>
                            <div className="progress-bar shadow text-monospace progress-bars-hover"
                                role="progressbar"
                                style={{
                                    backgroundColor: "#007acc",
                                    width: "65%",
                                    opacity: "0.8"
                                }}>TypeScript</div>
                        </div>
                        <div
                            className="progress my-3"
                            style={{ height: "30px" }}>
                            <div className="progress-bar shadow text-monospace progress-bars-hover"
                                role="progressbar"
                                style={{
                                    backgroundColor: "#e54c20",
                                    width: "90%",
                                    opacity: "0.8"
                                }}>HTML</div>
                        </div>
                        <div
                            className="progress my-3"
                            style={{ height: "30px" }}>
                            <div className="progress-bar shadow text-monospace progress-bars-hover"
                                role="progressbar"
                                style={{
                                    backgroundColor: "#049be5",
                                    width: "85%",
                                    opacity: "0.8"
                                }}>CSS</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IHome {

}
export default Home;