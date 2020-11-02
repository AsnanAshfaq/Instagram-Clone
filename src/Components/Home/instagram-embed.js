import React from "react";
import InstagramEmbed from "react-instagram-embed";

function InstaEmbed() {
  return (
    <div className="my-2">
      <InstagramEmbed
        url="https://instagr.am/p/Zw9o4/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default InstaEmbed;
