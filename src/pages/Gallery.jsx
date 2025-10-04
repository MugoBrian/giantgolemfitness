import { useEffect, useState } from "react";
import axios from "axios";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { TAG, CLOUD_NAME } from "../lib/config/cloudinaryConfig";

import { useHeader } from "../context/useHeaderContext";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [imageCount, setImageCount] = useState(0);

  const { setTitle, setDescription } = useHeader();
  const title = "Gallery";
  const description = "A picture is worth a thousand words.";

  useEffect(() => {
    setTitle(title);
    setDescription(description);
  }, [setTitle, setDescription]);

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${TAG}.json`
        );
        setImages(data.resources);
        setImageCount(data.resources.length);
        setLoading(false);
      } catch (error) {
        setError("We experienced some trouble while getting your images.");
        setLoading(false);
        console.error(error);
      }
    };

    fetchImages();
  }, [CLOUD_NAME, TAG]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedImage();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-primary-75 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading gallery...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            We Failed To Fetch Images!
          </h3>
          <p className="text-gray-600 mb-6">
            {error} <br /> Please give us a moment and try again.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-primary hover:bg-primary-75 cursor-pointer text-white px-6 py-2 rounded-full transition-colors"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Empty State
  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No images yet
          </h3>
          <p className="text-gray-600">
            Check back soon for photos from our gym!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white-50 w-full px-4 md:px-6 lg:px-28  xl:px-32 2xl:px-30">
      {/* Header Section */}

      <div className="py-3">
        <h1 className="text-xl md:text-lg font-bold text-gray-900 mb-2">
          Enjoy our photos
        </h1>
        <p className="text-gray-600 text-base">
          <span className="font-bold pr-1">{imageCount}</span>
          {imageCount === 1 ? "photo" : "photos"} from our gym community
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="py-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map(({ public_id }, index) => {
            const myImage = cld.image(public_id).format("auto").quality("auto");

            return (
              <div
                key={public_id}
                className="break-inside-avoid mb-4 group cursor-pointer"
                onClick={() => setSelectedImage({ public_id, index })}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <AdvancedImage
                    cldImg={myImage}
                    className="w-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                    alt={`Gallery image ${index + 1}`}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage()}
        >
          {/* Close Button */}
          <Button
            className="absolute top-4 right-4 cursor-pointer text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage()}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </Button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {selectedImage.index + 1} / {imageCount}
          </div>

          {/* Navigation Arrows */}
          {selectedImage.index > 0 && (
            <Button
              className="absolute left-4 cursor-pointer text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage({
                  public_id: images[selectedImage.index - 1].public_id,
                  index: selectedImage.index - 1,
                });
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </Button>
          )}

          {selectedImage.index < images.length - 1 && (
            <Button
              className="absolute right-4 cursor-pointer text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage({
                  public_id: images[selectedImage.index + 1].public_id,
                  index: selectedImage.index + 1,
                });
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </Button>
          )}

          {/* Main Image */}
          <div
            className="max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <AdvancedImage
              cldImg={cld
                .image(selectedImage.public_id)
                .format("auto")
                .quality("auto")}
              className="max-w-full max-h-[90vh] scale:105 object-cover rounded-lg"
              alt={`Gallery image ${selectedImage.index + 1}`}
            />
          </div>

          {/* Hint Text */}
          <p className="absolute bottom-4 text-white/70 text-sm">
            Press ESC or click outside to close
          </p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
