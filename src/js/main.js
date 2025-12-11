//Background Blobs
const backgroundBlob = document.createElement("div");
backgroundBlob.style.position = "fixed";
backgroundBlob.style.top = "0";
backgroundBlob.style.left = "0";
backgroundBlob.style.width = "100%";
backgroundBlob.style.height = "100%";
backgroundBlob.style.zIndex = "-1";
backgroundBlob.style.overflow = "hidden";

backgroundBlob.innerHTML = `<div class="container-blob">
    <div class="blobs" role="presentation">
      <div class="blob-rotate">
        <div class="blob-move">
          <div class="blob"></div>
        </div>
      </div>
      <div class="blob-rotate">
        <div class="blob-move">
          <div class="blob"></div>
        </div>
      </div>
      <div class="blob-rotate">
        <div class="blob-move">
          <div class="blob"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-blob">
      <div class="blobs" role="presentation">
        <div class="blob-rotate2">
          <div class="blob-move">
            <div class="blob"></div>
          </div>
        </div>
        <div class="blob-rotate2">
          <div class="blob-move">
            <div class="blob"></div>
          </div>
        </div>
        <div class="blob-rotate2">
          <div class="blob-move">
            <div class="blob"></div>
          </div>
        </div>
      </div>
    </div>`;

document.body.prepend(backgroundBlob);

const icon = document.createElement("link");
icon.rel = "icon";
icon.href = "/public/images/logo.png";
icon.type = "image/x-icon";

document.head.prepend(icon);
