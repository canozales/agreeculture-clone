import { useCallback, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import getCroppedImg from './Crop';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import nophoto from '../../../public/assets/images/nophoto.jpg';

const Cropper = dynamic(() => import('react-easy-crop'), {
  ssr: false,
});

const EasyCrop = ({ image, setGambarAkhir, setImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation, image]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  croppedImage ? setGambarAkhir(croppedImage) : null;

  return (
    <div className='image-preview-easy'>
      {croppedImage ? (
        <>
          <Image
            className='gambar'
            width={50}
            height={50}
            src={croppedImage}
            alt='Image'
          />
          <div>
            <button
              onClick={() => {
                setCroppedImage(null);
                setImage(null);
                setGambarAkhir(nophoto);
              }}
            >
              Ubah Gambar
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='crop-container'>
            <Cropper
              image={image}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              zoomSpeed={4}
              maxZoom={3}
              zoomWithScroll={true}
              showGrid={true}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
            />
          </div>
          <Slider
            value={zoom}
            min={1}
            max={3.5}
            step={0.1}
            aria-labelledby='zoom'
            onChange={(e, zoom) => setZoom(zoom)}
            className='range'
          />
          <div>
            <button
              onClick={() => {
                setCroppedImage(null);
                setImage(null);
              }}
            >
              Cancel
            </button>
            <button onClick={showCroppedImage}>Simpan</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EasyCrop;
