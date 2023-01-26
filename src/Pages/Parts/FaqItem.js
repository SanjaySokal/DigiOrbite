import React from 'react'

const FaqItem = (props) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${props.id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.id}`} aria-expanded="true" aria-controls={`collapse${props.id}`}>
                    {props.question}
                </button>
            </h2>
            <div id={`collapse${props.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {props.answer}
                </div>
            </div>
        </div>
    )
}

export default FaqItem
