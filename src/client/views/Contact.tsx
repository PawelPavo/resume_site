import * as React from 'react'

const Contact: React.FC<IContact> = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="display-4">Contact</div>
                </div>
            </div>
        </>
    )
}

export interface IContact {

}
export default Contact;