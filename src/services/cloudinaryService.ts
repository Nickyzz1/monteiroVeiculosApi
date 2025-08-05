import cloudinary from "../config/cloudinary";

// Configura o Cloudinary com suas credenciais
cloudinary.config({
  cloud_name: 'ml_default',
  api_key: '366678191552359',
  api_secret: 'IkkWEGrwAgVKnp53iM81RYXknlE',
});

/**
 * Deleta uma imagem do Cloudinary dado o public_id
 * @param {string} publicId - O public_id da imagem (ex: 'folder/imagename')
 * @returns {Promise<Object>} - Resultado da deleção
 */
function deleteImage(publicId : any) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error : any, result: any) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
}


export default deleteImage
