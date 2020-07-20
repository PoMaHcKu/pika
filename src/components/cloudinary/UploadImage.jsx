import React from "react";

const UploadImage = (props) => {

    let checkUploadedResult = (resultEvent) => {
        if (resultEvent.event === "success") {
            widget.close();
            return resultEvent.info.secure_url;
        }
    }

    let showWidget = (widget) => {
        widget.open();
    }

    let widget = window.cloudinary.createUploadWidget(
        {
            cloudName: "dimo51hgd",
            uploadPreset: "qozmcynm"
        }, (err, result) => checkUploadedResult(result)
    );

    return (
        <div>
            <input value={"ADD PHOTO"}
                   className="btn btn-dark"
                   onClick={() => showWidget(widget)}/>
        </div>
    )
}
export default UploadImage;