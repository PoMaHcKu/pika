import React from "react"
import {CloudinaryContext, Image} from "cloudinary-react";

export const UploadImage = ({input}) => {

    const checkUploadedResult = (resultEvent) => {
        if (resultEvent.event === "success") {
            input.onChange(resultEvent.info.secure_url)
            cloudinaryWidget.close()
        }
    }

    const cloudinaryWidget = window.cloudinary.createUploadWidget({
        cloudName: "dimo51hgd",
        uploadPreset: "qozmcynm",
        maxWidth: 880
    }, (err, response) => checkUploadedResult(response));

    const showWidget = (widget) => {
        widget.open()
    }

    return (
        <div>
            <input type="hidden" {...input}/>
            {input.value ?
                <CloudinaryContext cloudName="dimo51hgd">
                    <Image publicId={input.value}/>
                </CloudinaryContext> : null}
            <button className="btn btn-light border-dark"
                    type="button"
                    onClick={() => showWidget(cloudinaryWidget)}>ADD PHOTO
            </button>
        </div>
    )
}