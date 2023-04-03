import React from "react";

function Map() {

    const link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11133.01168415462!2d21.222014283168807!3d45.76612126873892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474567810fc25b5d%3A0x9cad35d0b29a3268!2sLiceul%20Teoretic%20Nikolaus%20Lenau!5e0!3m2!1sro!2sro!4v1677667623254!5m2!1sro!2sro"

  return (
    <React.Fragment>
      <iframe
        title="map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{border:0}}
        referrerPolicy="no-referrer-when-downgrade"
        src={link}
        allowFullScreen
      ></iframe>
    </React.Fragment>
  );
}

export default Map