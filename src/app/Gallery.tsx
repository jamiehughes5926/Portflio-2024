import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../app/css/gallery.css";

interface ImageItem {
  original: string;
  thumbnail: string;
}

type ProjectType = "jamieLLM" | "konnichiwaApp" | "notesApp";

interface GalleryComponentProps {
  project?: ProjectType;
}

const defaultImages: ImageItem[] = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const imageSets: Record<ProjectType, ImageItem[]> = {
  jamieLLM: [
    { original: "unsloth.png", thumbnail: "unsloth.png" },
    { original: "llama3.webp", thumbnail: "llama3.webp" },
    { original: "chat1.png", thumbnail: "chat1.png" },
  ],
  konnichiwaApp: [
    { original: "arTranslate.jpeg", thumbnail: "arTranslate.jpeg" },
    { original: "translate.jpeg", thumbnail: "translate.jpeg" },
  ],
  notesApp: [
    { original: "preview_notesapp.png", thumbnail: "preview_notesapp.png" },
    { original: "markdown.png", thumbnail: "markdown.png" },
  ],
};

const GalleryComponent: React.FC<GalleryComponentProps> = ({ project }) => {
  const images = project ? imageSets[project] : defaultImages;
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [imageOrientations, setImageOrientations] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const checkOrientation = async () => {
      const orientations: Record<string, boolean> = {};
      for (const image of images) {
        orientations[image.original] = await isPortrait(image.original);
      }
      setImageOrientations(orientations);
    };
    checkOrientation();
  }, [images]);

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedImage = event.currentTarget.querySelector("img");
    if (clickedImage) {
      setEnlargedImage(clickedImage.src);
    }
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  const isPortrait = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img.height > img.width);
      img.src = url;
    });
  };

  return (
    <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center image2">
      <div className="w-3/4 h-3/4 flex items-center justify-center">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          autoPlay={true}
          showThumbnails={false}
          renderItem={(item) => (
            <div
              className="image-gallery-image cursor-pointer w-full h-full flex items-center justify-center"
              onClick={handleImageClick}
            >
              <img
                src={item.original}
                alt=""
                className={`${
                  imageOrientations[item.original]
                    ? "portrait-image w-1/2 h-auto"
                    : "max-w-full max-h-full object-contain"
                }`}
              />
            </div>
          )}
          renderThumbInner={(item) => (
            <div className="image-gallery-thumbnail-inner w-full h-full flex items-center justify-center">
              <img
                src={item.thumbnail}
                alt=""
                className={`${
                  imageOrientations[item.original]
                    ? "w-1/2 h-auto"
                    : "max-w-full max-h-full object-contain"
                }`}
              />
            </div>
          )}
        />
      </div>
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseEnlarged}
        >
          <img
            src={enlargedImage}
            alt="Enlarged view"
            className={`${
              imageOrientations[enlargedImage]
                ? "max-w-[45%] max-h-[90vh] object-contain"
                : "max-w-[90%] max-h-[90vh] object-contain"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
